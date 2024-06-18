
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import MedicineDetail from './components/MedicineDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar />
            <SearchResults />
          </>
        }/>
        <Route path="/detail/:id" element={<MedicineDetail />}/>
      </Routes>
    </div>
  );
}

export default App;