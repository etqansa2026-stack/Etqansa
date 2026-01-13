// TechnicalTeamServer.tsx
import TechnicalTeamClient from "@/components/aboutcomponents/TechnicalTeamClient";
import { getmembersByTypePagAndLocale } from "@/app/server/our_team/services";

export default async function TechnicalTeam({ isAr }: { isAr: boolean }) {
  const locale = isAr ? "ar" : "en";
  const lifeProgramsMembers = await getmembersByTypePagAndLocale(
    "life_programs",
    1,
    locale
  );
  const professionalProgramsMembers = await getmembersByTypePagAndLocale(
    "professional_programs",
    1,
    locale
  );

  return (
    <TechnicalTeamClient
      initialLifeProgramsTeam={lifeProgramsMembers.data}
      lifeProgramCount={lifeProgramsMembers.totalCount!}
      proProgramCount={professionalProgramsMembers.totalCount!}
      initialProfessionalProgramsTeam={professionalProgramsMembers.data}
      isAr={isAr}
      locale={locale}
    />
  );
}
