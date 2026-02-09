import Image from "next/image";
import Link from "next/link";

const integrations = [
  { name: "Avigilon", src: "/images/integrations/avigilon.svg" },
  { name: "Descartes", src: "/images/integrations/descartes.svg" },
  { name: "Azure", src: "/images/integrations/azure.svg" },
  { name: "Cisco Meraki", src: "/images/integrations/cisco-meraki.svg" },
  { name: "Microsoft Teams", src: "/images/integrations/microsoft-teams.svg" },
  { name: "DocuSign", src: "/images/integrations/docusign.svg" },
  { name: "ServiceNow", src: "/images/integrations/servicenow.svg" },
  { name: "Brivo", src: "/images/integrations/brivo.svg" },
  { name: "LenelS2", src: "/images/integrations/lenels2.svg" },
  { name: "Slack", src: "/images/integrations/slack.svg" },
  { name: "Honeywell", src: "/images/integrations/honeywell.svg" },
  { name: "Genetec", src: "/images/integrations/genetec.svg" },
  { name: "Okta", src: "/images/integrations/okta.svg" },
];

export default function Integrations() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-envoy-black max-w-[700px] mx-auto">
          Integrations that fit seamlessly into your existing ecosystem
        </h2>
        <p className="text-lg text-envoy-gray max-w-[720px] mx-auto mt-5 leading-relaxed">
          Envoy integrates with leading access control, identity, and communication systems to support secure, compliant workplace operations.
        </p>

        <Link
          href="#"
          className="inline-flex items-center text-[15px] font-semibold text-envoy-purple hover:text-envoy-red transition-colors mt-6"
        >
          Explore integrations
          <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Integration logos grid */}
        <div className="mt-14 flex flex-wrap flex-auto gap-4">
          {integrations.map((integration) => (
            <Link
              key={integration.name}
              href="#"
              className="rounded-xl p-5 flex flex-1 items-center justify-center transition-all duration-200 group"
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={100}
                height={32}
                className="h-8 w-auto max-w-[100px] object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
