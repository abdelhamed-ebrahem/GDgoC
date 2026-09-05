import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDG on Campus | جامعة الأزهر",
  description:
    "مجتمع طلابي شغوف بالتكنولوجيا والتعلم والتطور. بنساعد الطلاب يستعدوا لسوق العمل من خلال الكورسات وورش العمل والفعاليات.",
  openGraph: {
    title: "GDG on Campus | جامعة الأزهر",
    description:
      "مجتمع طلابي شغوف بالتكنولوجيا. تعلم، اتدرب، اتواصل، اتطور معانا 🚀",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-tajawal antialiased">{children}</body>
    </html>
  );
}
