import Hero from "@/components/Hero";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Activities from "@/components/Activities";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <About />
      <Manifesto />
      <Activities />
      <JoinUs />
      <Footer />
    </main>
  );
}
