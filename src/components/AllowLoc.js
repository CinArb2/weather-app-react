
export default function AllowLoc(props) {
  return (
    <div className='Card'>
      <h1 className="Card_title">Weather App</h1>
      <img className="Card_img" src='./assets/location.png' alt="icon planet" />
      <span className="Card_markUp">Allow us to use your location</span>
      <p className="Card_text">We'll use your location to show you the weather in your area</p>
      <button className='Card_button' onClick={props.click}>Continue</button>
    </div>
  )
}
