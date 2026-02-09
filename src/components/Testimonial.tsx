"use client";
import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/Navblue_still-Case_study-Envoy.webp",
    imageAlt: "NAVBLUE workplace",
    videoUrl: "https://player.vimeo.com/video/1143580188?autoplay=1",
    heading: "Envoy enabled us to bring on a new way of working across the company.",
    body: null,
    person: "Marit Sormus",
    role: "Technical Lead at NAVBLUE",
    logo: "/images/Navblue_logo-white.svg",
    logoAlt: "NAVBLUE",
  },
  {
    image: "/images/recor_video_still.webp",
    imageAlt: "Recor workplace",
    videoUrl: "https://player.vimeo.com/video/1133998557?autoplay=1",
    heading: "Recor avoided a 33% increase in workplace headcount",
    body: "Recor increased workplace efficiency without needing to hire additional staff, thanks to Envoy\u2019s visitor management solution.",
    person: null,
    role: null,
    logo: null,
    logoAlt: null,
  },
];

export default function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const slide = slides[activeSlide];

  const goTo = (index: number) => {
    setActiveSlide(index);
  };

  const prev = () => goTo((activeSlide - 1 + slides.length) % slides.length);
  const next = () => goTo((activeSlide + 1) % slides.length);

  return (
    <section className="py-16 bg-envoy-red">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row relative">
          {/* Image side with play button */}
          <div className="lg:w-1/2 relative min-h-[280px] lg:min-h-[400px]">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              loading="lazy"
              className="object-cover"
            />
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
              aria-label="Play video"
            >
              <div className="w-16 h-16 bg-envoy-red rounded-full flex items-center justify-center group-hover:bg-envoy-purple group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 text-envoy-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Quote side */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-6">
              <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l1.6 4.8C11.2 6.4 8 11.2 8 16h8v16H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l1.6 4.8C33.6 6.4 30.4 11.2 30.4 16h8v16H22.4z" fill="#FFFFFF" />
            </svg>

            <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed mb-4">
              {slide.heading}
            </p>

            {slide.body && (
              <p className="text-white/90 text-base leading-relaxed mb-6">
                {slide.body}
              </p>
            )}

            {slide.person && (
              <div className="mb-4">
                <p className="text-white font-semibold">{slide.person}</p>
                {slide.role && <p className="text-white text-sm">{slide.role}</p>}
              </div>
            )}

            {slide.logo && (
              <Image
                src={slide.logo}
                alt={slide.logoAlt ?? ""}
                width={222}
                height={64}
                className="mt-2 mb-6"
              />
            )}

            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition-colors cursor-pointer mt-2 self-start"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch the video
            </button>
          </div>

          {/* Navigation arrows - bottom right */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer shadow-md"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer shadow-md"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-envoy-red transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={slide.videoUrl}
              className="w-full h-full rounded-xl"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}
