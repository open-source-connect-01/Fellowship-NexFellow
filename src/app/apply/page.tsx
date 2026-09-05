import Header from "@/components/Header";
import ApplyHero from "@/components/ApplyHero";
import ApplyRequirements from "@/components/ApplyRequirements";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

export default function Apply() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ApplyHero />
        <ApplyRequirements />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
