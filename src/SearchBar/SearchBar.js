import React from "react";
import { useState, useEffect } from 'react';
import "./SearchBar.css"

export function SearchBar() {
  const [searchParams, setSearchParams] = useState('');
  const [bookResults, setBookResults] = useState([]);

  const listItems = bookResults.map(book =>
    <li key={book.id}>
      <p> {book.volumeInfo.title} by {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</p>
      <button> add to bookshelf </button>
      <p> {book.volumeInfo.description} </p>
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''} />
    </li>
  );

  function handleEnterKey(event) {
    event.preventDefault()
    console.log(event.currentTarget.elements.searchText.value);
    setSearchParams(event.currentTarget.elements);
  }

  function handleSearchButton(event) {
    event.preventDefault();
    console.log(searchParams);
    setSearchParams(searchParams);
  }

  function handleKeyUp(event) {
    event.preventDefault();
    console.log(event.target.value);
    setSearchParams(event.target.value);
  }

  useEffect(() => {
    console.log('effect');
    if (!searchParams) return;
    const api_key = 'AIzaSyA0UKouWSL-JZ6d7y-xwWgQAsgG1Uvd-6U';
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${api_key}`)
      .then(response => {
        const books = response.json();
        console.log(books);
        return books;
      }).then(books => {
        const booksResponse = books.items;
        setBookResults(booksResponse);
        console.log(booksResponse);
      });
  }, [searchParams]);


  return (
    <div className="search" >
      <form onSubmit={handleEnterKey}>
        <div>
          <label>search up ur book bruv:</label>
          <input id="searchText" type="text" onKeyUp={handleKeyUp} />
        </div>
        <button onClick={handleSearchButton} type="search">search</button>
      </form>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
