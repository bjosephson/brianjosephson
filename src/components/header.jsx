import React from "react";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "wouter";

const Header = (props) => {
  return (
    <div style={{
      backgroundColor: "#f5f5f5",
      borderBottom: "2px solid black",
      display: "flex",
      height: "48px",
      justifyContent: "space-between",
      left: "0",
      position: "fixed",
      paddingTop: "8px",
      top: "0",
      width: "100%",
      zIndex: "3"
    }}>
      <div style={{ cursor: "pointer" }}>
        <Link href={props.sidebarFlag ? "/" : ""} onClick={props.width <= 640 ? () => props.setSidebarFlag(!props.sidebarFlag) : null}>
          <img src="https://cdn.glitch.global/af979df1-5ef7-45ac-98d1-d52c7e09003b/RancoLogo%20for%20invoices(3)(4).png?v=1670647024481" height="34px" width="80px" />
        </Link>
      </div>
      <UserButton />
    </div>
  );
};

export default Header;