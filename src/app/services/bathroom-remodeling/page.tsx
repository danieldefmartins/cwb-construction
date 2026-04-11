import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Bathroom Remodeling | CWB Construction",
  description:
    "Expert bathroom remodeling in Greater Boston, MA & Southern NH. Walk-in showers, custom tile, vanities, and complete bath renovations by CWB Construction.",
};

export default function BathroomRemodelingPage() {
  return (
    <ServicePage
      badge="Services"
      title="Bathroom Remodeling"
      subtitle="Upgrade your bathroom with modern fixtures, quality tile work, and a layout designed for comfort and function."
      description={`A well-designed bathroom adds daily comfort and real value to your home. Whether you're updating a cramped half-bath, converting a tub to a walk-in shower, or gutting a master bath down to the studs, CWB Construction handles every phase of the project.

We specialize in the waterproofing, tile, plumbing, and finish work that make or break a bathroom renovation. Our team ensures proper moisture barriers, level tile installations, and reliable plumbing connections — the behind-the-wall details that keep your bathroom looking great for years.

From condos in Boston to colonials on the North Shore and homes throughout Southern New Hampshire, we've remodeled bathrooms of every size and style. Tell us what you're working with, and we'll show you what's possible.`}
      features={[
        {
          title: "Walk-In Shower Conversions",
          description:
            "Tub-to-shower conversions with frameless glass, linear drains, curbless entries, and custom tile surrounds.",
        },
        {
          title: "Custom Tile & Stonework",
          description:
            "Floor-to-ceiling tile, accent walls, shower niches, and heated floors — all set with precision.",
        },
        {
          title: "Vanity & Storage Solutions",
          description:
            "Single and double vanities, floating designs, medicine cabinets, and built-in linen storage.",
        },
        {
          title: "Plumbing Fixtures & Rough-Ins",
          description:
            "New supply lines, drain relocation, mixing valves, and fixture installation for sinks, toilets, and showers.",
        },
        {
          title: "Waterproofing & Moisture Control",
          description:
            "Schluter membrane systems, cement board backing, proper vapor barriers, and exhaust fan upgrades.",
        },
        {
          title: "Lighting & Electrical",
          description:
            "Recessed shower lighting, vanity sconces, GFCI outlets, and heated towel bar wiring.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "In-Home Assessment",
          description:
            "We evaluate your existing bathroom, discuss your goals, and identify any plumbing or structural considerations.",
        },
        {
          step: "2",
          title: "Design & Estimate",
          description:
            "You receive a detailed proposal with material selections, fixture choices, a scope of work, and a fixed timeline.",
        },
        {
          step: "3",
          title: "Renovation",
          description:
            "Our crew handles demo, waterproofing, plumbing, tile, vanity installation, and all finish work in sequence.",
        },
        {
          step: "4",
          title: "Inspection & Handoff",
          description:
            "We test every fixture, verify grout and caulk lines, and walk through the completed bathroom with you.",
        },
      ]}
      faqs={[
        {
          question: "How long does a bathroom remodel take?",
          answer:
            "A standard full bathroom remodel takes 3 to 5 weeks. Half-bath updates or cosmetic refreshes can be completed in 1 to 2 weeks. Custom tile work and fixture relocations can extend the timeline, which we account for in your project schedule.",
        },
        {
          question: "Can you make my bathroom more accessible?",
          answer:
            "Absolutely. We install curbless showers, grab bars, comfort-height toilets, wider doorways, and non-slip tile. We can design an accessible bathroom that still looks modern and stylish.",
        },
        {
          question: "Do I need permits for a bathroom remodel?",
          answer:
            "In most Greater Boston and NH municipalities, plumbing and electrical changes require permits. We handle all permitting and coordinate inspections so the work is done to code and properly documented.",
        },
        {
          question: "What's the cost range for a bathroom renovation?",
          answer:
            "Bathroom remodels in the Boston area typically run $15,000 to $50,000+ depending on scope, tile selection, and fixture quality. We provide a line-item estimate upfront so there are no surprises.",
        },
      ]}
      images={[
        "/projects/web-pictures/SabourinA3-1-scaled.webp",
        "/projects/web-pictures/1-Koblenz-14.webp",
        "/projects/web-pictures/2-Koblenz-1.webp",
        "/projects/web-pictures/16865-2.webp",
      ]}
    />
  );
}
