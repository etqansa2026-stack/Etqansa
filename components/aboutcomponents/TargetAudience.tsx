export default function TargetAudience({ isAr }: { isAr: boolean }) {
  const items = [
    {
      title: isAr ? "الشباب من الجنسين" : "Youth of Both Genders",
      desc: isAr
        ? "استهداف الشباب من الذكور والإناث لبناء قدراتهم وتمكينهم مهنيًا."
        : "Targeting young men and women to build their capacities and empower them professionally.",
    },
    {
      title: isAr ? "الباحثون عن عمل" : "Job Seekers",
      desc: isAr
        ? "دعم الباحثين عن فرص وظيفية عبر التدريب والتأهيل العملي."
        : "Supporting individuals seeking employment through training and practical preparation.",
    },
    {
      title: isAr
        ? "الراغبون في تطوير مهاراتهم المهنية"
        : "Professionals Seeking Skill Development",
      desc: isAr
        ? "تطوير المهارات المهنية لمواكبة متطلبات سوق العمل."
        : "Enhancing professional skills to meet the demands of the labor market.",
    },
    {
      title: isAr
        ? "الراغبون في بدء مشاريعهم الخاصة"
        : "Aspiring Entrepreneurs",
      desc: isAr
        ? "تمكين الأفراد من بدء مشاريعهم الخاصة والعمل الحر."
        : "Empowering individuals to start their own businesses and pursue self-employment.",
    },
    {
      title: isAr
        ? "الفئات الأقل حظًا اقتصاديًا"
        : "Economically Disadvantaged Groups",
      desc: isAr
        ? "توفير فرص تدريب وتأهيل تسهم في تحسين الاستقرار الاقتصادي."
        : "Providing training opportunities that contribute to improved economic stability.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <h2 className="text-3xl font-bold centert mb-16 text-[#397a34]">
        {isAr ? "الفئة المستهدفة" : "Target Audience"}
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-1 min-w-[350px] max-w-sm rounded-2xl bg-green-50 p-8 text-center shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="font-semibold mb-3 text-lg text-[#397a34]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
