"use client";
import CommonHeader from "@/components/Common/CommonHeader";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(3);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("moreInfo");

  const thumbnails = [
    "/product-details-2.png",
    "/product-details-2.png",
    "/product-details-2.png",
  ];

  const relatedProducts = [
    { name: "Bread", price: "AED30.00" },
    { name: "Rice", price: "AED70.00" },
    { name: "Banana", price: "AED15.00" },
    { name: "Apple", price: "AED15.00" },
  ];

  const recommendedProducts = Array(4).fill({
    name: "Red capsicum",
    price: "$20.00",
    category: "Vegetables",
    rating: "(4.5)",
  });

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

  const buttonHover = {
    whileHover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(164, 11, 0, 0.15)",
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.98 },
  };

  const quantityButtonHover = {
    whileHover: {
      scale: 1.1,
      backgroundColor: "#A40B00",
      color: "#ffffff",
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.9 },
  };

  const tabContent: Record<string, { title: string; content: string }> = {
    moreInfo: {
      title: "Overview",
      content:
        "A retail management system is a platform that integrates several function modules including technical module management. This comprehensive solution streamlines operations, inventory tracking, and customer management processes to enhance business efficiency and profitability.",
    },
    specification: {
      title: "Product Specifications",
      content:
        "Fresh tropical mango with high nutritional value. Rich in vitamins A, C, and dietary fiber. Sourced from premium orchards with sustainable farming practices. Storage: Keep in cool, dry place. Shelf life: 5-7 days at room temperature.",
    },
    reviews: {
      title: "Customer Reviews",
      content:
        "Customers love the sweet, juicy taste and premium quality. Average rating: 4.8/5 stars. 'Best mangoes I've ever tasted!' - Sarah M. 'Perfect ripeness and amazing flavor' - Ahmed K. Join hundreds of satisfied customers who trust our quality.",
    },
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <CommonHeader
        heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
        heroTitle="Product"
        heroDescription="Discover the finest menus in town with Excellency."
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-10">
        {/* Main Product Section */}
        <motion.div
          className="pt-16 sm:pt-24 md:pt-32 lg:pt-36 xl:pt-[141px] pb-12 md:pb-20"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="flex flex-col xl:flex-row justify-center items-start gap-8 md:gap-12 lg:gap-10">
            {/* Product Images */}
            <motion.div
              className="w-full xl:w-[632px] 2xl:w-[700px] flex flex-col gap-4 md:gap-5"
              variants={fadeInLeft}
            >
              <motion.img
                key={selectedImage}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] 2xl:h-[450px] object-cover rounded-2xl shadow-lg"
                src="/product-details-1.jpg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                layoutId="mainImage"
              />
              <motion.div
                className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
                variants={stagger}
              >
                {thumbnails.map((thumb, index) => (
                  <motion.img
                    key={index}
                    className={`w-full h-24 sm:h-32 md:h-36 lg:h-40 rounded-xl md:rounded-2xl cursor-pointer object-cover transition-all duration-300 ${
                      selectedImage === index
                        ? "border-2 border-red-700 shadow-lg"
                        : "border border-gray-200"
                    }`}
                    src={thumb}
                    variants={fadeInUp}
                    {...scaleOnHover}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="w-full xl:w-[600px] 2xl:w-[700px] flex flex-col gap-6 md:gap-8 lg:gap-10"
              variants={fadeInRight}
            >
              <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
                <motion.h1
                  className="text-stone-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Ripe Mango
                </motion.h1>
                <motion.p
                  className="text-red-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  AED150.00
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 md:gap-4"
                variants={fadeInUp}
              >
                <h3 className="text-black text-lg md:text-xl font-bold ">
                  Food Ingredients:
                </h3>
                <p className="text-black text-sm md:text-base font-normal  leading-relaxed">
                  Fresh tropical mango packed with natural sweetness and
                  essential nutrients. Rich in vitamins A and C, dietary fiber,
                  and antioxidants. Carefully selected from premium orchards to
                  ensure optimal ripeness and flavor. Perfect for healthy
                  snacking, smoothies, or desserts.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 md:gap-6"
                variants={fadeInUp}
              >
                <motion.button
                  className="w-full px-6 md:px-8 py-3 md:py-3.5 rounded-[50px] border border-red-700 text-stone-800 text-lg md:text-xl font-bold  bg-white"
                  {...buttonHover}
                >
                  Add To Cart
                </motion.button>

                <div className="flex gap-3 md:gap-4">
                  <motion.button
                    className="px-4 md:px-6 py-3 bg-rose-100 rounded-[20px] flex justify-center items-center min-w-[50px]"
                    {...quantityButtonHover}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <div className="w-3 md:w-3.5 h-0.5 bg-stone-800"></div>
                  </motion.button>

                  <motion.div
                    className="flex-1 h-12 px-4 md:px-8 py-2 bg-rose-100 rounded-[20px] flex justify-center items-center"
                    key={quantity}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-stone-800 text-xl md:text-2xl font-normal  leading-6">
                      {quantity}
                    </span>
                  </motion.div>

                  <motion.button
                    className="px-4 md:px-6 py-3 bg-rose-100 rounded-[20px] flex justify-center items-center min-w-[50px]"
                    {...quantityButtonHover}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <div className="w-3 md:w-3.5 h-3 md:h-3.5 relative">
                      <div className="w-0.5 h-3 md:h-3.5 bg-stone-800 absolute left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-3 md:w-3.5 h-0.5 bg-stone-800 absolute top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className="py-2 flex flex-col gap-2 md:gap-3"
                variants={fadeInUp}
              >
                <h4 className="text-stone-800 text-lg md:text-xl font-bold ">
                  Follow us and share your choice:
                </h4>
                <motion.div className="flex gap-2 md:gap-3" variants={stagger}>
                  {[1, 2, 3].map((social, index) => (
                    <motion.div
                      key={index}
                      className="w-10 h-10 md:w-12 md:h-12 bg-red-700 rounded-full cursor-pointer flex items-center justify-center"
                      variants={scaleOnHover}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: "#8B0000",
                      }}
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-sm"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          className="max-w-full mx-auto py-8 md:py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-5">
              <motion.div
                className="flex flex-wrap gap-4 md:gap-8 border-b-2 border-gray-300 relative overflow-x-auto scrollbar-hide"
                variants={stagger}
              >
                {[
                  { id: "moreInfo", label: "More Info" },
                  { id: "specification", label: "Specification" },
                  { id: "reviews", label: "Reviews" },
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    className={`pb-3 md:pb-4 text-sm md:text-base font-medium transition-colors duration-300 whitespace-nowrap ${
                      activeTab === tab.id ? "text-red-700" : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-20 md:w-32 h-1 bg-red-700"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col gap-4 md:gap-6"
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-black text-xl md:text-2xl font-medium font-['Poppins'] leading-6">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-neutral-800 text-sm md:text-base font-light  leading-6 text-justify">
                {tabContent[activeTab].content}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* You May Also Like Section */}
        <motion.div
          className="max-w-full mx-auto py-8 md:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight tracking-widest mb-8 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            You May Also Like
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {relatedProducts.map((product, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 bg-gradient-to-r from-red-600 via-red-700 to-red-900 rounded-[30px] md:rounded-[50px] border border-rose-100 flex justify-between items-center cursor-pointer"
                variants={fadeInUp}
                {...scaleOnHover}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <motion.img
                    className="w-20 h-20 md:w-28 md:h-28 rounded-[15px] md:rounded-[20px] shadow-lg object-cover"
                    src="/product-details-2.png"
                    whileHover={{ rotate: 5 }}
                  />
                  <span className="text-white text-xl md:text-2xl font-semibold ">
                    {product.name}
                  </span>
                </div>
                <span className="text-white text-xl md:text-3xl font-bold  leading-7">
                  {product.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Recommended Products Section */}
        <motion.div
          className="max-w-full mx-auto pb-12 md:pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {recommendedProducts.map((product, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-2.5"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative h-48 md:h-64 lg:h-72 p-3 rounded-[20px] shadow-lg bg-white cursor-pointer overflow-hidden"
                  {...scaleOnHover}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Heart and Add to Cart buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <motion.button
                      className="w-9 h-9 md:w-11 md:h-11 bg-rose-100 rounded-full flex items-center justify-center shadow-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "#FFE4E1" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-3 h-4 md:w-4 md:h-5 border-2 border-red-700 rounded"></div>
                    </motion.button>
                    <motion.button
                      className="w-9 h-9 md:w-11 md:h-11 bg-rose-100 rounded-full shadow flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#A40B00",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-red-700 rounded"></div>
                    </motion.button>
                  </div>

                  {/* Product image placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
                    <motion.img
                      src="/product-details-2.png"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-800 text-sm md:text-base font-normal ">
                      {product.category}
                    </span>
                    <span className="text-neutral-800 text-sm md:text-base font-normal ">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 md:gap-2">
                    <h4 className="text-black text-lg md:text-xl lg:text-2xl font-semibold  leading-tight">
                      {product.name}
                    </h4>
                    <span className="text-red-900 text-lg md:text-xl lg:text-2xl font-black ">
                      {product.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
