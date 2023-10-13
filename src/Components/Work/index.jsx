import React from "react";
import "./styles";
import { WorkCard, WorkCards, WorkHead, WorkText, WorkWrapper } from "./styles";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";
import { data } from "../../data";

const WorkSection = () => {
  return (
    <WorkWrapper id="works">
      <WorkHead>{data.workSection.title}</WorkHead>
      <WorkText>{data.workSection.text}</WorkText>
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
