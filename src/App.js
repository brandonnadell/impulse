import React from 'react';
import styled from 'styled-components';
import { Search } from './Components/searchBar';
import { Greeting } from './Components/greeting';
import './App.css';
import JssProvider from 'react-jss';
import Weather from './Components/Weather'



function App() {
  return (
      <div>
        <Greeting></Greeting>
        <Search></Search>
      </div>
  );
    <Weather></Weather>
  
}

export default App;
