"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CommonHeader from "@/components/Common/CommonHeader";

const BlogDetail = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    {
      id: 4,
      title: "Seasonal Fruits: What's Best This Month",
      date: "November 8, 2024",
      image: "/blogs/supermarket-blog-1.jpg",
    },
  ];

  const relatedPosts = [
    {
      id: 1,
      title: "Smart Shopping: Budget-Friendly Grocery Tips",
      excerpt:
        "Learn how to save money while shopping for quality groceries with these proven strategies and techniques.",
      date: "November 12, 2024",
      image: "/blogs/supermarket-blog-1.jpg",
    },
    {
      id: 2,
      title: "Organic vs Conventional: Making the Right Choice",
      excerpt:
        "Discover the real differences between organic and conventional produce to make informed decisions.",
      date: "November 10, 2024",
      image: "/blogs/supermarket-blog-1.jpg",
    },
    {
      id: 3,
      title: "Kitchen Storage: Keep Food Fresh Longer",
      excerpt:
        "Master the art of food storage with these professional tips to reduce waste and save money.",
      date: "November 8, 2024",
      image: "/blogs/supermarket-blog-1.jpg",
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
        heroTitle="Blog"
        heroDescription="Discover the finest menus in town with Excellency."
      />
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 py-16 lg:py-24">
            {/* Article Content */}
            <motion.article
              className="lg:col-span-3"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              {/* Featured Image */}
              <motion.div
                className="relative mb-8 lg:mb-12"
                variants={fadeInUp}
              >
                <img
                  src="/blogs/supermarket-blog-2.jpg"
                  alt="How to Save Time & Shop Smarter"
                  className="w-full h-64 sm:h-80 lg:h-[535px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>

              {/* Article Header */}
              <motion.header className="mb-8 lg:mb-12" variants={stagger}>
                {/* Meta Information */}
                <motion.div
                  className="flex flex-wrap items-center gap-4 md:gap-6 mb-6"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-2 text-gray-500">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm md:text-base">
                      November 15, 2024
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm md:text-base">
                      By Excellency Team
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm md:text-base">8 min read</span>
                  </div>

                  <motion.button
                    className="flex items-center gap-2 text-red-700 hover:text-red-800 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span className="text-sm md:text-base font-medium">
                      Share
                    </span>
                  </motion.button>
                </motion.div>

                {/* Article Title */}
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight"
                  variants={fadeInUp}
                >
                  How to Save Time & Shop Smarter
                </motion.h1>
              </motion.header>

              {/* Article Content */}
              <motion.div
                className="prose prose-lg max-w-none"
                variants={fadeInUp}
              >
                <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-6">
                  <p>
                    In our busy lives, time spent grocery shopping often feels
                    like a chore—but what if you could cut your shopping time in
                    half while spending less and avoiding stress? Rapid grocery
                    shopping isn&apos;t just about speed; it&apos;s a smart
                    system that combines planning, technology, and smart habits
                    to transform the way you shop.
                  </p>

                  <p>
                    From AI-powered shopping lists that predict what you need to
                    time-saving strategies like &quot;aisle zoning&quot; and
                    self-checkout hacks, this deep dive reveals how to optimize
                    every step of your grocery run. We&apos;ll also explore how
                    quick-delivery apps compare to in-store shopping, and why
                    batch shopping might be your new secret weapon.
                  </p>

                  <p>
                    Whether you&apos;re a working professional, a busy parent,
                    or just someone who hates crowded stores, these pro tips
                    will turn grocery shopping from a hassle into a streamlined,
                    almost effortless routine.
                  </p>

                  <div className="bg-rose-50 p-6 rounded-2xl my-8">
                    <h3 className="text-xl font-semibold text-red-700 mb-4">
                      Quick Shopping Tips:
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Create a master shopping list template</li>
                      <li>
                        • Shop during off-peak hours (early morning or late
                        evening)
                      </li>
                      <li>• Use store apps for digital coupons and deals</li>
                      <li>• Organize your list by store layout</li>
                      <li>• Consider grocery pickup or delivery services</li>
                    </ul>
                  </div>

                  <p>
                    The key to efficient grocery shopping lies in preparation
                    and consistency. By implementing these strategies,
                    you&apos;ll not only save time but also reduce impulse
                    purchases and stick to your budget more effectively.
                  </p>
                </div>
              </motion.div>

              {/* Social Share */}
              <motion.div
                className="mt-12 pt-8 border-t border-gray-200"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium">
                      Share this article:
                    </span>
                    <div className="flex gap-3">
                      {["facebook", "twitter", "linkedin"].map((platform) => (
                        <motion.button
                          key={platform}
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Published on November 15, 2024
                  </div>
                </div>
              </motion.div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-1 space-y-8"
              variants={fadeInRight}
              initial="initial"
              animate="animate"
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

              {/* Recent Posts Widget */}
              <motion.div
                className="bg-rose-50 rounded-2xl shadow-sm overflow-hidden"
                variants={fadeInUp}
              >
                <div className="bg-rose-100 px-6 py-4 border-b border-rose-200">
                  <h3 className="text-lg font-semibold text-black">
                    RECENT POSTS
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="flex gap-3 p-3 rounded-lg hover:bg-white cursor-pointer transition-all duration-300"
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

              {/* Newsletter Widget */}
              <motion.div
                className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-6 text-white shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm mb-4 text-red-100">
                  Get the latest tips and recipes delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <motion.button
                    className="w-full py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </motion.aside>
          </div>

          {/* Related Articles */}
          <motion.section
            className="py-16 lg:py-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-stone-800"
              variants={fadeInUp}
            >
              Related Articles
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={stagger}
            >
              {relatedPosts.map((post, index) => (
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
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-black leading-tight group-hover:text-red-700 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                        {post.date.split(",")[0]}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <motion.button
                      className="px-6 py-2 border border-red-700 text-red-700 rounded-full font-semibold text-sm hover:bg-red-700 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
