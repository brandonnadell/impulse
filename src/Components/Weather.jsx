import React, { useState, useEffect } from "react";
import getWeather from '../util/getWeather';
import Container from "material-ui"

const Weather = (props) =>{
    const [position, setPosition] = useState(null)
    let weather;
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setPosition(pos)
            console.log(pos)
            weather = fetch(getWeather(pos))
        })
    }, [])
    return (
        <Container maxWidth="sm"></Container>
    )
};

export default Weather;