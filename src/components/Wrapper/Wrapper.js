import './Wrapper.css';

function Wrapper(props) {
  return (
    <div className="wrapper">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default Wrapper;