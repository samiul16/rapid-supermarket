/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  ShoppingCart,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { Product as CartProduct } from "@/redux/hooks/cart/cartSlice";
import { useAddToCart } from "@/hooks/useAddToCart";

const TopSellingCarousel = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const dispatch = useAppDispatch();

  const categories = ["All", "Fish", "Vegetables", "Beef", "Milk"];

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Fresh Orange",
      category: "Vegetables",
      price: 20.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400&q=80",
    },
    {
      id: 2,
      name: "Premium Beef Steak",
      category: "Beef",
      price: 45.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80",
    },
    {
      id: 3,
      name: "Fresh Salmon Fish",
      category: "Fish",
      price: 35.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
    },
    {
      id: 4,
      name: "Red Capsicum",
      category: "Vegetables",
      price: 20.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80",
    },
    {
      id: 5,
      name: "Fresh Milk",
      category: "Milk",
      price: 8.0,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
    },
    {
      id: 6,
      name: "Organic Tomatoes",
      category: "Vegetables",
      price: 18.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
    },
    {
      id: 7,
      name: "Fresh Tuna",
      category: "Fish",
      price: 42.0,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80",
    },
    {
      id: 8,
      name: "Organic Cheese",
      category: "Milk",
      price: 25.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400&q=80",
    },
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile - 1 item
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet - 2 items
      } else {
        setItemsPerView(4); // Desktop - 4 items
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides
  const totalSlides = Math.ceil(filteredProducts.length / itemsPerView);

  // Reset to first slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  // Reset to first slide when items per view changes
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ProductCard = ({ product }: { product: any }) => {
    const isFavorite = favorites.has(product.id);
    const { addToCartGlobal } = useAddToCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (product: any) => {
      const cartProduct: CartProduct = {
        id: parseInt(product.id),
        name: product.name,
        price: product.price,
        image_url: product.image,
        currency: "AED",
      };
      addToCartGlobal(cartProduct, parseInt(product.id), quantity, setQuantity);
    };

    return (
      <motion.div
        className="inline-flex flex-col justify-start items-start gap-2.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="w-full aspect-square px-3.5 pt-3 pb-6 rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-end gap-2.5 relative overflow-hidden group bg-white">
          {/* Product Image */}
          <div className="absolute inset-0 p-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col justify-start items-start gap-2.5 relative z-10">
            {/* Favorite Button */}
            <motion.button
              onClick={() => toggleFavorite(product.id)}
              className="w-11 p-2.5 bg-rose-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite
                    ? "fill-[#A40B00] text-[#A40B00]"
                    : "text-[#A40B00]"
                }`}
              />
            </motion.button>

            {/* Add to Cart Button */}
            <motion.button
              onClick={() => handleAddToCart(product)}
              className="p-2.5 bg-rose-100 rounded-full shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] flex justify-center items-center cursor-pointer hover:bg-rose-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="w-5 h-5 text-[#A40B00]" />
            </motion.button>
          </div>
        </div>

        {/* Product Info */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
          {/* Category and Rating */}
          <div className="self-stretch inline-flex justify-start items-center gap-4 sm:gap-14">
            <div className="text-neutral-800 text-sm sm:text-base font-normal">
              {product.category}
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-neutral-800 text-sm sm:text-base font-normal">
                ({product.rating})
              </span>
            </div>
          </div>

          {/* Product Name and Price */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-black text-lg sm:text-2xl font-semibold line-clamp-1">
              {product.name}
            </h3>
            <div className="self-stretch inline-flex justify-start items-end gap-20">
              <span className="text-[#A40B00] text-xl sm:text-2xl font-black">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-12">
        <div className="space-y-10">
          {/* Header with Category Filters */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={headerVariants}
          >
            {/* Title */}
            <div className="p-2.5 flex justify-center items-center gap-2.5">
              <h2 className="text-black text-3xl sm:text-4xl font-bold capitalize">
                Top Selling
              </h2>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-start items-center gap-2.5">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 h-10 sm:h-12 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#A40B00] text-white"
                      : "bg-white text-neutral-800 hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base sm:text-xl font-medium">
                    {category}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Centered on cards */}
            {totalSlides > 1 && (
              <>
                <motion.button
                  onClick={goToPrevSlide}
                  disabled={currentSlide === 0}
                  className="absolute left-0 top-[50%] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#A40B00] hover:bg-[#8a0900] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer -ml-3 sm:-ml-6 lg:-ml-20 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ marginTop: "15px" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                <motion.button
                  onClick={goToNextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className="absolute right-0 top-[50%] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#A40B00] hover:bg-[#8a0900] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 -mr-3 sm:-mr-6 lg:-mr-20 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ marginTop: "15px" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </>
            )}

            {/* Products Carousel */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredProducts
                        .slice(
                          slideIndex * itemsPerView,
                          (slideIndex + 1) * itemsPerView
                        )
                        .map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index
                      ? "w-10 sm:w-14 h-4 sm:h-5 bg-[#A40B00]"
                      : "w-4 sm:w-5 h-4 sm:h-5 bg-red-200 hover:bg-red-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-xl">
                No products found in this category
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellingCarousel;
