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
                  <span>Github link :- </span>
                  <a href={item.git}>Click here</a>
                </div>
                <div>
                  <span>deployed link :- </span>
                  <a href={item.vercel}>Click here</a>
                </div>
              </div>
            </section>
          </WorkCard>
        ))}
      </WorkCards>
      <button>See more</button>
    </WorkWrapper>
  );
};

export default WorkSection;
