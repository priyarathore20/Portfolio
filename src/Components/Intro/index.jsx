import React from "react";
import "./styles";
import {
  Intro,
  IntroContent,
  IntroImg,
  IntroPara,
  IntroText,
  IntroWrapper,
} from "./styles";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";

const IntroSection = () => {
  return (
    <IntroWrapper id="intro">
      <IntroContent>
        <Intro>Hello,</Intro>
        <IntroText>
          I'm <span>Priya</span>
          <br /> Website Designer
          <IntroPara>
            I'm a skilled web designer with experience in creating visually
            appealing and user friendly websites. <br />
            <a href="www.youtube.com">
              <button>
                <img src={btnImg} alt="" /> Hire me
              </button>
            </a>
          </IntroPara>
        </IntroText>
      </IntroContent>
      <IntroImg src={bg} />
    </IntroWrapper>
  );
};

export default IntroSection;
