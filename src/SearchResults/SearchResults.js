import { useState } from 'react';

export function SearchResults (props) {
  const [readingNow, setReadingNow] = useState("");

  const searchResults = props.searchResults.map(book =>

    <li key={book.id}>
      <p> {book.volumeInfo.title} by {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</p>
      <button onClick={ (e) => {
        setReadingNow(book.volumeInfo.title);
      }}>
        add to reading now
      </button>

      <p> {book.volumeInfo.description} </p>
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''} />
    </li>
  );

  return (
    <div className="searchResults">
      <p>
         {readingNow} 
      </p>
      {searchResults}
    </div>
  )
} 



