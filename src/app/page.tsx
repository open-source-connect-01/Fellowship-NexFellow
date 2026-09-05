import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import BuiltOn from "@/components/BuiltOn";
import Tracks from "@/components/Tracks";
import WalkAway from "@/components/WalkAway";
import Mentors from "@/components/Mentors";
import DemoDay from "@/components/DemoDay";
import Timeline from "@/components/Timeline";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <QuoteSection />
        <BuiltOn />
        <Tracks />
        <WalkAway />
        <Mentors />
        {/* <DemoDay /> */}
        <Timeline />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
