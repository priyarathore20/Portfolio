import React from "react";
import "./styles.js";
import { AboutWrapper, AboutHeader, AboutPara, AboutCards } from "./styles.js";

const AboutSection = () => {
  return (
    <AboutWrapper>
      <AboutHeader>What I do</AboutHeader>
      <AboutPara>
        i am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. i have a strong
        understanding of design and a keen eye for detail. i am proficient in
        HTML, CSS and Javascript, as well as design software such as adobe
        photoshop and illustrator.
      </AboutPara>
      <AboutCards></AboutCards>
    </AboutWrapper>
  );
};

export default AboutSection;
