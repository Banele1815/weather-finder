import { useCallback, useEffect, useRef, useState } from "react";

const WEATHERSTACK_URL = "https://api.weatherstack.com/current";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasLoadedInitially = useRef(false);

  const searchWeather = useCallback(async (city) => {
    const cleanCity = city.trim();

    if (!cleanCity) {
      setWeather(null);
      setError("Enter a city name before searching.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;

      if (!apiKey) {
        throw new Error("MISSING_API_KEY");
      }

      const url = new URL(WEATHERSTACK_URL);

      url.searchParams.set("access_key", apiKey);
      url.searchParams.set("query", cleanCity);
      url.searchParams.set("units", "m");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("REQUEST_FAILED");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error("API_ERROR");
      }

      if (!data.location || !data.current) {
        throw new Error("CITY_NOT_FOUND");
      }

      const formattedWeather = {
        city: data.location.name,
        country: data.location.country ?? "Unknown country",
        temperature: data.current.temperature ?? 0,
        description:
          data.current.weather_descriptions?.[0] ??
          "Description unavailable",
        icon: data.current.weather_icons?.[0] ?? "",
        feelsLike:
          data.current.feelslike ?? data.current.temperature ?? 0,
        humidity: data.current.humidity ?? 0,
        windSpeed: data.current.wind_speed ?? 0,
        observationTime:
          data.current.observation_time ??
          data.location.localtime ??
          "Recently",
      };

      setWeather(formattedWeather);
    } catch (requestError) {
      console.error(requestError);
      setWeather(null);

      if (requestError.message === "MISSING_API_KEY") {
        setError(
          "Your Weatherstack API key is missing. Check your .env.local file.",
        );
      } else if (requestError.message === "CITY_NOT_FOUND") {
        setError(
          "We could not find that city. Check the spelling and try again.",
        );
      } else if (requestError.message === "API_ERROR") {
        setError(
          "Weatherstack could not complete the request. Check the city and API key.",
        );
      } else if (requestError.message === "REQUEST_FAILED") {
        setError(
          "The weather service did not respond successfully. Please try again.",
        );
      } else {
        setError(
          "We could not load the weather. Check your connection and try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (hasLoadedInitially.current) {
      return;
    }

    hasLoadedInitially.current = true;
    searchWeather("Johannesburg");
  }, [searchWeather]);

  return {
    weather,
    loading,
    error,
    searchWeather,
  };
}

export default useWeather;