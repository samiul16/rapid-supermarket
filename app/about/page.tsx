"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CommonHeader from "@/components/Common/CommonHeader";
import DownloadOurApp from "@/components/DownloadOurApp";
import Deliver from "@/components/Deliver";
import Subscribe from "@/components/Subscribe";

export default function AboutPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const stats = [
    { number: "25+", label: "Sales Outlets" },
    { number: "500K+", label: "Happy Customers" },
    { number: "260+", label: "Types of Dishes" },
    { number: "5+", label: "Years Growing" },
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Fresh Banana",
      category: "Fruits",
      price: "AED 20.00",
      rating: 4.5,
      image: "/about/supermarket-about-us-2.png",
    },
    {
      id: 2,
      name: "Premium Mutton",
      category: "Meat",
      price: "AED 85.00",
      rating: 4.8,
      image: "/about/supermarket-about-us-3.png",
    },
    {
      id: 3,
      name: "Frozen Vegetables",
      category: "Frozen",
      price: "AED 15.00",
      rating: 4.3,
      image: "/about/supermarket-about-us-4.png",
    },
  ];

  const galleryImages = [
    "/about/supermarket-about-us-2.png",
    "/about/supermarket-about-us-3.png",
    "/about/supermarket-about-us-4.png",
    "/about/supermarket-about-us-5.png",
    "/about/supermarket-about-us-6.png",
    "/about/supermarket-about-us-3.png",
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

  const counterAnimation = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <>
      <CommonHeader
        heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
        heroTitle="About Us"
        heroDescription="Discover the finest menus in town with Excellency."
      />
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 xl:px-28">
          {/* Hero About Section */}
          <motion.section
            className="py-16 lg:py-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <motion.div className="space-y-8" variants={fadeInLeft}>
                <div className="space-y-6">
                  <motion.h1
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-stone-800 leading-tight"
                    variants={fadeInUp}
                  >
                    About Us
                  </motion.h1>

                  <motion.div className="space-y-4" variants={fadeInUp}>
                    <p className="text-zinc-600 text-base lg:text-lg leading-relaxed">
                      Excellency was born from a passion for authentic flavor,
                      warm hospitality, and an unwavering commitment to quality.
                      Established in 2020, we started as a small dining spot
                      with a big dream — to bring people together over food that
                      feels like home.
                    </p>

                    <p className="text-zinc-600 text-base lg:text-lg leading-relaxed">
                      Our founders, inspired by culinary traditions from around
                      the world, laid the foundation for a restaurant that
                      values heart, heritage, and honest taste. Over the years,
                      our name has become a symbol of consistency, taste, and
                      trust.
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  className="group flex items-center gap-3 px-6 py-3 bg-red-700 text-white rounded-full text-lg font-semibold transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <motion.div
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-red-700"
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
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Hero Image */}
              <motion.div className="relative" variants={fadeInRight}>
                <motion.img
                  src="/about/supermarket-about-us-1.png"
                  alt="About Us"
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-700 rounded-full flex items-center justify-center shadow-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="text-white text-2xl font-bold">5+</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="py-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 lg:p-12 rounded-3xl shadow-xl text-center hover:shadow-xl transition-shadow duration-300"
                  variants={counterAnimation}
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  {...scaleOnHover}
                >
                  <motion.h3
                    className="text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-semibold text-red-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-red-950 text-sm sm:text-base lg:text-xl font-normal">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Gallery Section */}
          <motion.section
            className="py-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-stone-800"
              variants={fadeInUp}
            >
              Our Journey in Pictures
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 lg:gap-6 h-[500px] md:h-[600px]"
              variants={stagger}
            >
              {/* First Row: 2 smaller images + 1 horizontal image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImageIndex(0)}
              >
                <img
                  src={galleryImages[0]}
                  alt="Gallery 1"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                {/* <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              /> */}
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImageIndex(1)}
              >
                <img
                  src={galleryImages[1]}
                  alt="Gallery 2"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                {/* <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              /> */}
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-2xl cursor-pointer col-span-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImageIndex(2)}
              >
                <img
                  src={galleryImages[2]}
                  alt="Gallery 3"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                {/* <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              /> */}
              </motion.div>
              {/* Second Row: 1 horizontal image + 2 smaller images */}
              <motion.div
                className="relative overflow-hidden rounded-2xl cursor-pointer col-span-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImageIndex(3)}
              >
                <img
                  src={galleryImages[3]}
                  alt="Gallery 4"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                {/* <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              /> */}
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImageIndex(4)}
              >
                <img
                  src={galleryImages[4]}
                  alt="Gallery 5"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                {/* <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              /> */}
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImageIndex(5)}
              >
                <img
                  src={galleryImages[5]}
                  alt="Gallery 6"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                {/* <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              /> */}
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Trending Products Section */}
          <motion.section
            className="py-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Promotional Card */}
              <motion.div className="lg:col-span-1" variants={fadeInLeft}>
                <motion.div
                  className="bg-rose-100 rounded-3xl p-6 lg:p-8 h-full flex flex-col justify-between"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-1 bg-red-700 text-white text-sm font-bold rounded-full">
                      Get 35% Off
                    </span>
                    <h3 className="text-xl lg:text-2xl font-semibold text-black leading-tight">
                      Fresh Organic Products from Local Farms
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <img
                      src="/about/supermarket-about-us-1.png"
                      alt="Promotional Product"
                      className="w-full h-32 sm:h-40 object-cover rounded-2xl"
                    />

                    <motion.button
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-red-700 text-white rounded-full text-lg font-semibold"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 20px rgba(220, 38, 38, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Shop Now
                      <motion.div
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 90 }}
                      >
                        <svg
                          className="w-3 h-3 text-red-700"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Trending Products */}
              <motion.div className="lg:col-span-3" variants={fadeInRight}>
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-black"
                  variants={fadeInUp}
                >
                  Trending Products
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={stagger}
                >
                  {trendingProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                      variants={fadeInUp}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <motion.button
                          className="absolute top-4 right-4 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.button>
                      </div>

                      <div className="p-4 lg:p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-neutral-600 text-sm font-medium">
                            {product.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm text-neutral-600">
                              ({product.rating})
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg lg:text-xl font-semibold text-black mb-3">
                          {product.name}
                        </h3>

                        <div className="flex justify-between items-center">
                          <span className="text-lg lg:text-xl font-bold text-red-700">
                            {product.price}
                          </span>
                          <motion.button
                            className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white"
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
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>

      <Deliver />

      <Subscribe />
    </>
  );
}
