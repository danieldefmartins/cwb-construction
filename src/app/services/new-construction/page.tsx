import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "New Construction | CWB Construction",
  description:
    "Custom new home construction in Greater Boston, MA & Southern NH. Ground-up builds, site preparation, and full project management by CWB Construction.",
};

export default function NewConstructionPage() {
  return (
    <ServicePage
      badge="Services"
      title="New Construction"
      subtitle="Build your home from the ground up with a general contractor who manages every phase — from foundation to final finish."
      description={`Building a new home is one of the biggest investments you'll make, and it requires a contractor who can manage the full scope with precision. CWB Construction provides complete new construction services, coordinating every trade and every detail from site work through certificate of occupancy.

We build single-family homes, in-law suites, and accessory dwelling units across Greater Boston and Southern New Hampshire. Our approach is hands-on — we're on site daily, managing subcontractors, enforcing quality standards, and keeping the project on schedule.

Whether you're building on a lot you already own or developing a new parcel, we work with your architect and engineer to turn plans into a finished home that's built right, inspected thoroughly, and delivered on time.`}
      features={[
        {
          title: "Foundation & Site Work",
          description:
            "Excavation, grading, foundation pours, waterproofing, drainage systems, and backfill — all coordinated with local inspectors.",
        },
        {
          title: "Framing & Structural Build",
          description:
            "Stick-built framing, engineered lumber, sheathing, roofing, and window/door rough openings — built to plan and to code.",
        },
        {
          title: "Mechanical Rough-Ins",
          description:
            "HVAC ductwork, plumbing supply and waste lines, electrical wiring, and low-voltage pre-wire for modern living.",
        },
        {
          title: "Insulation & Envelope",
          description:
            "Spray foam, batt, or blown-in insulation paired with proper air sealing and vapor barriers for energy efficiency.",
        },
        {
          title: "Interior & Exterior Finishes",
          description:
            "Drywall, trim, cabinetry, flooring, siding, roofing, and paint — every visible surface finished to your specifications.",
        },
        {
          title: "Final Inspections & Occupancy",
          description:
            "We schedule and pass all required inspections, secure the certificate of occupancy, and hand you the keys.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Plan Review & Budgeting",
          description:
            "We review your architectural plans, walk the site, and provide a detailed construction budget and timeline.",
        },
        {
          step: "2",
          title: "Permitting & Site Prep",
          description:
            "We pull building permits, coordinate engineering reviews, and prepare the site for foundation work.",
        },
        {
          step: "3",
          title: "Construction",
          description:
            "Our team manages every phase — foundation, framing, mechanicals, insulation, and finishes — with weekly progress updates.",
        },
        {
          step: "4",
          title: "Walkthrough & Handoff",
          description:
            "We complete a detailed punch list, pass final inspections, and walk you through your new home before handing over the keys.",
        },
      ]}
      faqs={[
        {
          question: "How long does it take to build a new home?",
          answer:
            "A typical custom home build in the Boston area takes 8 to 14 months from groundbreaking to move-in, depending on size, complexity, and permitting timelines. We provide a detailed construction schedule before breaking ground.",
        },
        {
          question: "Do you handle permitting and inspections?",
          answer:
            "Yes. We manage the full permitting process including building, electrical, plumbing, and mechanical permits. We schedule and attend all required inspections throughout construction and obtain the certificate of occupancy.",
        },
        {
          question: "Can you build on my existing lot?",
          answer:
            "In most cases, yes. We evaluate the lot for soil conditions, setbacks, utility access, and zoning requirements. If there are challenges, we work with engineers and your architect to find solutions before construction begins.",
        },
        {
          question: "What does new construction cost per square foot?",
          answer:
            "New construction in Greater Boston and Southern NH typically ranges from $250 to $450+ per square foot depending on finishes, site conditions, and design complexity. We provide a transparent, itemized budget tied to your specific plans.",
        },
      ]}
      images={[
        "/projects/web-pictures/home-remodeling.jpg",
        "/projects/web-pictures/RazzanoSunsetViewMain.jpg",
        "/projects/framing-progress/deck-framing-posts-01.jpg",
        "/projects/framing-progress/stair-stringer-build-action.jpg",
        "/projects/siding-exterior/siding-install-crew.jpg",
        "/projects/roofing/roof-shingle-install-01.jpg",
        "/projects/siding-exterior/victorian-exterior-finished-01.jpg",
        "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-exterior-full.jpg",
      ]}
    />
  );
}
