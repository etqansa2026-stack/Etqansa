"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutInitiative({ isAr }: { isAr: boolean }) {

  useEffect(() => {
    const items = gsap.utils.toArray(".about-item");

    gsap.set(items, {
      y: -50,
      opacity: 0,
    });

    gsap.to(items, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "linear",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="bg-[#6ab742]/10 py-16 about-section">
      <div className="mx-auto px-4 max-w-5xl">

        <div className="mb-8">
          <h2 className="text-3xl centert md:text-4xl font-extrabold text-[#397a34] about-item">
            {isAr ? "عن المبادرة" : "About the Initiative"}
          </h2>
        </div>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed text-start md:text-left space-y-4">
          {isAr ? (
            <>
              <p className="about-item">
                مبادرة وطنية تنموية لتمكين <span className="font-bold text-[#397a34]">الإنسان السعودي</span> وبناء الكفاءة نحو جيلٍ 
                <span className="font-bold"> منتج، مؤهل، وقادر على صناعة مستقبل مشرق</span> بعون الله.
              </p>

              <p className="about-item">
                تعمل مبادرة <span className="font-bold text-[#397a34]">إتقان</span> على تمكين الأفراد، وخصوصًا الشباب من الجنسين، عبر مسارات متكاملة تجمع بين 
                <span className="font-bold"> التأهيل المهني التطبيقي والتأهيل الحياتي السلوكي</span>.
              </p>

              <p className="about-item">
                وسيتم إشراك <span className="font-bold text-[#397a34]">الشباب السعودي من الذكور والإناث</span> بشكل مجاني في البرامج الحياتية والمهنية.
              </p>

              <p className="about-item">
                وستكون هذه المبادرة منتهية <span className="font-bold text-[#397a34]">بالتوظيف</span> من خلال عقد مؤتمرات وملتقيات.
              </p>
            </>
          ) : (
            <>
              <p className="about-item">
                A national development initiative aimed at empowering <span className="font-bold text-[#397a34]">Saudi individuals</span> and building competencies to create a 
                <span className="font-bold"> productive, qualified generation</span>.
              </p>

              <p className="about-item">
                The <span className="font-bold text-[#397a34]">Itqan Initiative</span> empowers individuals through 
                <span className="font-bold"> practical professional training and life skills development</span>.
              </p>

              <p className="about-item">
                Saudi youth will participate free of charge in the <span className="font-bold text-[#397a34]">life and professional programs</span>.
              </p>

              <p className="about-item">
                The initiative will culminate in <span className="font-bold text-[#397a34]">employment opportunities</span>.
              </p>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
