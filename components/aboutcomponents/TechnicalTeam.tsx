// TechnicalTeamServer.tsx
import TechnicalTeamClient from "@/components/aboutcomponents/TechnicalTeamClient";
import { getMembersByTypeAndLocale } from "@/app/server/our_team/services";

export default async function TechnicalTeam({ isAr }: { isAr: boolean }) {
  const locale = isAr ? "ar" : "en";
  const lifeProgramsMembers = (await getMembersByTypeAndLocale(locale, "life_programs")).data ?? [];
  const professionalProgramsMembers = (await getMembersByTypeAndLocale(locale, "professional_programs")).data ?? [];

  const team = [...lifeProgramsMembers, ...professionalProgramsMembers];

  return <TechnicalTeamClient team={team} isAr={isAr} locale={locale} />;
}
