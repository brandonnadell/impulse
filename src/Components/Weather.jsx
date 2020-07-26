import React, { useState, useEffect } from "react";
import getWeather from '../util/getWeather';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Box } from "@material-ui/core";
import styled from 'styled-components';

const WeatherWrapper = styled.div`
    float: right;
    display: block;
    padding: 0px 12px;
    text-align: right;
`;

const DEGREE_SYMBOL = "&#176;"

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
        const temp = weather.temp;
        return (  
            <WeatherWrapper display='inline'>
                <Typography variant='subtitle1'>
                    <Box fontWeight='fontWeightMedium'>
                        {city}
                    </Box>
                    <Box fontWeight='fontWeightLight'>
                        {skyCover}
                    </Box>
                    <Box fontWeight='fontWeightLight'>
                        {temp}{DEGREE_SYMBOL}
                    </Box>
                </Typography>
            </WeatherWrapper>
        );
    }
    return (
        <WeatherWrapper>
            <Typography variant='h6'>
                <Box fontWeight='fontWeightMedium'>
                    Loading Weather
                </Box>
            </Typography>
        </WeatherWrapper>
    );
    // return (
    // <Card>
    //     <CardContent>
    //     {weather ?
    //     <>
    //     <div><p>Weather in {weather.name}:</p>
    //     <p>{weather.weather[0].main}, temp: {weather.main.temp}</p></div>
    //     </>
    //     :
    //     <div>Finding weather...</div>
    //     }
    //     </CardContent>

    // </Card>
    // )
};

export default Weather;