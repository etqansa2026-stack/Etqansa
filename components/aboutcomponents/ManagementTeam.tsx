import { getMembersByTypeAndLocale } from "@/app/server/our_team/services";
import ManagementTeamClient from "@/components/aboutcomponents/ManagementTeamClient";
import { TranslatedMemberFounders } from "@/types/index";

export default async function ManagementTeam({ isAr }: { isAr: boolean }) {
  const locale = isAr ? "ar" : "en";

  const managementMembers: TranslatedMemberFounders[] = 
    (await getMembersByTypeAndLocale(locale, "founder")).data;

  return (
    <ManagementTeamClient
      members={managementMembers}
      isAr={isAr}
      locale={locale}
    />
  );
}
