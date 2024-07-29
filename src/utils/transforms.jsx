const useGrow = (event) => {
  if (event.type === "mouseenter") {
    event.target.style.transform = "scale(1.05)";
    event.target.style.transition = "transform 0.3s "; // Add a transition
  } else if (event.type === "mouseleave") {
    event.target.style.transform = "scale(1)";
    event.target.style.transition = "transform 0.3s ease"; // Add a transition
  }
};

export  {
  useGrow
}