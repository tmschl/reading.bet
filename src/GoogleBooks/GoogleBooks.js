// import React from "react";


// export class GoogleBooks extends React.Component {
//   search (searchTerm) {
//     console.log('Andor')
//     //fetch('https://googlebooks.com/v2/api');
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${api_key}`)
//     .then(response => {
//         const books = response.json();
//         return books;
//       }).then(books => {
//         const booksArray = books.items;
//         return booksArray;         
//       }).then(booksArray => {
//         console.log(booksArray, this.state);
//       })
//   } 
// }

// export function GoogleBooks (searchTerm, paramFn) {
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${api_key}`)
//   .then(response => {
//       const books = response.json();
//       return books;
//     }).then(books => {
//       paramFn(books);
//     });
// } 


// .then(books => {
//       const booksArray = books.items;
//       return booksArray;         
//     }).then(booksArray => {
//       console.log(booksArray);
//     })