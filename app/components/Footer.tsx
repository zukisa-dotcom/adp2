import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = ["About", "Impact", "Cities", "Documents", "Resources", "Tools", "Team"];
const PAGE_LINKS: Record<string, string> = {
  About: "/about",
  Impact: "/impact",
  Cities: "/cities",
  Documents: "/documents",
  Resources: "/resources",
  Tools: "/tools",
  Team: "/team",
};

export default function Footer() {
  return (
    <footer className="bg-accent text-white/80 px-6 py-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <Image
              src="/AMALI DP Logo Horizontal_White On Orange_RGB.png"
              alt="AMALI Data Programme"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed mb-6">
            An initiative dedicated to strengthening the capacity of African
            mayors to use data for transformative urban leadership.
          </p>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-3">
              Funded by
            </p>
            <Image
              src="/bloomberg.png"
              alt="Bloomberg Philanthropies"
              width={140}
              height={40}
              className="h-10 w-auto brightness-0 invert opacity-70"
            />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                {PAGE_LINKS[l] ? (
                  <Link
                    href={PAGE_LINKS[l]}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {l}
                  </Link>
                ) : (
                  <a
                    href={`/#${l.toLowerCase()}`}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {l}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">
            Legal &amp; Policy
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            {["Privacy Policy", "Terms of Use", "Changelog"].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/30 text-xs text-white/60 font-semibold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} AMALI Data Programme. All rights
        reserved.
      </div>
    </footer>
  );
}
