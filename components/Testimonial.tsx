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
      name: "Amina Rahman",
      role: "Homemaker",
      image: "/top-categories/amina-rahman.png",
      text: "Fresh vegetables and fruits delivered on time. Always top quality!",
    },
    {
      id: 2,
      name: "Rahim Khan",
      role: "Office Executive",
      image: "/top-categories/rahim-khan.jpeg",
      text: "Great snacks and beverages at amazing prices. I shop here every week!",
    },
    {
      id: 3,
      name: "Sara Latif",
      role: "Freelancer",
      image: "/top-categories/supermarket-top-categories-3.png",
      text: "Ordering online is easy and fast. Delivery is always punctual.",
    },
    {
      id: 4,
      name: "Fahad Malik",
      role: "Chef",
      image: "/top-categories/supermarket-top-categories-4.png",
      text: "Meat and fish are always fresh. My favorite online supermarket.",
    },
    {
      id: 5,
      name: "Naila Siddiqui",
      role: "Entrepreneur",
      image: "/top-categories/supermarket-top-categories-5.png",
      text: "Friendly service and quick delivery. Makes grocery shopping so simple!",
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

  // Simple animation variants for header only
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: Testimonial;
    index: number;
  }) => {
    return (
      <div className="w-full max-w-xl px-4 sm:px-6 py-6 sm:py-8 relative bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] border border-red-200 flex flex-col justify-start items-start gap-6 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        {/* Content Container */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          {/* Text Section */}
          <div className="self-stretch flex flex-col justify-start items-start">
            {/* Quote Icon */}
            <div className="py-1 flex flex-col justify-start items-start">
              <Quote className="w-8 h-6 text-stone-400" />
            </div>

            {/* Testimonial Text */}
            <div className="self-stretch inline-flex justify-start items-start">
              <p className="flex-1 justify-start text-black text-sm sm:text-base font-normal leading-6">
                {testimonial.text}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="self-stretch inline-flex justify-start items-start gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <div className="w-full inline-flex justify-start items-center gap-3 relative z-10">
          <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="inline-flex flex-col justify-start items-start gap-1 flex-1 min-w-0">
            <div className="w-full justify-start text-black text-sm sm:text-base font-bold leading-6 truncate">
              {testimonial.name}
            </div>
            <div className="w-full justify-start text-stone-500 text-xs sm:text-sm font-normal leading-5 truncate">
              {testimonial.role}
            </div>
          </div>
        </div>

        {/* Overlapped Corner Image - Bottom Right */}
        <div className="absolute -bottom-3 -right-3 w-24 h-24 opacity-15">
          <div className="w-full h-full relative rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-8 sm:py-12">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="space-y-8">
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
          <div className="relative overflow-hidden pb-4 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2">
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
                  </div>
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
