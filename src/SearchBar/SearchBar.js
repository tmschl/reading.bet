import React from "react";
import "./SearchBar.css"

export class SearchBar extends React.Component {

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.props.onChange(event);
  }

  render () {
    return (
      <input id="search" onChange={this.handleChange} type="search"></input>
    )
  }
}