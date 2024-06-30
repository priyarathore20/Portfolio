import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import IntroSection from "../components/Intro";
import Navbar from "../components/Navbar";
import MyClients from "../components/Skills";
import WorkSection from "../components/Works";

export default function Home() {
  return (
    <main>
       <Navbar />
      <IntroSection />
      <MyClients />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
