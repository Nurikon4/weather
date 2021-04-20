import axios from 'axios' 

const URL = "https://api.openweathermap.org/data/2.5/forecast"
const API_Key = "1efd4abe0280531ffef46428bd0e5a74"

export const forecastWeather = async (query) =>{
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            lang: 'ru',
            APPID: API_Key
        }
    })

    return data;
}



