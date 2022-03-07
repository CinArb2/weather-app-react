
export default function WeatherCard({ data, clickF, clickC, degree}) {
  
  const celsius = data.main?.temp - 273.15;
  
  return (
    <div className="Card">
      <h1 className="Card_city">{data.name}, {data.sys?.country}</h1>
      <h2 className="Card_temperature">{ degree.isFh ? degree.far : celsius.toFixed(1)} </h2>
      <div className="Card_box-btn-temperature">
        <button className={`Card_btn-temperature  ${degree.isFh ? '' :'active'}`} onClick={clickC}>C</button>
        <button className={`Card_btn-temperature  ${degree.isFh ? 'active' : ''}`} onClick={ () => clickF(celsius)}>F</button>
      </div>
      <img src={`./assets/${data.weather?.[0].icon}.png`} alt="logo" className="Card_icon-weather"/>
      <span className="Card_weather-states">{data.weather?.[0].description}</span>
      <div className="Card_temp-info">
        <div className="Card_box Card_box-wind">
          <p>Wind:</p>
          <span>{data.wind?.speed} m/s</span>
        </div>
        <div className="Card_box Card_box-hum">
          <p>Hum:</p>
          <span>{data.main?.humidity} %</span>
        </div>
      </div>
    </div>
  )
}