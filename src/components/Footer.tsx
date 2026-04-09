import Link from "next/link";

const serviceLinks = [
  { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { name: "Home Remodeling", href: "/services/home-remodeling" },
  { name: "New Construction", href: "/services/new-construction" },
  { name: "Roofing", href: "/services/roofing" },
  { name: "Fire & Water Damage", href: "/services/fire-water-damage" },
];

const moreServices = [
  { name: "Home Addition", href: "/services/home-addition" },
  { name: "Basement Renovation", href: "/services/basement-renovation" },
  { name: "Siding", href: "/services/siding" },
  { name: "Windows & Doors", href: "/services/windows-doors" },
  { name: "Decks & Outdoor", href: "/services/decks-outdoor" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Process", href: "/our-process" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display text-sm font-black text-primary">C</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight">CWB</span>
                <span className="font-display text-[10px] font-semibold text-accent uppercase tracking-[0.2em] ml-2">Construction</span>
              </div>
            </Link>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-sm">
              Quality craftsmanship and reliable service for every project. Licensed
              and insured general contractor serving Greater Boston, Massachusetts
              & New Hampshire.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs text-white/40">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Licensed & Insured
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-4">
              More Services
            </h3>
            <ul className="space-y-2.5">
              {moreServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-6">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a href="tel:+19789046969" className="hover:text-white transition-colors">(978) 904-6969</a>
              </li>
              <li>
                <a href="mailto:support@cwbconstructioninc.com" className="hover:text-white transition-colors">
                  support@cwbconstructioninc.com
                </a>
              </li>
              <li>Greater Boston, MA & NH</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} CWB Construction Inc. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            MA & NH Licensed General Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
