"use client";

import { Locale } from "@/types";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  number_of_programs?: string | null;
  number_of_students?: string | null;
  number_of_instructors?: string | null;
  locale: Locale;
}

function Counter({ value, start }: { value: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 3000;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, value]);

  return <span>{count.toLocaleString()}</span>;
}

export default function StatsSection({ stats }: { stats: Stat }) {
  const locale = stats.locale;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true, // يشتغل مرة وحدة
      onEnter: () => setStartCount(true),
    });
  }, []);

  const numbers = [
    {
      label: locale === "ar" ? "متدرب" : "Trainee",
      value: stats.number_of_students,
    },
    {
      label: locale === "ar" ? "برنامج" : "Program",
      value: stats.number_of_programs,
    },
    {
      label: locale === "ar" ? "مدرب" : "Trainer",
      value: stats.number_of_instructors,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white border-t border-[#6ab742]/30"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-3 gap-3 md:gap-10 max-w-5xl mx-auto text-center">
          {numbers.map((number) => (
            <div
              key={number.label}
              className="
                rounded-xl
                p-3 md:p-8
                bg-white
                border border-[#6ab742]/30
                shadow-sm
                hover:shadow-lg
                transition-all duration-300
                flex flex-col md:flex-row
                items-center justify-center
                gap-1 md:gap-2
              "
            >
              <div className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#397a34]">
                <Counter
                  value={Number(number.value)}
                  start={startCount}
                />
                +
              </div>

              <div className="text-gray-700 text-sm md:text-2xl lg:text-3xl font-medium">
                {number.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
