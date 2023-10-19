import React from "react";
import "./styles";
import {
  WorkCard,
  WorkCardActions,
  WorkCardDetails,
  WorkCardImg,
  WorkCards,
  WorkHead,
  WorkText,
  WorkWrapper,
} from "./styles";
import { data } from "../../data";

const WorkSection = () => {
  return (
    <WorkWrapper id="works">
      <WorkHead>{data.workSection.title}</WorkHead>
      <WorkText>{data.workSection.text}</WorkText>
      <WorkCards>
        {data.workSection.projects.map((item) => (
          <WorkCard color={item.color} hover={item.hover}>
            <WorkCardImg>
              <img src={item.img} alt={item.name} />
            </WorkCardImg>
            <WorkCardDetails>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <WorkCardActions>
                <div>
                  <a href={item.git}>Github</a>
                </div>
                <div>
                  <a href={item.vercel}>View now</a>
                </div>
              </WorkCardActions>
            </WorkCardDetails>
          </WorkCard>
        ))}
      </WorkCards>
    </WorkWrapper>
  );
};

export default WorkSection;
