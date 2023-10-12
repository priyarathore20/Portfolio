import React from "react";
import Navbar from "./Components/Navbar/Index";
import IntroSection from "./Components/Intro";
import AboutSection from "./Components/About";
import WorkSection from "./Components/Work";
import MyClients from "./Components/Clients";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <WorkSection />
      <MyClients />
    </div>
  );
}

export default App;
