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
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import inImg from "../../assets/linkedin-icon.png";
import gitImg from "../../assets/github-icon.png";
import { data } from "../../data";

const IntroSection = () => {
  return (
    <IntroWrapper id="intro">
      <IntroContent>
        <Intro>{data.introSection.salutation}</Intro>
        <IntroText>
          I'm <span>{data.introSection.name}</span>
          <br />
          {data.introSection.designation}
          <IntroPara>
            {data.introSection.description[0]}
            <br /> {data.introSection.description[1]} <br />
            <a href="www.youtube.com">
              <button>
                <img src={btnImg} alt="" /> Hire me
              </button>
            </a>
          </IntroPara>
          <IntroButton>
            <img src={inImg} alt="" />
          </IntroButton>
          <IntroButton>
            <img src={gitImg} alt="" />
          </IntroButton>
        </IntroText>
      </IntroContent>
      <IntroImg src={bg} />
    </IntroWrapper>
  );
};

export default IntroSection;
