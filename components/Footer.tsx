import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-1 text-center text-sm text-ink/50">
        <p>
          {siteConfig.brandName} · {siteConfig.brandSub}
        </p>
        <p>© {new Date().getFullYear()} صُنع بحب لمجتمعنا ❤️</p>
      </div>
    </footer>
  );
}
