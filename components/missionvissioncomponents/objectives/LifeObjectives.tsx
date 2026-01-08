"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiUsers, FiClock, FiThumbsUp, FiTool, FiAward } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function LifeObjectives({ isAr }: { isAr: boolean }) {
  const items = isAr
    ? [
        "تطوير مهارات التواصل والعمل الجماعي",
        "تعزيز مهارات إدارة الوقت وتحديد الأولويات",
        "بناء الثقة بالنفس والدافعية للإنجاز",
        "تنمية مهارات حل المشكلات واتخاذ القرار",
        "ترسيخ القيم الإيجابية والمسؤولية",
      ]
    : [
        "Develop communication and teamwork skills",
        "Enhance time management and prioritization skills",
        "Build self-confidence and motivation for achievement",
        "Develop problem-solving and decision-making skills",
        "Instill positive values and responsibility",
      ];

  const colors = ["#FFFFFF", "#f0fdf4", "#FFFFFF", "#f0fdf4", "#FFFFFF"];
  const icons = [FiUsers, FiClock, FiThumbsUp, FiTool, FiAward];

  useEffect(() => {
    const cards = gsap.utils.toArray(".life-objective-card");
    gsap.set(cards, { y: 50, opacity: 0 });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "linear",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".life-objectives-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="bg-white md:px-6 md:py-28 px-6 py-8 life-objectives-section">
      <h2 className="text-3xl centert md:text-4xl font-bold text-center mb-12 text-[#397a34]">
        {isAr ? "الأهداف الحياتية" : "Life Objectives"}
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="life-objective-card flex-1 min-w-[220px] max-w-xs p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transform transition hover:-translate-y-2 hover:scale-105"
              style={{ backgroundColor: colors[i] }}
            >
              <Icon className="text-4xl mb-4 text-[#397a34]" />
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
