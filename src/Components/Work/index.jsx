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

const WorkSection = ({ title, description, data }) => {
  return (
    <WorkWrapper id="works">
      <WorkHead>{title}</WorkHead>
      <WorkText>{description}</WorkText>
      <WorkCards>
        {data.map((item) => (
          <WorkCard color={item.color} hover={item.hover}>
            <WorkCardImg>
              <img src={item.img} alt={item.name} />
            </WorkCardImg>
            <WorkCardDetails>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <WorkCardActions>
                {item?.git && (
                  <div>
                    <a href={item.git} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </div>
                )}
                <div>
                  <a href={item.vercel} target="_blank" rel="noreferrer">
                    View now
                  </a>
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
