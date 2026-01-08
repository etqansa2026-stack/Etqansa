"use client";

import Link from "next/link";
import Button2 from "../ui/Button2";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function LifeCTA({ isAr }: { isAr: boolean }) {
  useEffect(() => {
    const section = document.querySelector(".life-cta-section");
    const items = section?.querySelectorAll(".life-cta-item");
    if (!section || !items?.length) return;

    gsap.set(items, { y: 50, opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white life-cta-section">
      <h2 className="text-3xl centert md:text-4xl font-extrabold mb-6 text-[#397a34] life-cta-item">
        {isAr ? "ابدأ اليوم" : "Get Started Today"}
      </h2>

      <p className="text-gray-700 centert text-lg md:text-xl mb-8 max-w-xl mx-auto life-cta-item">
        {isAr
          ? "انضم إلى برامج الحياة وابدأ تطوير مهاراتك الآن."
          : "Join our life programs and start improving your skills now."}
      </p>

      <div className="flex justify-center life-cta-item">
        <Link href={"/programs/form"}>
          <Button2 className="flex justify-center">{isAr ? "البدء الآن" : "Start Now"}</Button2>
        </Link>
      </div>
    </section>
  );
}
