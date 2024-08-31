import React from "react";
import AppNavigation from "./components/AppNavigation";
import HomeSection from "./components/HomeSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <AppNavigation />
      </div>
      <div style={{ margin: "20px" }}>
        <HomeSection />
      </div>
      <div style={{ margin: "20px" }}>
        <AboutSection />
      </div>
      <div style={{ margin: "20px" }}>
        <SkillsSection />
      </div>
      <div style={{ margin: "20px" }}>
        <ProjectsSection />
      </div>
      <div style={{ margin: "20px" }}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
