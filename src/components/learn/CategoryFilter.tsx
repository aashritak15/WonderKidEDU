
import React from 'react';
import { categories } from '../../data/learningResources';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category, index) => (
        <button 
          key={index}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            category === activeCategory 
              ? "bg-wk-gradient text-white" 
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
