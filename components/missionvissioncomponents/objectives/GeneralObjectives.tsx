"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiZap, FiTarget, FiUserCheck, FiTrendingUp, FiActivity } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function GeneralObjectives({ isAr }: { isAr: boolean }) {
  const items = isAr
    ? [
        "إكساب الشباب مهارات حقيقية قابلة للتطبيق",
        "تعزيز فرص التشغيل والعمل الحر",
        "بناء شخصية متوازنة قادرة على اتخاذ القرار",
        "دعم ثقافة العمل والإنتاج",
        "المساهمة في التنمية المجتمعية المستدامة",
      ]
    : [
        "Provide youth with practical skills",
        "Enhance employment and freelancing opportunities",
        "Build a balanced personality capable of decision-making",
        "Promote a culture of work and productivity",
        "Contribute to sustainable community development",
      ];

  const colors = ["#FFFFFF", "#f0fdf4", "#FFFFFF", "#f0fdf4", "#FFFFFF"];
  const icons = [FiZap, FiTrendingUp, FiUserCheck, FiTarget, FiActivity];

  useEffect(() => {
    const cards = gsap.utils.toArray(".objective-card");
    gsap.set(cards, { y: 50, opacity: 0 });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "linear",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".objectives-general-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="bg-white md:px-6 md:py-28 px-6 py-8 objectives-general-section">
      <h2 className="text-3xl centert md:text-4xl font-extrabold text-center mb-12 text-[#397a34]">
        {isAr ? "الأهداف العامة" : "General Objectives"}
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="objective-card flex-1 min-w-[220px] max-w-xs p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transform transition hover:-translate-y-2 hover:scale-105"
              style={{ backgroundColor: colors[i] }}
            >
              <Icon className="text-4xl mb-4 text-[#397a34]" />
              <p className="text-gray-800">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
