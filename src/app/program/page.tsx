import Header from "@/components/Header";
import ProgramHero from "@/components/ProgramHero";
import Curriculum from "@/components/Curriculum";
import WeeklyRhythm from "@/components/WeeklyRhythm";
import Eligibility from "@/components/Eligibility";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function ProgramPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProgramHero />
        <Curriculum />
        <WeeklyRhythm />
        <Eligibility />
        <CtaBanner
          subtitle="Applications are reviewed on a rolling basis. Spots in each cohort are limited."
          href="/program"
          buttonText="See the full program"
        />
      </main>
      <Footer />
    </>
  );
}
