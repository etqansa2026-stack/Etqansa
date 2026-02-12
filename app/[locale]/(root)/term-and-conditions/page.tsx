


import CompaniesSections from "@/components/termsAndConditionsComponents/CompaniesSections";
import TermsSection from "@/components/termsAndConditionsComponents/TermsSection";
import { Locale } from "@/types";

interface Props {
    params: Promise <{locale:Locale}>
}

export default async function LegalsAndPartners({ params }: Props) {

    const locale= (await params).locale

  

  return (
    <section  className="overflow-hidden bg-white">
      <CompaniesSections locale={locale} />
      <TermsSection locale={locale}/>
      
    </section>
  );
}