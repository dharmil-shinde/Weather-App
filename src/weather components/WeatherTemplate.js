import React, { useEffect, useState } from 'react'
import "./WeatherTemplate.css"
export default function WeatherTemplate({temp, humidity, pressure,weatherMood,windSpeed,country, sunrise, sunset, stateName})
{
    const [mood, setMood]=useState("")
    useEffect(()=>{
        if(weatherMood){
            switch(weatherMood){
            case "Clouds":
                 setMood("wi-day-cloudy")
            break;
            case "Haze":
                setMood("wi-fog")
            break;
            case "Clear":
                setMood("wi-day-sunny")
            break;
            case "Mist":
                setMood("wi-dust")
            break;
            case "Snow":
                setMood("wi-day-snow")
            break;
            case "Rain":
                setMood("wi-day-rain")
            break;
            case "Smoke":
                setMood("wi-cloudy-windy")
            break;
            default:
                setMood("wi-stars")
        }
    }},[weatherMood])
    let set = sunset;
  let dateset = new Date(set * 1000);
  let sunsetHour = `${dateset.getHours()}:${dateset.getMinutes()}`;
  let rise = sunset;
  let daterise = new Date(rise * 1000);
  let sunriseHour= `${daterise.getHours()}:${daterise.getMinutes()}`;
  return (
    <>
        <div className="weather-container">
            <div className="left">
                <div className="icon center"  style={{flexDirection:"column"}}>
                    <i className={`wi ${mood}`} style={{fontSize:"4.5em"}}></i> <br/> <span>{weatherMood}</span> </div>
                <div className="temp" style={{flexDirection:"column"}}><span>Temperature</span> {temp} &#176;</div>
            </div>
           <div className="right">
               <div className="right-top">
                    <div className="state">
                        {stateName}, <br/> {country}.
                    </div>
                    <div className="date" style={{padding:"0.5em"}}>
                        {new Date().toLocaleString()}
                    </div>
               </div>
               <div className="right-middle">
                    <div className="wind center">
                            <i className="wi wi-day-cloudy-gusts" /*style={{fontSize:"3.5rem"}}*/></i>
                            <span> {windSpeed}</span>    
                    </div>
                    <div className="wind center">
                        <i className="wi wi-barometer" /*style={{fontSize:"3.5rem"}}*/></i>
                        <span> {pressure} </span>    
                    </div>
               </div>
               <div className="right-bottom">
                   <div className="humidity center">
                        <i className='wi wi-humidity' /*style={{fontSize:"3.5rem"}}*/></i>
                        <span>{humidity}</span>
                   </div>
                   <div className="sunrise center">
                        <i className='wi wi-sunrise' /*style={{fontSize:"3.5rem"}}*/></i>
                        <span>{sunriseHour}</span>
                   </div>
                   <div className="sunset center">
                        <i className='wi wi-sunset' /*style={{fontSize:"3.5rem"}}*/></i>
                        <span>{sunsetHour}</span>
                   </div>
               </div>
               
           </div>
        </div> 
    </>
  )
}
