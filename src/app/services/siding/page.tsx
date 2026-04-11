import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Siding Installation & Replacement | CWB Construction",
  description:
    "Professional siding installation and replacement in Greater Boston, MA & NH. Vinyl, fiber cement, and wood siding built to endure New England weather. Free estimates.",
};

export default function SidingPage() {
  return (
    <ServicePage
      badge="Services"
      title="Siding Installation & Replacement"
      subtitle="Protect and transform your home's exterior with siding engineered for New England's toughest conditions."
      description={`Your siding does more than define your home's curb appeal. It is the protective envelope that shields your walls, insulation, and framing from wind-driven rain, ice, UV exposure, and temperature swings that are a fact of life in Greater Boston and southern New Hampshire. When siding fails, the damage behind it can be expensive.\n\nCWB Construction installs and replaces all major siding types, including vinyl, fiber cement (James Hardie), engineered wood, and natural cedar. We help you choose the right material based on your home's style, your budget, and how you want to maintain it over the years. Every installation includes proper housewrap, flashing, and ventilation detailing so your new siding performs as well as it looks.`}
      features={[
        {
          title: "Vinyl Siding",
          description:
            "Low-maintenance, cost-effective vinyl in a wide range of colors and profiles, including insulated options for improved energy efficiency.",
        },
        {
          title: "Fiber Cement (James Hardie)",
          description:
            "Premium HardiePlank and HardieShingle siding that resists rot, fire, and insects with a factory-applied ColorPlus finish built for Northeast climates.",
        },
        {
          title: "Wood & Cedar Siding",
          description:
            "Natural cedar clapboard and shingle siding for a classic New England look, with proper staining and sealing for long-term durability.",
        },
        {
          title: "Housewrap & Moisture Barrier",
          description:
            "Full replacement of weather-resistant barriers and integration with window and door flashing to prevent moisture from reaching your sheathing.",
        },
        {
          title: "Trim, Soffit & Fascia",
          description:
            "Matching or upgraded trim packages including PVC, composite, and wood options for a finished look that stands up to moisture and pests.",
        },
        {
          title: "Rot & Sheathing Repair",
          description:
            "Identification and replacement of rotted sheathing, studs, and trim discovered during removal of existing siding, before new material goes on.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Exterior Assessment",
          description:
            "We inspect your current siding, sheathing, and trim for damage, moisture intrusion, and energy loss to determine the scope of work.",
        },
        {
          step: "2",
          title: "Material Selection",
          description:
            "We walk you through material options, color samples, and pricing so you can make a confident decision that fits your home and budget.",
        },
        {
          step: "3",
          title: "Installation",
          description:
            "Our crews remove old siding, repair any underlying damage, install moisture barriers, and apply your new siding section by section.",
        },
        {
          step: "4",
          title: "Quality Review",
          description:
            "We perform a final inspection of every seam, joint, and trim detail, then walk the exterior with you to confirm everything looks right.",
        },
      ]}
      faqs={[
        {
          question: "What siding material is best for New England homes?",
          answer:
            "Fiber cement (James Hardie) is our top recommendation for durability, appearance, and low maintenance in our climate. It handles freeze-thaw cycles, resists moisture, and holds paint far longer than wood. Vinyl is an excellent budget-friendly option, while natural cedar is ideal for homeowners who want a traditional look and are comfortable with periodic maintenance.",
        },
        {
          question: "How long does a siding replacement take?",
          answer:
            "Most full siding replacements on an average-sized home take 1 to 2 weeks, depending on the material chosen, the amount of underlying repair needed, and weather conditions. We plan around the forecast to avoid exposing your home to rain during the process.",
        },
        {
          question: "Will new siding improve my home's energy efficiency?",
          answer:
            "Yes, significantly. Replacing damaged or poorly sealed siding eliminates drafts and moisture pathways. Adding insulated vinyl or pairing fiber cement with rigid foam insulation can noticeably reduce heating and cooling costs, which matters in our four-season climate.",
        },
        {
          question: "Do you repair siding or only do full replacements?",
          answer:
            "We do both. If the damage is limited to a section and matching material is available, a targeted repair is often the most cost-effective solution. We will give you an honest recommendation based on the overall condition of your siding.",
        },
      ]}
      images={[
        "/projects/web-pictures/blue-siding-house.webp",
        "/projects/web-pictures/gray-siding-house.jpg",
        "/projects/web-pictures/cape-style-american-home.webp",
        "/projects/web-pictures/colonial-exterior-blue.webp",
        "/projects/web-pictures/modern-farmhouse-exterior.jpg",
        "/projects/web-pictures/custom-home-sunset.jpg",
      ]}
    />
  );
}
