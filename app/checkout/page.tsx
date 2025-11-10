"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tag, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import CommonHeader from "@/components/Common/CommonHeader";
import DownloadOurApp from "@/components/DownloadOurApp";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  zip: string;
  description: string;
}

interface ShippingOption {
  id: string;
  name: string;
  duration: string;
  price: number;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const CheckoutPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    zip: "",
    description: "",
  });

  const [selectedShipping, setSelectedShipping] = useState<string>("express");
  const [selectedPayment, setSelectedPayment] = useState<string>("cod");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const shippingOptions: ShippingOption[] = [
    {
      id: "free",
      name: "Free Shipping",
      duration: "7-20 Days",
      price: 0,
    },
    {
      id: "express",
      name: "Express Shipping",
      duration: "1-3 Days",
      price: 50,
    },
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "online",
      name: "Online Payment",
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

  const subtotal = 2500;
  const shippingFee =
    shippingOptions.find((option) => option.id === selectedShipping)?.price ||
    0;
  const discount = couponApplied ? 100 : 0;
  const total = subtotal + shippingFee - discount;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      setCouponApplied(true);
    }
  };

  const handleCheckout = () => {
    console.log("Processing checkout...", {
      formData,
      selectedShipping,
      selectedPayment,
      total,
    });
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <CommonHeader
        heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
        heroTitle="Checkout"
        heroDescription="Discover the finest menus in town with Excellency."
      />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Billing Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Billing Information
              </h2>

              <div className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all peer placeholder-transparent"
                    />
                    <label
                      className={`absolute left-4 bg-white px-2 transition-all duration-200 pointer-events-none ${
                        formData.name || focusedField === "name"
                          ? "-top-2.5 text-xs text-red-700"
                          : "top-3 text-base text-gray-500"
                      }`}
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all peer placeholder-transparent"
                    />
                    <label
                      className={`absolute left-4 bg-white px-2 transition-all duration-200 pointer-events-none ${
                        focusedField === "lastName"
                          ? "-top-2.5 text-xs text-red-700"
                          : "top-3 text-base text-gray-500"
                      }`}
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all peer placeholder-transparent"
                    />
                    <label
                      className={`absolute left-4 bg-white px-2 transition-all duration-200 pointer-events-none ${
                        formData.email || focusedField === "email"
                          ? "-top-2.5 text-xs text-red-700"
                          : "top-3 text-base text-gray-500"
                      }`}
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("mobile")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all peer placeholder-transparent"
                    />
                    <label
                      className={`absolute left-4 bg-white px-2 transition-all duration-200 pointer-events-none ${
                        formData.mobile || focusedField === "mobile"
                          ? "-top-2.5 text-xs text-red-700"
                          : "top-3 text-base text-gray-500"
                      }`}
                    >
                      Phone
                    </label>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="text-sm font-semibold text-gray-900 mb-2 block">
                    Address{" "}
                    <span className="text-red-600">This value is required</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("description")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all peer placeholder-transparent"
                    />
                    <label
                      className={`absolute left-4 bg-white px-2 transition-all duration-200 pointer-events-none ${
                        formData.description || focusedField === "description"
                          ? "-top-2.5 text-xs text-red-700"
                          : "top-3 text-base text-gray-500"
                      }`}
                    >
                      I commented in this portion
                    </label>
                  </div>
                </div>

                {/* City & Zip Code */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("city")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all peer placeholder-transparent"
                    />
                    <label
                      className={`absolute left-4 bg-white px-2 transition-all duration-200 pointer-events-none ${
                        formData.city || focusedField === "city"
                          ? "-top-2.5 text-xs text-red-700"
                          : "top-3 text-base text-gray-500"
                      }`}
                    >
                      City
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("zip")}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all peer placeholder-transparent"
                    />
                    <label
                      className={`absolute left-4 bg-white px-2 transition-all duration-200 pointer-events-none ${
                        formData.zip || focusedField === "zip"
                          ? "-top-2.5 text-xs text-red-700"
                          : "top-3 text-base text-gray-500"
                      }`}
                    >
                      Zip Code
                    </label>
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="text-sm font-semibold text-gray-900 mb-2 block">
                    Country
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }))
                    }
                    className="w-full h-12 px-4 bg-white rounded-full border-2 border-gray-300 focus:outline-none focus:border-red-700 transition-all appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                {/* Continue Button */}
                <button className="w-40 h-12 bg-red-700 text-white rounded-full font-semibold hover:bg-red-800 transition-colors cursor-pointer shadow">
                  Continue
                </button>
              </div>
            </div>

            {/* Right Section - Order Summary & Payment */}
            <div className="space-y-8">
              {/* Orders Summary */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Orders Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base text-gray-700">Subtotal</span>
                    <span className="text-base font-semibold text-gray-900">
                      AED. {subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-base text-gray-700">
                      Shipping fee
                    </span>
                    <span className="text-base font-semibold text-gray-900">
                      AED. {shippingFee.toFixed(2)}
                    </span>
                  </div>

                  <div className="h-px bg-gray-300 my-4" />

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total Order
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      AED. {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Payment Details
                </h3>

                <div className="space-y-4">
                  <p className="text-base text-gray-700 font-medium">
                    Payment methods
                  </p>

                  {/* Cash on Delivery */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={selectedPayment === "cod"}
                      onChange={() => setSelectedPayment("cod")}
                      className="w-5 h-5 text-red-700 border-gray-300 focus:ring-red-700"
                    />
                    <span className="text-base text-gray-900">
                      Cash on Delivery
                    </span>
                  </label>

                  {/* Online Payment */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={selectedPayment === "online"}
                      onChange={() => setSelectedPayment("online")}
                      className="w-5 h-5 text-red-700 border-gray-300 focus:ring-red-700"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-base text-gray-900">
                        Online Payment
                      </span>
                      <div className="flex gap-2">
                        <span className="text-blue-600 font-bold text-sm">
                          VISA
                        </span>
                        <span className="text-orange-600 font-bold text-sm">
                          MC
                        </span>
                        <span className="text-orange-500 font-bold text-sm">
                          DISCOVER
                        </span>
                        <span className="text-blue-500 font-bold text-sm">
                          PayPal
                        </span>
                      </div>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={selectedPayment === "bank"}
                      onChange={() => setSelectedPayment("bank")}
                      className="w-5 h-5 text-red-700 border-gray-300 focus:ring-red-700"
                    />
                    <span className="text-base text-gray-900">
                      Bank Transfer
                    </span>
                  </label>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full h-14 bg-red-700 text-white rounded-full font-bold text-lg hover:bg-red-800 transition-colors uppercase shadow cursor-pointer"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <DownloadOurApp />
      </div>
    </div>
  );
};

export default CheckoutPage;
