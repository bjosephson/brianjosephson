import React, { useState } from "react";
import { Link } from 'wouter';
import theme from "../styles/theme";

const Sidebar = (props) => {

  let SidebarShow;
  if (props && props.sidebarFlag) {
    SidebarShow = (
      <div style={{
        backgroundColor: "white",
        minHeight: '100vh',
        position: 'fixed',
        top: '56px',
        left: "0",
        width: props.sidebarWidth,
        zIndex: '2'
      }}>
        {props.children}
      </div>
    );
  } else {
    SidebarShow = null;
  }
  return SidebarShow;

};

const SidebarLink = (props) => {
  const [ linkColor, setLinkColor ] = useState(theme.colors.text);
  return (
    <Link href={props.href} onClick={props.onClick} >
      <div 
      style={{
        cursor: "pointer",
        padding: "4px",
        width: "100%"

      }}>
        <h2
        
        style={{
          color: linkColor,
          fontFamily: 'Lexend Deca',
          fontSize: '1rem',
          fontWeight: '200',
        }}
        >
          {props.text}
        </h2>
      </div>
    </Link>
  );
};

export { Sidebar, SidebarLink };