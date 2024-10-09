import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing dependencies
import './index.css';
import logo from './assets/courtier.svg'; // Import the logo
import { Header } from './components/Header'; // Separate Header into its own component
import BlogSection from './blog/pages/blogSection'; // Import BlogSection for fetching from Sanity
import BlogPost from './blog/pages/blogPost'; // Import BlogPost for displaying individual blog posts

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <main className="min-h-screen bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-800 text-white flex flex-col items-center">
              <div className="container mx-auto px-4 pt-20 text-center">
                <img src={logo} alt="Courtier Logo" className="w-40 mx-auto mb-8" />
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
                  The Courtier: Your Insightful Diplomat
                </h1>
                <div className="relative overflow-hidden whitespace-nowrap border-white pr-2">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-10 inline-block">
                    History, Art, Diplomacy, International Relations and many more...
                  </h2>
                </div>
                <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
                  Discover amazing insights with me, as I explore various perspectives and ideologies through the lens of a curious diplomat.
                </p>
                <div className="flex-grow border-t border-gray-400 w-full"></div>
              </div>
              {/* Blog Section Component */}
              <BlogSection />
            </main>
          } 
        />

        {/* Blog Post Route */}
        <Route path="/blog/:slug" element={<BlogPost />} /> {/* Dynamic route for individual blog posts */}
        
        {/* Sanity Studio Route */}
        
      </Routes>
    </Router>
  );
}
