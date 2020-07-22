import React, { useState } from 'react';
import styled from 'styled-components'
import SearchBar from 'material-ui-search-bar'


const searchHandler = (query) => {
    window.location.href = "http://www.google.com/search?q=" + query;
}
const Search = (props) => {
    const [value, setValue] = useState("");
    return (
        <SearchBar
            value={value}
            placeholder={"Search"}
            onChange={(newValue) => setValue(newValue)}
            onRequestSearch={() => searchHandler(value)}
            style={{
                margin: '0 auto',
                maxWidth: 800
              }}
        />

    );
}

export { Search };