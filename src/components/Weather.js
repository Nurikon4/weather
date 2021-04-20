import classes from './Weather.module.css'
import { fetchWeather } from '../api/fetchWeather'
import cities from '../db/city.json'
import { forecastWeather } from '../api/forecastWeather'


import { useEffect, useState } from 'react'
import MoreWeather from './MoreWeather'

function Weather() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState([])
    const [moreWeather, setMoreWeather] = useState([])

    const [visableList, setVisableList] = useState(false)
    
    useEffect( () => {
        const raw = localStorage.getItem('weather')
        setWeather(JSON.parse(raw))
    }, [])

    useEffect( () => {
        localStorage.setItem('weather', JSON.stringify(weather))
    }, [weather])

    useEffect( () => {
        const raw = localStorage.getItem('moreWeather')
        setMoreWeather(JSON.parse(raw))
    }, [])

    useEffect( () => {
        localStorage.setItem('moreWeather', JSON.stringify(moreWeather))
    }, [moreWeather])


    const search = async (e) => {
        if (e.key == 'Enter' || e.type == 'click') {
            const data = await fetchWeather(query)
            setWeather(data)
            const forcast = await forecastWeather(query)
            setMoreWeather(forcast)
            setQuery('')
        }
    }
    
    
    let citiesList = cities.map((city, index) => <option value={`${city.name}`} key={index} />)

    const visableHandler = () => {
        setVisableList( (visable) => !visable)
    }

    return (
        <>
            <div>
                <input
                    list="cities"
                    type="text"
                    className={classes.search}
                    placeholder="Введите город"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={search}
                />
                <datalist id="cities">
                    {citiesList}
                </datalist>
                <button className={classes.btn} onClick={search}></button>
            </div>

            {weather.main
            && <div className={classes.weather}>
                    <h1 className={classes.city}>{weather.name}</h1>
                    <span className={classes.more}>
                        <p onClick={visableHandler} className={classes.more__link}>Нажмите для подробного прогноза</p>
                    </span>
                    <div className={classes.degree__block}>
                        <img className={classes.img} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                        <div className={classes.degree}>{Math.round(weather.main.temp)}<sup>&deg;</sup>С</div>
                    </div>
                    <div className={classes.info}>{weather.weather[0].description}</div>
                    <div className={classes.how}>Ощущается как: {Math.round(weather.main.feels_like)}<sup>&deg;</sup>C</div>
                </div>
            }
            {visableList && <MoreWeather weather={weather} moreWeather={moreWeather}/>}
        </>
    )
}

export default Weather
