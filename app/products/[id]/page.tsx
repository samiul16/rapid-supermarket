"use client";
import CommonHeader from "@/components/Common/CommonHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "@/redux/hooks/cart/cartSlice";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(3);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("moreInfo");
  const router = useRouter();
  const dispatch = useDispatch();

  // Product data (in real app, this would come from props or API)
  const currentProduct = {
    id: 1,
    name: "Ripe Mango",
    price: 150,
    image_url: "/product-details-1.jpg",
    currency: "AED",
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        items: currentProduct,
        quantity: quantity,
        cartId: `${currentProduct.id}-${Date.now()}`,
      })
    );
    // Open the cart sidebar after adding item
    dispatch(openCart());
  };

  const handleRecommendedProductClick = () => {
    router.push("/products");
  };

  const handleRecommendedAddToCart = (
    product: {
      id?: number;
      name: string;
      price: string;
      category: string;
      rating: string;
    },
    e: React.MouseEvent
  ) => {
    e.stopPropagation(); // Prevent navigation when clicking add to cart
    const recommendedProduct = {
      id: product.id || Math.random(),
      name: product.name,
      price: parseFloat(product.price.replace("$", "")),
      image_url: "/product-details-2.png",
      currency: "USD",
    };

    dispatch(
      addToCart({
        items: recommendedProduct,
        quantity: 1,
        cartId: `${recommendedProduct.id}-${Date.now()}`,
      })
    );
    // Open the cart sidebar after adding item
    dispatch(openCart());
  };

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

  const recommendedProducts = [
    {
      id: 2,
      name: "Red capsicum",
      price: "$20.00",
      category: "Vegetables",
      rating: "(4.5)",
    },
    {
      id: 3,
      name: "Red capsicum",
      price: "$20.00",
      category: "Vegetables",
      rating: "(4.5)",
    },
    {
      id: 4,
      name: "Red capsicum",
      price: "$20.00",
      category: "Vegetables",
      rating: "(4.5)",
    },
    {
      id: 5,
      name: "Red capsicum",
      price: "$20.00",
      category: "Vegetables",
      rating: "(4.5)",
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
    <div className="w-full bg-white overflow-hidden">
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
          <div className="flex flex-col xl:flex-row justify-center items-start gap-8 md:gap-12 lg:gap-16">
            {/* Product Images */}
            <motion.div
              className="w-full xl:w-1/2 flex flex-col gap-4 md:gap-5"
              variants={fadeInLeft}
            >
              <motion.div
                className="relative"
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                layoutId="mainImage"
              >
                <Image
                  className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[550px] object-cover rounded-2xl shadow-lg"
                  src="/product-details-1.jpg"
                  alt="Ripe Mango"
                  width={600}
                  height={550}
                />
              </motion.div>
              <motion.div
                className="grid grid-cols-3 gap-3 md:gap-4"
                variants={stagger}
              >
                {thumbnails.map((thumb, index) => (
                  <motion.div
                    key={index}
                    className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-2 ring-red-700 shadow-lg"
                        : "ring-1 ring-gray-200 hover:ring-red-300"
                    }`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      className="w-full h-24 sm:h-28 md:h-32 object-cover"
                      src={thumb}
                      alt={`Mango view ${index + 1}`}
                      width={150}
                      height={120}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="w-full xl:w-1/2 flex flex-col gap-6 md:gap-8"
              variants={fadeInRight}
            >
              {/* Product Title and Price */}
              <motion.div className="flex flex-col gap-3" variants={fadeInUp}>
                <motion.h1
                  className="text-stone-800 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Ripe Mango
                </motion.h1>
                <div className="flex items-center gap-4">
                  <motion.p
                    className="text-red-700 text-2xl sm:text-3xl md:text-4xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    AED150.00
                  </motion.p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(4.5)</span>
                  </div>
                </div>
              </motion.div>

              {/* Product Description */}
              <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                <h3 className="text-black text-xl font-semibold">
                  Product Description:
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Fresh tropical mango packed with natural sweetness and
                  essential nutrients. Rich in vitamins A and C, dietary fiber,
                  and antioxidants. Carefully selected from premium orchards to
                  ensure optimal ripeness and flavor. Perfect for healthy
                  snacking, smoothies, or desserts.
                </p>

                {/* Product Features */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Fresh & Organic
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Rich in Vitamins
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Premium Quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">Fast Delivery</span>
                  </div>
                </div>
              </motion.div>

              {/* Quantity and Add to Cart */}
              <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <motion.button
                      className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-200"
                      whileHover={{ scale: 1.1, backgroundColor: "#FEE2E2" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    </motion.button>

                    <motion.div
                      className="w-16 h-10 bg-gray-50 rounded-lg flex justify-center items-center border"
                      key={quantity}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-gray-800 text-lg font-medium">
                        {quantity}
                      </span>
                    </motion.div>

                    <motion.button
                      className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-200"
                      whileHover={{ scale: 1.1, backgroundColor: "#FEE2E2" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
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

                <div className="flex gap-4">
                  <motion.button
                    className="flex-1 px-6 py-4 bg-red-700 hover:bg-red-800 text-white text-lg font-semibold rounded-xl cursor-pointer transition-colors duration-200 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                      />
                    </svg>
                    Add To Cart
                  </motion.button>

                  <motion.button
                    className="px-4 py-4 border-2 border-red-700 text-red-700 hover:bg-red-50 rounded-xl cursor-pointer transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>

              {/* Social Share */}
              <motion.div className="flex flex-col gap-3" variants={fadeInUp}>
                <h4 className="text-gray-700 font-medium">
                  Share this product:
                </h4>
                <motion.div className="flex gap-3" variants={stagger}>
                  {[
                    {
                      name: "Facebook",
                      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                    },
                    {
                      name: "Twitter",
                      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                    },
                    {
                      name: "Instagram",
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    },
                  ].map((social, index) => (
                    <motion.button
                      key={index}
                      className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200"
                      whileHover={{ scale: 1.1, backgroundColor: "#FEE2E2" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </motion.button>
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
                    className={`pb-3 md:pb-4 text-sm md:text-base font-medium transition-colors cursor-pointer duration-300 whitespace-nowrap ${
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
              <h3 className="text-black text-xl md:text-2xl font-medium leading-6">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-neutral-800 text-sm md:text-base font-light leading-6 text-justify">
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
            className="text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-widest mb-8 md:mb-14"
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
                className="p-4 md:p-6 bg-gradient-to-r from-red-600 via-red-700 to-red-900 rounded-2xl border border-rose-100 flex justify-between items-center cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <motion.div className="relative">
                    <Image
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-lg object-cover"
                      src="/product-details-2.png"
                      alt={product.name}
                      width={96}
                      height={96}
                    />
                  </motion.div>
                  <span className="text-white text-lg md:text-xl font-semibold">
                    {product.name}
                  </span>
                </div>
                <span className="text-white text-xl md:text-2xl font-bold">
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
                className="flex flex-col gap-3"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative h-56 md:h-64 p-4 rounded-2xl shadow-lg bg-white cursor-pointer overflow-hidden group"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRecommendedProductClick}
                >
                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                    <motion.button
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: "#FEE2E2" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#DC2626",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleRecommendedAddToCart(product, e)}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Product image */}
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/product-details-2.png"
                      alt={product.name}
                      width={300}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm font-medium">
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
                      <span className="text-gray-600 text-sm">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h4 className="text-gray-900 text-lg font-semibold leading-tight">
                      {product.name}
                    </h4>
                    <span className="text-red-700 text-xl font-bold">
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
