import { Route } from 'react-router'
import MoreWeather from './components/MoreWeather';
import Weather from './components/Weather'


function App() {
  return (
    <div className='wrapper'>
      <Route exact path="/" component={Weather}/>
      <Route exact path="/more" component={MoreWeather}/>
    </div> 
  )
}

export default App;
