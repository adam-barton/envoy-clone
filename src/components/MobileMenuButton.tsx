"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenuButton() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-envoy-black transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-envoy-black transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-envoy-black transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          {["Platform", "Solutions", "Resources", "Pricing", "Login"].map((item) => (
            <Link key={item} href="#" className="block text-[15px] font-medium text-envoy-black">
              {item}
            </Link>
          ))}
          <Link href="#" className="block bg-envoy-black text-white text-center text-[15px] font-medium px-5 py-3 rounded-full">
            Get a demo
          </Link>
        </div>
      )}
    </>
  );
}
