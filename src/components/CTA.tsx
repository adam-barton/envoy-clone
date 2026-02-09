import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-envoy-purple-dark">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="rounded-3xl py-16 px-8 text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white tracking-[-0.02em]">
            Ready to learn more?
          </h2>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center bg-envoy-green text-black text-[16px] font-semibold px-8 py-4 rounded-xl hover:bg-envoy-green-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
