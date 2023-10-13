import React from "react";
import "./styles";
import { DesktopMenu, DesktopMenuBtn, NavbarWrapper } from "./styles";
import Logo from "../../assets/logo.png";
import ContactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <NavbarWrapper color="red">
      <div></div>
      <DesktopMenu>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Clients</a>
      </DesktopMenu>
      <DesktopMenuBtn>
        <img src={ContactImg} alt="" />
        Contact me
      </DesktopMenuBtn>
    </NavbarWrapper>
  );
};

export default Navbar;
