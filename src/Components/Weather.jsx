import React, { useState, useEffect } from "react";
import getWeather from '../util/getWeather';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';




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
    return (
    <Card variant="elevated">
        <CardContent>
        {weather ?
        <>
        <div><p>Weather in {weather.name}:</p>
        <p>{weather.weather[0].main}, temp: {weather.main.temp}</p></div>
        </>
        :
        <div>Finding weather...</div>
        }
        </CardContent>

    </Card>
    )
};

export default Weather;