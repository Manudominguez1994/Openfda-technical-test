import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import MedicineDetail from "./components/MedicineDetail";

function App() {
  //Define a status for search results
  const [results, setResults] = useState([]);
  // Call to the api with the search results that the user has done.
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.fda.gov/drug/label.json`, {
        params: {
          search: query,
          limit: 10,
        },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data from API", error);
    }
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              <SearchResults results={results} />
            </>
          }
        />
        <Route path="/detail/:id" element={<MedicineDetail />} />
      </Routes>
    </div>
  );
}

export default App;
