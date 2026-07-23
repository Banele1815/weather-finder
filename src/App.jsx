import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, loading, error, searchWeather } = useWeather();

  return (
    <main className="weather-page">
      <div className="page-container">
        <header className="brand">
          <span className="brand-icon" aria-hidden="true">
            ☾
          </span>

          <span>Weather Finder</span>
        </header>

        <section className="hero">
          <p className="eyebrow">Live conditions · Worldwide</p>

          <h1>Search any city for current conditions</h1>

          <p className="hero-description">
            Enter a city to see its latest temperature, humidity and wind.
          </p>
        </section>

        <SearchForm
          onSearch={searchWeather}
          loading={loading}
        />

        <section className="results" aria-live="polite">
          {loading && <LoadingSpinner />}

          {!loading && error && (
            <ErrorMessage message={error} />
          )}

          {!loading && !error && weather && (
            <WeatherCard weather={weather} />
          )}
        </section>

        <footer>
          Current weather data provided by Weatherstack
        </footer>
      </div>
    </main>
  );
}

export default App;