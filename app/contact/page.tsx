"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  AlertCircle,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CommonHeader from "@/components/Common/CommonHeader";
import Deliver from "@/components/Deliver";
import DownloadOurApp from "@/components/DownloadOurApp";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  description: string;
  message: string;
}

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    description: "",
    message: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const contactInfo = {
    description:
      "We're here to help you with all your grocery needs. Our fresh products and excellent customer service ensure you get the best shopping experience every time you visit us.",
    storeLocation: {
      title: "Store Location",
      address:
        "Fortune Executive - Cluster T - Jumeirah Lake Towers - Dubai - United Arab Emirates",
    },
    contactDetails: {
      title: "Contact info",
      phone: "+971 4 439 7277",
      email: "info@MizanurSuperMarket.com",
      openingHours: "9 am - 6 pm",
      closedDay: "Sunday",
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          description: "",
          message: "",
        });
        setAgreeToTerms(false);

        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="w-full bg-white">
        <CommonHeader
          heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
          heroTitle="Contact Us"
          heroDescription="Discover the finest menus in town with Excellency."
        />
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-28 py-20">
          {/* Page Title */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the from below or schedule a meeting with us at your
              convenience.
            </p>
          </motion.div>

          {/* Main Contact Container - Single Pink Box */}
          <motion.div
            className="bg-[#FFF0F0] rounded-3xl shadow-sm p-6 sm:p-8 lg:p-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Side - Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <AnimatePresence>
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className={`mb-5 p-4 rounded-lg flex items-start gap-3 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.type === "success" ? (
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm font-medium leading-relaxed">
                          {submitStatus.message}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        required
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-4 py-3 bg-white rounded-full border-0 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        required
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-4 py-3 bg-white rounded-full border-0 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white rounded-2xl border-0 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-red-700 focus:ring-red-500 cursor-pointer"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      I agree to the{" "}
                      <span className="text-red-700 font-medium">
                        terms & conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-red-700 font-medium">
                        privacy policy
                      </span>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !agreeToTerms}
                    className={`w-full px-8 py-4 bg-red-700 hover:bg-red-800 rounded-full text-white text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isSubmitting || !agreeToTerms
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-lg"
                    }`}
                    whileHover={{
                      scale: isSubmitting || !agreeToTerms ? 1 : 1.02,
                    }}
                    whileTap={{
                      scale: isSubmitting || !agreeToTerms ? 1 : 0.98,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Right Side - Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Contact Us
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {contactInfo.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {contactInfo.storeLocation.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {contactInfo.storeLocation.address}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {contactInfo.contactDetails.title}
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-gray-600">
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      <a
                        href={`tel:${contactInfo.contactDetails.phone}`}
                        className="hover:text-red-700 transition-colors"
                      >
                        {contactInfo.contactDetails.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">E-mail:</span>{" "}
                      <a
                        href={`mailto:${contactInfo.contactDetails.email}`}
                        className="hover:text-red-700 transition-colors"
                      >
                        {contactInfo.contactDetails.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Opening Hours:</span>{" "}
                      {contactInfo.contactDetails.openingHours}
                    </p>
                    <p>
                      <span className="font-medium">Close:</span>{" "}
                      {contactInfo.contactDetails.closedDay}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trending Products Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Promotional Banner */}
            <motion.div
              className="bg-[#FFF0F0] rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <div className="inline-block bg-red-700 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Get35% Off
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  Leek Autumn Giant 45 Heirloom & Organic Canadian.
                </h3>
              </div>
              <div className="space-y-4">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&q=80"
                    alt="Fresh vegetables basket"
                    fill
                    className="object-cover w-full h-full rounded-xl"
                    sizes="200px"
                  />
                </div>
                <button
                  onClick={() => router.push("/products")}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Trending Products Grid */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trending Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    id: 1,
                    name: "Banana",
                    price: 20.0,
                    image:
                      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
                    category: "Vegetables",
                    rating: 4.5,
                  },
                  {
                    id: 2,
                    name: "Mutton",
                    price: 20.0,
                    image:
                      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80",
                    category: "Grocery",
                    rating: 4.5,
                  },
                  {
                    id: 3,
                    name: "Frozen Food",
                    price: 20.0,
                    image:
                      "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&q=80",
                    category: "Grocery",
                    rating: 4.5,
                  },
                ].map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: product.id * 0.1 }}
                  >
                    <div className="relative aspect-square bg-gray-50 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover w-full h-full"
                        sizes="300px"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-orange-400 fill-current"
                                  : "text-gray-300 fill-current"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-600 ml-1">
                            ({product.rating})
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-red-700 font-bold text-xl">
                          AED {product.price.toFixed(2)}
                        </p>
                        <button className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                          <ShoppingCart className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-20">
          <Deliver />
        </div>

        <div className="my-20">
          <DownloadOurApp />
        </div>
      </div>
    </>
  );
}
