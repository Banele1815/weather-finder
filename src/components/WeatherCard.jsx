function WeatherCard({ weather }) {
  return (
    <article className="weather-card">
      <div className="weather-header">
        <div>
          <p className="weather-label">Current weather</p>

          <h2>
            {weather.city}, {weather.country}
          </h2>
        </div>

        <span className="live-badge">Live</span>
      </div>

      <div className="weather-main">
        <div className="weather-icon-container">
          {weather.icon ? (
            <img
              className="weather-icon"
              src={weather.icon}
              alt={weather.description}
            />
          ) : (
            <span className="fallback-icon" aria-hidden="true">
              ☁
            </span>
          )}
        </div>

        <div>
          <p className="temperature">{weather.temperature}°C</p>
          <p className="weather-description">{weather.description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div>
          <p>Feels like</p>
          <strong>{weather.feelsLike}°C</strong>
        </div>

        <div>
          <p>Humidity</p>
          <strong>{weather.humidity}%</strong>
        </div>

        <div>
          <p>Wind</p>
          <strong>{weather.windSpeed} km/h</strong>
        </div>
      </div>

      <p className="observation-time">
        Updated {weather.observationTime}
      </p>
    </article>
  );
}

export default WeatherCard;