
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from "lucide-react";
import type { Resource } from '../../data/learningResources';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Link 
      to={`/learn/${resource.id}`}
      className="card group overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-wonderkid-purple">{resource.category}</span>
          <span className="text-sm text-gray-500 flex items-center">
            <Clock size={14} className="mr-1" /> {resource.time}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{resource.title}</h3>
        <p className="text-gray-600 line-clamp-3">
          {resource.title}
        </p>
      </div>
    </Link>
  );
};

export default ResourceCard;
