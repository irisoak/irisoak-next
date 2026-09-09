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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iris & Oak",
  url: "https://www.irisoak.dev",
  description:
    "Iris & Oak designs and builds professional websites and digital products for independent businesses.",
  sameAs: [
    "https://www.linkedin.com/company/irisandoak",
    "https://www.instagram.com/irisoakdev/",
    "https://www.facebook.com/profile.php?id=61593802392943",
    "https://github.com/irisoak/irisoak-next",
  ],
};