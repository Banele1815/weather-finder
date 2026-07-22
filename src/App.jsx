import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, loading, error, searchWeather } = useWeather();

  return (
    <main>
      <h1>Weather Finder</h1>
      <p>Search for the current weather in any city.</p>

      <SearchForm onSearch={searchWeather} />

      {loading && <LoadingSpinner />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && weather && (
        <WeatherCard weather={weather} />
      )}
    </main>
  );
}

export default App;