import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/learn/SearchBar";
import CategoryFilter from "../components/learn/CategoryFilter";
import ResourceCard from "../components/learn/ResourceCard";
import { allResources } from "../data/learningResources";

const Learn = () => {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedResources, setDisplayedResources] = useState(allResources);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = allResources;
    
    if (activeCategory !== "All Resources") {
      filtered = filtered.filter(resource => resource.category === activeCategory);
    }
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.category.toLowerCase().includes(query)
      );
    }
    
    setDisplayedResources(filtered);
  }, [activeCategory, searchQuery]);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, displayedResources.length));
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-blue-50 to-purple-50 py-20">
          <div className="wk-container">
            <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gradient font-['Archivo Black',_sans-serif] drop-shadow-lg" style={{textShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
                Learning Resources
              </h1>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-base md:text-lg">
                Explore our comprehensive library of resources designed to support both educators and families in creating effective learning environments for children with special needs.
              </p>
              <CategoryFilter 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </div>
        </section>
        
        {displayedResources.length === 0 ? (
          <section className="py-16">
            <div className="wk-container text-center">
              <h2 className="text-2xl font-semibold mb-4">No resources found</h2>
              <p className="text-gray-600">Try adjusting your search or category filters.</p>
            </div>
          </section>
        ) : (
          <section className="py-16">
            <div className="wk-container">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedResources.slice(0, visibleCount).map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
              
              {visibleCount < displayedResources.length && (
                <div className="text-center mt-12">
                  <button 
                    className="btn-outline"
                    onClick={handleLoadMore}
                  >
                    Load More Resources
                  </button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Learn;
