"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import whitelogo from "@/public/whitelogo.png";

export default function AboutHero({ isAr }: { isAr: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const title = sectionRef.current.querySelector("h1");
    const paragraph = sectionRef.current.querySelector("p");

    gsap.set([title, paragraph], { opacity: 0, y: 30 });

    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(paragraph, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#397a34] py-28 px-6 text-white flex flex-col items-center justify-center"
    >
      <div className="container mx-auto relative z-10 text-center max-w-3xl pb-5">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 centert">
          {isAr ? "من نحن" : "About Us"}
        </h1>

        <p className="text-lg md:text-xl opacity-90 leading-relaxed centert">
          {isAr
            ? "منصة تعليمية تهدف إلى تمكين الأفراد من اكتساب مهارات جديدة بسهولة."
            : "An educational platform focused on empowering people with modern and practical skills."}
        </p>
      </div>

      <div className="absolute top-1/2 right-0 transform -rotate-12 -translate-y-1/2 translate-x-1/4 opacity-20 w-100 h-full md:w-225 pointer-events-none">
        <Image src={whitelogo} alt="Logo" fill className="object-contain" />
      </div>
    </section>
  );
}
