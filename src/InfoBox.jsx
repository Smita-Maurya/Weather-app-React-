import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/869042148/photo/cars-in-the-fog-bad-winter-weather-and-dangerous-automobile-traffic-on-the-road-light-vehicles.jpg?s=612x612&w=0&k=20&c=0yXZa3Pwfe-Zhp8nPbFyDd1VzTH922ogI5W0IwDNyXg="
    let HOT_URL="https://media.istockphoto.com/id/1150229690/photo/silhouette-man-is-drinking-water-bottle-on-hot-weather-background-with-summer-season-high.jpg?s=612x612&w=0&k=20&c=IPPIY0enEDgl4nXt6ePap791LjXn0dd4kAinLfiGKKg=";
    let COLD_URL="https://media.istockphoto.com/id/629628262/photo/pedestrians-and-traffic-on-a-winter-day.jpg?s=612x612&w=0&k=20&c=J3i1ERNqbTfwfGE517oVSQo9eWtB0pOtJ6SDCM0K9P0=";
    let RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    return(
        <div className='infobox'>
            
        <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80? RAIN_URL :info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80? <ThunderstormIcon/> :info.temp > 15 ? <WbSunnyIcon/> :<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Min Temperature={info.tempMin}&deg;C</div>
          <div>Max Temperature={info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> and feels like={info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
       
    </Card>
    </div>
        </div>
    )
}