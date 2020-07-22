const getWeather = async (pos) => {
  const latitude = pos.coords.latitude
  const longitude = pos.coords.longitude
  console.log(process.env.REACT_APP_WEATHER_KEY)
  const api_call = await
  fetch(`//api.openweathermap.org/data/2.5/weather?
lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`);
    const data = await api_call.json();
    console.log('data is: ', data);  //this is the good stuff
    return data;
  }

export default getWeather;