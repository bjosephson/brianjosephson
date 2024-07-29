import { useState } from "react";
import { Box, Text } from "./";
import { BsInfoCircle } from "react-icons/bs";

const Tooltip = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    let display = "none";
    show ? display = "inline-block" : "none"
    return display;
  }
  return (
    <Box>
      <BsInfoCircle
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      <Box style ={{
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: "5px",
        display: handleShow(),
        position: "absolute",
        padding: "8px",
        zIndex: 5
      }}
      >
        <Text color="light">
          {props.children}
        </Text>
      </Box>
    </Box>
  );
};

export default Tooltip;