/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { Product as CartProduct } from "@/redux/hooks/cart/cartSlice";
import { useAddToCart } from "@/hooks/useAddToCart";

const PopularProducts = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("Fish");
  const dispatch = useAppDispatch();

  const categories = ["Fish", "Vegetables", "Beef", "Milk"];

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Red Capsicum",
      category: "Vegetables",
      price: 20.0,
      rating: 4.5,
      image: "/top-selling/1.webp",
    },
    {
      id: 2,
      name: "Fresh Salmon",
      category: "Fish",
      price: 45.0,
      rating: 4.8,
      image: "/top-selling/2.jpg",
    },
    {
      id: 3,
      name: "Organic Tomato",
      category: "Vegetables",
      price: 12.0,
      rating: 4.5,
      image: "/top-selling/3.jpg",
    },
    {
      id: 4,
      name: "Premium Beef",
      category: "Beef",
      price: 38.0,
      rating: 4.9,
      image: "/top-selling/4.jpg",
    },
    {
      id: 5,
      name: "Fresh Milk",
      category: "Milk",
      price: 8.0,
      rating: 4.7,
      image: "/top-selling/5.jpg",
    },
    {
      id: 6,
      name: "Green Capsicum",
      category: "Vegetables",
      price: 18.0,
      rating: 4.5,
      image: "/top-selling/1.webp",
    },
    {
      id: 7,
      name: "Fresh Tuna",
      category: "Fish",
      price: 42.0,
      rating: 4.6,
      image: "/top-selling/2.jpg",
    },
    {
      id: 8,
      name: "Organic Carrot",
      category: "Vegetables",
      price: 15.0,
      rating: 4.5,
      image: "/top-selling/3.jpg",
    },
  ];

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
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

  const ProductCard = ({ product, index }: { product: any; index: number }) => {
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
        variants={itemVariants}
        className="w-full inline-flex flex-col justify-start items-start gap-2.5"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
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

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          {/* Action Buttons */}
          <div className="flex flex-col justify-start items-start gap-2.5 relative z-10">
            {/* Favorite Button */}
            <motion.button
              onClick={() => toggleFavorite(product.id)}
              className="w-11 p-2.5 bg-rose-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-200 transition-colors shadow-sm"
              whileHover={{ scale: 1.15, rotate: isFavorite ? 0 : 10 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Heart
                className={`w-5 h-5 transition-all duration-300 ${
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
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              <ShoppingCart className="w-5 h-5 text-[#A40B00]" />
            </motion.button>
          </div>

          {/* Floating Badge Animation */}
          <motion.div
            className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            New
          </motion.div>
        </div>

        {/* Product Info */}
        <motion.div
          className="self-stretch flex flex-col justify-start items-start gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {/* Category and Rating */}
          <div className="self-stretch inline-flex justify-start items-center gap-4 sm:gap-14">
            <div className="text-neutral-800 text-sm sm:text-base font-normal">
              {product.category}
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                  >
                    <Star
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-neutral-800 text-sm sm:text-base font-normal">
                ({product.rating})
              </span>
            </div>
          </div>

          {/* Product Name and Price */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-black text-lg sm:text-2xl font-semibold line-clamp-1 group-hover:text-[#A40B00] transition-colors">
              {product.name}
            </h3>
            <div className="self-stretch inline-flex justify-start items-end gap-20">
              <motion.span
                className="text-[#A40B00] text-xl sm:text-2xl font-black"
                whileHover={{ scale: 1.05 }}
              >
                ${product.price.toFixed(2)}
              </motion.span>
            </div>
          </div>
        </motion.div>
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
              <motion.h2
                className="text-black text-3xl sm:text-4xl font-bold capitalize"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Popular Products
              </motion.h2>
            </div>

            {/* Category Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-start items-center gap-2.5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 h-10 sm:h-12 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#A40B00] text-rose-100"
                      : "bg-rose-100 text-neutral-800/80 hover:bg-rose-200"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-base sm:text-xl font-medium">
                    {category}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Products Grid - 2 Rows */}
          <motion.div
            className="space-y-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* First Row */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              {filteredProducts.slice(0, 4).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>

            {/* Second Row */}
            {filteredProducts.length > 4 && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
              >
                {filteredProducts.slice(4, 8).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index + 4}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-xl">
                No products found in this category
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        className="fixed top-20 right-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-40 h-40 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default PopularProducts;
