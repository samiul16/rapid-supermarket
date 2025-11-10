"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "@/components/HeroSection";
import OurProducts from "@/components/OurProducts";
import OurOffer from "./OurOffer";
import TopSelling from "./TopSelling";
import Recomended from "./Recomended";
import FlashSale from "@/components/FlashSale";
import ClientTestimonials from "@/components/ClientTestimonials";
import TwoCard from "@/components/Two-Card";
import Subscribe from "@/components/Subscribe";
import DownloadOurApp from "@/components/DownloadOurApp";
import Stats from "@/components/Stats";
import TopCategories from "@/components/TopCategories";
import BannerSection from "@/components/BannerSection";
import PopularProducts from "@/components/PopularProducts";
import Testimonial from "@/components/Testimonial";
import Wishes from "@/components/Wishes";
import Deliver from "@/components/Deliver";
import Experience from "@/components/Experience";
import OurBlog from "@/components/OurBlog";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <div>
          <div>
            <HeroSection />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <TopCategories />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <Wishes />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <OurProducts />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <TopSelling />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <Deliver />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <PopularProducts />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Experience />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Testimonial />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <OurBlog />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Subscribe />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <DownloadOurApp />
          </div>
        </div>
      </main>
    </div>
  );
}
