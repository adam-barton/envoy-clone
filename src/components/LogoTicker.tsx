import Image from "next/image";

const logos = [
  { name: "PWC", src: "/images/logos/pwc.svg" },
  { name: "Stripe", src: "/images/logos/stripe.svg" },
  { name: "Dropbox", src: "/images/logos/dropbox.svg" },
  { name: "Vanguard", src: "/images/logos/vanguard.svg" },
  { name: "Disney", src: "/images/logos/disney.svg" },
  { name: "Nvidia", src: "/images/logos/nvidia.svg" },
  { name: "Databricks", src: "/images/logos/databricks.svg" },
  { name: "Blue Origin", src: "/images/logos/blue-origin.svg" },
  { name: "Deutsche Bank", src: "/images/logos/deutsche-bank.svg" },
  { name: "GitHub", src: "/images/logos/github.svg" },
  { name: "Abbott", src: "/images/logos/abbott.svg" },
  { name: "HelloFresh", src: "/images/logos/hellofresh.svg" },
  { name: "MongoDB", src: "/images/logos/mongodb.svg" },
  { name: "Tesla", src: "/images/logos/tesla.svg" },
];

export default function LogoTicker() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 mb-10">
        <h2 className="text-center text-[17px] font-semibold text-envoy-gray tracking-wide">
          The workplace management system trusted by enterprise companies
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="logo-ticker flex items-center gap-16 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={32}
              className="h-8 w-auto grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
