# GDG on Campus – Al-Azhar University

صفحة هبوط (landing page) بالعربي لمجتمع GDG on Campus Al-Azhar University،
مبنية عشان تتفتح لما الطلاب يعملوا سكان لكود QR في البوث.

## قبل ما تنشر الموقع (مهم ✅)

افتح ملف `lib/config.ts` وغيّر الروابط دي بروابطكم الحقيقية:

- `joinUrl` → الرابط اللي هيتفتح لما حد يدوس "انضم لمجتمعنا" (لينك جروب الواتساب، أو Linktree، أو فورم تسجيل)
- `socials.instagram` / `linkedin` / `facebook` / `whatsapp` / `linktree` → روابط السوشيال ميديا بتاعتكم

كل النصوص التانية موجودة جوه ملفات `components/*.tsx` — تقدروا تعدلوها زي ما تحبوا.

## تشغيل المشروع على جهازك (اختياري)

يتطلب [Node.js](https://nodejs.org) نسخة 18 أو أحدث.

```bash
npm install
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

## النشر على Vercel

**الطريقة الأسهل (من غير Terminal):**

1. ارفع فولدر المشروع ده على [GitHub](https://github.com) (كـ repository جديد)
2. روح على [vercel.com/new](https://vercel.com/new) وسجل دخول بحساب GitHub
3. اختار الـ repository اللي رفعته
4. Vercel هيكتشف إنه مشروع Next.js تلقائي — دوس **Deploy** بس
5. بعد ما يخلص، هتاخد لينك زي `your-project.vercel.app` — ده اللي تحطوه في كود الـ QR

**أو من الـ Terminal:**

```bash
npm install -g vercel
vercel
```

اتبع التعليمات اللي هتظهر قدامك.

## هيكل المشروع

```
app/            صفحة الموقع الرئيسية + الإعدادات العامة (layout, fonts, metadata)
components/     كل قسم في الصفحة (Hero, About, Activities, JoinUs...)
lib/config.ts   الروابط القابلة للتعديل (جروب الانضمام + السوشيال ميديا)
```

## التقنيات المستخدمة

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- خط Tajawal العربي (يتحمّل تلقائي وقت البناء)
