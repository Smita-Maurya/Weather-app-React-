import Searchbox from "./searchbox"
import InfoBox from "./InfoBox"
import {useState} from "react"

export default function weatherapp(){
    const [weatherInfo , setweatherInfo]=useState({
        city:"Pune",
        temp:"25.05",
      tempMin:"25.05",
      tempMax:"25.05",
      humidity:"23",
      feelslike:"23",
      weather:"haze"
      });

      let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
      }
    return(
        <div style={{textAlign:"center"}} >
            <h2>Search for weather</h2>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}