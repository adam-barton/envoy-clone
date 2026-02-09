import Link from "next/link";

const footerSections = [
  {
    title: "Platform",
    links: [
      "Envoy platform",
      "Visitors",
      "Screens",
      "Emergency Notifications",
      "Reservations",
      "Mobile app",
      "Integrations",
      "Developers",
    ],
  },
  {
    title: "Blog",
    links: [
      "Workplace management",
      "Visitor management",
      "Space management",
      "Compliance & security",
      "Mailroom management",
    ],
  },
  {
    title: "Company",
    links: ["About Envoy", "Newsroom", "Careers", "Data security", "Demo", "Contact us", "Partners"],
  },
  {
    title: "Solutions",
    links: [
      "Centralize workplace management",
      "Employee & visitor experience",
      "Safety & compliance",
      "Workplace utilization",
      "Workplaces & buildings",
      "Manufacturing",
      "Pharma & biotech",
      "Professional services",
      "Technology",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Case studies",
      "eBooks",
      "Reports",
      "Product updates",
      "Events & Webinars",
      "Developers",
      "Envoy store",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-envoy-black text-white pt-16 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* CTA banner */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold mb-2">Try Envoy for free</h3>
          <p className="text-gray-400">
            Transforming your workplace is easier than you think. Get started in minutes.
          </p>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px] text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 Envoy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Cookie preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
