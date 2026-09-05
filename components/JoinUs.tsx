import { siteConfig } from "@/lib/config";
import { Instagram, Linkedin, Facebook, MessageCircle, Link2 } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: siteConfig.socials.instagram, icon: Instagram },
  { name: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
  { name: "Facebook", href: siteConfig.socials.facebook, icon: Facebook },
  { name: "WhatsApp", href: siteConfig.socials.whatsapp, icon: MessageCircle },
  { name: "Linktree", href: siteConfig.socials.linktree, icon: Link2 },
];

export default function JoinUs() {
  return (
    <section className="border-t border-ink/10 px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          جاهز تبدأ معانا؟
        </h2>
        <p className="mt-3 max-w-sm text-ink/60">
          انضم للمجتمع دلوقتي وابقى أول من يعرف بالكورسات والفعاليات الجاية
        </p>

        <a
          href={siteConfig.joinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full max-w-xs rounded-2xl bg-blue px-7 py-4 text-base font-bold text-white transition-colors hover:bg-ink sm:w-auto"
        >
          انضم دلوقتي
        </a>

        <div className="mt-10 flex items-center gap-3">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 text-ink/70 transition-colors hover:border-blue hover:text-blue"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
