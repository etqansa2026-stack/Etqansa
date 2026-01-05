import type { Metadata } from "next";

// Environment & Base Info
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const SITE_TITLE = "مبادرة إتقان";
export const SITE_TAGLINE = "مبادرة وطنية لتنمية المهارات وربطها بسوق العمل";
export const APP_NAME = `${SITE_TITLE} | ${SITE_TAGLINE}`;

export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "مبادرة وطنية تنموية لتمكين الإنسان السعودي وبناء الكفاءة نحو جيلٍ منتج، مؤهل، وقادر على صناعة مستقبل مشرق. برامج مهنية وحياتية مجانية للشباب بالتعاون مع جهات رسمية ومجتمعية.";

export const COMMON_KEYWORDS = [
  // English keywords (for international crawling)
  "Etqan",
  "Etqan Initiative",
  "Saudi youth empowerment",
  "vocational training",
  "life skills",
  "workforce readiness",
  "employability",
  "career development",
  "skills training",
  "youth programs",
  // Arabic keywords
  "مبادرة إتقان",
  "تمكين الشباب",
  "تأهيل مهني",
  "تدريب عملي",
  "المهارات الحياتية",
  "جاهزية لسوق العمل",
  "توظيف الشباب",
  "بناء الكفاءة",
  "ثقافة العمل",
  "المسؤولية المجتمعية",
] as const;

// Home (Single page / landing)
export const HOME_METADATA: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: COMMON_KEYWORDS.join(", "),
  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    type: "website",
    locale: "ar-SA",
    images: [
      {
        url: `${SITE_URL}/Logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} — مبادرة وطنية لتأهيل الشباب`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [`${SITE_URL}/Logo.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

// About page
export const ABOUT_METADATA: Metadata = {
  title: `${SITE_TITLE} — من نحن`,
  description:
    "مبادرة إتقان: مبادرة وطنية لتنمية المهارات وتأهيل الشباب السعودي مهنياً وسلوكياً، وربط الكفاءات بسوق العمل من خلال برامج مجانية وفرص توظيف.",
  keywords: COMMON_KEYWORDS.join(", "),
  openGraph: {
    title: `${SITE_TITLE} — من نحن`,
    description:
      "تعرف على رؤية ورسالة مبادرة إتقان، أهدافها وطريقة العمل في تمكين الشباب السعودي وربط التدريب بسوق العمل.",
    url: `${SITE_URL}/about`,
    siteName: SITE_TITLE,
    locale: "ar-SA",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/Logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} — من نحن`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_TITLE} — من نحن`,
    description:
      "تعرف على رؤية ورسالة مبادرة إتقان وطرق دعمها لتنمية المهارات وربطها بسوق العمل.",
  },
};

// Mission & Vision page
export const MISSION_VISION_METADATA: Metadata = {
  title: `${SITE_TITLE} — الرؤية والرسالة`,
  description:
    "الرؤية: تمكين الأفراد لبناء مستقبل مهني وحياتي مستدام. الرسالة: تأهيل المشاركين عبر برامج مهنية وحياتية تربط التدريب باحتياجات سوق العمل وتعزز الاعتماد على الذات.",
  keywords: COMMON_KEYWORDS.join(", "),
  openGraph: {
    title: `${SITE_TITLE} — الرؤية والرسالة`,
    description:
      "تفاصيل الرؤية والرسالة التي توجه برامج مبادرة إتقان في تأهيل الشباب وربطهم بسوق العمل.",
    url: `${SITE_URL}/mission-vision`,
    siteName: SITE_TITLE,
    locale: "ar-SA",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/Logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} — الرؤية والرسالة`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_TITLE} — الرؤية والرسالة`,
    description:
      "اكتشف رؤية مبادرة إتقان ورسالتها في تمكين الشباب وبناء مستقبل مهني مستدام.",
  },
};

// Life Program page
export const LIFE_PROGRAM_METADATA: Metadata = {
  title: `${SITE_TITLE} — البرامج الحياتية`,
  description:
    "برامج حياتية مجانية تهدف إلى تنمية المهارات الشخصية والسلوكية لدى الشباب السعودي لتعزيز جاهزيتهم للحياة المهنية والمجتمعية.",
  keywords: COMMON_KEYWORDS.join(", "),
  openGraph: {
    title: `${SITE_TITLE} — البرامج الحياتية`,
    description:
      "تفاصيل البرامج الحياتية في مبادرة إتقان: مهارات سلوكية، تنمية ذاتية، تهيئة لسوق العمل، وورش تطبيقية مجانية.",
    url: `${SITE_URL}/life-programs`,
    siteName: SITE_TITLE,
    locale: "ar-SA",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/Logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} — البرامج الحياتية`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_TITLE} — البرامج الحياتية`,
    description:
      "ورش وبرامج حياتية لتنمية المهارات الشخصية والسلوكية لشباب السعودية بالمجان.",
  },
};

// Professional Program page
export const PROFESSIONAL_PROGRAM_METADATA: Metadata = {
  title: `${SITE_TITLE} — البرامج المهنية`,
  description:
    "برامج مهنية تطبيقية تركز على اكتساب مهارات عملية وتقنية مرتبطة باحتياجات سوق العمل لرفع فرص التوظيف.",
  keywords: COMMON_KEYWORDS.join(", "),
  openGraph: {
    title: `${SITE_TITLE} — البرامج المهنية`,
    description:
      "البرامج المهنية في مبادرة إتقان: تدريب تطبيقي، تعليم مهني، وربط الخريجين بفرص التوظيف والمؤتمرات.",
    url: `${SITE_URL}/professional-programs`,
    siteName: SITE_TITLE,
    locale: "ar-SA",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/Logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} — البرامج المهنية`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_TITLE} — البرامج المهنية`,
    description:
      "برامج مهنية تطبيقية تسهل انتقال المتدربين لسوق العمل عبر روابط مع جهات توظيفية وملتقيات عرض المهارات.",
  },
};

// Root / Global metadata (app layout)
export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ar-SA",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: SITE_TITLE,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/Logo.png`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [`${SITE_URL}/Logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};
