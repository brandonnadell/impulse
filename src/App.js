import React from 'react';
import styled from 'styled-components';
import { Search } from './Components/searchBar';
import { Login } from './Components/loginButton';
import './App.css';
console.log(process.env.REACT_APP_NOT_SECRET_CODE)



function App() {
  return (
    <div>
      <Search></Search>
      <Login></Login>
    </div>
  );
}

export default App;
