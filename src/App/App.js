import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchButton } from '../SearchButton/SearchButton';
import { BookList } from '../BookList/BookList';


export function App(props) {
  return <h1>Hello, {props.name}</h1>;
}

//  export class App extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       user: {
//         id: 1,
//         name: 'timmy duncan',
//         avatar: '',
//         currentBook: '',
//         bookHistory: []
//       },
//       searchInput : '',
//       searchResults: [],
//       books : []
//     }

//     this.onChange = this.onChange.bind(this);
//     this.googleBooks = this.googleBooks.bind(this);
//   }

//   onChange (e) {
//     this.setState({searchInput: e.target.value});
//   }

//   googleBooks () {
//     const searchTerm = this.state.searchInput;

//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${api_key}`)
//     .then(response => {
//         const books = response.json();
//         return books;
//       }).then(books => {
//         this.state.searchResults.push(books.items)
//       });
      
//   }

//   render () {
//     return (
//     <div className="Root">
//     </div>
//     );
//   }
// }

