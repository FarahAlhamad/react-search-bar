import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { SearchResultsLists } from "./components/SearchResultsLists";
function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsLists results={results} />
      </div>
    </div>
  );
}

export default App;
