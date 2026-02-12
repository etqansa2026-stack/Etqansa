import React from 'react';
import { 
  Building2, 
  MapPin, 
  FileText, 
  ShieldCheck, 
  Mail, 
  UserCheck, 
  Scale, 
  Award, 
  AlertCircle 
} from "lucide-react";
import { Locale } from '@/types';
import Button2 from '../ui/Button2';

interface Props {
  locale: Locale;
}

function TermsSection({ locale }: Props) {
  const isAr = locale === "ar";

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-extrabold text-[#397a34] mb-6 flex flex-row justify-center">
            {isAr ? "السياسة العامة وشروط الاستخدام" : "General Policy & Terms of Use"}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {isAr
              ? "تلتزم منصة «إتقان» بحماية خصوصية مستخدميها والمحافظة على سرية بياناتهم الشخصية وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية."
              : "Itqan platform is committed to protecting user privacy and maintaining data confidentiality in accordance with Saudi Arabia's Personal Data Protection Law."}
          </p>
          
        </div>
<div className="text-black mx-auto mb-8 font-bold text-base md:text-lg text-center">
  {isAr
    ? "وباستخدامك لمنصة «إتقان» أو تسجيلك في أي من برامجها، فإنك تقر بموافقتك الكاملة على الشروط والأحكام التالية:"
    : "By using the Itqan platform or registering for any of its programs, you fully agree to the following terms and conditions:"}
</div>

        <div className="space-y-12">
          {/* 01: Service Nature */}
          <div className="flex gap-6 border-b border-gray-100 pb-8">
            <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">1</div>
            <div>
              <h4 className="text-xl font-bold text-[#397a34] mb-3 flex items-center gap-2">
                <Building2 size={20} />
                {isAr ? "طبيعة الخدمة" : "Service Nature"}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {isAr 
                  ? "المنصة مبادرة تدريبية وتنموية تهدف إلى تأهيل وتمكين المستفيدين من خلال برامج تدريبية معرفية ومهنية، وقد تُقدم بعض البرامج مجاناً وفق ما تقرره إدارة المبادرة."
                  : "The platform is a training initiative aimed at empowering beneficiaries through knowledge-based and professional programs, offered for free as decided by management."}
              </p>
            </div>
          </div>

          {/* 02: Registration & Conduct */}
          <div className="flex gap-6 border-b border-gray-100 pb-8">
            <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">2</div>
            <div>
              <h4 className="text-xl font-bold text-[#397a34] mb-3 flex items-center gap-2">
                <UserCheck size={20} />
                {isAr ? "التسجيل والسلوك" : "Registration & Conduct"}
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  {isAr 
                    ? "يلتزم المستخدم بتقديم بيانات صحيحة ودقيقة عند التسجيل، وتحتفظ المنصة بحق إلغاء التسجيل في حال ثبوت تقديم بيانات غير صحيحة أو مضللة."
                    : "The user agrees to provide true and accurate information upon registration, and the platform reserves the right to cancel the registration if it is proven that incorrect or misleading information was provided."}
                </p>
               
              </div>
            </div>
          </div>

          {/* 03: Certificates */}
          <div className="flex gap-6 border-b border-gray-100 pb-8">
            <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">3</div>
            <div>
              <h4 className="text-xl font-bold text-[#397a34] mb-3 flex items-center gap-2">
                <Award size={20} />
                {isAr ? "الشهادات والاعتمادات" : "Certificates & Accreditations"}
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isAr 
                  ? "تُمنح الشهادات وفق معايير الحضور والالتزام ومتطلبات البرنامج، ولا يترتب على الشهادة أي التزام توظيفي ما لم يُنص على ذلك صراحة."
                  : "Certificates are granted based on attendance, commitment, and program requirements, and the certificate does not entail any employment obligation unless explicitly stated otherwise."}
              </p>
              
            </div>
          </div>

          {/* 04: Behavior & Commitment */}
<div className="flex gap-6 border-b border-gray-100 pb-8">
  <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">4</div>
  <div>
    <h4 className="text-xl font-bold text-[#397a34] mb-3 flex items-center gap-2">
      <ShieldCheck size={20} />
      {isAr ? "السلوك والالتزام" : "Behavior & Commitment"}
    </h4>

    <div className="space-y-3 text-gray-700 leading-relaxed">
      <p>
        {isAr
          ? "يلتزم المستخدم بالآتي:"
          : "The user commits to the following:"}
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          {isAr
            ? "احترام القوانين والأنظمة المعمول بها"
            : "Respect all applicable laws and regulations"}
        </li>
        <li>
          {isAr
            ? "الالتزام بالآداب العامة"
            : "Adhere to public morals and ethical standards"}
        </li>
        <li>
          {isAr
            ? "عدم إساءة استخدام المنصة أو محتواها"
            : "Refrain from misuse of the platform or its content"}
        </li>
      </ul>
    </div>
  </div>
</div>

{/* 05: Legal Statement & Licensing */}
<div className="flex gap-6 border-b border-gray-100 pb-8">
  <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">5</div>
  <div>
    <h4 className="text-xl font-bold text-[#397a34] mb-3 flex items-center gap-2">
      <Scale size={20} />
      {isAr ? "البيان القانوني والترخيص" : "Legal Statement & Licensing"}
    </h4>

    <p className="text-gray-700 leading-relaxed">
      {isAr
        ? "تُدار منصة «إتقان» ضمن إطار نظامي منضبط، وتسعى إلى الامتثال الكامل للأنظمة واللوائح المعمول بها في المملكة العربية السعودية."
        : "The Itqan platform operates within a regulated legal framework and seeks full compliance with all applicable laws and regulations in the Kingdom of Saudi Arabia."}
    </p>
  </div>
</div>

{/* 06: Regulatory Compliance */}
<div className="flex gap-6 border-b border-gray-100 pb-8">
  <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">6</div>
  <div>
    <h4 className="text-xl font-bold text-[#397a34] mb-3 flex items-center gap-2">
      <ShieldCheck size={20} />
      {isAr ? "الامتثال النظامي" : "Regulatory Compliance"}
    </h4>

    <div className="space-y-3 text-gray-700 leading-relaxed">
      <p>
        {isAr
          ? "تلتزم المنصة بالأنظمة التالية:"
          : "The platform is committed to complying with the following regulations:"}
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          {isAr
            ? "أنظمة التدريب الأهلي المعمول بها"
            : "Applicable private training regulations"}
        </li>
        <li>
          {isAr
            ? "نظام حماية البيانات الشخصية"
            : "Personal Data Protection Law"}
        </li>
        <li>
          {isAr
            ? "الأنظمة التجارية والتنظيمية ذات الصلة"
            : "Relevant commercial and regulatory laws"}
        </li>
      </ul>
    </div>
  </div>
</div>

{/* 07: Legal Responsibility */}
<div className="flex gap-6 border-b border-gray-100 pb-8">
  <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">7</div>
  <div>
    <h4 className="text-xl font-bold text-[#397a34] mb-3 flex items-center gap-2">
      <Scale size={20} />
      {isAr ? "المسؤولية القانونية" : "Legal Responsibility"}
    </h4>

    <div className="space-y-3 text-gray-700 leading-relaxed">
      <p>
        {isAr
          ? "المنصة مسؤولة عن:"
          : "The platform is responsible for:"}
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          {isAr
            ? "تنظيم البرامج التدريبية"
            : "Organizing training programs"}
        </li>
        <li>
          {isAr
            ? "إدارة التسجيل والتواصل"
            : "Managing registration and communication"}
        </li>
        <li>
          {isAr
            ? "التنسيق مع الجهات الداعمة والرسمية"
            : "Coordinating with supporting and official entities"}
        </li>
      </ul>
    </div>
  </div>
</div>

  {/* Contact Box */}
      <div className="bg-green-50 p-5 sm:p-6 md:p-8 rounded-3xl 
                flex flex-col md:flex-row 
                items-center md:items-start 
                justify-between gap-6 
                border border-green-100">

  <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
    
    {/* Icon */}
    <div className="w-12 h-12 sm:w-14 sm:h-14 
                    bg-[#397a34] rounded-2xl 
                    flex items-center justify-center 
                    text-white shadow-lg shadow-green-900/20
                    shrink-0">
      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>

    {/* Text */}
    <div>
      <h4 className="font-bold text-lg sm:text-xl text-[#397a34]">
        {isAr ? "التواصل القانوني" : "Legal Contact"}
      </h4>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {isAr
          ? "لأي استفسار نظامي، يمكن التواصل عبر البريد الرسمي."
          : "For any legal inquiries, please reach out via official email."}
      </p>
    </div>

  </div>
</div>


{/* 09: Accreditations & Certificates */}
<div className="flex gap-6 border-b border-gray-100 pb-8">
  <div className="text-[#6ab742] shrink-0 font-bold text-2xl opacity-50">9</div>
  <div>
    <h4 className="text-xl font-bold text-[#397a34] mb-4 flex items-center gap-2">
      <Award size={20} />
      {isAr ? "الاعتمادات والشهادات" : "Accreditations & Certificates"}
    </h4>

    <p className="text-gray-700 leading-relaxed mb-6">
      {isAr
        ? "تلتزم منصة «إتقان» بالشفافية الكاملة فيما يتعلق بالاعتمادات والشهادات الصادرة عنها."
        : "The Itqan platform is fully committed to transparency regarding the accreditations and certificates it issues."}
    </p>

    {/* Certificate Nature */}
    <div className="mb-6">
      <h5 className="font-bold text-[#397a34] mb-3">
        {isAr ? "طبيعة الشهادات" : "Nature of Certificates"}
      </h5>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          {isAr
            ? "شهادات حضور أو اجتياز برامج تدريبية"
            : "Certificates of attendance or completion of training programs"}
        </li>
        <li>
          {isAr
            ? "تُمنح وفق معايير واضحة للحضور والمشاركة والتقييم"
            : "Granted based on clear criteria for attendance, participation, and evaluation"}
        </li>
        <li>
          {isAr
            ? "اعتماد البرامج والشهادات من جهات رسمية أو مهنية مختصة داخل المملكة العربية السعودية"
            : "Programs and certificates may be accredited by official or professional entities within the Kingdom of Saudi Arabia"}
        </li>
      </ul>
    </div>

    {/* Certificate Usage */}
    <div className="mb-6">
      <h5 className="font-bold text-[#397a34] mb-3">
        {isAr ? "استخدام الشهادة" : "Use of the Certificate"}
      </h5>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          {isAr ? "لأغراض تطوير الذات" : "For personal and professional development"}
        </li>
        <li>
          {isAr ? "لدعم السيرة الذاتية" : "To support the curriculum vitae (CV)"}
        </li>
        <li>
          {isAr ? "لإثبات المشاركة في البرنامج" : "As proof of participation in the program"}
        </li>
      </ul>
    </div>

    {/* Disclaimer */}
    <div className="bg-amber-50 border-r-4 border-amber-400 p-4 rounded-r-md">
      <div className="flex gap-3">
        <AlertCircle className="text-amber-600 shrink-0" size={18} />
        <p className="text-sm text-amber-800 italic">
          {isAr
            ? "ولا تُعد الشهادة بديلاً عن المؤهلات الأكاديمية أو المهنية المعتمدة رسمياً."
            : "The certificate is not a substitute for officially accredited academic or professional qualifications."}
        </p>
      </div>
    </div>
  </div>
</div>



         {/* Certificates Update */}
<div className="mb-6">
  <h5 className="font-bold text-[#397a34] mb-3">
    {isAr ? "التحديث" : "Updates"}
  </h5>
  <p className="text-gray-700 leading-relaxed">
    {isAr
      ? "سيتم تحديث هذا البيان فور اعتماد البرامج أو الشهادات من الجهات المختصة، وسيُعلن ذلك بشكل رسمي عبر المنصة."
      : "This statement will be updated upon the accreditation of programs or certificates by the relevant authorities, and such updates will be officially announced through the platform."}
  </p>
</div>


        
        </div>
      </div>
    </div>
  );
}

export default TermsSection;