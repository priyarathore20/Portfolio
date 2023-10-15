import React from "react";
import "./styles";
import { WorkCard, WorkCards, WorkHead, WorkText, WorkWrapper } from "./styles";
import { data } from "../../data";

const WorkSection = () => {
  return (
    <WorkWrapper id="works">
      <WorkHead>{data.workSection.title}</WorkHead>
      <WorkText>{data.workSection.text}</WorkText>
      <WorkCards>
        {data.workSection.projects.map((item) => (
          <WorkCard color={item.color} hover={item.hover}>
            <img src={item.img} alt={item.name} />
            <section>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <div>
                <div>
                  <a href={item.git}>Github</a>
                </div>
                <div>
                  <a href={item.vercel}>View now</a>
                </div>
              </div>
            </section>
          </WorkCard>
        ))}
      </WorkCards>
    </WorkWrapper>
  );
};

export default WorkSection;
