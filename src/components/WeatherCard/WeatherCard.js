import './WeatherCard.css';

export default function WeatherCard({ data, clickF, clickC, degree}) {
  
  const celsius = data.main?.temp - 273.15;
  
  return (
    <div className="weather-card">
      <h1 className="city">{data.name}, {data.sys?.country}</h1>
      <h2 className="temperature">{ degree.isFh ? degree.far : celsius.toFixed(1)} </h2>
      <div className="box-btn-temperature">
        <button className={`btn-temperature  ${degree.isFh ? '' :'active'}`} onClick={clickC}>C</button>
        <button className={`btn-temperature  ${degree.isFh ? 'active' : ''}`} onClick={ () => clickF(celsius)}>F</button>
      </div>
      <div className="icon_weather-box">
        <img src={`./assets/${data.weather?.[0].icon}.png`} alt="logo" className="icon_weather"/>
      </div>
      <span className="weather_states">{data.weather?.[0].description}</span>
      <div className="temp_info">
        <div className="box wind">
          <p>Wind</p>
          <span>{data.wind?.speed} m/s</span>
        </div>
        <div className="box hum">
          <p>Hum</p>
          <span>{data.main?.humidity} %</span>
        </div>
      </div>
    </div>
  )
}