
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allResources } from "../data/learningResources";

const Article = () => {
  const { id } = useParams();
  const article = allResources.find(r => r.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article className="wk-container py-16 max-w-4xl mx-auto">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.time}</span>
          </div>
          <h1 className="text-4xl font-bold mb-8 text-gray-900">{article.title}</h1>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
