import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Testimonial from "@/components/Testimonial";
import PlatformOverview from "@/components/PlatformOverview";
import CoreCapabilities from "@/components/CoreCapabilities";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { faqs } from "@/components/faqData";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
     <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
    <header>
      <Navbar />
      <Hero />
    </header>
    <main>
      <LogoTicker />
      <Testimonial />
      <PlatformOverview />
      <CoreCapabilities />
      <Integrations />
      <CTA />
      <FAQ />
    </main>
    <Footer />
    </>
  );
}
