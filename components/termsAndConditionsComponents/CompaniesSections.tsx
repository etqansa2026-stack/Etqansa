
import React from "react";
import Image from "next/image";
import {
  Building2,
  MapPin,
  FileText,
  ShieldCheck,
  Mail,
  Scale,
} from "lucide-react";
import { Locale } from "@/types";

interface Props {
  locale: Locale;
}

function LegalAndPartnersPage({ locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-1.5 md:px-6">
          <h2 className="text-xl md:text-4xl font-extrabold text-[#397a34] mb-12 flex flex-row justify-center text-center">
            {isAr
              ? "الشركات الأساسية المنفذة للمبادرة"
              : "Primary Implementing Companies"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-3 md:px-0">
  {/* Company Card */}
  <div className="company-card bg-white rounded-[2rem] shadow-md border border-[#6ab742]/20 flex flex-col overflow-hidden">
    
    {/* Image */}
    <div className="relative w-full h-64 md:h-72">
      <Image
        src="/ebdaa.png"
        alt={isAr ? "معهد مصادر الإبداع" : "Creativity Sources Institute"}
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Content */}
    <div className="py-6 px-4 md:px-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-[#397a34] mb-5">
        {isAr ? "معهد مصادر الإبداع" : "Creativity Sources Institute"}
      </h3>

      <div className="space-y-4 text-gray-700 flex-1">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-[#6ab742] flex-shrink-0 mt-1" />
          <p className="text-sm md:text-base leading-relaxed">
            {isAr
              ? "المملكة العربية السعودية – الرياض – الملز – حي صلاح الدين"
              : "KSA - Riyadh - Al Malaz - Salah Al-Din District"}
          </p>
        </div>

        {/* CR Number */}
        <div className="flex items-center gap-3">
          <FileText size={20} className="text-[#6ab742] flex-shrink-0" />
          <p className="text-sm md:text-base">
            <span className="font-semibold">{isAr ? "رقم السجل التجاري:" : "CR Number:"}</span>{" "}
            {process.env.NEXT_PUBLIC_EBDAA_CR}
          </p>
        </div>

        {/* National Facility ID */}
        <div className="flex items-center gap-3">
          <Building2 size={20} className="text-[#6ab742] flex-shrink-0" />
          <p className="text-sm md:text-base">
            <span className="font-semibold">{isAr ? "الرقم الوطني للمنشأة:" : "National Facility ID:"}</span>{" "}
            {process.env.NEXT_PUBLIC_EBDAA_NID}
          </p>
        </div>

        {/* Accreditation */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-[#397a34] font-bold text-xs md:text-sm bg-green-50 px-1 py-3 rounded-xl border border-green-100">
            <ShieldCheck size={18} />
            {isAr ? "جهة الاعتماد: المركز السعودي للأعمال" : "Accreditation: Saudi Business Center"}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Second Company Card */}
  <div className="company-card bg-white rounded-[2rem] shadow-md border border-[#6ab742]/20 flex flex-col overflow-hidden">
    <div className="relative w-full h-64 md:h-72">
      <Image
        src="/medhmar.png"
        alt={isAr ? "أكاديمية مضمار" : "Midmar Academy"}
        fill
        className="object-cover"
        priority
      />
    </div>

    <div className="py-6 px-4 md:px-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-[#397a34] mb-5">
        {isAr
          ? "أكاديمية مضمار لتطوير الأداء والتنمية البشرية"
          : "Midmar Academy for Performance & Human Development"}
      </h3>

      <div className="space-y-4 text-gray-700 flex-1">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-[#6ab742] flex-shrink-0 mt-1" />
          <p className="text-sm md:text-base leading-relaxed">
            {isAr ? "الأردن – عمان – شارع الجاردنز" : "Jordan - Amman - Gardens St."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FileText size={20} className="text-[#6ab742] flex-shrink-0" />
          <p className="text-sm md:text-base">
            <span className="font-semibold">{isAr ? "رقم السجل التجاري:" : "CR Number:"}</span>{" "}
            {process.env.NEXT_PUBLIC_MIDMAR_CR}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Building2 size={20} className="text-[#6ab742] flex-shrink-0" />
          <p className="text-sm md:text-base">
            <span className="font-semibold">{isAr ? "الرقم الوطني للمنشأة:" : "National Facility ID:"}</span>{" "}
            {process.env.NEXT_PUBLIC_MIDMAR_NID}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-[#397a34] font-bold  text-xs md:text-sm bg-green-50 px-1 py-3 rounded-xl border border-green-100">
            <ShieldCheck size={18} />
            {isAr
              ? "جهة الاعتماد: وزارة الصناعة والتجارة + أمانة العاصمة"
              : "Accreditation: Ministry of Industry & Amman Municipality"}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </main>
  );
}

export default LegalAndPartnersPage;
