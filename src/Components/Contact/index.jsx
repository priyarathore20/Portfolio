import React from "react";
import {
  ContactFormWrapper,
  ContactHead,
  ContactText,
  ContactForm,
} from "./styles";

const ContactSection = () => {
  return (
    <ContactFormWrapper>
      <ContactHead>Contact Me</ContactHead>
      <ContactText>
        Please fill out the form below to discuss any work opportunity.
      </ContactText>
      <ContactForm>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Message" />
      </ContactForm>
      <button>Submit</button>
    </ContactFormWrapper>
  );
};

export default ContactSection;
