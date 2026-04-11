import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Home Additions | CWB Construction",
  description:
    "Custom home additions in Greater Boston, MA & NH. Room additions, second stories, and in-law suites designed and built by CWB Construction. Free estimates.",
};

export default function HomeAdditionPage() {
  return (
    <ServicePage
      badge="Services"
      title="Home Additions & Expansions"
      subtitle="Add the space your family needs without leaving the neighborhood you love."
      description={`When your home no longer fits your life, a well-planned addition is the smartest investment you can make. Whether you need a first-floor primary suite, a second-story expansion, or a dedicated in-law apartment, CWB Construction manages the entire process from architectural design through final punch list.\n\nWe specialize in additions that blend seamlessly with your existing home. That means matching rooflines, siding, and trim so the new space looks like it was always part of the original design. Our team handles all permitting, engineering, and coordination with local building departments across Greater Boston and southern New Hampshire so you can focus on choosing finishes instead of chasing paperwork.`}
      features={[
        {
          title: "Room Additions",
          description:
            "Single-room expansions including family rooms, primary bedrooms, home offices, and sunrooms that integrate naturally with your existing floor plan.",
        },
        {
          title: "Second-Story Additions",
          description:
            "Full or partial second-story builds that double your living space while preserving your yard, engineered to meet current structural and energy codes.",
        },
        {
          title: "In-Law & Accessory Suites",
          description:
            "Self-contained living spaces with private entrances, kitchenettes, and accessible bathrooms designed for aging family members or rental income.",
        },
        {
          title: "Garage Conversions & Bump-Outs",
          description:
            "Transform underused garage space into finished living area or add a bump-out to an existing room for meaningful square footage gains.",
        },
        {
          title: "Foundation & Structural Engineering",
          description:
            "New foundations, reinforced framing, and structural engineering to ensure your addition stands strong through decades of New England freeze-thaw cycles.",
        },
        {
          title: "Permit & Design Coordination",
          description:
            "Full management of architectural drawings, zoning reviews, and building permits with local municipalities so your project stays on track from day one.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Design Consultation",
          description:
            "We visit your home to discuss your goals, evaluate the site, review zoning requirements, and explore design options that work with your budget.",
        },
        {
          step: "2",
          title: "Plans & Permitting",
          description:
            "Our design team produces architectural plans and we handle all permit applications and engineering approvals on your behalf.",
        },
        {
          step: "3",
          title: "Construction",
          description:
            "From foundation work through framing, roofing, mechanicals, and finishes, we keep you informed with regular updates at each milestone.",
        },
        {
          step: "4",
          title: "Completion & Inspection",
          description:
            "We schedule final inspections, complete a detailed walkthrough with you, and make sure every detail is finished to your satisfaction.",
        },
      ]}
      faqs={[
        {
          question: "How much does a home addition cost?",
          answer:
            "Costs vary significantly based on size, complexity, and finishes. A single-room addition typically starts around $200 per square foot, while second-story additions and in-law suites with kitchens and bathrooms can run higher. We provide a detailed, transparent estimate after our initial consultation.",
        },
        {
          question: "Can we stay in our home during construction?",
          answer:
            "In most cases, yes. We stage the work to minimize disruption, isolate construction zones with dust barriers, and coordinate utility tie-ins for minimal downtime. We will let you know upfront if any phase requires temporary relocation.",
        },
        {
          question: "How long does a typical home addition take?",
          answer:
            "A standard room addition takes 3 to 5 months from groundbreaking to move-in. Second-story additions and in-law suites with full kitchens and baths typically take 4 to 7 months. Permitting timelines vary by municipality and can add 4 to 8 weeks upfront.",
        },
        {
          question: "Will the addition match the rest of my house?",
          answer:
            "Absolutely. We source matching or complementary siding, roofing, trim, and windows so the addition looks like a natural extension of your original home. This is one of the things our clients value most about working with us.",
        },
      ]}
      images={[
        "/projects/web-pictures/modern-farmhouse-exterior.jpg",
        "/projects/web-pictures/game-room-stone-fireplace.webp",
        "/projects/web-pictures/patio-enclosure-outdoor.webp",
        "/projects/web-pictures/vaulted-living-room.webp",
        "/projects/web-pictures/colonial-exterior-blue.webp",
        "/projects/web-pictures/custom-home-sunset.jpg",
      ]}
    />
  );
}
