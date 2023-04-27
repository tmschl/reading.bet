import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchBar } from '../SearchBar/SearchBar';
import { User } from '../User/User';

export function App(props) {
  return (
    <div className="app" >
      <h1>{props.name}</h1>
      <User />
      {/* <SearchBar /> */}
    </div>
  );
}
