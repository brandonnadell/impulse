import React from 'react';
import styled from 'styled-components';
import { Search } from './Components/searchBar';
import { Greeting } from './Components/greeting';
import './App.css';
import JssProvider from 'react-jss';
import Weather from './Components/Weather'
import Time from './Components/Time'



function App() {
  return (
      <div>
        <Greeting></Greeting>
        <Search></Search>
        <Time></Time>
        <Weather></Weather>
      </div>
  );
}

export default App;
