import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

interface FlashSaleBannerProps {
  title?: string;
  subtitle?: string;
  discount?: number;
  imageUrl?: string | StaticImageData;
  initialTimer?: {
    hours: number;
    days: number;
    minutes: number;
    seconds: number;
  };
}

const FlashSaleBanner: React.FC<FlashSaleBannerProps> = ({
  title = "Enhance Your Shoping Experience",
  subtitle = "Categories",
  discount = 30,
  imageUrl = "/aam.png",
  initialTimer = { days: 23, hours: 5, minutes: 59, seconds: 35 },
}) => {
  const router = useRouter();
  const [timer, setTimer] = useState(initialTimer);

  const [, setArrowPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Dynamic countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        let { days, hours, minutes, seconds } = prevTimer;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Arrow animation every 5 seconds
  useEffect(() => {
    const arrowInterval = setInterval(() => {
      setArrowPosition((prev) => (prev >= 100 ? 0 : prev + 25));
    }, 2500);

    return () => clearInterval(arrowInterval);
  }, []);

  // Handle shop now button click
  const handleShopNowClick = () => {
    router.push("/products");
  };

  return (
    <main className="relative w-full px-6 sm:px-4 lg:px-28">
      <div
        className="max-w-8xl mx-auto px-4 my-20 rounded-3xl overflow-hidden h-auto sm:h-[500px] shadow"
        style={{ background: "linear-gradient(to right, #FFE7E5, #8B0A00)" }}
      >
        {/* Background Glow */}
        <div className="absolute right-0 w-[504px] h-full bg-white/20 rounded-full blur-[100px] opacity-30" />

        <div className="p-3 sm:p-6 lg:p-10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5">
          <div className="w-full sm:w-1/2">
            {/* Title */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-[24px] sm:leading-[30px] md:leading-[40px] lg:leading-[60px] tracking-wide py-2 sm:py-4 lg:py-8 text-black text-center sm:text-left"
              style={{ fontFamily: "Barlow, sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {title}
            </h2>

            {/* Dynamic Timer */}
            <div
              className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-6 pb-3 sm:pb-4 lg:pb-8 justify-center sm:justify-start"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {Object.entries(timer).map(([label, value], index) => (
                <div
                  key={label}
                  className="w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 relative transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 100}
                >
                  <div className="absolute inset-0 bg-red-700/50 rounded-full shadow-md" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div
                      className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-bold"
                      style={{ fontFamily: "Barlow, sans-serif" }}
                    >
                      {String(value).padStart(2, "0")}
                    </div>
                    <div
                      className="text-white text-[8px] sm:text-[10px] md:text-xs font-normal text-center capitalize"
                      style={{ fontFamily: "Barlow, sans-serif" }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Now Button */}
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex justify-center sm:justify-start flex-row"
            >
              <button
                onClick={handleShopNowClick}
                className="bg-red-700/70 hover:bg-red-700 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors cursor-pointer shadow text-sm sm:text-base"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Right Side: Image + Discount Badge */}
          <div
            className="relative w-full sm:w-1/2 flex justify-center sm:justify-end items-start mt-4 sm:mt-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {/* Discount Badge */}
            <div
              className="absolute top-2 right-2 sm:top-0 sm:right-0 w-24 sm:w-32 md:w-40 lg:w-48 h-12 sm:h-16 md:h-20 lg:h-24 z-10"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              {/* SVG Background */}
              <div className="absolute inset-0">
                <Image
                  src="/rect.svg"
                  alt="Discount Badge Background"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-2">
                <div
                  className="text-red-800 text-xs sm:text-sm md:text-base font-semibold mb-1"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  upto
                </div>
                <div
                  className="text-red-700 text-lg sm:text-2xl md:text-3xl font-bold leading-none"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  {discount}%{" "}
                  <span className="text-sm sm:text-base md:text-lg font-semibold">
                    off
                  </span>
                </div>
              </div>
            </div>

            {/* Static Image */}
            <div
              className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-40 sm:h-48 md:h-64 lg:h-80 mt-8 sm:mt-12 lg:mt-18"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Image
                src={imageUrl}
                alt="Flash Sale"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FlashSaleBanner;
