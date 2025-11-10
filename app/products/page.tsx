"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Eye, Heart, Plus, Minus } from "lucide-react";
import CommonHeader from "@/components/Common/CommonHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/hooks/useAddToCart";
import Deliver from "@/components/Deliver";
import DownloadOurApp from "@/components/DownloadOurApp";

const Products = () => {
  const router = useRouter();
  const { addToCartGlobal } = useAddToCart();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Fish",
    "Vegetables",
    "Meat",
    "Masala",
    "Chips",
    "Food",
    "Sea Food",
    "Sweets",
  ]);
  const [selectedFishes, setSelectedFishes] = useState<string[]>([]);
  const [selectedWeights, setSelectedWeights] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 5, max: 500 });
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const categories = [
    { name: "Fish", count: 2 },
    { name: "Vegetables", count: 2 },
    { name: "Meat", count: 2 },
    { name: "Masala", count: 2 },
    { name: "Chips", count: 2 },
    { name: "Food", count: 2 },
    { name: "Sea Food", count: 2 },
    { name: "Sweets", count: 2 },
  ];

  const fishes = [
    { name: "Hilsha", count: 2 },
    { name: "Hilsha", count: 2 },
    { name: "Hilsha", count: 2 },
    { name: "Hilsha", count: 2 },
    { name: "Hilsha", count: 2 },
    { name: "Hilsha", count: 2 },
    { name: "Hilsha", count: 2 },
    { name: "Hilsha", count: 2 },
  ];

  const weights = [
    { name: "0.5kg", count: 2 },
    { name: "2kg", count: 2 },
    { name: "3kg", count: 2 },
    { name: "4kg", count: 2 },
    { name: "5kg", count: 2 },
    { name: "6kg", count: 2 },
    { name: "7kg", count: 2 },
    { name: "8kg", count: 2 },
  ];

  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Fresh Bell Peppers",
        price: 12.99,
        priceText: "AED12.99",
        image:
          "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80",
        rating: 4,
        description: "Fresh colorful bell peppers, rich in vitamins",
        category: "Vegetables",
        isFeatured: false,
      },
      {
        id: 2,
        name: "Premium Beef Selection",
        price: 45.99,
        priceText: "AED45.99",
        image:
          "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
        rating: 5,
        description: "High quality fresh beef cuts for your meals",
        category: "Meat",
        isFeatured: false,
      },
      {
        id: 3,
        name: "Noor Frylite Vegetable Oil",
        price: 18.99,
        priceText: "AED18.99",
        image:
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80",
        rating: 4,
        description: "Pure vegetable oil for healthy cooking - 1.5L",
        category: "Food",
        isFeatured: true,
      },
      {
        id: 4,
        name: "Fresh Hilsha Fish",
        price: 38.99,
        priceText: "AED38.99",
        image:
          "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=500&q=80",
        rating: 4,
        description: "Premium quality fresh Hilsha fish",
        category: "Fish",
        isFeatured: false,
      },
      {
        id: 5,
        name: "Fresh Orange",
        price: 8.99,
        priceText: "AED8.99",
        image:
          "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&q=80",
        rating: 5,
        description: "Sweet and juicy fresh oranges",
        category: "Vegetables",
        isFeatured: false,
      },
      {
        id: 6,
        name: "Organic Bell Peppers Mix",
        price: 15.99,
        priceText: "AED15.99",
        image:
          "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80",
        rating: 5,
        description: "Organic mixed bell peppers, farm fresh",
        category: "Vegetables",
        isFeatured: false,
      },
      {
        id: 7,
        name: "Vegetables",
        price: 14.99,
        priceText: "AED14.99",
        image:
          "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80",
        rating: 5,
        description: "Fresh red bell peppers, sweet and crunchy",
        category: "Vegetables",
        isFeatured: false,
      },
      {
        id: 8,
        name: "Extra Virgin Olive Oil",
        price: 24.99,
        priceText: "AED24.99",
        image:
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80",
        rating: 5,
        description: "Premium extra virgin olive oil - 1L",
        category: "Food",
        isFeatured: false,
      },
      {
        id: 9,
        name: "Wagyu Beef Steak",
        price: 89.99,
        priceText: "AED89.99",
        image:
          "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
        rating: 5,
        description: "Premium Wagyu beef steak, tender and juicy",
        category: "Meat",
        isFeatured: false,
      },
      {
        id: 10,
        name: "Yellow Bell Peppers",
        price: 11.99,
        priceText: "AED11.99",
        image:
          "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80",
        rating: 4,
        description: "Fresh yellow bell peppers, vitamin rich",
        category: "Vegetables",
        isFeatured: false,
      },
      {
        id: 11,
        name: "Sunflower Cooking Oil",
        price: 16.99,
        priceText: "AED16.99",
        image:
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80",
        rating: 5,
        description: "Pure sunflower oil for everyday cooking",
        category: "Food",
        isFeatured: false,
      },
      {
        id: 12,
        name: "Lamb Chops",
        price: 52.99,
        priceText: "AED52.99",
        image:
          "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
        rating: 5,
        description: "Fresh lamb chops, perfect for grilling",
        category: "Meat",
        isFeatured: false,
      },
    ],
    []
  );

  const getQuantity = (productId: number) => quantities[productId] || 1;

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const toggleFish = (fishName: string) => {
    setSelectedFishes((prev) =>
      prev.includes(fishName)
        ? prev.filter((f) => f !== fishName)
        : [...prev, fishName]
    );
  };

  const toggleWeight = (weightName: string) => {
    setSelectedWeights((prev) =>
      prev.includes(weightName)
        ? prev.filter((w) => w !== weightName)
        : [...prev, weightName]
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategories.includes(product.category) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
  );

  const calculateSliderPosition = () => {
    const minPrice = 5;
    const maxPrice = 500;
    return ((priceRange.max - minPrice) / (maxPrice - minPrice)) * 100;
  };

  return (
    <>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #7f1d1d;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #991b1b;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #7f1d1d #f3f4f6;
        }

        /* Custom red checkbox styling */
        input[type="checkbox"] {
          accent-color: #7f1d1d;
          border: none;
          outline: none;
        }
        input[type="checkbox"]:checked {
          background-color: #7f1d1d;
          border: none;
        }
        input[type="checkbox"]:focus {
          outline: none;
          box-shadow: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          background: #7f1d1d;
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: #7f1d1d;
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <CommonHeader
          heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
          heroTitle="Product"
          heroDescription="Discover the finest menus in town with Excellency."
        />

        {/* Main Content */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">
              {/* Price Range */}
              <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6">
                <div className="text-center mb-5">
                  <span className="text-xl text-red-700 font-bold">
                    AED {priceRange.min} to AED {priceRange.max}
                  </span>
                </div>

                {/* Slider */}
                <div className="mb-5 relative px-1">
                  <input
                    type="range"
                    min="5"
                    max="500"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        max: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #7f1d1d 0%, #7f1d1d ${calculateSliderPosition()}%, #d1d5db ${calculateSliderPosition()}%, #d1d5db 100%)`,
                    }}
                  />
                </div>

                <div className="flex gap-3 items-center justify-center">
                  <div className="flex-1 px-3 py-2 text-lg border-2 border-red-100 text-red-700 rounded-2xl bg-white font-bold text-center">
                    AED {priceRange.min}
                  </div>
                  <span className="text-red-300 font-bold text-2xl">—</span>
                  <div className="flex-1 px-3 py-2 text-lg border-2 border-red-100 text-red-700 rounded-2xl bg-white font-bold text-center">
                    AED {priceRange.max}
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-sm border border-red-200 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 bg-red-900 text-white rounded-t-2xl">
                  <h2 className="text-base font-semibold">Categories</h2>
                  <span className="text-xs bg-white text-red-900 px-2.5 py-1 rounded-md font-semibold">
                    16
                  </span>
                </div>
                <div className="p-4 space-y-0.5 max-h-80 overflow-y-auto custom-scrollbar">
                  {categories.map((category, index) => (
                    <label
                      key={category.name + index}
                      className="flex items-center justify-between cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => toggleCategory(category.name)}
                          className="w-4 h-4 text-red-900 rounded cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {category.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fishes */}
              <div className="bg-white rounded-2xl shadow-sm border border-red-200 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 bg-red-900 text-white rounded-t-2xl">
                  <h2 className="text-base font-semibold">Fishes</h2>
                  <span className="text-xs bg-white text-red-900 px-2.5 py-1 rounded-md font-semibold">
                    16
                  </span>
                </div>
                <div className="p-4 space-y-0.5 max-h-80 overflow-y-auto custom-scrollbar">
                  {fishes.map((fish, index) => (
                    <label
                      key={fish.name + index}
                      className="flex items-center justify-between cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedFishes.includes(fish.name + index)}
                          onChange={() => toggleFish(fish.name + index)}
                          className="w-4 h-4 text-red-900 rounded cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {fish.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {fish.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Weight */}
              <div className="bg-white rounded-2xl shadow-sm border border-red-200 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 bg-red-900 text-white rounded-t-2xl">
                  <h2 className="text-base font-semibold">Weight</h2>
                  <span className="text-xs bg-white text-red-900 px-2.5 py-1 rounded-md font-semibold">
                    16
                  </span>
                </div>
                <div className="p-4 space-y-0.5 max-h-80 overflow-y-auto custom-scrollbar">
                  {weights.map((weight, index) => (
                    <label
                      key={weight.name + index}
                      className="flex items-center justify-between cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedWeights.includes(weight.name)}
                          onChange={() => toggleWeight(weight.name)}
                          className="w-4 h-4 text-red-900 rounded cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {weight.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {weight.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -4 }}
                    className={`bg-white rounded-3xl shadow-lg overflow-hidden ${
                      product.isFeatured ? "" : ""
                    }`}
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square bg-gray-50">
                      <Image
                        fill
                        src={product.image}
                        alt={product.name}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Action Icons */}
                      <div className="absolute top-4 right-4 flex flex-col gap-3">
                        <button
                          onClick={() =>
                            setPreviewImage({
                              url: product.image,
                              name: product.name,
                            })
                          }
                          className="w-12 h-12 bg-red-50 rounded-full shadow-md flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <Eye className="w-5 h-5 text-red-600" />
                        </button>
                        <button className="w-12 h-12 bg-red-50 rounded-full shadow-md flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                          <Heart className="w-5 h-5 text-red-600" />
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-5 space-y-2">
                      {/* Title and Price Row */}
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-gray-900 font-bold text-base whitespace-nowrap">
                          {product.name}
                        </h3>
                        <p className="text-red-600 font-bold text-[15px] whitespace-nowrap">
                          {product.priceText}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 text-base mb-3">
                        {product.description}
                      </p>

                      {/* Star Rating and Quantity Controls */}
                      <div className="flex items-center justify-between mb-6">
                        {/* Star Rating */}
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-6 h-6 ${
                                i < product.rating
                                  ? "text-orange-400 fill-current"
                                  : "text-gray-300 fill-current"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2 py-1">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                          >
                            <Minus className="w-5 h-5" />
                          </button>
                          <span className="text-xl font-bold w-8 text-center text-gray-900">
                            {getQuantity(product.id)}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => {
                          const productData = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            image_url: product.image,
                            priceText: product.priceText,
                            rating: product.rating,
                            description: product.description,
                            category: product.category,
                            isFeatured: product.isFeatured,
                          };
                          addToCartGlobal(
                            productData,
                            product.id,
                            getQuantity(product.id),
                            () => {}
                          );
                        }}
                        className="w-full py-3 bg-red-800 text-white text-lg font-bold rounded-full hover:bg-red-800 transition-colors cursor-pointer focus:outline-none shadow"
                      >
                        Add To Card
                      </button>
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

        {/* Image Preview Modal */}
        <AnimatePresence>
          {previewImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[60vw] h-[60vh] bg-white rounded-2xl overflow-hidden shadow-2xl cursor-default"
              >
                {/* Close Button */}
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Image */}
                <div className="relative w-full h-[calc(100%-80px)]">
                  <Image
                    src={previewImage.url}
                    alt={previewImage.name}
                    fill
                    className="object-contain"
                    sizes="60vw"
                  />
                </div>

                {/* Product Name */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-gray-50">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    {previewImage.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Products;
