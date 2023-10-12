import React from "react";
import "./styles";
import { FooterWrapper } from "./styles";
import logo1 from "../../assets/facebook-icon.png";
import logo2 from "../../assets/instagram.png";
import logo3 from "../../assets/twitter.png";
import logo4 from "../../assets/youtube.png";

const FooterSection = () => {
  return (
    <FooterWrapper>
      <img src={logo1} alt="" />
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
      <img src={logo4} alt="" />
    </FooterWrapper>
  );
};

export default FooterSection;
