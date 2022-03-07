
export default function Blocked(props) {
  return (
    <div className='Card'>
      <h1 className="Card_title">Oopss...</h1>
      <img className="Card_img" src='./assets/attention.png' alt="logo" />
      <span className="Card_markUp">We couldn't access your location.</span>
      <p className="Card_text">Please enable location access for this app in your browser settings and try again</p>
      <button className='Card_button' onClick={props.tryAgain}>Try again</button>
    </div>
  )
}
