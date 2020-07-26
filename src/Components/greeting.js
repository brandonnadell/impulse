import React, { useState, useLayoutEffect } from 'react';
import { TextField, Typography, Box } from '@material-ui/core';
import '../App.css';
import { getStorage, setStorage}  from '../storageHandler';
import styled from 'styled-components';


const DISPLAY_NAME = "impulseDisplayName";
const DEFAULT_PLACEHOLDER = "friend";

const GreetingContainer = styled.div`
    text-align: center;
    margin: auto;
`;

const TextWrapper = styled.div`
    margin: 6px 0 7px;
    display: inline-block;
`;

const Greeting = (props) => {
    const [displayName, setDisplayName] = useState(null);
    // const [width, setWidth] = useState(DEFAULT_PLACEHOLDER.length + "ch")
    
    useLayoutEffect(() => {
        const name = getStorage(DISPLAY_NAME);
        setDisplayName(name);
        // if (!name) {
        //     setWidth(DEFAULT_PLACEHOLDER.length + "ch");
        // }
        // else {
        //     setWidth((name.length + 2) + "ch");
        // }
    }, []);

    const handleChange = (e) => {
        const name = e.target.value;
        setDisplayName(name);
        // if (!name) {
        //     setWidth(DEFAULT_PLACEHOLDER.length + "ch");
        // }
        // else {
        //     setWidth((name.length + 2)+ "ch");
        // }
        setStorage(DISPLAY_NAME, name);

    }


    return (
        <GreetingContainer>
            <TextWrapper>
                <Typography variant="h2">
                    <Box fontWeight='fontWeightMedium'>
                        Hello,&nbsp;
                    </Box> 
                </Typography>
            </TextWrapper>
            <TextField 
                InputProps={{ disableUnderline: displayName !== "", 
                style: {
                        fontSize: '3.75em',
                        fontWeight: 500,
                        // width: width,
                    }
                }}
                input
                defaultValue={DEFAULT_PLACEHOLDER}
                placeholder={DEFAULT_PLACEHOLDER}
                value={displayName}
                onChange={handleChange}
            />
        </GreetingContainer>
    );

}

export { Greeting };