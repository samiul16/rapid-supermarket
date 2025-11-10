"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  subtotal: number;
}

interface CartProps {
  items?: CartItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
  onClearCart?: () => void;
  onContinueShopping?: () => void;
  onProceedToCheckout?: () => void;
  onApplyCoupon?: (code: string) => void;
}

export default function Cart({
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
  onProceedToCheckout,
  onApplyCoupon,
}: CartProps) {
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");

  // Mock data for demonstration
  const initialMockItems: CartItem[] = [
    {
      id: "1",
      name: "Fresh Organic Avocado",
      description: "Premium quality, ripe and ready to eat.",
      price: 45,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80",
      subtotal: 45,
    },
    {
      id: "2",
      name: "Artisan Sourdough Bread",
      description: "Freshly baked with organic flour.",
      price: 35,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
      subtotal: 35,
    },
    {
      id: "3",
      name: "Organic Cherry Tomatoes",
      description: "Sweet and juicy, perfect for salads.",
      price: 28,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
      subtotal: 28,
    },
    {
      id: "4",
      name: "Fresh Salmon Fillet",
      description: "Wild-caught, premium quality fish.",
      price: 120,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
      subtotal: 120,
    },
  ];

  // Use state to manage cart items dynamically
  const [cartItems, setCartItems] = useState<CartItem[]>(
    items.length > 0 ? items : initialMockItems
  );

  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const shippingFee = 0;
  const totalOrder = subtotal + shippingFee;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              subtotal: item.price * newQuantity,
            }
          : item
      )
    );

    onUpdateQuantity?.(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    onRemoveItem?.(id);
  };

  const handleClearCart = () => {
    setCartItems([]);
    onClearCart?.();
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      onApplyCoupon?.(couponCode);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-8 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-pink-50 rounded-2xl shadow-sm p-4 sm:p-6">
              {/* Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-semibold text-gray-600">
                <div className="col-span-5">Items</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-center">Sub Total</div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 sm:py-5">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="col-span-5 flex items-center space-x-3">
                        <div className="relative w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-center">
                        <span className="text-sm font-bold text-gray-900">
                          AED. {item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="col-span-3 flex items-center justify-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 rounded-full border border-red-700 flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer text-red-700"
                          disabled={item.quantity <= 1}
                        >
                          <span className="text-base font-bold">−</span>
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full border border-red-700 flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer text-red-700"
                        >
                          <span className="text-base font-bold">+</span>
                        </button>
                      </div>

                      {/* Subtotal & Remove */}
                      <div className="col-span-2 flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900">
                          AED. {item.subtotal.toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="w-6 h-6 rounded-full text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center cursor-pointer"
                        >
                          <span className="text-xl">⊗</span>
                        </button>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="relative w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-gray-900">
                                {item.name}
                              </h3>
                              <p className="text-xs text-gray-500 mt-1">
                                {item.description}
                              </p>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="ml-2 w-6 h-6 rounded-full text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center cursor-pointer"
                            >
                              <span className="text-xl">⊗</span>
                            </button>
                          </div>
                          <div className="mt-2 text-sm font-bold text-gray-900">
                            AED. {item.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full border border-red-700 flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer text-red-700"
                            disabled={item.quantity <= 1}
                          >
                            <span className="text-base font-bold">−</span>
                          </button>
                          <span className="w-10 text-center text-sm font-bold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full border border-red-700 flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer text-red-700"
                          >
                            <span className="text-base font-bold">+</span>
                          </button>
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          Subtotal: AED. {item.subtotal.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row justify-between gap-4">
                <button
                  onClick={handleClearCart}
                  className="px-6 sm:px-8 py-3 border-2 border-red-700 text-red-700 rounded-full hover:bg-red-50 transition-colors text-sm font-semibold cursor-pointer shadow"
                >
                  Clear shopping Cart
                </button>
                <button
                  onClick={onContinueShopping}
                  className="px-6 sm:px-8 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors text-sm font-semibold cursor-pointer shadow"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-pink-50 rounded-2xl shadow-sm p-4 sm:p-6 lg:sticky lg:top-8">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
                Orders Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    AED. {subtotal.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping fee</span>
                  <span className="font-semibold text-gray-900">
                    AED. {shippingFee.toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-900">Total Order</span>
                    <span className="text-gray-900">
                      AED. {totalOrder.toFixed(0)}
                    </span>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="pt-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-red-700 rounded-full"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 sm:px-5 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors text-sm font-semibold cursor-pointer shadow"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => {
                    onProceedToCheckout?.();
                    router.push("/checkout");
                  }}
                  className="w-full mt-4 px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors font-bold cursor-pointer uppercase text-sm shadow"
                >
                  PROCESS TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                name: "Red capsicum",
                price: 20.0,
                image:
                  "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&q=80",
                rating: 4.5,
                category: "Vegetables",
              },
              {
                id: 2,
                name: "Red capsicum",
                price: 20.0,
                image:
                  "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80",
                rating: 4.5,
                category: "Vegetables",
              },
              {
                id: 3,
                name: "Red capsicum",
                price: 20.0,
                image:
                  "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=400&q=80",
                rating: 4.5,
                category: "Vegetables",
              },
              {
                id: 4,
                name: "Red capsicum",
                price: 20.0,
                image:
                  "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80",
                rating: 4.5,
                category: "Vegetables",
              },
            ].map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                  <button className="absolute top-16 right-4 w-10 h-10 bg-red-700 rounded-full shadow flex items-center justify-center hover:bg-red-800 transition-colors cursor-pointer">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
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
                  <h3 className="font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-red-700 font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-12 sm:mt-16 md:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                id: 1,
                name: "Bread",
                price: 30.0,
                image:
                  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
              },
              {
                id: 2,
                name: "Rice",
                price: 70.0,
                image:
                  "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
              },
              {
                id: 3,
                name: "Banana",
                price: 15.0,
                image:
                  "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
              },
              {
                id: 4,
                name: "Apple",
                price: 15.0,
                image:
                  "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-red-200 to-red-700 rounded-3xl p-4 sm:p-6 flex items-center justify-between shadow hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 64px, 80px"
                    />
                  </div>
                  <span className="text-white font-semibold text-base sm:text-xl">
                    {item.name}
                  </span>
                </div>
                <span className="text-white font-bold text-lg sm:text-2xl whitespace-nowrap ml-2">
                  AED{item.price.toFixed(0)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
