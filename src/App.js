import React from 'react';
import styled from 'styled-components';
import { Search } from './Components/searchBar';
import { Greeting } from './Components/greeting';
import './App.css';
import JssProvider from 'react-jss';
import LocaleInfo from './Components/LocaleInfo';



function App() {
  return (
      <div>
        <LocaleInfo></LocaleInfo>
        <Greeting></Greeting>
        <Search></Search>
        
      </div>
  );
}

export default App;
