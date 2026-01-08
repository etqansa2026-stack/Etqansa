"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TeamMemberCard from "./TeamMemberCard";
import { TranslatedMember } from "@/types/index";

interface ManagementTeamClientProps {
  members: TranslatedMember[];
  isAr: boolean;
  locale: "ar" | "en";
}

export default function ManagementTeamClient({ members, isAr, locale }: ManagementTeamClientProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || members.length === 0) return;

    const items = sectionRef.current.querySelectorAll(".management-item");

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
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [members]);

  return (
    <section ref={sectionRef} className="container mx-auto px-6 py-28">
      <h2 className="text-3xl font-bold centert text-[#397a34] mb-16 management-item">
        {isAr ? "الفريق الإداري" : "Management Team"}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="management-item flex-1 min-w-[320px] max-w-xs"
          >
            <TeamMemberCard data={member} locale={locale} />
          </div>
        ))}
      </div>
    </section>
  );
}
