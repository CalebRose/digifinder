import React, { Component } from "react";
import "./searchBox.styles.css";

const searchBox = ({ placeholder, handleChange }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

export default searchBox;
