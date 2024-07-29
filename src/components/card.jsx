import theme from "../styles/theme";
import { useGrow } from "../utils/transforms";

const Card = ({ children, distance, style, width,}) => {
  const cardStyle = {
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
    style={ cardStyle } 
    onMouseEnter={(e) => useGrow(e)}
    onMouseLeave={(e) => useGrow(e)}
    >
      { children }
    </div>
  );
};

export default Card;