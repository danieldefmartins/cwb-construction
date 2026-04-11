import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Decks & Outdoor Living | CWB Construction",
  description:
    "Custom decks, patios, outdoor kitchens, and living spaces in Greater Boston, MA & Southern NH. Weather-durable construction by CWB Construction. Free estimates.",
};

export default function DecksOutdoorPage() {
  return (
    <ServicePage
      badge="Services"
      title="Decks & Outdoor Living"
      subtitle="Extend your living space outdoors with custom decks, patios, and gathering areas built to handle everything New England throws at them."
      description={`A well-built outdoor space does more than add square footage — it changes how you use your home. Whether it's morning coffee on the deck, grilling with friends on the patio, or relaxing by a fire pit after the kids are in bed, outdoor living is some of the best living you'll do.

CWB Construction designs and builds custom decks, patios, pergolas, outdoor kitchens, and complete backyard living areas. We use materials engineered for the freeze-thaw cycles, heavy snow loads, and coastal moisture that define New England's climate — so your investment holds up season after season.

From pressure-treated lumber to low-maintenance composite decking from Trex, TimberTech, and Azek, we help you choose the right materials for your goals and budget. Serving Greater Boston, the North Shore, Merrimack Valley, and Southern New Hampshire, we handle everything from permits to final staining.`}
      features={[
        {
          title: "Custom Deck Design & Construction",
          description:
            "Multi-level decks, wraparound decks, and rooftop decks — designed for your home's layout and built with proper footings, framing, and railing systems.",
        },
        {
          title: "Composite & Low-Maintenance Decking",
          description:
            "Trex, TimberTech, and Azek composite boards that resist fading, staining, and rot — no annual sanding or staining required.",
        },
        {
          title: "Patio & Hardscape Installation",
          description:
            "Paver patios, bluestone walkways, and natural stone surfaces with proper grading and drainage for New England's freeze-thaw cycles.",
        },
        {
          title: "Outdoor Kitchens & Built-In Grills",
          description:
            "Stone or block outdoor kitchen islands with built-in grills, countertops, storage, and optional plumbing and electrical hookups.",
        },
        {
          title: "Pergolas, Gazebos & Shade Structures",
          description:
            "Freestanding or attached overhead structures that provide shade, define spaces, and add architectural interest to your yard.",
        },
        {
          title: "Railings, Lighting & Finishing Touches",
          description:
            "Cable railings, glass panels, composite balusters, and integrated LED lighting to make your outdoor space safe and usable after dark.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Site Visit & Design",
          description:
            "We evaluate your yard, discuss how you want to use the space, review material options, and create a design that fits your home and budget.",
        },
        {
          step: "2",
          title: "Permits & Planning",
          description:
            "We handle local building permits, HOA requirements, and create detailed plans with dimensions, materials, and structural specifications.",
        },
        {
          step: "3",
          title: "Build & Install",
          description:
            "Our crew sets footings, frames the structure, installs decking or hardscape, and completes railings, stairs, and all finishing work.",
        },
        {
          step: "4",
          title: "Final Walkthrough",
          description:
            "We inspect every detail with you, verify structural integrity and code compliance, clean the site, and review care and maintenance tips.",
        },
      ]}
      faqs={[
        {
          question: "Pressure-treated wood or composite — which should I choose?",
          answer:
            "Pressure-treated lumber costs less upfront but requires annual maintenance — staining, sealing, and eventual board replacement. Composite decking from brands like Trex and TimberTech costs more initially but lasts 25–50 years with virtually zero maintenance. For most homeowners in New England, composite pays for itself within 8–10 years.",
        },
        {
          question: "How long does it take to build a deck?",
          answer:
            "A standard deck (200–400 sq ft) typically takes 1 to 2 weeks from start to finish. Larger projects with multiple levels, built-in seating, or outdoor kitchens may take 3 to 4 weeks. Permit timelines vary by municipality and can add 1–3 weeks before construction begins.",
        },
        {
          question: "Do I need a permit for a deck or patio?",
          answer:
            "In most Massachusetts and New Hampshire towns, yes — any elevated deck or structure attached to the house requires a building permit. Ground-level patios sometimes don't, depending on the municipality. We handle the entire permit process so you don't have to deal with town hall.",
        },
        {
          question: "Can you build a deck that handles heavy snow loads?",
          answer:
            "Absolutely. Every deck we build meets or exceeds local snow load requirements, which in Greater Boston means engineering for 40–60 lbs per square foot. We use properly sized joists, beams, and footings rated for New England's conditions — not code minimums.",
        },
      ]}
      images={[
        "/projects/web-pictures/Deck-Contractor-TimberTech-Composite-1024x694-1.jpg",
        "/projects/decks-outdoor/composite-deck-2023-b/composite-deck-evening-01.jpg",
        "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-exterior-full.jpg",
        "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-front-01.jpg",
        "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-lattice-01.jpg",
        "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-stairs-01.jpg",
        "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-exterior-01.jpg",
        "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-railing-01.jpg",
        "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-finished-exterior.jpg",
        "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-finished-01.jpg",
        "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-finished-lattice-01.jpg",
        "/projects/decks-outdoor/hardwood-deck-2022/deck-progress-boards-01.jpg",
      ]}
    />
  );
}
