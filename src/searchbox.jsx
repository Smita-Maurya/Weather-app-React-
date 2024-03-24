import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";

export default function searchbox({updateInfo}){
    let [city , setCity]= useState("");
    let [error , setError]= useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="8365da85369917a9dbbb1dc8da8f7035"

    let getWeatherinfo= async ()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        console.log(jsonResponse);
        let result= {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    } catch(err){
        throw err;
    }
    };
   

    let handlechange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit= async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo= await getWeatherinfo();
        updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    }
    return(
        <div className='searchbox'>
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city-name" variant="outlined" required  value={city} onChange={handlechange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
             Search
            </Button>
            {error && <p style={{color:"red"}}>No such place exist</p>}
            </form>
        </div>
    )
}