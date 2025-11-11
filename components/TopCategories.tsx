"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Category {
  id: number;
  name: string;
  image: string;
}

const TopCategories = () => {
  const router = useRouter();

  const categories: Category[] = [
    {
      id: 1,
      name: "Vegetable",
      image: "/top-categories/supermarket-top-categories-1.png",
    },
    {
      id: 2,
      name: "Fish",
      image: "/top-categories/supermarket-top-categories-2.png",
    },
    {
      id: 3,
      name: "Eggs",
      image: "/top-categories/supermarket-top-categories-3.png",
    },
    {
      id: 4,
      name: "Beef",
      image: "/top-categories/supermarket-top-categories-4.png",
    },
    {
      id: 5,
      name: "Milk",
      image: "/top-categories/supermarket-top-categories-5.png",
    },
    {
      id: 6,
      name: "Cheese",
      image: "/top-categories/supermarket-top-categories-6.png",
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/products/${categoryId}`);
  };

  return (
    <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-16">
      <div className="relative">
        {/* Animated Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-black text-3xl sm:text-4xl font-bold capitalize mb-12"
        >
          Top Categories
        </motion.h2>

        {/* Animated Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{
                scale: 1.08,
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category.id)}
              className="w-full max-w-[180px] inline-flex flex-col justify-start items-center gap-3.5 cursor-pointer group"
            >
              {/* Image Container with Gradient Border Effect */}
              <div className="relative w-44 h-44">
                {/* Gradient Border Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ padding: "3px" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1.5, ease: "linear" }}
                >
                  <div className="w-full h-full bg-white rounded-full"></div>
                </motion.div>

                {/* Category Image */}
                <motion.div
                  className="relative w-full h-full rounded-full shadow-[0px_4px_6px_0px_rgba(0,0,0,0.16)] overflow-hidden bg-white group-hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.24)] transition-shadow duration-300"
                  whileHover={{
                    boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>

                {/* Floating Particles on Hover */}
                {/* <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                /> */}
                <motion.div
                  className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>

              {/* Category Name with Animation */}
              <motion.div
                className="self-stretch text-center text-black text-base font-semibold group-hover:text-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {category.name}
              </motion.div>

              {/* Underline Effect */}
              <motion.div className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-20 h-20 bg-green-200/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
};

export default TopCategories;
