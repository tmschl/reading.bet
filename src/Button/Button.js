import React from "react";


export class SearchButton extends React.Component {
  constructor(props) {
    super(props);

    this.findBook = this.findBook.bind(this); 
  }
  
  findBook(event) {
    this.props.onSubmit();
  }

  render () {
    return (
      <button onClick={this.findBook}>Search</button>
    )
  }
}