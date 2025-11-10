"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "@/components/Common/CommonHeader";
import Question from "@/components/Question";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <CommonHeader
          heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
          heroTitle="FAQ"
          heroDescription="Discover the finest menus in town with Excellency."
        />
      </div>
      <div data-aos="fade-up">
        <Question />
      </div>
    </div>
  );
}
