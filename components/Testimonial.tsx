/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Cameron Williamson",
      role: "Medical Assistant",
      image: "/top-categories/supermarket-top-categories-1.png",
      text: "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.",
    },
    {
      id: 2,
      name: "Eleanor Pena",
      role: "Marketing Coordinator",
      image: "/top-categories/supermarket-top-categories-2.png",
      text: "It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",
    },
    {
      id: 3,
      name: "Kristin Watson",
      role: "President of Sales",
      image: "/top-categories/supermarket-top-categories-3.png",
      text: "I have to say, I enjoyed every single bite of the meal. I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. Ideal for those who want a romantic night out.",
    },
    {
      id: 4,
      name: "John Doe",
      role: "Business Owner",
      image: "/top-categories/supermarket-top-categories-4.png",
      text: "Absolutely fantastic experience! The attention to detail and quality of service exceeded all my expectations. Highly recommend to anyone looking for excellence.",
    },
    {
      id: 5,
      name: "Jane Smith",
      role: "Chef",
      image: "/top-categories/supermarket-top-categories-5.png",
      text: "As a professional chef, I'm impressed by the culinary skills and presentation. Every dish is crafted with passion and expertise. A true gem!",
    },
    {
      id: 6,
      name: "Michael Brown",
      role: "Food Critic",
      image: "/top-categories/supermarket-top-categories-6.png",
      text: "This establishment sets the standard for quality dining. The flavors are exquisite, the atmosphere is perfect, and the service is impeccable.",
    },
  ];

  const itemsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const TestimonialCard = ({
    testimonial,
    index,
  }: {
    testimonial: Testimonial;
    index: number;
  }) => {
    return (
      <motion.div
        variants={cardVariants}
        className="w-64 px-6 py-10 relative bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-red-600 inline-flex flex-col justify-start items-start gap-10 overflow-hidden"
        whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow: "0px 8px 20px 0px rgba(164, 11, 0, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Content Container */}
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          {/* Text Section */}
          <div className="self-stretch flex flex-col justify-start items-start">
            {/* Quote Icon */}
            <motion.div
              className="py-2 flex flex-col justify-start items-start gap-2.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Quote className="w-10 h-7 text-stone-400" />
            </motion.div>

            {/* Testimonial Text */}
            <motion.div
              className="self-stretch inline-flex justify-start items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <p className="flex-1 justify-start text-black text-lg font-normal leading-7">
                {testimonial.text}
              </p>
            </motion.div>
          </div>

          {/* Star Rating Placeholder */}
          <div className="self-stretch inline-flex justify-start items-start gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.1 + 0.5 + i * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <motion.div
          className="w-60 inline-flex justify-start items-center gap-4 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
        >
          <motion.img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 relative rounded-full object-cover"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />

          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="w-40 justify-start text-black text-base font-bold leading-7">
              {testimonial.name}
            </div>
            <div className="self-stretch justify-start text-stone-500 text-sm font-normal leading-5">
              {testimonial.role}
            </div>
          </div>
        </motion.div>

        {/* Overlapped Corner Image - Bottom Right */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-32 h-32"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
        >
          <img
            src={testimonial.image}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="space-y-12">
          {/* Header with Navigation */}
          <motion.div
            className="inline-flex justify-between items-end w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={headerVariants}
          >
            {/* Title */}
            <motion.div
              className="inline-flex flex-col justify-start items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-stone-800 text-3xl sm:text-4xl font-bold leading-tight">
                What People Say About Us
              </h2>
              <motion.div
                className="w-20 h-1 bg-[#A40B00] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Navigation Arrows */}
            <motion.div
              className="flex justify-center items-center gap-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                onClick={goToPrevSlide}
                disabled={currentSlide === 0}
                className="w-12 h-12 rounded-lg border-2 border-gray-300 flex justify-center items-center cursor-pointer hover:border-[#A40B00] hover:bg-red-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-neutral-900/50 group-hover:text-[#A40B00]" />
              </motion.button>

              <motion.button
                onClick={goToNextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="w-12 h-12 rounded-lg border-2 border-[#A40B00] bg-red-50 flex justify-center items-center cursor-pointer hover:bg-[#A40B00] hover:border-[#A40B00] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-[#A40B00] group-hover:text-white transition-colors" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex-shrink-0">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {testimonials
                      .slice(
                        slideIndex * itemsPerView,
                        (slideIndex + 1) * itemsPerView
                      )
                      .map((testimonial, index) => (
                        <TestimonialCard
                          key={testimonial.id}
                          testimonial={testimonial}
                          index={index}
                        />
                      ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-3 pt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index
                      ? "w-10 h-3 bg-[#A40B00]"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Background Decorations */}
      <motion.div
        className="fixed top-1/4 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default TestimonialsSection;
