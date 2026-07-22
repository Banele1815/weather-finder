function WeatherCard({ weather }) {
  return (
    <article>
      <h2>
        {weather.city}, {weather.country}
      </h2>

      <p>
        Temperature: {weather.temperature}°C
      </p>

      <p>{weather.description}</p>

      <p>Feels like: {weather.feelsLike}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind speed: {weather.windSpeed} km/h</p>
    </article>
  );
}

export default WeatherCard;