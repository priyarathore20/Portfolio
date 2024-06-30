"use client";
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
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <img src={Logo.src} alt="" />
        <DesktopMenu>
          <a href="#intro">Home</a>
          <a href="#skills">Skills</a>
          <a href="#works">Projects</a>
        </DesktopMenu>
        <DesktopMenuBtn>
          <a href="#contact">
            <Image src={ContactImg} alt="" />
            Contact me{" "}
          </a>
        </DesktopMenuBtn>
        <AiOutlineMenu onClick={() => setShowNav(!showNav)} />
      </NavbarWrapper>
      <BurgerMenu showNav={showNav}>
        <Link href="#intro" onClick={() => setShowNav(false)}>
          Home
        </Link>
        <Link href="#about" onClick={() => setShowNav(false)}>
          About
        </Link>
        <Link href="#skills" onClick={() => setShowNav(false)}>
          Skills
        </Link>
        <Link href="#works" onClick={() => setShowNav(false)}>
          Projects
        </Link>
      </BurgerMenu>
    </>
  );
};

export default Navbar;
