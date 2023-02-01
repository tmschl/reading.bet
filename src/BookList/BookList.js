import React, { useLayoutEffect } from "react";

export class BookList extends React.Component {
  constructor(props) {
    super(props);

    // this.createList = this.createList.bind(this);
  }

  createList() {
    let bookData;

    if (this.props.results.length === 0) {
      bookData = this.props.bookState.map((book) => {
        return (
          <li key={book.id}><p>{book.title}</p><p>{book.author}</p><p>{book.edition}</p><p>{book.id}</p></li>
        )
      })
    } else {
      bookData = this.props.results.map((book) => {
        return (
          <li key={book.id}><p>{book.title}</p><p>{book.author}</p><p>{book.edition}</p><p>{book.id}</p></li>
        )
      })
    }
    console.log(bookData);

    return bookData;
  }

  render () {

   return (
      <ul>
        {this.createList()}
      </ul>
    )
  }
}