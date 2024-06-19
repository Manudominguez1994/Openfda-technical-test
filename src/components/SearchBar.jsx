import React, { useState } from "react";
// Styles MIU
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MedicationIcon from '@mui/icons-material/Medication';

function SearchBar({ onSearch }) {
  // Definimos un estado en el cual guardaremos y mostraremos la busqueda que el usuario esta realizando
  const [query, setQuery] = useState("");

  // Creamos una funcion que cambie el estado de busqueda
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
