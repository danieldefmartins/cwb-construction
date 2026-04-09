import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | CWB Construction",
  description: "Browse our completed projects — kitchens, bathrooms, additions, roofing, and more across Greater Boston, MA & NH.",
};

const projects = [
  { id: "1", title: "Modern Farmhouse Kitchen", type: "Kitchen Remodeling", location: "Newton, MA", scope: "Full gut renovation with custom island, quartz countertops, and shaker cabinets." },
  { id: "2", title: "Luxury Master Bathroom", type: "Bathroom Remodeling", location: "Wellesley, MA", scope: "Spa-inspired master bath with freestanding tub, walk-in shower, and heated floors." },
  { id: "3", title: "Second Story Addition", type: "Home Addition", location: "Arlington, MA", scope: "1,200 sq ft second-floor addition with two bedrooms, full bath, and laundry." },
  { id: "4", title: "Complete Roof Replacement", type: "Roofing", location: "Brookline, MA", scope: "Full architectural shingle roof with new ice and water shield and ridge vents." },
  { id: "5", title: "Open Concept Living", type: "Home Remodeling", location: "Cambridge, MA", scope: "Removed load-bearing wall to create open kitchen-living space with custom finishes." },
  { id: "6", title: "Custom Colonial Home", type: "New Construction", location: "Dover, MA", scope: "3,800 sq ft custom colonial with 4 bedrooms, chef's kitchen, and finished basement." },
  { id: "7", title: "Finished Basement Suite", type: "Basement Renovation", location: "Needham, MA", scope: "Full basement finish with home theater, wet bar, guest bedroom, and full bath." },
  { id: "8", title: "Fire Damage Restoration", type: "Fire & Water Damage", location: "Quincy, MA", scope: "Complete restoration after kitchen fire — structural repair, smoke remediation, and full rebuild." },
  { id: "9", title: "Cedar Shake Siding", type: "Siding", location: "Hingham, MA", scope: "Full house cedar shake siding replacement with new housewrap and trim." },
  { id: "10", title: "Composite Deck & Patio", type: "Decks & Outdoor", location: "Lexington, MA", scope: "600 sq ft Trex composite deck with built-in seating, lighting, and stone patio." },
  { id: "11", title: "Energy-Efficient Windows", type: "Windows & Doors", location: "Concord, MA", scope: "22 Andersen replacement windows with custom trim and interior casing." },
  { id: "12", title: "Water Damage Restoration", type: "Fire & Water Damage", location: "Medford, MA", scope: "Emergency water extraction, structural drying, mold remediation, and full bathroom rebuild." },
];

const types = ["All", "Kitchen Remodeling", "Bathroom Remodeling", "Home Remodeling", "New Construction", "Home Addition", "Roofing", "Basement Renovation", "Siding", "Windows & Doors", "Decks & Outdoor", "Fire & Water Damage"];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Project Portfolio
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            Browse our completed projects across Greater Boston and New Hampshire.
            Each project reflects our commitment to quality and attention to detail.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-10 h-10 text-primary/20 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                      <p className="text-xs text-muted-foreground/40 mt-1">Project Photo</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-primary/90 text-white">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    {project.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Every project starts with a conversation. Tell us about your space
            and we&apos;ll make it happen.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
