import {
  FiGlobe,
  FiCheckCircle,
  FiUsers,
  FiTool,
  FiTrendingUp,
  FiBriefcase,
} from "react-icons/fi";

export default function WorkMethodology({ isAr }: { isAr: boolean }) {
  const items = isAr
    ? [
        "الجمع بين التدريب المهني والتأهيل الحياتي",
        "التعلم التطبيقي المباشر",
        "التدريب على أيدي خبراء مختصين",
        "تقسيم المشاركين إلى مجموعات تدريبية فعّالة",
        "توفير بيئة تدريبية مجهزة",
        "متابعة مخرجات التدريب وربطها بسوق العمل",
      ]
    : [
        "Integrating vocational training with life skills development",
        "Hands-on practical learning",
        "Training delivered by specialized experts",
        "Dividing participants into effective training groups",
        "Providing a fully equipped training environment",
        "Monitoring training outcomes and linking them to the job market",
      ];

  const icons = [
    FiGlobe,
    FiTool,
    FiCheckCircle,
    FiUsers,
    FiTrendingUp,
    FiBriefcase,
  ];

  const colors = ["#FFFFFF", "#f0fdf4"];

  return (
    <section className="bg-green-50  md:px-6 md:py-28    px-6 py-8" dir={isAr ? "rtl" : "ltr"}>
      <h2 className="text-3xl md:text-4xl centert font-bold text-center mb-6 text-[#397a34]">
        {isAr ? "منهجية العمل" : "Work Methodology"}
      </h2>

      <p className="text-center centert max-w-3xl mx-auto mb-12 text-gray-600 text-lg px-4">
        {isAr
          ? "تعتمد مبادرة إتقان نموذجًا تدريبيًا تكامليًا يقوم على:"
          : "Itqan Initiative adopts an integrated training model based on:"}
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="flex-1 min-w-[220px] max-w-xs p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transform transition hover:-translate-y-2 hover:scale-105"
              style={{ backgroundColor: colors[i % colors.length] }}
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
