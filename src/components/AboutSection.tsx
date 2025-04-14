import { Book, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="wk-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Mission & Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Originally established as a no-cost tutoring organization, we have now expanded our mission to focus not only on academic success but also on creating an inclusive environment for children with special needs. Recognizing the challenges faced by these children and their families, we are committed to provide tailored programs and services that aim to make a meaningful impact on their lives.
          </p>
        </div>
        
        <div className="bg-blue-50 py-12 px-8 rounded-xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-wonderkid-blue">Our Goals</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Book className="text-wonderkid-blue h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-wonderkid-blue">Accessible Learning Resources</h4>
              <p className="text-gray-600">
                Develop and distribute educational materials tailored to diverse learning needs, ensuring every child has access to quality resources.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-wonderkid-purple h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-wonderkid-purple">Increase Community Engagement</h4>
              <p className="text-gray-600">
                Build a supportive network of educators, parents, and advocates dedicated to advancing inclusive education practices.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="text-wonderkid-blue h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gradient">Expert-led Learning Initiatives</h4>
              <p className="text-gray-600">
                Partner with specialized educators and professionals to create evidence-based programs that support various learning styles.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-wonderkid-blue">Who We Are</h3>
            <p className="text-gray-600 mb-4">
              Wonder Kid EDU is a non-profit organization dedicated to supporting children with special educational needs and their families. Our team consists of educators, specialists, and passionate advocates committed to creating a more inclusive learning environment.
            </p>
            <p className="text-gray-600">
              We believe that every child deserves access to quality education that addresses their unique learning style. Through our resources, tools, and community support, we aim to empower both educators and families.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-wonderkid-purple">Our Impact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white rounded-full p-1 mr-3 mt-1">
                  <div className="bg-wk-gradient w-4 h-4 rounded-full"></div>
                </div>
                <span>172+ Hours of live tutoring</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white rounded-full p-1 mr-3 mt-1">
                  <div className="bg-wk-gradient w-4 h-4 rounded-full"></div>
                </div>
                <span>102+ student signups</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white rounded-full p-1 mr-3 mt-1">
                  <div className="bg-wk-gradient w-4 h-4 rounded-full"></div>
                </div>
                <span>6+ Community Projects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
