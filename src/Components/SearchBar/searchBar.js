import React, { Component } from "react";
import "./searchBar.styles.css";

const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
