import { useState } from "react";

function SearchForm({ onSearch, loading }) {
  const [city, setCity] = useState("Johannesburg");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(city);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="city-search">
        Search for a city
      </label>

      <span className="search-icon" aria-hidden="true">
        ⌕
      </span>

      <input
        id="city-search"
        type="search"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter a city"
        autoComplete="off"
      />

      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchForm;