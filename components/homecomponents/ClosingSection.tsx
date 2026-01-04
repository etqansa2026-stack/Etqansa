type Locale = 'en' | 'ar'

interface ClosingSectionProps {
  locale: Locale
}

export default function ClosingSection({ locale }: ClosingSectionProps) {
  const content = {
    en: {
      title: "Closing Statement",
      paragraphs: [
        "The Itqan Initiative is not merely a training program; it is a national development project that invests in people and believes that skill-building is the true path to nation-building.",
        "In a manner that meets the expectations of dedicated and committed stakeholders, and works to bridge the gap between skills-based training and theoretical education—addressing what the labor market in the Kingdom of Saudi Arabia currently needs.",
        "A national development program that invests in intellectual capital. And God grants success."
      ]
    },
    ar: {
      title: "الرسالة الختامية",
      paragraphs: [
        "مبادرة إتقان ليست مجرد برنامج تدريبي؛ بل هي مشروع وطني يركز على الاستثمار في الإنسان ويؤمن أن بناء المهارات هو الطريق الحقيقي لبناء الأمة.",
        "وبالشكل الذي يرضاه المخلصون الأوفياء، ويعمل على سد الثغرة بين التدريب المهاري والتدريب النظري وهذا الذي يحتاجة سوق العمل في المملكة العربية السعودية هذه الأيام",
        "و يعتبر برنامج وطني يركز على الاستثمار في رأس المال الفكري. وتوفيق الله حليفنا."
      ]
    }
  }

  const texts = content[locale]

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white md:px-6 md:py-28    px-6 py-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -z-10"></div>

      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold centert text-[#397a34] mb-8 animate-fadeIn">
          {texts.title}
        </h2>

        {texts.paragraphs.slice(0, 2).map((p, i) => (
          <p key={i} className="text-lg md:text-xl text-gray-700 mb-6">
            {locale === 'ar' ? <span dir="rtl">{p}</span> : p}
          </p>
        ))}

        <p className="text-lg md:text-xl text-green-900 font-semibold text-center border-t border-green-200 pt-6">
          {locale === 'ar' ? <span dir="rtl">{texts.paragraphs[2]}</span> : texts.paragraphs[2]}
        </p>
      </div>
    </section>
  )
}
