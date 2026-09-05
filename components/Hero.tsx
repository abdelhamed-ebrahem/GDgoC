import { siteConfig } from "@/lib/config";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
      {/* شكل زخرفي بألوان الهوية */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 grid grid-cols-2 gap-3 opacity-90 sm:-left-6 sm:top-8"
      >
        <span className="h-10 w-10 rounded-md bg-blue sm:h-14 sm:w-14" />
        <span className="mt-6 h-10 w-10 rounded-md bg-red sm:mt-8 sm:h-14 sm:w-14" />
        <span className="-mt-4 h-10 w-10 rounded-md bg-yellow sm:-mt-6 sm:h-14 sm:w-14" />
        <span className="mt-2 h-10 w-10 rounded-md bg-green sm:mt-3 sm:h-14 sm:w-14" />
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center pt-16 text-center sm:pt-20">
        <p className="text-sm font-medium tracking-wide text-ink/60">
          {siteConfig.brandName} · {siteConfig.brandSub}
        </p>

        <h1 className="mt-5 text-4xl font-extrabold leading-[1.25] text-ink sm:text-5xl sm:leading-[1.25]">
          مجتمع طلاب شغوفين
          <br />
          بالتكنولوجيا والتطور 💻
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-ink/70">
          بنساعدكم تتجهزوا لسوق العمل، ونقرب المسافة بين اللي بتاخدوه في
          الكلية واللي محتاجينه في شغلكم الأول 🚀
        </p>

        <a
          href={siteConfig.joinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 text-base font-bold text-white transition-colors hover:bg-blue"
        >
          انضم لمجتمعنا
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
