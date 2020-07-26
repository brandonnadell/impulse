import React, { useState, useEffect } from 'react';
import Clock from 'react-digital-clock';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';

const ClockWrapper = styled.div`
    float: right;
    padding: 8px 12px;
`;
const TIME_OPTIONS = {'hour12':true,'hour':'2-digit','minute':'2-digit'};
const Time =()=>{

    const getCurrentTime = () => {
        let tempTime =  new Date().toLocaleTimeString([], TIME_OPTIONS);
        if(tempTime[0] == "0"){
            tempTime = tempTime.substr(1)
        }
        return tempTime
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