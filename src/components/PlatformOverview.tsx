"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#fa4338" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Drive connectivity",
    description: "Empower teams to navigate the workplace effortlessly—from locating coworkers to finding the right space. Instantly reserve rooms, desks, or parking directly via the Envoy mobile app, calendar invites, or the interactive live map.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#fa4338" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Enhance safety & accountability",
    description: "From updates and reminders to critical alerts, keep everyone in the know leveraging conference room and designated signage displays, SMS, email, Slack, Microsoft Teams, and Envoy in-app notifications.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#fa4338" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Empower decisions",
    description: "Turn occupancy signals and near real-time analytics into actionable insights to operationalize safety, automate policy reporting, and drive smarter, data-driven decisions regarding space planning and growth.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#fa4338" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Navigate compliance",
    description: "Leverage Envoy's unified platform as a part of your security and compliance infrastructure to meet stringent regulatory standards and avoid severe financial penalties, legal liabilities, and operational disruptions.",
  },
];

type Product = {
  title: string;
  iconUrl?: string;
  icon?: string;
  gray?: boolean;
  description: string;
  cta: { text: string; url: string };
};

type Hotspot = {
  id: keyof typeof products;
  cx: number;
  cy: number;
  r: number;
  color: string;
};

const SVG_URL =
  "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/697bd4f1ed3bc6299113b483_7f309c85b3188d47596316c8ad72090d_Platform_map-Illustration-Envoy-260129.svg";

const products: Record<string, Product> = {
  envoy: {
    title: "Envoy Platform",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/69430583be9a114a23f0b29e_layers.svg",
    gray: false,
    description:
      "Envoy unifies visitors, spaces, and communications into one enterprise-ready workplace management platform and ecosystem-so teams can operate securely, stay compliant, and scale with confidence.",
    cta: { text: "Visit about Envoy Platform", url: "https://envoy.com/workplace-management-platform" },
  },
  parking: {
    title: "Parking",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/69430583151dd335ae115786_car.svg",
    gray: false,
    description:
      "Make arrivals smoother for employees and easier to manage for teams with a single system for booking, rules, maps, and real-time visibility.",
    cta: { text: "Learn about Parking", url: "https://envoy.com/products/parking-management" },
  },
  signage: {
    title: "Digital Signage",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/6943058368dabe0add5572b3_play_button.svg",
    gray: false,
    description:
      "Display important information, welcome visitors, and communicate with your workplace through dynamic digital signage software.",
    cta: { text: "Explore Signage", url: "https://envoy.com/products/digital-signage-software" },
  },
  integrations: {
    title: "Integrations",
    icon: "⚙",
    gray: true,
    description:
      "Connect Envoy with the tools you already use. Seamlessly integrate with Slack, Microsoft Teams, Google Workspace, and hundreds more.",
    cta: { text: "View Integrations", url: "https://envoy.com/integrations" },
  },
  desks: {
    title: "Desks",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/694305834834724608a94cb4_desk.svg",
    gray: false,
    description:
      "Simplify desk reservations, reduce conflicts, and improve space utilization with Envoy's smart desk booking system.",
    cta: { text: "Explore Desks", url: "https://envoy.com/products/hot-desk-booking-software" },
  },
  analytics: {
    title: "Analytics",
    icon: "📊",
    gray: true,
    description:
      "Get the insights that give you a comprehensive view of all your workplaces and help you optimize your space.",
    cta: { text: "View Analytics", url: "https://envoy.com/workplace-analytics-software" },
  },
  compliance: {
    title: "Compliance",
    icon: "✓",
    gray: true,
    description: "Stay ahead of security risks and regulatory requirements.",
    cta: { text: "Learn about Compliance", url: "https://envoy.com/solutions/security-compliance" },
  },
  rooms: {
    title: "Rooms",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/69430583e47fd27d65b76255_room.svg",
    gray: false,
    description:
      "Free up unused space, track usage, and make booking the right space simple with Envoy's conference room booking system.",
    cta: { text: "Discover Rooms", url: "https://envoy.com/products/conference-room-scheduling-software" },
  },
  visitors: {
    title: "Visitor Management",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/6943058333dcfb20de32afe8_visitor_badge.svg",
    gray: false,
    description:
      "Simplify visitor check-in, strengthen security, and stay compliant with Envoy's visitor management software.",
    cta: { text: "Explore Visitor Management", url: "https://envoy.com/products/visitors" },
  },
  deliveries: {
    title: "Deliveries",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/69430583a0babd9da4440c6d_parcel.svg",
    gray: false,
    description: "Manage packages seamlessly-from drop-off to pickup.",
    cta: { text: "Discover Deliveries", url: "https://envoy.com/products/mailroom-management-software" },
  },
  emergency: {
    title: "Emergency Mass Notifications",
    iconUrl:
      "https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/6943058323c86302b777d51a_notification_bell.svg",
    gray: false,
    description: "Respond quickly when every second counts",
    cta: { text: "Learn about Mass Notifications", url: "https://envoy.com/products/emergency-notifications" },
  },
};

const hotspots: Hotspot[] = [
  { id: "envoy", cx: 292.3, cy: 102.3, r: 35, color: "#fa4338" },
  { id: "parking", cx: 417.3, cy: 107, r: 20, color: "#fa4338" },
  { id: "signage", cx: 753.5, cy: 107, r: 20, color: "#fa4338" },
  { id: "integrations", cx: 311.2, cy: 210.7, r: 20, color: "#3f4450" },
  { id: "desks", cx: 417.3, cy: 210.7, r: 20, color: "#fa4338" },
  { id: "analytics", cx: 549.5, cy: 210.7, r: 20, color: "#3f4450" },
  { id: "compliance", cx: 733.6, cy: 210.7, r: 20, color: "#3f4450" },
  { id: "rooms", cx: 302.3, cy: 290.5, r: 20, color: "#fa4338" },
  { id: "visitors", cx: 364.4, cy: 366.2, r: 20, color: "#fa4338" },
  { id: "deliveries", cx: 557.5, cy: 366.2, r: 20, color: "#fa4338" },
  { id: "emergency", cx: 764.3, cy: 366.2, r: 20, color: "#fa4338" },
];

const mapCss = `.emc{position:relative;width:100%;margin:0 auto}.emc svg{display:block;width:100%;max-width:1280px;margin:0 auto;height:auto}@media(max-width:768px){.emc{height:auto;max-height:70vw}.emc svg{transform:scale(1.6);transform-origin:center center}}.emh{cursor:pointer}.emh:hover .emr{stroke-width:4;stroke-opacity:.5}.emh:hover .emp{animation:none;opacity:0}.emr{fill:transparent;stroke:currentColor;stroke-width:0;stroke-opacity:0;transition:all .3s ease}.emp{fill:transparent;stroke:currentColor;stroke-width:2;animation:ep 2s ease-in-out infinite}@keyframes ep{0%,100%{stroke-opacity:.3;stroke-width:2}50%{stroke-opacity:.7;stroke-width:4}}.emh:nth-child(1) .emp{animation-delay:0s}.emh:nth-child(2) .emp{animation-delay:.2s}.emh:nth-child(3) .emp{animation-delay:.4s}.emh:nth-child(4) .emp{animation-delay:.6s}.emh:nth-child(5) .emp{animation-delay:.8s}.emh:nth-child(6) .emp{animation-delay:1s}.emh:nth-child(7) .emp{animation-delay:1.2s}.emh:nth-child(8) .emp{animation-delay:1.4s}.emh:nth-child(9) .emp{animation-delay:1.6s}.emh:nth-child(10) .emp{animation-delay:1.8s}.emh:nth-child(11) .emp{animation-delay:2s}.epo{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:all .3s ease;z-index:10000}.epo.active{opacity:1;visibility:visible}.epp{background:#fff;border-radius:16px;max-width:480px;width:90%;max-height:85vh;overflow:hidden;transform:translateY(20px) scale(.95);transition:all .3s ease;box-shadow:0 24px 48px rgba(0,0,0,.2);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}.epo.active .epp{transform:translateY(0) scale(1)}.eph{padding:1.5rem;display:flex;align-items:center;gap:1rem;border-bottom:1px solid #ebebf0}.epi{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;overflow:hidden;background:#fa4338;color:#fff}.epi.gray{background:#3f4450}.epi img{width:24px;height:24px;object-fit:contain;filter:brightness(0) invert(1)}.ept{font-size:1.25rem;font-weight:600;color:#3f4450;margin:0}.epc{margin-left:auto;width:36px;height:36px;border:none;background:#f5f5f7;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s ease;flex-shrink:0}.epc:hover{background:#ebebf0;transform:rotate(90deg)}.epc svg{width:18px;height:18px;color:#8a8f9e}.epb{padding:1.5rem}.epd{color:#5a5f6d;line-height:1.6;font-size:.95rem;margin:0 0 1rem}.epa{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.25rem;background:#fa4338;color:#fff;text-decoration:none;border-radius:8px;font-weight:500;font-size:.9rem;transition:all .2s ease}.epa:hover{background:#e53a30;transform:translateY(-1px);color:#fff;text-decoration:none}.epa svg{width:16px;height:16px}`;

function EnvoyInteractivePlatformMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProduct = useMemo(
    () => (activeId ? products[activeId] : null),
    [activeId]
  );

  // Inject CSS once
  useEffect(() => {
    const styleId = "envoy-platform-map-css";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = mapCss;
      document.head.appendChild(style);
    }
  }, []);

  // Load SVG + add hotspots once
  useEffect(() => {
    let cancelled = false;

    async function loadSvg() {
      const host = containerRef.current;
      if (!host) return;

      // Clear (helps during Fast Refresh)
      host.innerHTML = "";

      try {
        const res = await fetch(SVG_URL, { cache: "force-cache" });
        const text = await res.text();
        if (cancelled) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const svg = doc.querySelector("svg");
        if (!svg) return;

        const adopted = document.importNode(svg, true) as SVGSVGElement;

        addHotspots(adopted, (id) => setActiveId(id));
        host.appendChild(adopted);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("SVG load failed:", e);
      }
    }

    loadSvg();
    return () => {
      cancelled = true;
    };
  }, []);

  // Escape closes
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveId(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  return (
    <>
      <div className="emc" ref={containerRef} />

      {activeId && activeProduct && (
        <div
          className="epo active"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveId(null);
          }}
        >
          <div className="epp">
            <div className="eph">
              <div className={`epi ${activeProduct.gray ? "gray" : ""}`}>
                {activeProduct.iconUrl ? (
                  <Image
                    src={activeProduct.iconUrl}
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                  />
                ) : (
                  <span>{activeProduct.icon ?? activeProduct.title.charAt(0)}</span>
                )}
              </div>

              <h2 className="ept">{activeProduct.title}</h2>

              <button className="epc" aria-label="Close" onClick={() => setActiveId(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="epb">
              <p className="epd">{activeProduct.description}</p>

              <a className="epa" href={activeProduct.cta.url}>
                {activeProduct.cta.text}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function addHotspots(svg: SVGSVGElement, onClick: (id: string) => void) {
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  hotspots.forEach((s) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("emh");
    (group.style as any).color = s.color;

    const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pulse.classList.add("emp");
    pulse.setAttribute("cx", String(s.cx));
    pulse.setAttribute("cy", String(s.cy));
    pulse.setAttribute("r", String(s.r));

    const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ring.classList.add("emr");
    ring.setAttribute("cx", String(s.cx));
    ring.setAttribute("cy", String(s.cy));
    ring.setAttribute("r", String(s.r + 5));

    const target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    target.setAttribute("cx", String(s.cx));
    target.setAttribute("cy", String(s.cy));
    target.setAttribute("r", String(s.r + 10));
    target.setAttribute("fill", "transparent");
    (target.style as any).cursor = "pointer";

    // accessibility: make it keyboard-focusable
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", products[s.id]?.title ?? s.id);

    group.appendChild(pulse);
    group.appendChild(ring);
    group.appendChild(target);

    group.addEventListener("click", () => onClick(s.id));
    group.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") onClick(s.id);
    });

    g.appendChild(group);
  });

  svg.appendChild(g);
}


export default function PlatformOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-envoy-purple tracking-widest uppercase mb-4">
              Platform Overview
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-envoy-black">
              One platform to secure and connect your people and your spaces
            </h2>
          </div>
          <p className="text-lg text-envoy-gray leading-relaxed lg:pt-10">
            Envoy provides facility leaders, security teams, and IT teams with unparalleled visibility into onsite occupancy and space utilization, delivering powerful insights needed to drive operational compliance and a frictionless workplace experience.
          </p>
        </div>

      </div>

      {/* Center illustration - full viewport width */}
      {/*<div className="mt-16 mb-16 py-8 bg-envoy-cream">
        <Image
          src="https://cdn.prod.website-files.com/64820bb890b5d776bb0c9faf/697bd4f1ed3bc6299113b483_7f309c85b3188d47596316c8ad72090d_Platform_map-Illustration-Envoy-260129.svg"
          alt="Envoy platform map illustration"
          width={1920}
          height={420}
          className="w-[100vw]"
        />
      </div>*/}
      <div className="mt-16 mb-16 py-8 bg-envoy-cream">
        <EnvoyInteractivePlatformMap />
      </div>

      <div className="max-w-[1280px] mx-auto px-6">

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-envoy-white rounded-2xl p-7 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-envoy-cream flex items-center justify-center mb-5 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-envoy-black mb-3 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-envoy-gray leading-relaxed transition-colors">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
