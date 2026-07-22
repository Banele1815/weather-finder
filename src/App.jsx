import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  function handleSearch(city) {
    console.log("Searching for:", city);
  }

  return (
    <main>
      <h1>Weather Finder</h1>
      <p>Search for the current weather in any city.</p>

      <SearchForm onSearch={handleSearch} />
    </main>
  );
}

export default App;