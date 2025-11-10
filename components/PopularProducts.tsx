/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Product as CartProduct } from "@/redux/hooks/cart/cartSlice";
import { useAddToCart } from "@/hooks/useAddToCart";

const PopularProducts = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("Fish");

  const categories = ["Fish", "Vegetables", "Beef", "Milk"];

  // Sample product data
  const products = [
    // Fish Products
    {
      id: 1,
      name: "Fresh Salmon",
      category: "Fish",
      price: 45.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
    },
    {
      id: 2,
      name: "Fresh Tuna",
      category: "Fish",
      price: 42.0,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1697030891256-36a3770cddde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2730",
    },
    {
      id: 3,
      name: "Sea Bass",
      category: "Fish",
      price: 38.0,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
    },
    {
      id: 4,
      name: "Fresh Mackerel",
      category: "Fish",
      price: 32.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1554071407-1fb7259a9118?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 5,
      name: "Red Snapper",
      category: "Fish",
      price: 48.0,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
    },
    {
      id: 6,
      name: "Fresh Cod",
      category: "Fish",
      price: 35.0,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1756688691284-4f0184d399c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
    },
    {
      id: 7,
      name: "Prawns",
      category: "Fish",
      price: 55.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80",
    },
    {
      id: 8,
      name: "Fresh Sardines",
      category: "Fish",
      price: 25.0,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1567087978459-8a8eeac7bc75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2106",
    },
    // Vegetables
    {
      id: 9,
      name: "Red Capsicum",
      category: "Vegetables",
      price: 20.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80",
    },
    {
      id: 10,
      name: "Organic Tomatoes",
      category: "Vegetables",
      price: 18.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
    },
    {
      id: 11,
      name: "Fresh Carrots",
      category: "Vegetables",
      price: 15.0,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",
    },
    {
      id: 12,
      name: "Green Capsicum",
      category: "Vegetables",
      price: 18.0,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1585159079680-8dec029b76ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
    },
    // Beef
    {
      id: 13,
      name: "Premium Beef Steak",
      category: "Beef",
      price: 65.0,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1677027201352-3c3981cb8b5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
    },
    {
      id: 14,
      name: "Ground Beef",
      category: "Beef",
      price: 38.0,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdW5kJTIwYmVlZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    },
    {
      id: 15,
      name: "Beef Ribs",
      category: "Beef",
      price: 55.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80",
    },
    {
      id: 16,
      name: "Beef Tenderloin",
      category: "Beef",
      price: 85.0,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
    },
    // Milk Products
    {
      id: 17,
      name: "Fresh Milk",
      category: "Milk",
      price: 8.0,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    },
    {
      id: 18,
      name: "Organic Cheese",
      category: "Milk",
      price: 25.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",
    },
    {
      id: 19,
      name: "Greek Yogurt",
      category: "Milk",
      price: 12.0,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1571212515416-fef01fc43637?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjB5b2d1cnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    },
    {
      id: 20,
      name: "Fresh Butter",
      category: "Milk",
      price: 15.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80",
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
        duration: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const ProductCard = ({ product, index }: { product: any; index: number }) => {
    const isFavorite = favorites.has(product.id);
    const { addToCartGlobal } = useAddToCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (product: any) => {
      const cartProduct: CartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image,
        currency: "AED",
      };
      addToCartGlobal(cartProduct, product.id, quantity, setQuantity);
    };

    return (
      <div className="w-full inline-flex flex-col justify-start items-start gap-2.5 hover:-translate-y-2 transition-transform duration-300">
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
            <button
              onClick={() => toggleFavorite(product.id)}
              className="w-11 p-2.5 bg-rose-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-200 hover:scale-110 transition-all duration-200 shadow-sm"
            >
              <Heart
                className={`w-5 h-5 transition-all duration-300 ${
                  isFavorite
                    ? "fill-[#A40B00] text-[#A40B00]"
                    : "text-[#A40B00]"
                }`}
              />
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="p-2.5 bg-rose-100 rounded-full shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] flex justify-center items-center cursor-pointer hover:bg-rose-200 hover:scale-110 transition-all duration-200"
            >
              <ShoppingCart className="w-5 h-5 text-[#A40B00]" />
            </button>
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
            <h3 className="self-stretch text-black text-lg sm:text-2xl font-semibold line-clamp-1 group-hover:text-[#A40B00] transition-colors">
              {product.name}
            </h3>
            <div className="self-stretch inline-flex justify-start items-end gap-20">
              <span className="text-[#A40B00] text-xl sm:text-2xl font-black">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-20">
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
          <div className="space-y-7">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 4).map((product, index) => (
                <ProductCard
                  key={`${selectedCategory}-${product.id}`}
                  product={product}
                  index={index}
                />
              ))}
            </div>

            {/* Second Row */}
            {filteredProducts.length > 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.slice(4, 8).map((product, index) => (
                  <ProductCard
                    key={`${selectedCategory}-${product.id}-row2`}
                    product={product}
                    index={index + 4}
                  />
                ))}
              </div>
            )}
          </div>

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
