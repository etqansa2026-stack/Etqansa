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

    // Collect elements — exclude the page heading (h2) if it also has management-item class
    const allItems = Array.from(sectionRef.current.querySelectorAll(".management-item")) as HTMLElement[];
    const items = allItems.filter(el => el.tagName.toLowerCase() !== "h2");

    if (items.length === 0) return;

    // set initial hidden state for all items BEFORE observing (prevents flicker)
    gsap.set(items, { y: -30, opacity: 0 });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        // only keep intersecting entries, map to elements
        const intersecting = entries
          .filter(e => e.isIntersecting)
          .map(e => e.target as HTMLElement);

        if (intersecting.length === 0) return;

        // sort by vertical position (top -> bottom)
        intersecting.sort((a, b) => {
          const ta = a.getBoundingClientRect().top;
          const tb = b.getBoundingClientRect().top;
          return ta - tb;
        });

        // animate them together with a stagger
        gsap.to(intersecting, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          onComplete: () => {
            // nothing special after complete
          },
        });

        // stop observing those that are animated
        intersecting.forEach(el => obs.unobserve(el));
      },
      {
        threshold: 0.12,
        // make it trigger a little earlier on mobile by using a negative bottom margin
        rootMargin: "0px 0px -8% 0px",
      }
    );

    // Observe every item (observer will callback immediately for items already in view)
    items.forEach(item => observer.observe(item));

    return () => {
      // cleanup observer + any running tweens for these items
      observer.disconnect();
      gsap.killTweensOf(items);
    };
  }, [members]);

  return (
    <section ref={sectionRef} className="container mx-auto px-6 py-28">
      <h2 className="text-3xl font-bold text-[#397a34] mb-16">
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
