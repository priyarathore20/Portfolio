import React from "react";
import {
  ContactFormWrapper,
  ContactHead,
  ContactText,
  ContactForm,
} from "./styles";

const ContactSection = () => {
  return (
    <ContactFormWrapper id="contact">
      <ContactHead>Contact Me</ContactHead>
      <ContactText>
        Please fill out the form below to discuss any work opportunity.
      </ContactText>
      <ContactForm>
        <input type="text" required placeholder="Your name" />
        <input type="email" required placeholder="Your Email" />
        <textarea type="text" placeholder="Message" rows={5} />
      </ContactForm>
      <button>Submit</button>
    </ContactFormWrapper>
  );
};

export default ContactSection;
