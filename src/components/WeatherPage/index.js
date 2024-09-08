import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css'; // Import your CSS

const WeatherPage = () => {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '990f58a5ea72cca1374cfb9a207f07c7'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [cityName, API_KEY]);

  if (!weatherData) return <div>Loading weather data...</div>;

  // Determine background class based on weather condition
  const weatherCondition = weatherData.weather[0].main.toLowerCase();
  const backgroundClass = 
    weatherCondition.includes('clear') ? 'clear' :
    weatherCondition.includes('clouds') ? 'clouds' :
    weatherCondition.includes('rain') ? 'rain' :
    weatherCondition.includes('snow') ? 'snow' :
    weatherCondition.includes('thunderstorm') ? 'thunderstorm' :
    weatherCondition.includes('drizzle') ? 'drizzle' :
    weatherCondition.includes('mist') ? 'mist' :
    weatherCondition.includes('haze') ? 'haze' : '';

  return (
    <div className={`weather-container ${backgroundClass}`}>
      <h2>Weather in {weatherData.name}</h2>
      <p className="temp">Temperature: {weatherData.main.temp}°C</p>
      <p className="temp">Weather: {weatherData.weather[0].description}</p>
      <p className="temp">Humidity: {weatherData.main.humidity}%</p>
      <p className="temp">Wind Speed: {weatherData.wind.speed} m/s</p>
      <p className="temp">Atmospheric Pressure: {weatherData.main.pressure} hPa</p>
    </div>
  );
};

export default WeatherPage;
