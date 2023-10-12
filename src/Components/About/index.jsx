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
import appDesign from "../../assets/app-design.png";
import webDesign from "../../assets/website-design.png";

const AboutSection = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>What I do</AboutHeader>
      <AboutPara>
        i am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. i have a strong
        understanding of design and a keen eye for detail. i am proficient in
        HTML, CSS and Javascript, as well as design software such as adobe
        photoshop and illustrator.
      </AboutPara>
      <AboutCards>
        <AboutCard>
          <img src={uiDesign} alt="" />
          <AboutText>
            <h2>UI/UX Design</h2>
            <p>This is a demo text. You can write your own content here.</p>
          </AboutText>
        </AboutCard>
        <AboutCard>
          <img src={webDesign} alt="" />
          <AboutText>
            <h2>Website Design</h2>
            <p>This is a demo text. You can write your own content here.</p>
          </AboutText>
        </AboutCard>
        <AboutCard>
          <img src={appDesign} alt="" />
          <AboutText>
            <h2>App Design</h2>
            <p>This is a demo text. You can write your own content here.</p>
          </AboutText>
        </AboutCard>
      </AboutCards>
    </AboutWrapper>
  );
};

export default AboutSection;
