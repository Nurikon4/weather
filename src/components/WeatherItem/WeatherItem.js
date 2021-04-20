import classes from './WeatherItem.module.css'

function WeatherItem({item }) {
    return (
        <div className={classes.item}>
                <div className={classes.block}>
                    <div className={classes.data}>
                    <p>{item.dt_txt.slice(0, 10).split('-').reverse().join('.')}</p>
                    <p>{item.dt_txt.slice(10)}</p>
                    </div>
                    <div className={classes.degree__block}>
                        <img className={classes.img} src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
                        <div className={classes.degree}>{Math.round(item.main.temp)}<sup>&deg;</sup>С</div>
                    </div>
                    <div className={classes.info}>{item.weather[0].description}</div>
                    <div className={classes.how}>Ощущается как: {Math.round(item.main.feels_like)}<sup>&deg;</sup>C</div>
                </div>
        </div>
    )
}

export default WeatherItem
