import React from 'react';
import Wrapper from '../Wrapper/Wrapper';


function AllowLoc(props) {
  return (
    <Wrapper title='Weather App'>
      <img src='./assets/location.png' alt="icon planet" />
      <p>Allow us to use your location</p>
      <span>We'll use your location to show you the weather in your area</span>
      <button onClick={props.click}>Continue</button>
    </Wrapper>
  )
}

export default AllowLoc;