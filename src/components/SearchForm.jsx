import { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">City</label>

      <input
        id="city"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter a city"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;