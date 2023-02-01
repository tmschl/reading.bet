import React, { useLayoutEffect } from "react";

export class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.createList = this.createList.bind(this);
  }

  createList() {
    const bookData = this.props.bookState.map((book) => {
      return (
        <li><p>{book.title}</p><p>{book.author}</p><p>{book.edition}</p><p>{book.id}</p></li>
      )
    })
  }

  render () {

   return (
      <ul>
          {
            this.props.bookState.map((book) => {
              return (
                <li key={book.id}><p>{book.title}</p><p>{book.author}</p><p>{book.edition}</p><p>{book.id}</p></li>
              )
            })
          }
      </ul>
    )
  }
}