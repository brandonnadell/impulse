import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import { isURL } from 'validator';
import styled from 'styled-components';

const HTTP = "https://";
const WWW = "www.";
const SEARCH_URL = "http://www.google.com/search?q=";

const SearchBarWrapper = styled.div`
    margin: auto;
    max-width: 800px;
`;

const searchHandler = (query) => {
    let options = {"require_protocol": true};
    if (isURL(query, options)) {
        window.location.href = query;
    }
    else if (isURL(query)) {
        console.log(query);
        if (query.substring(0, 4) === WWW) {
            window.location.href = HTTP + query;
        }
        else {
            window.location.href = HTTP + WWW + query;
        }
    }
    else {
        window.location.href = SEARCH_URL + query;
    }
}
const Search = (props) => {
    const [value, setValue] = useState("");
    return (
        <SearchBarWrapper>
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
        </SearchBarWrapper>

    );
}

export { Search };