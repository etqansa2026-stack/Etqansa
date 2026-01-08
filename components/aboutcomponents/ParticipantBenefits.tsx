"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ParticipantBenefits({ isAr }: { isAr: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const items = [
    {
      title: isAr ? "مهارات حياتية ومهنية قابلة للتطبيق" : "Practical Life & Professional Skills",
      desc: isAr
        ? "اكتسب مهارات يمكن تطبيقها مباشرة في حياتك اليومية وسوق العمل."
        : "Gain skills that can be directly applied in your daily life and the workplace.",
    },
    {
      title: isAr ? "شهادة معتمدة ومصدّقة" : "Certified & Accredited Certificate",
      desc: isAr
        ? "احصل على شهادة رسمية تعزز فرصك الوظيفية."
        : "Receive an official certificate that boosts your career opportunities.",
    },
    {
      title: isAr ? "تأهيل فعلي لسوق العمل" : "Real Job Market Preparation",
      desc: isAr
        ? "استعد للعمل بشكل فعلي من خلال برامج عملية وتجريبية."
        : "Prepare effectively for the job market through practical and hands-on programs.",
    },
    {
      title: isAr ? "فرصة للمشاركة في معرض التوظيف" : "Opportunity to Attend Job Fair",
      desc: isAr
        ? "اعرض مهاراتك وخبراتك أمام الشركات والمؤسسات الباحثة عن مواهبك."
        : "Showcase your skills and experience to companies and organizations seeking talent.",
    },
    {
      title: isAr ? "دعم التوجه نحو العمل الحر والمشاريع الصغيرة" : "Support for Freelancing & Small Businesses",
      desc: isAr
        ? "نوفر لك الإرشاد والموارد لبدء مشاريعك الخاصة والعمل الحر."
        : "We provide guidance and resources to start your own projects and freelance work.",
    },
  ];

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".benefit-item");
    if (!elements || !sectionRef.current) return;

    // initial state
    gsap.set(elements, {
      y: 30,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          });

          observer.disconnect(); // يشتغل مرة واحدة فقط
        }
      },
      {
        threshold: 0.25, // يبدأ لما 25% من السكشن يبان
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-28">
      <h2 className="text-3xl font-bold centert mb-16 text-[#397a34] benefit-item">
        {isAr ? "ما يحصل عليه المشارك" : "What Participants Receive"}
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="benefit-item flex-1 min-w-[350px] max-w-sm rounded-2xl bg-green-50 p-8 text-center shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
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
