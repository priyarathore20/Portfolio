import React from "react";
import "./styles.js";
import {
  AboutWrapper,
  AboutHeader,
  AboutPara,
  AboutCards,
  AboutCard,
  AboutText,
} from "./styles.js";
import uiDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import { data } from "../../data.js";

const AboutSection = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>{data.aboutSection.title}</AboutHeader>
      <AboutPara>{data.aboutSection.description}</AboutPara>
      <AboutCards>
        <AboutCard>
          <img src={uiDesign} alt="" />
          <AboutText>
            <h2>{data.aboutSection.card1.title}</h2>
            <p>{data.aboutSection.card1.text}</p>
          </AboutText>
        </AboutCard>
        <AboutCard>
          <img src={webDesign} alt="" />
          <AboutText>
            <h2>{data.aboutSection.card2.title}</h2>
            <p>{data.aboutSection.card2.text}</p>
          </AboutText>
        </AboutCard>
      </AboutCards>
    </AboutWrapper>
  );
};

export default AboutSection;
