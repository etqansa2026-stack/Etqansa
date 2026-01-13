// TechnicalTeamClient.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TranslatedMember } from "@/types/index";
import LifeProgramSection from "./LifeProgramSection";
import ProfessionalProgramsSection from "./ProfessionalProgramsSection";

interface TechnicalTeamClientProps {
  initialProfessionalProgramsTeam: TranslatedMember[];
  initialLifeProgramsTeam: TranslatedMember[];
  lifeProgramCount: number;
  proProgramCount: number;
  isAr: boolean;
  locale: "ar" | "en";
}

export default function TechnicalTeamClient({
  initialProfessionalProgramsTeam,
  initialLifeProgramsTeam,
  lifeProgramCount,
  proProgramCount,
  locale,
}: TechnicalTeamClientProps) {
  return (
    <section className="bg-green-50">
      {proProgramCount > 0 && (
        <ProfessionalProgramsSection
          locale={locale}
          proProgramCount={proProgramCount}
          initialProfessionalProgramsTeam={initialProfessionalProgramsTeam}
        />
      )}
      {lifeProgramCount > 0 && (
        <LifeProgramSection
          locale={locale}
          lifeProgramCount={lifeProgramCount}
          initialLifeProgramsTeam={initialLifeProgramsTeam}
        />
      )}
    </section>
  );
}
