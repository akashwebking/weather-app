import React, { useState } from 'react';
import './weather.css';
import search_icon from "../asset/search.png";
import clear_icon from "..//asset/clear.png";
import cloud_icon from "../asset/cloud.png";
import drizzle_icon from "../asset/drizzle.png";
import humidity_icon from "../asset/humidity.png";
import rain_icon from "../asset/rain.png";
import snow_icon from "../asset/snow.png";
import wind_icon from "../asset/wind.png";

const Weather = () => {
    let api_key="da7ecdabaa08898622cf1b5742102bd1";
    const [wicon,setWicon]=useState(cloud_icon);
    const  search=async ()=>{
        const element =document.getElementsByClassName("cityinput");
        console.log(element[0].value);
        if(element[0].value===""){
            return 0;
        }
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response=await fetch(url);
        let data=await response.json();
        const humidity=document.getElementsByClassName("humidity_persentage");
        const wind=document.getElementsByClassName("windspeed");
        const temprature=document.getElementsByClassName("weathertemp");
        const location=document.getElementsByClassName("weather-location");
        humidity[0].innerHTML=(data.main.humidity)+"%";
        wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h"
        temprature[0].innerHTML=Math.floor(data.main.temp) +"°c";
        location[0].innerHTML=data.name;
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else{

            setWicon(clear_icon)
        }
    }
  return (
    
    <div className='container'>
       
     
            <div className="top_bar">
            <input type="text" className='cityinput' placeholder='Enter your city' />
            <div className="search_icons" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weatherimg">
            <img src={wicon} alt="" />
        </div>
        <div className="weathertemp">26°c</div>
        <div className="weather-location">London</div>
        <div className="dataContainer">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity_persentage">64%</div>
                    <div className="text">humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="windspeed">18 km/h</div>
                    <div className="text">wind Speed</div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Weather