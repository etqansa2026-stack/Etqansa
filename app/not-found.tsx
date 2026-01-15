"use client";

import Link from "next/link";

interface NotFoundProps {
  locale?: "en" | "ar";
}

export default function NotFound({ locale = "en" }: NotFoundProps) {
  const isAr = locale === "ar";

  const title = isAr ? "الصفحة غير موجودة" : "Page not found";
  const description = isAr
    ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. إذا قمت بكتابة الرابط يدوياً، يرجى التحقق منه مرة أخرى."
    : "The page you’re looking for doesn’t exist or has been moved. If you typed the address manually, please double-check it.";
  const buttonText = isAr ? "العودة للرئيسية" : "Go back home";
  const footerText = isAr
    ? "Etqansa — بناء تجارب رقمية احترافية."
    : "Etqansa — building professional digital experiences.";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center md:flex-row ${
        isAr ? "rtl" : "ltr"
      }`}
    >
      {/* Right: Content */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center p-8 bg-white">
        <div className="max-w-lg w-full text-center">
          {/* Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-[#397a34]/10 flex items-center justify-center border border-[#397a34]/20">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11 3L5 7v6c0 5 5 8 7 8s7-3 7-8V7l-6-4z"
                  stroke="#397a34"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 9.5l5 5"
                  stroke="#397a34"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 9.5l-5 5"
                  stroke="#397a34"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">{title}</h1>

          <p className="text-gray-600 mb-6">{description}</p>

          <div className="mb-6">
            <Link
              href="/"
              className="flex w-full flex-row justify-center px-6 py-3 rounded-md text-white font-medium bg-[#397a34] hover:bg-[#2f652b] focus:outline-none focus:ring-2 focus:ring-[#397a34]/40"
            >
              {buttonText}
            </Link>
          </div>

          <p className="text-sm text-gray-500">{footerText}</p>
        </div>
      </div>
    </div>
  );
}
