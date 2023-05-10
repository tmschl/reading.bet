import './App.css';
import React from 'react';
import { useState} from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { User } from '../User/User';
import { SearchBar } from '../SearchBar/SearchBar';

export function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const user = User.user;
  console.log(user);

  return (
    <div className="app" >
      <BrowserRouter>
      <Link to="/app">{props.name}</Link>
        <Routes>
          <Route path="/search" 
          element={
            loggedIn ? (
              <SearchBar userInfo={ user } />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }/>
          <Route path="/login" element={<User setLoggedIn={ () => setLoggedIn(true) } /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


