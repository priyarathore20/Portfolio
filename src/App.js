import React from "react";
import Navbar from "./Components/Navbar/Index";
import IntroSection from "./Components/Intro";
import WorkSection from "./Components/Work";
import MyClients from "./Components/Skills";
import ContactSection from "./Components/Contact";
import FooterSection from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <MyClients />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
