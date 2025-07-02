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
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
>
  
<div className="absolute inset-0 pointer-events-none z-0">
 
  <div
    className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-300 rounded-full filter blur-[100px]"
    style={{ opacity: 0.7 }}
  ></div>


  <div
    className="absolute bottom-[-150px] right-[-180px] w-[500px] h-[500px] bg-blue-200 rounded-full filter blur-[100px]"
    style={{ opacity: 0.7 }}
  ></div>
</div>



      <div className="wk-container text-center z-10 pt-16 bg-transparent">
        <div className="max-w-3xl mx-auto">
            <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-fadeIn"
            style={{
              fontFamily: "'Fontin Sans', sans-serif",
              textShadow: "0 2px 16px rgba(0,0,0,0.08)",
            }}
          >
            Welcome to <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-purple-400 bg-clip-text text-transparent">Wonder Kid EDU</span>
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
