/* eslint-disable no-useless-constructor */
import React, { useLayoutEffect } from "react";

export class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.createList = this.createList.bind(this);
  }

  createList() {

  }

  render () {
   return (
      <ul>
        {this.createList()}
      </ul>
    )
  }
}