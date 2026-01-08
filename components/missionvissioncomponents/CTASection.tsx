"use client";

import { useEffect, useRef } from "react";
import Button1 from "../ui/Button1";
import Link from "next/link";
import { gsap } from "gsap";

export default function CTASection({ isAr }: { isAr: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // تحديد العناصر التي سيتم تحريكها
    const items = sectionRef.current.querySelectorAll("h2, p, a");

    // الحالة الابتدائية
    gsap.set(items, { opacity: 0, y: 30 });

    // تشغيل الأنيميشن عند ظهور القسم في الشاشة
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
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
      className="bg-[#397a34] text-white py-24 text-center"
    >
      <h2 className="text-3xl centert font-bold mb-4">
        {isAr ? "كن جزءًا من رحلتنا" : "Be Part of Our Journey"}
      </h2>
      <p className="mb-8 centert opacity-90">
        {isAr
          ? "ابدأ رحلتك التعليمية اليوم واصنع مستقبلك."
          : "Start your learning journey today and build your future."}
      </p>
      <Link href={"/programs/form"}>
        <Button1>
          {isAr ? "سجل الآن" : "Join Now"}
        </Button1>
      </Link>
    </section>
  );
}
