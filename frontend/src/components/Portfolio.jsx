import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import LongFormPortfolio from "./LongFormPortfolio";
import ShortFormPortfolio from "./ShortFormPortfolio";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import { mockData } from "../data/mockData";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
          <p className="text-gray-300">Preparing amazing content...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Hero data={mockData.hero} />
      <About data={mockData.about} />
      <LongFormPortfolio data={mockData.longFormVideos} />
      <ShortFormPortfolio data={mockData.shortFormVideos} />
      <Skills data={mockData.skills} />
      <Testimonials data={mockData.testimonials} />
      <Contact data={mockData.contact} />
      <Footer data={mockData.social} />
    </div>
  );
};

export default Portfolio;