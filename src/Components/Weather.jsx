import React, { useState, useEffect } from "react";
import getWeather from '../util/getWeather';
import { Typography, Box } from "@material-ui/core";
import styled from 'styled-components';

const WeatherWrapper = styled.div`
    padding: 0px 12px;
    text-align: right;
    text-shadow: 0 1px 5px rgba(0,0,0,.1);
`;


const Weather = (props) =>{
    const [position, setPosition] = useState(null)
    const [weather, setWeather] = useState(null)
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setPosition(pos)
            console.log(pos)
            getWeather(pos).then((weat) => {
                setWeather(weat)
            })
        })
    }, [])
    console.log(weather)
    if(weather) {
        const city = weather.name;
        const skyCover = weather.weather[0].main;
        const temp = Math.round(weather.main.temp);
        return (  
            <WeatherWrapper>
                <Typography variant='h3'>
                <Box fontWeight='fontWeightMedium'>
                        {temp}&#176;
                    </Box>
                </Typography>
                <Typography variant='h6'>
                    <Box  fontWeight='fontWeightBold'>
                        {city}
                    </Box>
                    <Box fontWeight='fontWeightMedium'>
                        {skyCover}
                    </Box>
                </Typography>
                
            </WeatherWrapper>
        );
    }
    return (
        <React.Fragment></React.Fragment>
    );
};

export default Weather;