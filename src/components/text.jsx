import theme from "../styles/theme";

const Text = ({ children, color, fontSize, style, ...props }) => {
  const textStyle = {
    color: color ? theme.colors[color] : theme.colors.text,
    fontFamily: "Lexend Deca",
    fontSize: fontSize ? theme.fontSizes[fontSize]: theme.fontSizes.md,
    fontWeight: 300,
    ...style
  };

  return(
    <p style={ textStyle } {...props}> 
      { children }
    </p>
  );
};

const Heading = ({ children, color, size, style }) => {
  const headingStyle = {
    color: color ? theme.colors[color] : theme.colors.text,
    fontFamily: "Inter",
    fontWeight: 800,
    ...style
  };

  let SizedHeading;

  switch ( size ) {
    case "h1":
      SizedHeading = (
        <h1 style={headingStyle}>
          { children }
        </h1>
      );
      break;

      case "h2":
        SizedHeading = (
          <h2 style={headingStyle}>
            { children }
          </h2>
        );
      break;
      
      case "h3":
        SizedHeading = (
          <h3 style={{
            ...headingStyle, 
            fontSize: "1rem", 
            fontWeight: 700
          }}>
            { children }
          </h3>
        );
      break;
      
      case "h4":
        SizedHeading = (
          <h4 style={{
            ...headingStyle, 
            fontSize: ".75rem", 
            fontWeight: 700
          }}>
            { children }
          </h4>
        );
      break;
      
      case "h5":
        SizedHeading = (
          <h5 style={{...headingStyle, fontSize: ".8rem"}}>
            { children }
          </h5>
        );
      break;
      
      case "h6":
        SizedHeading = (
          <h6 style={headingStyle}>
            { children }
          </h6>
        );
      break;
      default:
        SizedHeading = (
          <h1 style={headingStyle}>
            { children }
          </h1>
        );
        break;
  }

  return SizedHeading;
}


export {
  Heading,
  Text
}