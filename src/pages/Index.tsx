
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ResourcesSection from "../components/ResourcesSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResourcesSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
