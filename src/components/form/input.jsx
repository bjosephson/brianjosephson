/* eslint-disable react/prop-types */
import theme from '../../styles/theme';



const Input = (props) => {
  const style = {
    "checkbox": {
      borderRadius: "3px",
      width: "1.6em",
      height: "1.6em",
      border: "0.15em solid",
      outline: "none",
      cursor: "pointer",
    },
    "default": {
      appearance: 'none',
      borderRadius: '3px',
      border: '1px solid',
      borderColor: theme.colors.text,
      color: theme.colors.text,
      outline: 'none',
      padding: props.style && props.style.padding ? props.style.padding : '.5rem',
    }, 
    "radio": {

    },
    "range": {

    },
    "text": {
      appearance: 'none',
      borderRadius: '3px',
      border: '1px solid',
      borderColor: theme.colors.text,
      color: theme.colors.text,
      margin: props.m ?  props.m : ".5rem",
      outline: 'none',
      padding: props.style && props.style.padding ? props.style.padding : '.5rem',
    }
  };

  return (
    <input 
      checked={props.checked || false}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      style={style[props.type] || style.default}
      type={props.type || "none"}
      value={props.value || ""}
    />
  );
};

export default Input;