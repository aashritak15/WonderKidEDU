
import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <input 
        type="text" 
        placeholder="Search resources..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wonderkid-blue/50"
      />
      <button 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-wk-gradient text-white p-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
