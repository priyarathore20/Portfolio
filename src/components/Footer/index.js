"use client"
import React from "react";
import "./styles";
import { FooterWrapper } from "./styles";
import { data } from "../../data";

const FooterSection = () => {
  return (
    <FooterWrapper>
      {data.footer.map((item, index) => (
        <a href={item.href} target="_blank" rel="noreferrer" key={index}>
          <img src={item.img.src} alt={item.img} />
        </a>
      ))}
    </FooterWrapper>
  );
};

export default FooterSection;
