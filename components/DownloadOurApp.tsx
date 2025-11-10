import React from "react";
import Image from "next/image";
import Link from "next/link";

const DownloadOurApp = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-28 py-12">
      <div className="bg-[#630700] rounded-4xl relative min-h-[400px] sm:min-h-[500px] shadow-lg">
        {/* Background Decorative Waves */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <path
              d="M0,100 Q125,50 250,100 T500,100 L500,500 L0,500 Z"
              fill="currentColor"
              className="text-red-700"
            />
            <path
              d="M0,200 Q125,150 250,200 T500,200 L500,500 L0,500 Z"
              fill="currentColor"
              className="text-red-600"
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:px-12 lg:px-16">
          {/* Left Side - Phone Mockups */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Phone images */}
              <div className="relative h-96">
                {/* Secondary Phone - Background/Left */}
                <div className="absolute left-0 top-0 md:-top-[50%] w-56 sm:w-64 h-80 sm:h-[600px] z-0">
                  <Image
                    src="/download-app/1.png"
                    alt="App Screenshot 2"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Main Phone - Foreground/Right */}
                <div className="absolute right-4 top-0 md:-top-[40%] w-56 sm:w-64 h-80 sm:h-[600px] z-10">
                  <Image
                    src="/download-app/2.png"
                    alt="App Screenshot 1"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Download our app
            </h2>

            <p className="text-gray-200 text-base sm:text-lg max-w-md">
              Explore delicious dishes and reserve your with our new app easily.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* App Store Button */}
              <Link
                href="https://apps.apple.com/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>

              {/* Play Store Button */}
              <Link
                href="https://play.google.com/store/apps/details?id=your.app.package"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Play Store</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOurApp;
