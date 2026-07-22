import "./App.css";
import SearchForm from "./components/SearchForm";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  function handleSearch(city) {
    console.log("Searching for:", city);

  }

  return (
    <main>
      <h1>Weather Finder</h1>
      <p>Search for the current weather in any city.</p>

      <SearchForm onSearch={handleSearch} />
      <LoadingSpinner />
      
    </main>
  );
}

export default App;