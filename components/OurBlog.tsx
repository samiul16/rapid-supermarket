import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const OurBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Healthy Burgers You Can Make at Home",
      date: "05-06-2025",
      description:
        "Make your special day truly unforgettable with our personalized Water Lantern",
      image: "/blog/1.png",
    },
    {
      id: 2,
      title: "Quick Snacks with Fresh Ingredients",
      date: "05-06-2025",
      description:
        "Make your special day truly unforgettable with our personalized Water Lantern",
      image: "/blog/2.png",
    },
    {
      id: 3,
      title: "Secrets to Perfect Pasta Every Time",
      date: "05-06-2025",
      description:
        "Make your special day truly unforgettable with our personalized Water Lantern",
      image: "/blog/3.png",
    },
    {
      id: 4,
      title: "Mediterranean Diet Benefits",
      date: "04-06-2025",
      description:
        "Discover the amazing health benefits of Mediterranean cuisine and lifestyle",
      image: "/blog/1.png",
    },
    {
      id: 5,
      title: "Farm to Table Fresh Recipes",
      date: "03-06-2025",
      description:
        "Learn how to create delicious meals using fresh, locally sourced ingredients",
      image: "/blog/2.png",
    },
    {
      id: 6,
      title: "Seasonal Cooking Tips",
      date: "02-06-2025",
      description:
        "Master the art of cooking with seasonal ingredients for maximum flavor",
      image: "/blog/3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPosts = () => {
    const startIndex = currentIndex * postsPerPage;
    return blogPosts.slice(startIndex, startIndex + postsPerPage);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-12">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Our Blog
          </h2>
          <p className="text-gray-600 text-lg">Checkout our Latest Blog</p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
              currentIndex === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
            disabled={currentIndex === 0}
          >
            <span>←</span>
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
              currentIndex === totalPages - 1
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
            disabled={currentIndex === totalPages - 1}
          >
            <span>→</span>
          </motion.button>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
        <AnimatePresence mode="wait">
          {getCurrentPosts().map((post, index) => (
            <motion.div
              key={`${currentIndex}-${post.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-2xl border border-red-200 overflow-hidden shadow-sm hover:shadow-lg"
            >
              {/* Image */}
              <motion.div
                className="relative h-48 md:h-64 w-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  className="text-lg font-semibold text-black mb-2 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {post.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-gray-500 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {post.date}
                </motion.p>

                <motion.p
                  className="text-gray-600 text-sm mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {post.description}
                </motion.p>

                <motion.button
                  className="text-red-600 text-sm font-medium border border-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
