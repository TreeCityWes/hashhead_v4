import { SOCIAL_LINKS } from "@/lib/constants";

const footerLinks = [
  { name: "TWITTER", url: SOCIAL_LINKS.twitter },
  { name: "GITHUB", url: SOCIAL_LINKS.github },
  { name: "TELEGRAM", url: SOCIAL_LINKS.telegram },
  { name: "YOUTUBE", url: SOCIAL_LINKS.youtube },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan/15 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-cyan font-semibold text-sm font-[var(--font-display)]">HASHHEAD</span>
          <span className="text-dim text-[10px] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} TreeCityWes
          </span>
        </div>

        <div className="flex items-center gap-1 text-[10px]">
          {footerLinks.map((link, i) => (
            <span key={link.name} className="flex items-center">
              {i > 0 && <span className="text-dim mx-1">·</span>}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dim hover:text-cyan uppercase tracking-wider"
              >
                {link.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
