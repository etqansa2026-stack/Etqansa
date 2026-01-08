"use client";

import ProgramCard from "@/components/lifeprogramcomponents/ProgramCard";
import { translatedProgram } from "@/types";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Locale = "ar" | "en";

type CoursesSectionProps = {
  courses: translatedProgram[];
  locale: Locale;
};

gsap.registerPlugin(ScrollTrigger);

export default function CoursesSection({ courses, locale }: CoursesSectionProps) {
  const isAr = locale === "ar";

  useEffect(() => {
    const cards = gsap.utils.toArray(".course-card");
    gsap.set(cards, { y: -50, opacity: 0 }); // يبدأ فوق الشاشة وشفاف

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "linear", // حركة بسرعة ثابتة
      stagger: 0.2, // يظهر كل كارد بعد الآخر
      scrollTrigger: {
        trigger: ".courses-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="bg-white courses-section">
      <div className="container mx-auto md:px-6 md:py-28 px-6 py-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#397a34]">
          {isAr ? "البرامج المميزة" : "Featured Courses"}
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-10">
            {courses.map((program) => (
              <div
                key={program.id ?? program.slug}
                className="w-full md:w-85 lg:w-100 course-card"
              >
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
