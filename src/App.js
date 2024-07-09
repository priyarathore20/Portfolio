import React from "react";
import Navbar from "./Components/Navbar/Index";
import IntroSection from "./Components/Intro";
import WorkSection from "./Components/Work";
import MyClients from "./Components/Skills";
import ContactSection from "./Components/Contact";
import FooterSection from "./Components/Footer";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <MyClients />
      <WorkSection
        title={data?.workSection?.title}
        description={data?.workSection?.description}
        data={data?.workSection?.projects || []}
      />
      <WorkSection
        title={data?.projectsSection?.title}
        description={data?.projectsSection?.description}
        data={data?.projectsSection?.projects || []}
      />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
