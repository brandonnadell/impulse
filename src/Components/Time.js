import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';

const ClockWrapper = styled.div`
    text-shadow: 0 1px 5px rgba(0,0,0,.1);
    padding: 8px 12px;
`;
const TIME_OPTIONS = {'hour12':true, hour:'numeric', minute:'numeric'};
const Time =()=>{

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString([], TIME_OPTIONS);
    }
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        setInterval(() => {
            setTime(getCurrentTime());
          }, 1000);
    });
    return (
    <ClockWrapper>
        <Typography variant='h3'>
            <Box fontWeight='fontWeightMedium' display='inline'>
                {time}
            </Box>
        </Typography>
    </ClockWrapper>
    );
    
    
}
export default Time;