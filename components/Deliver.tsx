import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Deliver = () => {
  const router = useRouter();

  const handleOrderNow = () => {
    router.push("/products");
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-8">
      <div className="bg-gradient-to-r from-red-700 via-red-500 to-pink-200 rounded-4xl shadow p-8 lg:p-12 flex flex-row items-center justify-between min-h-[300px] relative ">
        {/* Left Content */}
        <div className="flex-1 text-white z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            30 Minutes
            <br />
            Deliver!
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 max-w-md leading-relaxed opacity-90">
            Experience the convenience of our 30-minute delivery service!
            Whether you&apos;re craving a late-night snack or need essentials in
            a hurry.
          </p>
          <button
            onClick={handleOrderNow}
            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </span>
            Order Now
          </button>
        </div>

        {/* Right Content - Delivery Person */}
        <div className="flex-1 relative">
          {/* Empty space to maintain layout */}
        </div>

        {/* Delivery Person Image - Absolutely positioned */}
        <div className="absolute right-0 top-0 md:-top-14 bottom-0 w-[500px] h-full flex items-center justify-end">
          <div className="w-[200px] h-[180px] md:w-[550px] md:h-[450px] relative">
            <Image
              src="/delivery-man.png"
              alt="Delivery person on scooter"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-4 right-20 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-8 right-32 w-3 h-3 bg-white/30 rounded-full"></div>
        <div className="absolute top-12 right-40 w-2 h-2 bg-white/25 rounded-full"></div>
      </div>
    </div>
  );
};

export default Deliver;
