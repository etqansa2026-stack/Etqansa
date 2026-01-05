import ProgramCard from "@/components/lifeprogramcomponents/ProgramCard";
import { translatedProgram } from "@/types";
type Locale = "ar" | "en";

type CoursesSectionProps = {
  courses: translatedProgram[];
  locale: Locale;
};

export default function CoursesSection({ courses, locale }: CoursesSectionProps) {
  const isAr = locale === "ar";
  return (
    <section className="bg-white">
      <div className="container mx-auto md:px-6 md:py-28 px-6 py-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#397a34]">
          {isAr ? "البرامج المميزة" : "Featured Courses"}
        </h2>

        {/* 
          Use flex on md+ so items are centred when there are 1 or 2 cards.
          Each card is wrapped in a fixed-width container for consistent sizing.
        */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-10">
            {courses.map((program) => (
              <div key={program.id ?? program.slug} className="w-full md:w-85 lg:w-100 ">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
