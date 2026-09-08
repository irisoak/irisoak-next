import ClientJourney from "@/components/home/ClientJourney";

type ContactPageProps = {
  searchParams: Promise<{
    service?: string | string[];
  }>;
};

const allowedServices = new Set([
  "essentials",
  "launch",
  "refresh",
  "care",
  "custom",
]);

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const parameters = await searchParams;

  const requestedService = Array.isArray(parameters.service)
    ? parameters.service[0]
    : parameters.service;

  const initialService =
    requestedService && allowedServices.has(requestedService)
      ? requestedService
      : "";

  return (
    <main className="contact-page">
      <ClientJourney
        key={initialService || "general"}
        defaultOpen
        initialService={initialService}
        standalone
      />
    </main>
  );
}