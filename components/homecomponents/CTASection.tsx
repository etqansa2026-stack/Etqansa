"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Button1 from "../ui/Button1";
import Link from "next/link";

type Locale = "en" | "ar";

interface CTASectionProps {
  locale: Locale;
}

export default function CTASection({ locale }: CTASectionProps) {
  const content = {
    en: {
      title: "Start Learning Today",
      subtitle: "Join thousands of students and build skills that matter.",
      buttons: "Get Started",
    },
    ar: {
      title: "ابدأ التعلم اليوم",
      subtitle: "انضم إلى آلاف الطلاب وطور مهاراتك التي تُحدث فرقًا.",
      buttons: "ابدأ الآن",
    },
  };

  const texts = content[locale];

  useEffect(() => {
    const section = document.querySelector(".cta-section");
    const items = section?.querySelectorAll(".cta-item");
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
    <section className="bg-[#397a34] text-white cta-section">
      <div className="container mx-auto px-6 py-24 centert">
        <h2 className="text-3xl centert md:text-4xl font-extrabold mb-4 cta-item">
          {texts.title}
        </h2>
        <p className="max-w-xl centert mx-auto mb-8 opacity-90 text-gray-100 cta-item">
          {locale === "ar" ? <span dir="rtl">{texts.subtitle}</span> : texts.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 cta-item">
          <Link href={"/programs/form"}>
            <Button1>
              {locale === "ar" ? <span dir="rtl">{texts.buttons}</span> : texts.buttons}
            </Button1>
          </Link>
        </div>
      </div>
    </section>
  );
}
