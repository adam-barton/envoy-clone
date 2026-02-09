import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    image: "/images/capabilities/Visitors-Simple_illo-SQ-Envoy-260128.svg",
    title: "Visitor\nmanagement",
    description: "Streamline visitor management with secure, compliant pre-registration, screening, and check-in for visitors and contractors.",
    link: "#",
  },
  {
    image: "/images/capabilities/Workplace-Simple_illo-SQ-Envoy-260128.svg",
    title: "Resource\nbooking",
    description: "Maximize efficiency with real-time room, desk, and parking management tailored to your organization.",
    link: "#",
  },
  {
    image: "/images/capabilities/Deliveries-Simple_illo-SQ-Envoy-260128.svg",
    title: "Mailroom\nmanagement",
    description: "Streamline delivery management with accurate digital delivery records and automated notifications to recipients.",
    link: "#",
  },
  {
    image: "/images/capabilities/EmNo-Simple_illo-SQ-Envoy-260128.svg",
    title: "Emergency & mass notifications",
    description: "Control emergency and incident response with targeted, multi-channel alerts and real-time status updates for employees, visitors, and contractors.",
    link: "#",
  },
  {
    image: "/images/capabilities/Screens-Simple_illo-SQ-Envoy-260128.svg",
    title: "Digital\nsignage",
    description: "Centralize device and content management to keep everyone in the know from updates to emergencies—without needing help from IT.",
    link: "#",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="py-20 lg:py-28 bg-envoy-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-envoy-purple tracking-widest uppercase mb-4">
              Core Capabilities
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-envoy-black">
              What does the Envoy platform offer?
            </h2>
          </div>
          <p className="text-lg text-envoy-gray leading-relaxed lg:pt-10">
            Invest in the future of your organization with Envoy&apos;s modular, all-in-one platform built to scale alongside your evolving needs.
          </p>
        </div>

        {/* All 5 cards in one row on desktop */}
        <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <div className="w-44 h-44 mx-auto mt-4 overflow-hidden rounded-full">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  width={176}
                  height={176}
                  loading="lazy"
                  className="object-contain p-6 rounded-full w-44 h-44"
                />
              </div>
              <div className="p-7 pt-4">
                <h3 className="text-xl font-bold text-envoy-black whitespace-pre-line mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-envoy-gray leading-relaxed mb-4">
                  {cap.description}
                </p>
                <Link
                  href={cap.link}
                  className="inline-flex items-center text-sm font-semibold text-envoy-purple hover:text-envoy-red transition-colors"
                >
                  Learn more
                  <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
