"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { gsap } from "gsap";
import TechnicalTeamMemberCard from "./TechnicalTeamMemberCard";
import { TranslatedMember } from "@/types/index";
import { getmembersByTypePagAndLocaleAction } from "./(actions)/getMemebrs";
import Button2 from "../ui/Button2";

interface LifeProgramSectionProps {
  initialLifeProgramsTeam: TranslatedMember[];
  lifeProgramCount: number;
  locale: "ar" | "en";
}

export default function LifeProgramSection({
  initialLifeProgramsTeam,
  lifeProgramCount,
  locale,
}: LifeProgramSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  // page starts at 1 (we've already loaded page 1 on the server)
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState(initialLifeProgramsTeam);
  const [totalCount, setTotalCount] = useState(lifeProgramCount);
  const [isPending, startTransition] = useTransition();

  // track how many items were rendered previously (used to animate only the new ones)
  const prevCountRef = useRef<number>(0);

  const isAr = locale === "ar";

  const loadMore = () => {
    // prevent duplicate calls if already loading
    startTransition(async () => {
      // request the next page (page + 1)
      const res = await getmembersByTypePagAndLocaleAction(
        "life_programs",
        page + 1,
        locale
      );

      const newData = res.data ?? [];

      // append new items
      setMembers(prev => [...prev, ...newData]);

      // update totals & page
      setTotalCount(res.totalCount ?? 0);
      setPage(prev => prev + 1);
    });
  };

  useEffect(() => {
    if (!sectionRef.current || members.length === 0) return;

    // NodeList -> Array for slicing
    const items = Array.from(
      sectionRef.current.querySelectorAll(".technical-item")
    );

    const prevCount = prevCountRef.current;

    if (prevCount === 0) {
      // initial animation for all items
      gsap.set(items, { y: 30, opacity: 0 });
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    } else if (members.length > prevCount) {
      // animate only the newly appended items
      const newItems = items.slice(prevCount); // items whose indexes >= prevCount
      if (newItems.length > 0) {
        gsap.set(newItems, { y: 30, opacity: 0 });
        gsap.to(newItems, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });
      }
    }
    // update prevCountRef to current number of items
    prevCountRef.current = items.length;
  }, [members]);

  if (totalCount === 0) return null;

  return (
    <section className="bg-green-50">
      <section ref={sectionRef} className="container mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold text-center text-[#397a34] mb-16 flex flex-row justify-center">
          {isAr ? "مدربو البرامج الحياتية" : "Life Program Trainers"}
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member,i) => (
            <div
              key={i}
              className="technical-item flex-1 min-w-[320px] max-w-xs"
            >
              <TechnicalTeamMemberCard data={member} locale={locale} />
            </div>
          ))}
        </div>

        {/* Load More */}
        {members.length < totalCount && (
          <div className="mt-16 flex justify-center">
            <Button2
              onClick={loadMore}
              disabled={isPending}
              className="px-10 py-3 rounded-full text-lg font-semibold
                         transition-all duration-300
                         hover:scale-105 hover:shadow-lg
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending
                ? isAr
                  ? "جارٍ التحميل..."
                  : "Loading..."
                : isAr
                ? "عرض المزيد"
                : "Load More"}
            </Button2>
          </div>
        )}
      </section>
    </section>
  );
}
