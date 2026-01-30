
import ValuesSection from "./components/ValuesSection"
import HeroSection from "./components/Herosection"
import AboutSection from "./components/Aboutsection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection/>

    <AboutSection />
      <SkillsSection />
      <ProjectsSection />
       <ValuesSection/>

      <ContactSection />
     
      <Footer/>
    </>
  )
}
