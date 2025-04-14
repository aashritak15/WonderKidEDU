import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="wk-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/uploads/c10e6a63-3cef-4842-b5be-0ca4e0fcab05.png" 
                alt="Wonder Kid EDU" 
                className="h-10 w-auto" 
              />
              <span className="font-bold text-wonderkid-blue">Wonder Kid EDU</span>
            </div>
            <p className="text-gray-600 text-sm">
              Supporting special education success with guidance and tools to nurture every learner.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/wonderkidedu" target="_blank" rel="noopener noreferrer" className="text-wonderkid-blue hover:text-wonderkid-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@wonderkidedu.org" className="text-wonderkid-blue hover:text-wonderkid-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-wonderkid-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-600 hover:text-wonderkid-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-gray-600 hover:text-wonderkid-blue transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <a 
                  href="https://hcb.hackclub.com/donations/start/wonder-kid-edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-wonderkid-blue transition-colors"
                >
                  Donate Now
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.pbis.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-wonderkid-blue transition-colors"
                >
                  PBIS
                </a>
              </li>
              <li>
                <a 
                  href="https://www.autismspeaks.org/resource-guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-wonderkid-blue transition-colors"
                >
                  Autism Speaks Resource Guide
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">Email: contact@wonderkidedu.org</p>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Wonder Kid EDU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
