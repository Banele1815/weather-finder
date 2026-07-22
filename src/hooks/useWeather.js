import { useState } from "react";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function searchWeather(city) {
    console.log("The custom hook received:", city);
  }

  return {
    weather,
    loading,
    error,
    searchWeather,
  };
}

export default useWeather;