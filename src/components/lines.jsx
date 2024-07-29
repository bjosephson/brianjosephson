import theme from "../styles/theme";

const HR = ({ color, style }) => {
  return (
    <hr style={{
      borderWidth: ".5px",
      borderBottom: "none",
      borderTop: `.5px solid ${color ?? theme.colors.text}`,
      margin:0,
      marginBottom: ".5rem",
      ...style
    }} />
  );
};

export {
  HR
}