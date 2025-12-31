import Image from "next/image"
import ETQAN from "@/public/ETQAN.png"


export default function ProfessionalHero({ isAr }: { isAr: boolean }) {
  return (
    <section className="relative bg-[#397a34] text-white py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl centert font-extrabold mb-6">
          {isAr ? "المسار المهني" : "Professional Programs"}
        </h1>

        <p className="max-w-2xl centert mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
          {isAr
            ? "برامج تطبيقية متخصصة تؤهل المشاركين لمهن وحرف وتقنيات مطلوبة في سوق العمل، وتُنفذ داخل مشاغل تدريبية معتمدة وتحت إشراف مختصي."
            : "Specialized applied programs that qualify participants for professions, trades, and technical skills in demand in the labor market, delivered within accredited training workshops and under the supervision of specialists."}
        </p>
      </div>
        <div className="absolute top-1/2 right-1/2 transform  -translate-y-1/2 translate-x-1/2 opacity-20 w-40 h-40 md:w-[400px] md:h-[400px] pointer-events-none">
        <Image src={ETQAN} alt="Logo" fill className="object-contain" />
      </div>

      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
    </section>
  )
}




