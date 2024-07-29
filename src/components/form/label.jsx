const Label = (props) => {
  return(
    <label htmlFor={props.for} style={props.style}>
      {props.children}
    </label>
  )
}

export default Label;