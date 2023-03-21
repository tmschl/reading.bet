import React from "react";
import { useState } from 'react';
import "./SearchBar.css"

export function SearchBar() {
  const [searchText, setSearchText] = useState('');

  function handleSubmit(event) {
    event.preventDefault()
    const searchValue = event.currentTarget.elements.searchText.value;
    console.log(searchValue);
    setSearchText(searchValue);
    //
  }

  function handleKeyUp(event) {
    event.preventDefault();
    console.log(event.target.value);
    setSearchText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>search up ur book bruv:</label>
        <input id="searchText" type="text" onKeyUp={handleKeyUp} />
      </div>
      <button onClick={handleSubmit} type="search">search</button>
    </form>
  )
}
