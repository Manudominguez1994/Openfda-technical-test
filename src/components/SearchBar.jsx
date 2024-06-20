import React, { useState } from "react";
// Styles MIU
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MedicationIcon from '@mui/icons-material/Medication';

function SearchBar({ onSearch }) {
  //State in which we will save and display the search that the user is performing.
  const [query, setQuery] = useState("");

  //Function that changes the search state
  const handleSearch = () => {
    onSearch(query);
    console.log(query);
  };

  return (
    <div >
      <div>
        <h1><MedicationIcon/> Medicine Finder <MedicationIcon/></h1>
      </div>
      <div className="search-container">
        <TextField
        id="standard-basic"  variant="standard"
          label="Search for medicaments"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}className="button-search">
          <SearchIcon sx={{ color: "#ff8a80", fontSize: 40 }} />
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
