import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { User } from '../User/User';
import { SearchBar } from '../SearchBar/SearchBar';

export function App(props) {

  const user = User.user;

  return (
    <div className="app" >
      <BrowserRouter>
        <h1>{props.name}</h1>
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/search" element={<SearchBar userInfo={ user }/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


