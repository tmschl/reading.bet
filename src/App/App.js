// receive an input
// return a book
// return an array of books
// display the array of books
// book title, author, edition *(estimated time of completion)
// save and display the book selection from the array
// remove the book selection from selection area
// mock track time since book selected
// query google books api for real books

import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchButton } from '../SearchButton/SearchButton';
import { BookList } from '../BookList/BookList';

 export class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      userName: 'timmy duncan',
      searchInput : '',
      books : [{
        author: 'Leo Tolstoy',
        title : 'Anna Karenina',
        edition: 'Modern Library',
        id: 1
      },{
        author: 'Franz Kafka',
        title : 'Amerika',
        edition: 'New Directions',
        id: 2
      },{
        author: 'Mrs. Dalloway',
        title : 'Virginia Woolf',
        edition: 'Penguins Classic',
        id: 3
      },{
        author: 'Ta-Nehisi Coates',
        title : 'Between the World and Me',
        edition: 'Speigel & Grau',
        id: 4
      },{
        author: 'Beyond Good and Evil',
        title : 'Fredirich Nietzsche',
        edition: 'Kaufman',
        id: 5
      }]
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    console.log(e.target.value)
    this.setState({searchInput: e.target.value});
  }

  search () {
    console.log(this.state.books)
    this.state.books.find((book) => {
      if (book.title === this.state.searchInput) {
        console.log(book);
        return book;
      } 
      console.log('not found');
    })
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <h1>reading.bet</h1>
        <SearchBar onChange={this.onChange}/>
        <SearchButton onSubmit={this.search}/>
      </header>
      <main>
        <BookList bookState={this.state.books}/> 
      </main>
    </div>
    );
  }
}

