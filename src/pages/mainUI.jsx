/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "../components/header";
import useWindowDimensions from "../utils/useWindowDimensions";
import { Route } from "wouter";
import { Sidebar, SidebarLink } from "../components/sidebar";

import Home from "./Home";
import Finance from "./Finance";
import BlobFiles from "./Files";


const MainUI = (props) => {
  const SIDEBAR_WIDTH_USER_DEFINED = 176;
  // eslint-disable-next-line no-unused-vars
  const { height, width } = useWindowDimensions();
  const [sidebarFlag, setSidebarFlag] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_WIDTH_USER_DEFINED);



  const sidebarOff = () => {
    setSidebarFlag(false);
    setSidebarWidth(0);
  };

  const sidebarOn = () => {
    setSidebarFlag(true);
    setSidebarWidth(SIDEBAR_WIDTH_USER_DEFINED);
  };

  const handleSidebarClick = () => {
    width <= 640 ? sidebarOff() : sidebarOn();
  }

  useEffect(() => {
    sidebarFlag ? setSidebarWidth(SIDEBAR_WIDTH_USER_DEFINED) : setSidebarWidth(0);
  }, [sidebarFlag])

  useEffect(() => {
    width < 640 ? sidebarOff() : sidebarOn();
  }, [width]);


  return (
    <>
      <Header sidebarFlag={sidebarFlag} setSidebarFlag={setSidebarFlag} width={width} />
      <div style={{
        display: "flex"
      }}>
        <Sidebar sidebarFlag={sidebarFlag} sidebarWidth={sidebarWidth}>
          <SidebarLink text="Home" href="/" onClick={() => handleSidebarClick()} />
          <SidebarLink text="Files" href="/files" onClick={() => handleSidebarClick()} />
          <SidebarLink text="Finance" href="/finance" onClick={() => handleSidebarClick()} />
         
        </Sidebar>
        <div style={{
          backgroundColor: "#fafafa",// background
          left: sidebarWidth, // wrong
          maxWidth: width <= 640 ? width : width - sidebarWidth - 50,// wrong see below as well
          minHeight: height -80,
          marginTop: "48px",
          padding: "16px",
          position: width <= 640 ? "static" : "absolute",
          width: width <= 640 ? width + 48 : width - sidebarWidth - 48
        }}>
          <Route path="/" component={Home} />
          <Route path="/files" component={BlobFiles} />

          {props.children}
        </div>
      </div>
    </>
  );
};

export default MainUI;
