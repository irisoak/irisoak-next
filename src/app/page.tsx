import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import MyApproach from "@/components/home/MyApproach";
import Services from "@/components/home/Services";
import TechnologyApproach from "@/components/home/TechnologyApproach";
import FAQ from "@/components/home/FAQ";
import ClientJourney from "@/components/home/ClientJourney";

export default function Home() {
  return (
    <>
      <Hero />
      <TechnologyApproach />
    <MyApproach />
      <SelectedWork />
      <Services />
      <FAQ />
      <ClientJourney />
    </>
  );
}