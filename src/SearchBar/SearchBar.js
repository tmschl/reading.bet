import React from "react";
import { useState, useEffect } from 'react';
import { Api_Key } from '../Keys.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import "./SearchBar.css";

export function SearchBar(props) {
  const [searchParams, setSearchParams] = useState('');
  const [bookResults, setBookResults] = useState([]);
  
  function handleEnterEvent(event) {
    event.preventDefault()
    setSearchParams(event.currentTarget.elements.searchText.value);
  }

   useEffect(() => {
    if (!searchParams) return setBookResults([]);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${Api_Key}`)
      .then(response => {
        const books = response.json();
        return books;
      }).then(books => {
        const booksResponse = books.items;
        setBookResults(booksResponse);
      });
  }, [searchParams]);

  return (
    <div className="search" >
      <form onSubmit={handleEnterEvent}>
        <div>
          <label>search up ur book bruv:</label>
          <input id="searchText" type="text" />
        </div>
        <button  type="search">search</button>
      </form>
      <ul>
        <SearchResults userInfo={ props.userInfo } searchResults={bookResults} />
      </ul>
    </div>
  )
}
