import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";

function App() {
  const testWeather = {
    city: "Johannesburg",
    country: "South Africa",
    temperature: 22,
    description: "Partly cloudy",
    feelsLike: 21,
    humidity: 48,
    windSpeed: 14,
  };

  function handleSearch(city) {
    console.log("Searching for:", city);
  }

  return (
    <main>
      <h1>Weather Finder</h1>
      <p>Search for the current weather in any city.</p>

      <SearchForm onSearch={handleSearch} />

      <LoadingSpinner />

      <ErrorMessage message="We could not find that city." />

      <WeatherCard weather={testWeather} />
    </main>
  );
}

export default App;