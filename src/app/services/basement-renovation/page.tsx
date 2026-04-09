import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Basement Renovation | CWB Construction",
  description:
    "Expert basement finishing and renovation in Greater Boston, MA & NH. Waterproofing, framing, and full build-outs tailored to New England basements. Free estimates.",
};

export default function BasementRenovationPage() {
  return (
    <ServicePage
      badge="Services"
      title="Basement Renovation & Finishing"
      subtitle="Turn your basement into dry, comfortable living space built to handle everything New England throws at it."
      description={`New England basements come with unique challenges: high water tables, stone or block foundations, seasonal moisture, and decades of neglect. At CWB Construction, we understand these conditions because we have been solving them for homeowners across Greater Boston and southern New Hampshire for years.\n\nA finished basement is one of the highest-value improvements you can make to your home. Whether you want a family entertainment room, a home gym, a guest suite, or a dedicated workspace, we handle the entire renovation from waterproofing and structural work through framing, electrical, plumbing, and final finishes. Every project starts with a thorough moisture assessment so your new space stays dry for the long term.`}
      features={[
        {
          title: "Waterproofing & Moisture Control",
          description:
            "Interior drainage systems, sump pumps, vapor barriers, and exterior grading solutions to eliminate moisture problems before finishing begins.",
        },
        {
          title: "Full Basement Finishing",
          description:
            "Complete build-outs including framing, insulation, drywall, flooring, lighting, and trim to transform raw space into polished living area.",
        },
        {
          title: "Basement Bathrooms & Kitchenettes",
          description:
            "Plumbing rough-ins, ejector pump installation, and full fixture packages for below-grade bathrooms, wet bars, and kitchenettes.",
        },
        {
          title: "Egress Windows & Code Compliance",
          description:
            "Proper egress window installation for bedrooms and living spaces to meet building codes and bring natural light into below-grade rooms.",
        },
        {
          title: "Foundation Repair & Structural Work",
          description:
            "Crack injection, wall stabilization, and foundation reinforcement to address structural issues common in older New England homes.",
        },
        {
          title: "Insulation & Climate Control",
          description:
            "Closed-cell spray foam, rigid board insulation, and dedicated HVAC zones to keep your basement comfortable year-round without spiking energy bills.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Moisture Assessment",
          description:
            "We evaluate your basement for water intrusion, humidity, foundation condition, and structural concerns before any finishing work begins.",
        },
        {
          step: "2",
          title: "Design & Planning",
          description:
            "We create a layout tailored to your goals and budget, addressing mechanical clearances, egress requirements, and permit needs.",
        },
        {
          step: "3",
          title: "Waterproofing & Build-Out",
          description:
            "Moisture issues are resolved first, followed by framing, mechanicals, insulation, drywall, flooring, and all finish work.",
        },
        {
          step: "4",
          title: "Final Inspection & Handoff",
          description:
            "We complete inspections, walk through the finished space with you, and provide maintenance guidance for your new basement.",
        },
      ]}
      faqs={[
        {
          question: "My basement is damp. Can it still be finished?",
          answer:
            "Yes. Most basements in our area have some level of moisture, and proper waterproofing is a standard part of our process. We install interior drainage, sump systems, and vapor barriers as needed so your finished space stays dry. We will not finish a basement until the moisture issue is fully resolved.",
        },
        {
          question: "Do I need a permit to finish my basement?",
          answer:
            "Yes, in nearly all Massachusetts and New Hampshire municipalities, finishing a basement requires a building permit. Electrical, plumbing, and egress windows each require separate inspections. We handle all permitting and inspections for you.",
        },
        {
          question: "How long does a basement renovation take?",
          answer:
            "A typical full basement finishing project takes 6 to 10 weeks once construction begins. If waterproofing or foundation repair is required, add 1 to 2 weeks. Permitting timelines vary by town and can add several weeks upfront.",
        },
        {
          question: "What flooring works best in a New England basement?",
          answer:
            "We recommend luxury vinyl plank (LVP) or engineered tile for most basement applications. Both are moisture-resistant, durable, and comfortable underfoot. We avoid traditional hardwood below grade due to humidity concerns. Heated floor mats are a popular upgrade for added comfort.",
        },
      ]}
      images={[
        "/projects/framing-progress/stair-stringer-build-action.jpg",
        "/projects/framing-progress/deck-framing-posts-01.jpg",
        "/projects/siding-exterior/siding-install-crew.jpg",
        "/projects/decks-outdoor/hardwood-deck-2022/deck-framing-structure-01.jpg",
      ]}
    />
  );
}
