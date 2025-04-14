
import TypewriterEffect from "./TypewriterEffect";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const typewriterTexts = [
    "Your partner in special education success.",
    "Guidance and tools to nurture every learner.",
    "Insightful support for every learning style.",
    "Creating inclusive classrooms, one step at a time."
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-animated relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-purple-50/70"></div>
      <div className="wk-container text-center z-10 pt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Welcome to <span className="text-gradient">Wonder Kid EDU</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-700 mb-8 h-8">
            <TypewriterEffect texts={typewriterTexts} />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeIn" style={{animationDelay: "0.2s"}}>
            <button onClick={scrollToAbout} className="btn-primary">
              About Us
            </button>
            <Link to="/learn" className="btn-outline">
              Start Learning →
            </Link>
          </div>
          
          <div className="mt-24 animate-float">
            <button 
              onClick={scrollToAbout}
              className="text-wonderkid-blue hover:text-wonderkid-purple transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
