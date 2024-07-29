import theme from "../styles/theme";


const Float = ({ children, distance, style, width,}) => {
  const floatStyle = {
    border: '1px solid',
    borderColor: theme.colors.textMuted,
    borderRadius: '8px',
    boxShadow: distance ? theme.shadows[distance] : theme.shadows.closer,
    padding: '14px',
    margin: '10px',
    width: width ?? '300px',
    backgroundColor: theme.colors.background,
    ...style
  };

  return (
    <div 
    style={ floatStyle } 
    >
      { children }
    </div>
  );
};

export default Float;