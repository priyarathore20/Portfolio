import React from "react";
import {
  ClientCards,
  ClientDescription,
  ClientHeader,
  ClientWrapper,
} from "./styles";
import company1 from "../../assets/facebook.png";
import company2 from "../../assets/walmart.png";
import company3 from "../../assets/microsoft.png";
import company4 from "../../assets/adobe.png";

const MyClients = () => {
  return (
    <ClientWrapper id="clients">
      <ClientHeader>My clients</ClientHeader>
      <ClientDescription>
        I have had the opportunity to work with a diverse group of companies.
        some of the notable companies that i have worked with include.
      </ClientDescription>
      <ClientCards>
        <img src={company1} alt="" />
        <img src={company2} alt="" />
        <img src={company3} alt="" />
        <img src={company4} alt="" />
      </ClientCards>
    </ClientWrapper>
  );
};

export default MyClients;
