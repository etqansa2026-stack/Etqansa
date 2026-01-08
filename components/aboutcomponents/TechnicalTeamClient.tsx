// TechnicalTeamClient.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TechnicalTeamMemberCard from "./TechnicalTeamMemberCard";
import { TranslatedMember } from "@/types/index"; // استورد النوع الصحيح

interface TechnicalTeamClientProps {
  team: TranslatedMember[]; // النوع الصحيح
  isAr: boolean;
  locale: "ar" | "en";
}

export default function TechnicalTeamClient({ team, isAr, locale }: TechnicalTeamClientProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || team.length === 0) return;

    const items = sectionRef.current.querySelectorAll(".technical-item");

    // إعداد الحالة الابتدائية للأنيميشن
    gsap.set(items, { y: 30, opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          });
          observer.disconnect(); // فقط مرة واحدة
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [team]);

  return (
    <section className="bg-green-50">
      <section ref={sectionRef} className="container mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold centert text-[#397a34] mb-16 technical-item">
          {isAr ? "الفريق الفني" : "Technical Team"}
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="technical-item flex-1 min-w-[320px] max-w-xs"
            >
              <TechnicalTeamMemberCard data={member} locale={locale} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
