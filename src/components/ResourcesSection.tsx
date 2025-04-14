
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "PBIS Resources",
      description: "Access tools and strategies for Positive Behavioral Interventions and Supports.",
      url: "https://www.pbis.org/",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Autism Speaks Resource Guide",
      description: "Comprehensive resources and support for families affected by autism.",
      url: "https://www.autismspeaks.org/resource-guide",
      image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Special Education Toolkit",
      description: "Essential tools and resources for special education teachers and parents.",
      url: "https://www.autismspeaks.org/tool-kit",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
  ];

  return (
    <section id="resources" className="py-24 bg-gray-50">
      <div className="wk-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Resources</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our collection of curated resources designed to support special education success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-wonderkid-blue">{resource.title}</h3>
                  <ExternalLink className="text-wonderkid-purple opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </div>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/learn" className="btn-primary">
            Explore All Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
