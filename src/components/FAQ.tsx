"use client";
import { useState } from "react";
import { faqs } from "./faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <p className="text-center text-sm font-semibold text-envoy-purple tracking-widest uppercase mb-4">
          FAQ
        </p>
        <h2 className="text-center text-[32px] sm:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-envoy-black">
          Still have questions? We can help.
        </h2>

        <div className="mt-12 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full py-5 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-[16px] font-semibold text-envoy-black pr-8 group-hover:text-envoy-red transition-colors">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-envoy-gray transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`accordion-content ${openIndex === i ? "open" : ""}`}>
                <p className="text-envoy-gray text-[15px] leading-relaxed pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
