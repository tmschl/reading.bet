import React from "react";
import { useState, useEffect } from 'react';
import { Api_Key } from '../Keys.js'
import "./SearchBar.css";

export function SearchBar() {
  const [searchParams, setSearchParams] = useState('');
  const [bookResults, setBookResults] = useState([]);

  const listItems = bookResults.map(book =>
    <li key={book.id}>
      <p> {book.volumeInfo.title} by {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</p>
      <button onClick={readingNow}>reading now</button>
      <p> {book.volumeInfo.description} </p>
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''} />
    </li>
  );

  function readingNow () {
    console.log('sup lil homie')
  }
  function handleEnterEvent(event) {
    event.preventDefault()
    setSearchParams(event.currentTarget.elements.searchText.value);
  }

   useEffect(() => {
    if (!searchParams) return setBookResults([]);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${Api_Key}`)
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
      <form onSubmit={handleEnterEvent}>
        <div>
          <label>search up ur book bruv:</label>
          <input id="searchText" type="text" />
        </div>
        <button  type="search">search</button>
      </form>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
