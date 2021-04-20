import classes from './Container.module.css'
import WeatherItem from "../WeatherItem/WeatherItem"
import { useEffect, useState } from 'react'


function Container({item1, item2, item3, item4, item5, item6, item7, item8, data}) {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>{data}</h2>
            </div>
            <div className={classes.items}>
                <WeatherItem item={item1}/>
                <WeatherItem item={item2}/>
                <WeatherItem item={item3}/>
                <WeatherItem item={item4}/>
                <WeatherItem item={item5}/>
                <WeatherItem item={item6}/>
                <WeatherItem item={item7}/>
                <WeatherItem item={item8}/>
            </div>
        </div>
    )
}
// lang=ru

export default Container
