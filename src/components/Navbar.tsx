
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="wk-container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/uploads/c10e6a63-3cef-4842-b5be-0ca4e0fcab05.png" 
            alt="Wonder Kid EDU" 
            className="h-12 w-auto" 
          />
          <span className="font-bold text-wonderkid-blue">Wonder Kid EDU</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavLinkClick("home")} 
            className="nav-link"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavLinkClick("about")} 
            className="nav-link"
          >
            About
          </button>
          <Link to="/learn" className="nav-link">
            Learn
          </Link>
          <a href="https://hcb.hackclub.com/donations/start/wonder-kid-edu" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn-primary">
            Donate Now
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-wonderkid-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavLinkClick("home")} 
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavLinkClick("about")} 
              className="nav-link"
            >
              About
            </button>
            <Link to="/learn" className="nav-link">
              Learn
            </Link>
            <a href="https://hcb.hackclub.com/donations/start/wonder-kid-edu" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn-primary w-full text-center">
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
