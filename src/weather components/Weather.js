import React,{ useEffect,  useState} from 'react'
import "./Weather.css"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import WeatherTemplate from './WeatherTemplate';


export default function Weather() {
    const[searchButton, setSearchButton]= useState(false);
    const[inputValue, setInputValue]= useState("mumbai");
    const[weather, setWeather]= useState({});
   const valueChange=()=>{
    setSearchButton(true)
    setInputValue("")
   }
   const change=async()=>{
      
      try{  
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=3c90cd92458e331128bbcb41b30737d6`;
        const res=  await fetch(url);
        const data= await res.json();
  
        const{temp, humidity, pressure}= data.main
        const weatherMood= data.weather[0].main
        const stateName = data.name;
        const windSpeed = data.wind.speed ;
        const{country, sunset,sunrise}= data.sys;


        // console.log(temp, humidity, pressure,weatherMood,windSpeed,country, sunrise, sunset, stateName)
        const weatherInfo={temp, humidity, pressure,weatherMood,windSpeed,country, sunrise, sunset, stateName}
        setWeather(weatherInfo)

      }catch(error){
          alert("please enter valid state name")
      }
     
    }
    const enterKey=(event)=>{
      if (event.key==="Enter"){
        setSearchButton(true)
        change()
    setInputValue("")
      }
    }

    useEffect(()=>{
      change()
     // eslint-disable-next-line 
    },[])
  return (
    <>
        <h1 className='weather-header'>Weather app</h1>
        <div className='search-container'>
            <input type="search" placeholder='Put state here...' onKeyPress={enterKey} className={searchButton ? "search" : "search2"  } value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} autoFocus  />
            <button type='button' className={searchButton ? "search-button": "search-button2"} onClick={()=>{change(); valueChange()}}> 
            {searchButton?"search":<SearchTwoToneIcon  className="icon-search-button "style={{fontSize:"2rem"}}/>} </button>
        </div>
        {/* <h1>{inputValue}</h1> */}
        <WeatherTemplate {...weather}/>
    
    </>
  )
}
