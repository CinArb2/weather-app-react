import { useState} from 'react';
import './App.css';
import AllowLoc from './components/AllowLoc/AllowLoc';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ReactLoading from 'react-loading';
import Blocked from './components/Blocked/Blocked';

function App() {
  const [petition, setPetition] = useState('initialMessage')
  const [data, setData] = useState({})
  const [degree, setDegree] = useState({ far: 0, isFh: false })
  const apiKey = '9b17d7be3dc82eaf6d86688e7d03c770';

  const url = (coord) => `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.long}&appid=${apiKey}`

  const successCb = (position) => {
    let objCoord = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    }
    fetch(url(objCoord))
      .then(res => res.json())
      .then(data=> setData(data))
    setPetition('done')
  }
  
  const errorLoc = () => setPetition('error')

  function getLocation() {
    setPetition('waiting Response')
    navigator.geolocation.getCurrentPosition(successCb, errorLoc)
  }
  
  function convertF(cs) {
    setDegree( {
      far: ((cs * 9/5) + 32).toFixed(1),
      isFh: true,
    })
  }

  function convertC() {
    setDegree(prev => ({...prev, isFh: false}))
  }

  const renderSwitch = (param) => {
    switch (param) {
      case 'error':
        return <Blocked tryAgain={getLocation} />;
      case 'waiting Response':
        return <ReactLoading
          type={"spin"}
          color={"white"}
          height={100}
          width={100} />;
      case 'done':
        return <WeatherCard
          data={data}
          clickF={convertF}
          clickC={convertC}
          degree={degree} />;
      default: 
        return <AllowLoc click={getLocation} />
    }
  }

  return (
    <main>
      {renderSwitch(petition)}
    </main>
  );
}

export default App;
