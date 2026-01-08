import { getMembersByTypeAndLocale } from "@/app/server/our_team/services";
import ManagementTeamClient from "@/components/aboutcomponents/ManagementTeamClient";
import { TranslatedMember } from "@/types/index";

export default async function ManagementTeam({ isAr }: { isAr: boolean }) {
  const locale = isAr ? "ar" : "en";

  const managementMembers: TranslatedMember[] = 
    (await getMembersByTypeAndLocale(locale, "founder")).data;

  return (
    <ManagementTeamClient
      members={managementMembers}
      isAr={isAr}
      locale={locale}
    />
  );
}
