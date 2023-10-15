import React from "react";
import {
  ClientCard,
  ClientCards,
  ClientDescription,
  ClientHeader,
  ClientWrapper,
} from "./styles";
import company1 from "../../assets/facebook.png";
import company2 from "../../assets/walmart.png";
import company3 from "../../assets/microsoft.png";
import company4 from "../../assets/adobe.png";
import { data } from "../../data";

const MyClients = () => {
  return (
    <ClientWrapper id="skills">
      <ClientHeader>{data.skillSection.title}</ClientHeader>
      {data.skillSection.text && (
        <ClientDescription>{data.skillSection.text}</ClientDescription>
      )}
      <ClientCards>
        {data.skillSection.skills.map((item) => {
          return (
            <ClientCard>
              <img src={item.img} alt={item.label} />
              <p>{item.label}</p>
            </ClientCard>
          );
        })}
      </ClientCards>
    </ClientWrapper>
  );
};

export default MyClients;
