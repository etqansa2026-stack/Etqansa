"use client";

import { FiTarget } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { ScrollText } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionVisionSection({ isAr }: { isAr: boolean }) {
  const sections = [
    {
      title: isAr ? "الرؤية" : "Vision",
      desc: isAr
        ? "تمكين الأفراد من بناء مستقبل مهني وحياتي مستدام، وتعزيز ثقافة العمل المنتج والابتكار، بما يسهم في تحسين جودة الحياة ودعم التنمية المجتمعية الشاملة"
        : "Empowering individuals to build a sustainable professional and life future, promoting a culture of productive work and innovation, contributing to quality of life and comprehensive community development",
      icon: FaRegEye,
    },
    {
      title: isAr ? "الرسالة" : "Mission",
      desc: isAr
        ? "تأهيل المشاركين عبر برامج تدريبية متكاملة تركز على المهارات المهنية والحياتية، وتنمية القدرات الشخصية والسلوكية، وربط التدريب باحتياجات سوق العمل وتعزيز الاعتماد على الذات والانخراط الإيجابي في المجتمع"
        : "Preparing participants through integrated training programs focusing on professional and life skills, developing personal and behavioral capabilities, linking training to labor market needs and promoting self-reliance and positive community engagement",
      icon: ScrollText,
    },
  ];

  const iconBgColor = "#FDE68A30";

  useEffect(() => {
    const cards = gsap.utils.toArray(".mission-card");
    gsap.set(cards, { y: 50, opacity: 0 });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "linear",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".mission-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="md:px-6 md:py-28 px-6 py-8 bg-[#6ab742]/10 mission-section">
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <div
              key={i}
              className="mission-card flex-1 min-w-[280px] max-w-md p-8 rounded-3xl shadow-lg flex flex-col items-center text-center gap-4 bg-white"
            >
              <div
                className="p-5 rounded-full mb-5"
                style={{ backgroundColor: iconBgColor }}
              >
                <Icon size={44} className="text-[#397a34]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#397a34] mb-2">
                {section.title}
              </h3>
              <p className="text-gray-700">{section.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
