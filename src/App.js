import React from 'react';
import styled from 'styled-components';
import { Search } from './Components/searchBar';
import { Greeting } from './Components/greeting';
import './App.css';
import JssProvider from 'react-jss';


/*global chrome*/
function App() {
  return (
      <div>
        <Search></Search>
        <Greeting></Greeting>
      </div>
  );
}

export default App;
