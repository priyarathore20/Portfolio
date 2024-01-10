import React from "react";
import "./styles";
import {
  Intro,
  IntroContent,
  IntroImg,
  IntroPara,
  IntroText,
  IntroWrapper,
  IntroButton,
} from "./styles";
import bg from "../../assets/banner-img.svg";
import btnImg from "../../assets/hireme.png";
import inImg from "../../assets/linkedin-icon.png";
import gitImg from "../../assets/github-icon.png";
import { data } from "../../data";

const IntroSection = () => {
  return (
    <IntroWrapper id="intro">
      <IntroContent>
        <IntroText>
          <Intro>{data.introSection.salutation}</Intro>
          <br />
          I'm <span>{data.introSection.name}</span>
          <br />
          {data.introSection.designation}
          <IntroPara>
            {data.introSection.description[0]}
            <br /> {data.introSection.description[1]}
            <br /> {data.introSection.description[2]}
            <br /> {data.introSection.description[3]} <br />
            <a href="#contact">
              <button>
                <img src={btnImg} alt="" /> Hire me
              </button>
            </a>
          </IntroPara>
          <IntroButton>
            <a href="https://www.linkedin.com/in/priya-rathore-46370b250/">
              <img src={inImg} alt="" />
            </a>
          </IntroButton>
          <IntroButton>
            <a href="https://github.com/priyarathore20" alt="">
              <img src={gitImg} alt="" />
            </a>
          </IntroButton>
        </IntroText>
      </IntroContent>
      <IntroImg src={bg} />
    </IntroWrapper>
  );
};

export default IntroSection;
