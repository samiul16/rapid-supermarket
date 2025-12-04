"use client";

import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface CommonHeaderProps {
  heroImage?: string;
  heroTitle?: string;
  heroDescription?: string;
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function CommonHeader({
  heroImage = "/default-hero.jpg",
  heroTitle,
  breadcrumbs,
  heroDescription,
  className = "",
}: CommonHeaderProps) {
  const shouldShowHero = heroTitle || heroDescription;

  return (
    <>
      {/* Hero Section with Background Image */}
      {shouldShowHero && (
        <div className="relative w-full h-[40vh] overflow-hidden">
          {/* Background Image */}
          <Image
            src={heroImage}
            alt={heroTitle || "Hero"}
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20">
            {heroTitle && (
              <h1 className="text-5xl font-bold text-white mb-4">
                {heroTitle}
              </h1>
            )}
            {heroDescription && (
              <p className="text-white text-lg max-w-2xl">{heroDescription}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
