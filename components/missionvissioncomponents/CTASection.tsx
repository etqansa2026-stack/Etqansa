import Button1 from "../ui/Button1"
import Link from "next/link"

export default function CTASection({ isAr }: { isAr: boolean }) {
  return (
    <section className="bg-[#397a34] text-white py-24 text-center">
      <h2 className="text-3xl centert font-bold mb-4">{isAr ? "كن جزءًا من رحلتنا" : "Be Part of Our Journey"}</h2>
      <p className="mb-8 centert opacity-90">{isAr ? "ابدأ رحلتك التعليمية اليوم واصنع مستقبلك." : "Start your learning journey today and build your future."}</p>
      <Link href={"/programs/form"}>
     <Button1>
        {isAr ? "سجل الآن" : "Join Now"}
      </Button1>
      </Link>
    </section>
  )
}
