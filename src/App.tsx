import AboutMeMain from "./components/aboutMeSection/AboutMeMain"
import ContactMeMain from "./components/contactMeSection/ContactMeMain"
import ExperienceMain from "./components/experienceSection/ExperienceMain"
import FooterMain from "./components/footer/FooterMain"
import HeroGradient from "./components/heroSection/HeroGradient"
import HeroMain from "./components/heroSection/HeroMain"
import NavbarMain from "./components/navbar/NavbarMain"
import ProjectsMain from "./components/projectsSection/ProjectsMain"
import SkillsMain from "./components/skilssSection/SkillsMain"
import SubSkills from "./components/skilssSection/SubSkills"
import SubHeroSection from "./components/subherosection/SubHeroSection"

function App() {

  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain/>
      <ContactMeMain/>
      <FooterMain/>
    </main>
  )
}

export default App
