import React from 'react';
import { Search } from './Components/searchBar';
import { Greeting } from './Components/greeting';
import './App.css';
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
