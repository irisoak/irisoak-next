import Hero from "@/components/home/Hero";
import WhyWorkWithMe from "@/components/home/WhyWorkWithMe";
import ClientWork from "@/components/home/ClientWork";
import WhatIOffer from "@/components/home/WhatIOffer";
import FAQ from "@/components/home/FAQ";

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
      <ClientWork />
      <WhatIOffer />
      <WhyWorkWithMe />
      <FAQ />
    </>
  );
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iris & Oak",
  url: "https://www.irisoak.dev",
  description:
    "Professional websites and digital products for independent businesses.",
  sameAs: [
    "https://www.linkedin.com/company/irisandoak",
    "https://www.instagram.com/irisoakdev/",
    "https://www.facebook.com/profile.php?id=61593802392943",
    "https://github.com/irisoak/irisoak-next",
  ],
};