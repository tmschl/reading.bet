import { useState } from 'react';

export function SearchResults (props) {
  const [readingNow, setReadingNow] = useState({
    readingNow: false,
    bookID: '',
    title: ''
  });

  function handleClick(e) {
    e.preventDefault();
    console.log(e);

    if (!readingNow.readingNow) {
      setReadingNow({
        ...readingNow,
        readingNow: true
      })
    }
   }
  
  const searchResults = props.searchResults.map(book =>
    <li key={book.id}>
      <p> {book.volumeInfo.title} by {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</p>
      <button onClick={ () => 
        setReadingNow({
        readingNow: true, 
        bookID: `${book.id}`, 
        title: `${book.volumeInfo.title}`
      })} >reading now</button>

      <p> {book.volumeInfo.description} </p>
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''} />
    </li>
  );
  console.log(searchResults);
  return searchResults;
} 



