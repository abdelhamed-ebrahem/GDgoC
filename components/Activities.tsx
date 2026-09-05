import { BookOpen, Wrench, CalendarDays, Rocket } from "lucide-react";

const activities = [
  {
    title: "كورسات",
    desc: "محتوى تقني منظم يبني أساس قوي خطوة بخطوة",
    icon: BookOpen,
    color: "bg-blue",
  },
  {
    title: "ورش عمل",
    desc: "تطبيق عملي على اللي بتتعلمه أول بأول",
    icon: Wrench,
    color: "bg-red",
  },
  {
    title: "فعاليات",
    desc: "تواصل مع طلاب وشركات وناس شغوفة زيك",
    icon: CalendarDays,
    color: "bg-yellow",
  },
  {
    title: "تجارب عملية",
    desc: "مشاريع حقيقية تجهزك لسوق العمل فعلاً",
    icon: Rocket,
    color: "bg-green",
  },
];

export default function Activities() {
  return (
    <section className="border-t border-ink/10 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-right text-2xl font-bold text-ink sm:text-3xl">
          إيه اللي بنقدمه
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {activities.map(({ title, desc, icon: Icon, color }) => (
            <div
              key={title}
              className="rounded-2xl border border-ink/10 p-5 text-right"
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
              >
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
