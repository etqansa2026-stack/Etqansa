import Image from "next/image"
import whitelogo2 from "@/public/whitelogo2.png"

export default function HeroSection({ isAr }: { isAr: boolean }) {
  return (
    <section className="relative py-32 bg-[#397a34] text-white text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl centert font-extrabold mb-6">
          {isAr ? "رسالتنا ورؤيتنا" : "Mission & Vision"}
        </h1>
        
     
      </div>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image src={whitelogo2} alt="Logo" fill className="object-contain" />
      </div>
    </section>
  )
}
