/*
import React,{useEffect,useState} from "react";
import axios   from "axios";
import "./dot";
import Test from "./dot";
const Student =() => {
  const[vari,setvari]=useState([]);


  useEffect(() =>{
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response =>{
      const hidata=response.data;
      const apitest=hidata.map(a=>a.name);
      setvari(apitest);
    })
    .catch(error=>{
      console.error('Error fetching player data:', error);
    });
  },[]);
  return(
    <div>
    <h1>Student Divisions:</h1>
    {vari.length > 0 ? (
      <ul>
      {
        vari.map((just,index)=>(
          <li key={index}>*:{just}</li>
        ))
      }
      </ul>
    ):(
      <Test/>
    )
  }
  </div>
  );
};

export default Student;
*/

/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './App.css';
import { Button } from '@mui/material';

const WeatherApi = () => {
  const [weatherDetail, setWeatherDetail] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");


  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.tomorrow.io/v4/timelines?location=${city}&fields=temperature&apikey=p28NOtoYeZVjBuZiXIPQCWO8yWNKyaC5`);
      setWeatherDetail(response.data.timelines[0].intervals[0].values.temperature);
    } catch (error) {
      setWeatherDetail(null);
      setError('Error fetching Weather report...!');
    }
  };

  useEffect(() => {
    if (city !== '') {
      getWeather();
    }
  }, [city]);

  return (
    <div>
      <h1>Weather Details</h1>
      <input
        type='text'
        placeholder='Enter Region'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={getWeather}>Get Weather Details</Button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherDetail && (
        <div>
          <h2>{city}</h2>
          <p>Weather Report: {weatherDetail} C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './App.css';
import { Button } from '@mui/material';

const WeatherApi = () => {
  const [weatherDetail, setWeatherDetail] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const apiKey = "2KMMo5pAU8c6fGWSwtVdVlYUud0epE8k";

  const getWeather = async () => {
    try {
      //const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location= ${city}`);
      const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${city} & apikey=${apiKey}`);
      setWeatherDetail(response.data);
    } catch (error) {
      setWeatherDetail(null);
      setError('Error fetching Weather report...!');
    }
  };

  useEffect(() => {
    if (city !== '') {
      getWeather();
    }
  }, [city]);

  return (
    <div>
      <h1>Weather Details</h1>
      <input
        type='text'
        placeholder='Enter Region'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={getWeather}>Get Weather Details</Button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherDetail && (
        <div>
          <h2>{weatherDetail.name},{weatherDetail.location.type}</h2>
          <p>Weather Report: {weatherDetail.data.value.temperature} C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;

