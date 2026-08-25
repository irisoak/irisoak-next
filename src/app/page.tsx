import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import MyApproach from "@/components/home/MyApproach";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <MyApproach />
      <Services />
    </>
  );
}