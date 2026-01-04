"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Button2 from "../ui/Button2";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { TranslatedBanner } from "@/types";
import Link from "next/link";

type Locale = "en" | "ar";

interface BannerProps {
  banners: TranslatedBanner[];
  locale: Locale;
}

export default function Banner({ banners, locale }: BannerProps) {
  const isAr = locale === "ar";

  const [loadedImages, setLoadedImages] = React.useState<boolean[]>(
    Array(banners.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
      opts={{ align: "start", direction: isAr ? "rtl" : "ltr" }}
      className="w-full"
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={banner.name || index}>
            <div className="relative w-full aspect-video md:aspect-auto md:h-[90vh]">
              <Card className="h-full w-full">
                <CardContent className="p-0 h-full w-full relative overflow-hidden">
                  {!loadedImages[index] && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 z-10" />
                  )}

                  <Image
                    src={banner.image || ""}
                    alt={banner.name || ""}
                    fill
                    priority={index === 0}
                    className={`object-cover transition-opacity duration-700 ${
                      loadedImages[index] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(index)}
                  />

                

             
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
