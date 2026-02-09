import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-envoy-purple">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Text content - left side, constrained to max-width */}
        <div className="w-full lg:w-1/2 py-12">
          <div className="max-w-[640px] ml-auto px-6 lg:pr-12">
            <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.02em] text-envoy-white">
              Power workplace operations with one connected platform
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-envoy-white max-w-[520px] leading-relaxed animate-fade-in-up">
              Envoy unifies visitors, spaces, and communications into one
              enterprise-ready workplace management platform and ecosystem—so teams
              can operate securely, stay compliant, and scale with confidence.
            </p>

            <div className="mt-10 animate-fade-in-up animation-delay-300">
              <Link
                href="#"
                className="inline-flex items-center bg-envoy-blue text-envoy-purple text-[16px] font-semibold px-8 py-4 rounded-xl hover:bg-envoy-cream transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Request a demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero image - right side, extends to viewport edge */}
        <div className="w-full lg:w-1/2 flex items-center">
          <Image
            src="/images/Platform-OG_image-Envoy-260130.webp"
            alt="Envoy workplace management platform"
            width={750}
            height={500}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-tl-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
