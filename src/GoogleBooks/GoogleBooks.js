const api_key = "ask timmy hehe";

export function GoogleBooks (searchTerm) {
  console.log('Andor')
  //fetch('https://googlebooks.com/v2/api');
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${api_key}`)
  .then(response => {
      const books = response.json();
      return books;
    }).then(books => {
      let booksArray = books.items;
      console.log(booksArray);
      booksArray.forEach(book => {
        console.log(book);
      })
      
    })
} 