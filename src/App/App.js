import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { User } from '../User/User';
import { SearchBar } from '../SearchBar/SearchBar';

export function App(props) {
  return (
    <div className="app" >
      <BrowserRouter>
        <h1>{props.name}</h1>
        <Routes>
          <Route path="/login" element={<User />} />
          <Route path="/" element={<SearchBar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


