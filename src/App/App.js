import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchBar } from '../SearchBar/SearchBar';

export function App(props) {
  return (
    <div className="app" >
      <header>
        <div>user profile</div>
      </header>
      <h1>{props.name}</h1>
      <SearchBar />
    </div>
  );
}
