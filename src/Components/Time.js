import React, { useState, useEffect } from 'react';
import Clock from 'react-digital-clock';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';

const ClockWrapper = styled.div`
    float: right;
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
        <Typography variant='h5' display='inline'>
            <Box fontWeight='fontWeightMedium' display='inline'>
                {time}
            </Box>
        </Typography>
    </ClockWrapper>
    );
    
    
}
export default Time;