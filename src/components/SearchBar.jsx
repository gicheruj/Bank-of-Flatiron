import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearch}
      fullWidth
      style={{ backgroundColor: "white", marginTop: "20px", marginBottom: "20px" }}
    />
  );
}

export default SearchBar;
