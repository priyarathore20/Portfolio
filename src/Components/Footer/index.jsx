import React from "react";
import "./styles";
import { FooterWrapper } from "./styles";
import { data } from "../../data";

const FooterSection = () => {
  return (
    <FooterWrapper>
      {data.footer.map((item) => (
        <a href={item.href} target="_blank" rel="noreferrer">
          <img src={item.img} alt={item.img} />
        </a>
      ))}
    </FooterWrapper>
  );
};

export default FooterSection;
