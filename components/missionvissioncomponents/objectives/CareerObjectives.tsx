import {  FiBriefcase, FiShield, FiTrendingUp } from "react-icons/fi";
import { MdEngineering } from "react-icons/md";

export default function CareerObjectives({ isAr }: { isAr: boolean }) {
  const items = isAr
    ? [
        "تزويد المشاركين بالمهارات التقنية المطلوبة لمهن محددة",
        "ربط التدريب باحتياجات سوق العمل",
        "تنمية مهارات السلامة المهنية والانضباط",
        "تأهيل المشاركين لمهارات البحث عن عمل وريادة الأعمال",
      ]
    : [
        "Provide participants with technical skills for specific jobs",
        "Link training to labor market needs",
        "Develop occupational safety and discipline skills",
        "Prepare participants for job searching and entrepreneurship",
      ];

  const colors = ["#FFFFFF", "#f0fdf4", "#FFFFFF", "#f0fdf4"];
  const icons = [MdEngineering, FiBriefcase, FiShield, FiTrendingUp];

  return (
    <section className="bg-green-50  md:px-6 md:py-28    px-6 py-8">
      <h2 className="text-3xl centert md:text-4xl font-bold text-center mb-12 text-[#397a34]">
        {isAr ? "الأهداف المهنية" : "Career Objectives"}
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="flex-1 min-w-[220px] max-w-xs p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transform transition hover:-translate-y-2 hover:scale-105"
              style={{ backgroundColor: colors[i] }}
            >
              <Icon className="text-4xl mb-4 text-[#397a34]" />
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
