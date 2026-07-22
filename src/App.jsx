import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
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
      
      <LoadingSpinner />

      <ErrorMessage message="We could not find that city." />

    </main>
  );
}

export default App;