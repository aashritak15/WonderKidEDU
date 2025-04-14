
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Users, BookOpen, Award } from "lucide-react";
import { useEffect } from "react";

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-blue-50 to-purple-50 py-20">
          <div className="wk-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Support Our Mission</h1>
              <p className="text-gray-700 mb-8">
                Your generous donation helps us provide essential resources, tools, and support for children with special educational needs and their families.
              </p>
              <a 
                href="https://hcb.hackclub.com/donations/start/wonder-kid-edu"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-primary px-8 py-3 text-lg inline-flex items-center"
              >
                <Heart className="mr-2" size={20} /> Donate Now
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="wk-container">
            <h2 className="section-heading text-center mb-12">Your Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="text-wonderkid-blue h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-wonderkid-blue">Educational Resources</h3>
                <p className="text-gray-600">
                  Your donation helps us develop and distribute specialized learning materials for children with diverse educational needs.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="text-wonderkid-purple h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-wonderkid-purple">Community Programs</h3>
                <p className="text-gray-600">
                  Support workshops, training sessions, and community events that bring together families, educators, and specialists.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Award className="text-wonderkid-blue h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Research & Innovation</h3>
                <p className="text-gray-600">
                  Fund research initiatives and innovative approaches to special education that can make a significant difference.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="wk-container text-center">
            <h2 className="text-3xl font-bold mb-6 text-wonderkid-blue">Ready to Make a Difference?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Your contribution will directly support our mission to provide quality educational resources and support for children with special needs.
            </p>
            <a 
              href="https://hcb.hackclub.com/donations/start/wonder-kid-edu"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary px-8 py-3 text-lg inline-flex items-center"
            >
              <Heart className="mr-2" size={20} /> Donate Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Donate;
