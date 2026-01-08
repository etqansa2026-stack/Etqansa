"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Button2 from "../ui/Button2";
import Link from "next/link";

export default function ProfessionalCTA({ isAr }: { isAr: boolean }) {
  useEffect(() => {
    const section = document.querySelector(".professional-cta-section");
    const items = section?.querySelectorAll(".professional-cta-item");
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
    <section className="py-24 text-center bg-white professional-cta-section">
      <h2 className="text-3xl centert md:text-4xl font-extrabold mb-6 text-[#397a34] professional-cta-item">
        {isAr ? "ابدأ اليوم" : "Get Started Today"}
      </h2>

      <p className="text-gray-700 centert text-lg md:text-xl mb-8 max-w-xl mx-auto professional-cta-item">
        {isAr
          ? "انضم إلى البرامج الاحترافية وارتق بمهاراتك المهنية الآن."
          : "Join our professional programs and advance your skills today."}
      </p>

      <Link href={"/programs/form"} className="professional-cta-item">
        <Button2 className="justify-self-center flex">
          {isAr ? "البدء الآن" : "Start Now"}
        </Button2>
      </Link>
    </section>
  );
}
