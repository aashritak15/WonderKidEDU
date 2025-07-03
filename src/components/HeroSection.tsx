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
    className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-300 rounded-full filter blur-[120px]"
    style={{ opacity: 0.5 }}
  ></div>


  <div
    className="absolute top-[-180px] right-[-200px] w-[500px] h-[500px] bg-blue-200 rounded-full filter blur-[120px]"
    style={{ opacity: 0.7 }}
  ></div>

 
  <div
    className="absolute bottom-[-180px] left-[-200px] w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-[120px]"
    style={{ opacity: 0.7 }}
  ></div>


  <div
    className="absolute bottom-[-200px] right-[-180px] w-[500px] h-[500px] bg-purple-200 rounded-full filter blur-[120px]"
    style={{ opacity: 0.5 }}
  ></div>
</div>




     
<div className="wk-container z-10 pt-16 bg-transparent">
  <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
    
  
    <div className="text-center lg:text-left max-w-3xl flex-1">
      <h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg animate-fadeIn"
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          textShadow: "0 2px 16px rgba(0,0,0,0.08)",
        }}
      >
        Welcome to{" "}
        <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-purple-400 bg-clip-text text-transparent">
          Wonder Kid EDU
        </span>
      </h1>

      <div className="text-xl md:text-2xl text-black-700 mb-8 h-8">
        <TypewriterEffect texts={typewriterTexts} />
      </div>

      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <button onClick={scrollToAbout} className="btn-primary">
          About Us
        </button>
        <Link to="/learn" className="btn-outline">
          Start Learning →
        </Link>
      </div>

      <div className="mt-20 animate-float hidden lg:block">
        <button
          onClick={scrollToAbout}
          className="text-wonderkid-blue hover:text-wonderkid-purple transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </div>

   
    <div className="flex-1 mt-[-40px] md:mt-[-60px] lg:mt-[-80px]">
      <img
        src="/uploads/7921926.png"
        alt="Illustration of student working"
        className="w-full max-w-md mx-auto animate-fadeIn"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default HeroSection;
