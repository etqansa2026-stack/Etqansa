"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TeamMemberCard from "./TeamMemberCard";
import { TranslatedMemberFounders } from "@/types/index";

interface ManagementTeamClientProps {
  members: TranslatedMemberFounders[];
  isAr: boolean;
  locale: "ar" | "en";
}

export default function ManagementTeamClient({ members, isAr, locale }: ManagementTeamClientProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || members.length === 0) return;

    const items = Array.from(sectionRef.current.querySelectorAll(".management-item")) as HTMLElement[];

    // IntersectionObserver for animating items when they enter viewport
    const observer = new IntersectionObserver(
      (entries, obs) => {
        // Animate all intersecting items with stagger
        const intersectingItems = entries.filter(e => e.isIntersecting).map(e => e.target as HTMLElement);
        if (intersectingItems.length > 0) {
          gsap.to(intersectingItems, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15, // items animate one by one from top to bottom
          });

          intersectingItems.forEach(el => obs.unobserve(el));
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    // Initialize items: visible if already in viewport, else hide above and observe
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        gsap.set(item, { y: 0, opacity: 1 });
      } else {
        gsap.set(item, { y: -30, opacity: 0 }); // <-- move from above
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, [members]);

  return (
    <section ref={sectionRef} className="container mx-auto px-6 py-28">
      <h2 className="text-3xl font-bold text-[#397a34] mb-16 management-item flex flex-row justify-center">
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
