import Container from "./Container/Container"
import classes from './MoreWeather.module.css'


function MoreWeather({ weather, moreWeather }) {
    console.log(moreWeather)
    return (
        <div className={classes.MoreWeather}>
            <h1 className={classes.uptitle}>{weather.name}</h1>
            <Container data={'Сегодня'}
                item1={moreWeather.list[0]}
                item2={moreWeather.list[1]}
                item3={moreWeather.list[2]}
                item4={moreWeather.list[3]}
                item5={moreWeather.list[4]}
                item6={moreWeather.list[5]}
                item7={moreWeather.list[6]}
                item8={moreWeather.list[7]}
            />
            <Container data={'Завтра'}
                item1={moreWeather.list[8]}
                item2={moreWeather.list[9]}
                item3={moreWeather.list[10]}
                item4={moreWeather.list[11]}
                item5={moreWeather.list[12]}
                item6={moreWeather.list[13]}
                item7={moreWeather.list[14]}
                item8={moreWeather.list[15]}
            />
            <Container data={moreWeather.list[9].dt_txt.slice(5, 10).split('-').reverse().join('.')}
                item1={moreWeather.list[16]}
                item2={moreWeather.list[17]}
                item3={moreWeather.list[18]}
                item4={moreWeather.list[19]}
                item5={moreWeather.list[20]}
                item6={moreWeather.list[21]}
                item7={moreWeather.list[22]}
                item8={moreWeather.list[23]}
            />
            <Container data={moreWeather.list[17].dt_txt.slice(5, 10).split('-').reverse().join('.')}
                item1={moreWeather.list[24]}
                item2={moreWeather.list[25]}
                item3={moreWeather.list[26]}
                item4={moreWeather.list[27]}
                item5={moreWeather.list[28]}
                item6={moreWeather.list[29]}
                item7={moreWeather.list[30]}
                item8={moreWeather.list[31]}
            />
            <Container data={moreWeather.list[25].dt_txt.slice(5, 10).split('-').reverse().join('.')}
                item1={moreWeather.list[32]}
                item2={moreWeather.list[33]}
                item3={moreWeather.list[34]}
                item4={moreWeather.list[35]}
                item5={moreWeather.list[36]}
                item6={moreWeather.list[37]}
                item7={moreWeather.list[38]}
                item8={moreWeather.list[39]}
            />
        </div>
    )
}
export default MoreWeather
