import Wrapper from '../Wrapper/Wrapper';

function Blocked(props) {
  return (
    <Wrapper title='Oops...'>
      <img src='./assets/attention.png' alt="logo" />
      <p>We couldn't access your location.</p>
      <span>Please enable location access for this app in your browser settings and try again</span>
      <button onClick={props.tryAgain}>Try again</button>
    </Wrapper>
  )
}

export default Blocked;