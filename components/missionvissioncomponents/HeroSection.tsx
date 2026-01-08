"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import whitelogo2 from "@/public/whitelogo2.png";

export default function HeroSection({ isAr }: { isAr: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const title = sectionRef.current.querySelector("h1");

    // الحالة الابتدائية للنص
    gsap.set(title, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#397a34] text-white text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl centert font-extrabold mb-6">
          {isAr ? "رسالتنا ورؤيتنا" : "Mission & Vision"}
        </h1>
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src={whitelogo2}
          alt="Logo"
          fill
          className="object-contain"
          priority // تحميل مسبق بدون blur
        />
      </div>
    </section>
  );
}
