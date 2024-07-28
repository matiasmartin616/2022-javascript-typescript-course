import axios from 'axios';

const url = "https://api.openweathermap.org/data/3.0/onecall?lat=42.8169&lon=-1.6432&appid={74059e6201b4bcb86ff5c4cb5f259985}";

interface ICord{
        lon: number,
        lat: number,
}

axios.get(url).then(response => {   
    const todo = response.data as ICord//Hacer un casting coger un objeto y castearlo a Todo

    const lon = todo.lon;
    const lat = todo.lat;

    console.log(lon,lat);
})