"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CommonHeader from "@/components/Common/CommonHeader";
import Deliver from "@/components/Deliver";
import DownloadOurApp from "@/components/DownloadOurApp";
import Subscribe from "@/components/Subscribe";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Smart Shopping: How to Grocery Shop on a Budget",
      excerpt:
        "Grocery shopping can quickly become expensive if you don't plan ahead. But with a few smart strategies, you can save money without sacrificing quality.",
      image: "/blogs/supermarket-blog-1.jpg",
      category: "Shopping Tips",
      date: "November 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Organic vs. Conventional: Which One Should You Buy?",
      excerpt:
        "With rising health awareness, many shoppers debate whether organic groceries are worth the extra cost. But is organic always better?",
      image: "/blogs/supermarket-blog-2.jpg",
      category: "Health & Nutrition",
      date: "November 12, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Seasonal Fruits: What's Best to Buy This Month",
      excerpt:
        "Eating seasonal fruits is not only budget-friendly but also packed with nutrients. But do you know which fruits offer the most benefits in each season?",
      image: "/blogs/supermarket-blog-3.jpg",
      category: "Fruits",
      date: "November 10, 2024",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Kitchen Storage Hacks: Keep Your Groceries Fresh Longer",
      excerpt:
        "Wasting food due to spoilage is a common problem, but proper storage can extend the shelf life of your groceries. Should tomatoes be refrigerated?",
      image: "/blogs/supermarket-blog-1.jpg",
      category: "Storage Tips",
      date: "November 8, 2024",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Must-Have Pantry Staples for Quick & Easy Meals",
      excerpt:
        "A well-stocked pantry can save you from last-minute takeout orders. But what essentials should you always keep on hand?",
      image: "/blogs/supermarket-blog-2.jpg",
      category: "Cooking",
      date: "November 5, 2024",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "The Truth About Expiry Dates: Can You Still Eat It?",
      excerpt:
        "Many people throw away food as soon as it hits the 'best before' date—but is that necessary? Not all expiry labels mean the same thing.",
      image: "/blogs/supermarket-blog-3.jpg",
      category: "Food Safety",
      date: "November 3, 2024",
      readTime: "8 min read",
    },
  ];

  const categories = [
    { name: "Fruits", count: 34 },
    { name: "Vegetables", count: 45 },
    { name: "Drinks", count: 56 },
    { name: "Bakery", count: 67 },
    { name: "Dairy & Eggs", count: 78 },
    { name: "Meat & Seafood", count: 89 },
    { name: "Health & Nutrition", count: 23 },
    { name: "Cooking", count: 41 },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "How To Make A Fresh Juice Blended For Your Health",
      date: "November 15, 2024",
      image: "/blogs/supermarket-blog-1.jpg",
    },
    {
      id: 2,
      title: "Best Organic Vegetables for Winter Season",
      date: "November 12, 2024",
      image: "/blogs/supermarket-blog-2.jpg",
    },
    {
      id: 3,
      title: "5 Tips for Storing Fresh Herbs Properly",
      date: "November 10, 2024",
      image: "/blogs/supermarket-blog-3.jpg",
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <CommonHeader
        heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
        heroTitle="Blogs"
        heroDescription="Discover the finest menus in town with Excellency."
      />
      <div className="w-full min-h-screen bg-white my-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 xl:px-28">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Blog Posts Section */}
            <motion.div
              className="lg:col-span-3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-black"
                variants={fadeInUp}
              >
                Latest Articles
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                variants={stagger}
              >
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-red-700 text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 lg:p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg lg:text-xl font-bold text-black mb-3 leading-tight group-hover:text-red-700 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <motion.button
                        className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm hover:gap-3 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
              {/* Load More Button */}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-1 space-y-8"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Search Widget */}
              <motion.div
                className="bg-rose-50 rounded-2xl p-6 shadow-sm"
                variants={fadeInUp}
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-full text-gray-700 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/20 transition-all duration-300"
                  />
                  <motion.button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>

              {/* Categories Widget */}
              <motion.div
                className="bg-rose-50 rounded-2xl p-6 shadow-sm"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-black mb-6">
                  BLOG CATEGORIES
                </h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.name}
                      className={`w-full flex justify-between items-center py-2 px-3 rounded-lg text-left transition-all duration-300 ${
                        activeCategory === category.name
                          ? "bg-red-700 text-white"
                          : "text-gray-700 hover:bg-white hover:text-red-700"
                      }`}
                      onClick={() => setActiveCategory(category.name)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Recent Posts Widget */}
              <motion.div
                className="bg-rose-50 rounded-2xl p-6 shadow-sm"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-black mb-6">
                  RECENT POSTS
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="flex gap-3 p-3 rounded-lg hover:bg-white cursor-pointer transition-all duration-300 border-b border-gray-200 last:border-b-0"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-black leading-tight mb-1 hover:text-red-700 transition-colors duration-300">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-6 text-white shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm mb-4 text-red-100">
                  Subscribe to our newsletter for the latest recipes and
                  shopping tips.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <motion.button
                    className="w-full py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </div>
      <Deliver />
      <Subscribe />
    </>
  );
};

export default Blogs;
