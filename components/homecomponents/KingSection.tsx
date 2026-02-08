"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Locale = "en" | "ar";

function KingSection({ locale = "ar" }: { locale?: Locale }) {
  const isAr = locale === "ar";

  useEffect(() => {
    const items = gsap.utils.toArray(".king-anim");

    gsap.set(items, { y: 40, opacity: 0 });

    gsap.to(items, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".king-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      className="relative bg-white md:py-32 py-16 overflow-hidden king-section"
      dir={isAr ? "rtl" : "ltr"}
    >


      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Image Side - Occupies 5 columns of the grid */}
          <div className="lg:col-span-5 king-anim">
            <div className="relative">
              {/* Outer Glow Effect */}
              <div className="relative king-anim px-4">
                <div className="relative shadow-[0_30px_60px_-15px_rgba(57,122,52,0.15)] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/IMG_9506.JPG"
                    alt="Saudi Leadership"
                    width={1200}
                    height={1500}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </div>
              {/* Decorative Element: Small Vision 2030 Badge or Pattern */}
            </div>
          </div>

          {/* Text Side - Occupies 7 columns of the grid */}
          <div className="lg:col-span-7 space-y-10">
            <div className="king-anim">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-[#6ab742]"></div>
                <span className="text-[#6ab742] font-bold text-sm uppercase tracking-[0.2em]">
                  {isAr ? "رؤية طموحة" : "An Ambitious Vision"}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#397a34] leading-tight">
                {isAr
                  ? "كلمة خادم الحرمين الشريفين"
                  : "Custodian of the Two Holy Mosques"}
              </h2>
            </div>

            <div className="relative king-anim">
              {/* Large Stylized Quote Mark */}
              <span className="absolute -top-12 -start-8 text-[12rem] text-green-600/5 font-serif select-none pointer-events-none">
                “
              </span>

              <div className=" relative z-10">
                <p className="text-2xl md:text-3xl text-gray-800 leading-[1.6] font-medium italic">
                  {isAr
                    ? "هدفي الأول أن تكون بلادنا نموذجاً ناجحاً ورائداً في العالم على كافة الأصعدة، وسأعمل معكم على تحقيق ذلك."
                    : "MY PRIMARY GOAL IS TO BE AN EXEMPLARY AND LEADING NATION IN ALL ASPECTS, AND I WILL WORK WITH YOU IN ACHIEVING THIS ENDEAVOUR."}
                </p>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl">
                  {isAr
                    ? "ومعاً سنكمل بناء بلدنا لنكون كما نتمناها جميعاً... مزدهرة وقوية."
                    : "Together we will continue building our country to be as we all wish it to be... prosperous and strong."}
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-gray-100 flex flex-col md:flex-row md:items-center gap-6 king-anim">
              <div>
                <p className="text-2xl font-bold text-[#397a34]">
                  {isAr
                    ? "خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود"
                    : "Custodian of the Two Holy Mosques King Salman Bin Abdulaziz Al-Saud"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KingSection;
