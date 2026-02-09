import Image from "next/image";
import Link from "next/link";
import MobileMenuButton from "./MobileMenuButton";

export default function Navbar() {
  return (
    <>
      {/* Top banner */}
      <div className="bg-envoy-purple-dark text-white text-center text-sm py-2.5 px-4">
        Reduce onsite risk before visitors arrive 🔐{" "}
        <Link href="#" className="underline font-medium hover:text-envoy-red transition-colors">
          Register now!
        </Link>
      </div>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo_header2x.webp" alt="Envoy Logo" width={112} height={35} priority />
          </Link>

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-center gap-8">
            {["Platform", "Solutions", "Resources", "Pricing"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[15px] font-medium text-envoy-black hover:text-envoy-red transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="text-[15px] font-medium text-envoy-black hover:text-envoy-red transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              className="bg-envoy-red text-white text-[15px] font-medium px-5 py-2.5 rounded-full hover:bg-envoy-red transition-colors"
            >
              Get a demo
            </Link>
          </div>

          {/* Mobile hamburger + menu (client component) */}
          <MobileMenuButton />
        </div>
      </nav>
    </>
  );
}
