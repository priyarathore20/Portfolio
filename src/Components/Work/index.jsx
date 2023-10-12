import React from "react";
import "./styles";
import { WorkCard, WorkCards, WorkHead, WorkText, WorkWrapper } from "./styles";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const WorkSection = () => {
  return (
    <WorkWrapper id="works">
      <WorkHead>My Portfolio</WorkHead>
      <WorkText>
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. i am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </WorkText>
      <WorkCards>
        <WorkCard>
          <img src={portfolio1} alt="" />
        </WorkCard>
        <WorkCard>
          <img src={portfolio2} alt="" />
        </WorkCard>
        <WorkCard>
          <img src={portfolio3} alt="" />
        </WorkCard>
        <WorkCard>
          <img src={portfolio4} alt="" />
        </WorkCard>
        <WorkCard>
          <img src={portfolio5} alt="" />
        </WorkCard>
        <WorkCard>
          <img src={portfolio6} alt="" />
        </WorkCard>
      </WorkCards>
      <button>See more</button>
    </WorkWrapper>
  );
};

export default WorkSection;
