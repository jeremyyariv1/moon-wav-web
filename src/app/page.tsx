import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import TimeOfDay from "@/components/TimeOfDay";
import CreatorSection from "@/components/CreatorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <TimeOfDay />
        <CreatorSection />
      </main>
      <Footer />
    </>
  );
}
