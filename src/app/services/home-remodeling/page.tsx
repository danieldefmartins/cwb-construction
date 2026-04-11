import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Whole Home Remodeling | CWB Construction",
  description:
    "Whole home remodeling in Greater Boston, MA & Southern NH. Open floor plans, interior renovations, and complete home transformations by CWB Construction.",
};

export default function HomeRemodelingPage() {
  return (
    <ServicePage
      badge="Services"
      title="Whole Home Remodeling"
      subtitle="Reimagine your entire living space with a coordinated renovation that updates every room under one roof and one contractor."
      description={`Sometimes a single room update isn't enough. If your home's layout feels dated, the finishes don't match, or you've outgrown the space, a whole home remodel lets you rethink everything — flow, function, and finishes — in one coordinated project.

CWB Construction manages large-scale interior renovations from start to finish. We handle structural changes, mechanical upgrades, and every finish detail so you're working with one team instead of juggling multiple contractors. That means consistent quality, a single point of contact, and a realistic schedule.

We work with homeowners across Greater Boston, the Merrimack Valley, and Southern New Hampshire who want to modernize older homes, reconfigure floor plans, or bring a recently purchased property up to their standards. If you can see the potential in your home, we can build it.`}
      features={[
        {
          title: "Open Floor Plan Conversions",
          description:
            "Load-bearing wall removal with proper structural support, engineered beams, and seamless transitions between living areas.",
        },
        {
          title: "Full Interior Finish Work",
          description:
            "New flooring, trim, doors, paint, and hardware throughout — coordinated for a consistent look from room to room.",
        },
        {
          title: "Mechanical System Upgrades",
          description:
            "Updated HVAC, electrical panels, plumbing supply lines, and insulation to bring older homes up to modern standards.",
        },
        {
          title: "Kitchen & Bath Integration",
          description:
            "Kitchen and bathroom renovations handled as part of the whole-home scope for design consistency and cost efficiency.",
        },
        {
          title: "Structural Repairs & Framing",
          description:
            "Subfloor leveling, joist reinforcement, header installation, and framing modifications for new layouts.",
        },
        {
          title: "Permit & Project Management",
          description:
            "We pull all permits, coordinate inspections, schedule subcontractors, and keep the project on timeline.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Whole-Home Walkthrough",
          description:
            "We tour every room, discuss priorities, identify structural considerations, and understand your vision for the space.",
        },
        {
          step: "2",
          title: "Scope & Phasing Plan",
          description:
            "You receive a detailed proposal broken into phases, with material selections, timelines, and a fixed project price.",
        },
        {
          step: "3",
          title: "Phased Construction",
          description:
            "Work proceeds room by room or zone by zone, with regular updates and a dedicated project manager on site.",
        },
        {
          step: "4",
          title: "Completion & Punch List",
          description:
            "We do a thorough walkthrough, address every punch list item, and make sure every room is finished to spec.",
        },
      ]}
      faqs={[
        {
          question: "Can I live in my home during a whole-home remodel?",
          answer:
            "It depends on the scope. For phased projects, we can often keep portions of the home livable while working in other areas. For gut renovations, temporary housing is usually necessary. We'll advise you during planning so you can prepare.",
        },
        {
          question: "How long does a whole home renovation take?",
          answer:
            "Most whole-home remodels take 3 to 6 months depending on the size of the home and scope of work. Structural changes, permit timelines, and custom material lead times can all affect the schedule. We build contingency into every project plan.",
        },
        {
          question: "Is it cheaper to remodel or buy a new home?",
          answer:
            "In the Greater Boston market, remodeling is often more cost-effective — especially if you already own your home in a desirable location. A whole-home remodel lets you customize everything to your needs without the costs of selling, buying, and moving.",
        },
        {
          question: "Do you work with architects and designers?",
          answer:
            "Yes. We regularly collaborate with architects and interior designers, and we can recommend professionals we trust. If your project requires architectural plans or engineering, we coordinate that process as part of our scope.",
        },
      ]}
      images={[
        "/projects/web-pictures/modern-farmhouse-exterior.jpg",
        "/projects/web-pictures/custom-home-sunset.jpg",
        "/projects/web-pictures/game-room-stone-fireplace.webp",
        "/projects/web-pictures/stone-fireplace-arched-windows.webp",
        "/projects/web-pictures/vaulted-living-room.webp",
        "/projects/web-pictures/living-room-deck-sunset.jpg",
      ]}
    />
  );
}
