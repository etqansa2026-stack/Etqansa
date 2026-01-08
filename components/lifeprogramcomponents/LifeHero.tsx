"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ETQAN from "@/public/ETQAN.png";

export default function LifeHero({ isAr }: { isAr: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll("h1, p");

    // إعداد الحالة الابتدائية
    gsap.set(items, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2, // ظهور متتابع للعناصر
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 } // يبدأ عند ظهور 25% من القسم
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#397a34] text-white py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl centert md:text-5xl font-extrabold mb-6">
          {isAr ? "المسار الحياتي" : "Life Programs"}
        </h1>

        <p className="max-w-2xl centert mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
          {isAr
            ? "برامج تُعنى ببناء الشخصية، وتنمية المهارات السلوكية والذهنية، وتعزيز الجاهزية النفسية والاجتماعية، وتشمل مهارات التواصل، والتفكير، وإدارة الضغوط، والتخطيط، والمرونة."
            : "Programs focused on character building, developing behavioral and cognitive skills, and enhancing psychological and social readiness. These programs include communication skills, critical thinking, stress management, planning, and adaptability."}
        </p>
      </div>

      <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 opacity-20 w-40 h-full md:w-100 pointer-events-none">
        <Image 
          src={ETQAN} 
          alt="Logo" 
          fill 
          className="object-contain"
          priority 
        />
      </div>

      <div className="absolute -top-24 -right-24 w-125 h-125 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
