import React from "react";
import "./styles";
import {
  DesktopMenu,
  DesktopMenuBtn,
  NavbarWrapper,
  BurgerMenu,
} from "./styles";
import Logo from "../../assets/logo.png";
import ContactImg from "../../assets/contact.png";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper color="red">
        <img src={Logo} alt="" />
        <DesktopMenu>
          <a href="#intro">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#works">Projects</a>
        </DesktopMenu>
        <DesktopMenuBtn>
          <a href="#contact">
            <img src={ContactImg} alt="" />
            Contact me{" "}
          </a>
        </DesktopMenuBtn>
      </NavbarWrapper>
      <BurgerMenu>
        <AiOutlineClose />
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#works">Projects</a>
      </BurgerMenu>
    </>
  );
};

export default Navbar;
