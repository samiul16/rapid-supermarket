import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Wishes = () => {
  const router = useRouter();

  const handleShopNow = () => {
    router.push("/products");
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-4 sm:py-8">
      {/* Top Row - Two Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Fresh Products Card */}
        <div className="bg-rose-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-row items-center justify-between min-h-[180px] sm:min-h-[200px] shadow">
          <div className="flex-1 text-left">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
              Everyday fresh &<br />
              clean with our
              <br />
              products
            </h3>
            <button
              onClick={handleShopNow}
              className="bg-red-800 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-red-900 transition-colors flex items-center gap-2 cursor-pointer rounded-full shadow"
            >
              <Image
                src="/cart.svg"
                alt="Cart"
                width={14}
                height={14}
                className="sm:w-4 sm:h-4"
              />
              Shop Now
            </button>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-32 h-24 sm:w-48 md:w-64 sm:h-36 md:h-48 relative">
              <Image
                src="/wishes/1.png"
                alt="Fresh Products"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Healthy Breakfast Card */}
        <div className="bg-green-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-row items-center justify-between min-h-[180px] sm:min-h-[200px] shadow">
          <div className="flex-1 text-left">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
              Make your
              <br />
              breakfast healthy
              <br />
              and easy
            </h3>
            <button
              onClick={handleShopNow}
              className="bg-teal-700 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-teal-800 transition-colors flex items-center gap-2 shadow cursor-pointer rounded-full"
            >
              <Image
                src="/cart.svg"
                alt="Cart"
                width={14}
                height={14}
                className="sm:w-4 sm:h-4"
              />
              Shop Now
            </button>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-32 h-24 sm:w-48 md:w-64 sm:h-36 md:h-48 relative">
              <Image
                src="/wishes/2.png"
                alt="Healthy Breakfast"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Special Sale Card */}
      <div className="bg-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between min-h-[200px] shadow gap-4 lg:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
          {/* Product Packages */}
          <div className="flex justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] relative">
              <Image
                src="/wishes/milk.png"
                alt="Package 1"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Sale Content */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Special Weekend Sale!
            </h3>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-3 sm:mb-4">
              50% off
            </div>
            <button
              onClick={handleShopNow}
              className="bg-red-600 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2 cursor-pointer shadow rounded-full mx-auto sm:mx-0"
            >
              Shop Now
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Side Food Items */}
        <div className="flex justify-center lg:justify-end w-full lg:flex-1">
          <div className="w-64 h-32 sm:w-80 sm:h-40 lg:w-[350px] lg:h-[180px] xl:w-[400px] xl:h-[200px] relative">
            <Image
              src="/wishes/33.png"
              alt="Grocery Items"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
