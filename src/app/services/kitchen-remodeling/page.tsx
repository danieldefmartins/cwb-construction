import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Kitchen Remodeling | CWB Construction",
  description:
    "Professional kitchen remodeling in Greater Boston, MA & Southern NH. Custom cabinetry, countertops, layout redesigns, and full kitchen renovations by CWB Construction.",
};

export default function KitchenRemodelingPage() {
  return (
    <ServicePage
      badge="Services"
      title="Kitchen Remodeling"
      subtitle="Transform your kitchen into the heart of your home with a renovation built around how you actually cook, gather, and live."
      description={`Your kitchen is the most-used room in your home, and it deserves to work as well as it looks. Whether you're dealing with outdated cabinets, a cramped layout, or appliances that have seen better days, CWB Construction delivers kitchen remodels that combine smart design with expert craftsmanship.

We handle every detail from initial design through final walkthrough — demolition, plumbing, electrical, cabinetry, countertops, tile, and finishing touches. Our team works with you to choose materials and layouts that fit your lifestyle, your taste, and your budget.

Serving homeowners across Greater Boston, the North Shore, and Southern New Hampshire, we bring decades of hands-on experience to every kitchen project. From galley kitchens to open-concept overhauls, no job is too big or too small.`}
      features={[
        {
          title: "Custom Cabinetry & Storage",
          description:
            "Semi-custom and fully custom cabinet solutions with soft-close hardware, pull-out organizers, and finishes tailored to your style.",
        },
        {
          title: "Countertop Installation",
          description:
            "Granite, quartz, marble, and butcher block countertops — precision-templated and professionally installed.",
        },
        {
          title: "Layout & Structural Changes",
          description:
            "Wall removal, island additions, and reconfigured floor plans to maximize space and improve flow.",
        },
        {
          title: "Plumbing & Electrical Upgrades",
          description:
            "New sink placement, dishwasher hookups, dedicated circuits for appliances, and under-cabinet lighting.",
        },
        {
          title: "Tile & Backsplash",
          description:
            "Subway tile, mosaic patterns, natural stone — installed with precision for a clean, lasting finish.",
        },
        {
          title: "Flooring Replacement",
          description:
            "Hardwood, luxury vinyl plank, and porcelain tile flooring that stands up to daily kitchen traffic.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Design Consultation",
          description:
            "We visit your home, discuss your goals, take measurements, and walk through layout and material options.",
        },
        {
          step: "2",
          title: "Detailed Proposal",
          description:
            "You receive a fixed-price estimate with a full scope of work, material selections, and project timeline.",
        },
        {
          step: "3",
          title: "Build & Install",
          description:
            "Our crew handles demolition, rough-ins, cabinetry, countertops, tile, and finishes — on schedule and on budget.",
        },
        {
          step: "4",
          title: "Final Walkthrough",
          description:
            "We walk every inch of the finished kitchen with you to make sure every detail meets your expectations.",
        },
      ]}
      faqs={[
        {
          question: "How long does a kitchen remodel take?",
          answer:
            "Most full kitchen remodels take 6 to 10 weeks depending on the scope. A cosmetic refresh with new countertops and cabinet refacing can be completed in 2 to 3 weeks. We provide a detailed timeline before work begins so you know what to expect.",
        },
        {
          question: "Can I use my kitchen during the renovation?",
          answer:
            "There will be periods where the kitchen is out of service, especially during plumbing and electrical rough-ins. We help you plan a temporary kitchen setup and schedule work to minimize disruption to your daily routine.",
        },
        {
          question: "Do you help with design and material selection?",
          answer:
            "Yes. We guide you through layout options, cabinet styles, countertop materials, hardware, tile, and finishes. We also work with local showrooms and suppliers to get you the best value on quality materials.",
        },
        {
          question: "What does a kitchen remodel cost in the Boston area?",
          answer:
            "Kitchen remodels in Greater Boston typically range from $35,000 to $100,000+ depending on size, materials, and structural changes. We provide transparent, itemized estimates so you understand exactly where your budget is going.",
        },
      ]}
      images={[
        "/projects/web-pictures/modern-gray-kitchen.webp",
        "/projects/web-pictures/luxury-white-kitchen.webp",
        "/projects/web-pictures/teal-kitchen-remodel.jpg",
        "/projects/web-pictures/open-kitchen-marble-island.webp",
        "/projects/web-pictures/kitchen-living-open-concept.webp",
        "/projects/web-pictures/living-room-deck-sunset.jpg",
      ]}
    />
  );
}
