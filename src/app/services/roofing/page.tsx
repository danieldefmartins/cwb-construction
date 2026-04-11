import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Roofing Services | CWB Construction",
  description:
    "Professional roofing installation, replacement, and repair in Greater Boston, MA & NH. Built to withstand harsh New England weather. Free estimates from CWB Construction.",
};

export default function RoofingPage() {
  return (
    <ServicePage
      badge="Services"
      title="Roofing Installation, Replacement & Repair"
      subtitle="Durable roofing systems engineered to protect your home through every New England season."
      description={`Your roof is your home's first line of defense against nor'easters, ice dams, heavy snow loads, and summer storms. In Greater Boston and southern New Hampshire, that means your roofing system needs to be built tougher than most. CWB Construction delivers roofing solutions designed specifically for the demands of our climate.\n\nWhether you need a complete roof replacement after storm damage, a new roof on a construction project, or targeted repairs to extend the life of your existing system, our team handles it all. We work with top-tier materials from manufacturers like GAF, CertainTeed, and Owens Corning, and every installation is backed by both manufacturer warranties and our own workmanship guarantee.`}
      features={[
        {
          title: "Full Roof Replacement",
          description:
            "Complete tear-off and installation with modern underlayment, ice and water shield, and architectural shingles rated for high winds.",
        },
        {
          title: "New Construction Roofing",
          description:
            "Coordinated roof installations for new builds and additions, integrated with your project timeline from framing through final inspection.",
        },
        {
          title: "Roof Repairs & Leak Resolution",
          description:
            "Fast diagnosis and repair of leaks, missing shingles, flashing failures, and storm damage to prevent interior water damage.",
        },
        {
          title: "Ice Dam Prevention",
          description:
            "Proper ventilation, ice and water shield installation, and heated cable solutions to eliminate costly ice dam damage common in New England winters.",
        },
        {
          title: "Gutter & Flashing Integration",
          description:
            "Seamless gutter systems and custom flashing around chimneys, skylights, and dormers for a watertight seal at every transition point.",
        },
        {
          title: "Ventilation & Insulation Assessment",
          description:
            "Attic ventilation and insulation evaluation to improve energy efficiency, prevent moisture buildup, and extend the lifespan of your new roof.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Roof Inspection",
          description:
            "We perform a thorough inspection of your existing roof, attic, and ventilation to assess condition and identify all issues.",
        },
        {
          step: "2",
          title: "Detailed Proposal",
          description:
            "You receive a clear estimate covering materials, labor, timeline, and warranty options with no hidden costs.",
        },
        {
          step: "3",
          title: "Professional Installation",
          description:
            "Our crew completes the work efficiently with daily cleanup, protecting your landscaping and property throughout.",
        },
        {
          step: "4",
          title: "Final Walkthrough",
          description:
            "We inspect the finished roof with you, file warranty paperwork, and ensure every detail meets our quality standards.",
        },
      ]}
      faqs={[
        {
          question: "How do I know if I need a roof repair or full replacement?",
          answer:
            "If your roof is under 15 years old with localized damage, a repair is usually sufficient. Roofs over 20 years old, those with widespread granule loss, multiple leaks, or sagging decking typically need replacement. We provide an honest assessment during our free inspection.",
        },
        {
          question: "What roofing materials do you recommend for New England?",
          answer:
            "We most often recommend GAF Timberline HDZ or CertainTeed Landmark Pro architectural shingles for their durability, wind resistance (up to 130 mph), and algae-resistance. For flat or low-slope sections, we use TPO or modified bitumen systems.",
        },
        {
          question: "How long does a roof replacement take?",
          answer:
            "Most residential roof replacements are completed in 1 to 3 days depending on the size of your home, the complexity of the roof lines, and weather conditions. We coordinate closely with you on scheduling.",
        },
        {
          question: "Do you handle insurance claims for storm damage?",
          answer:
            "Yes. We work with your insurance company throughout the claims process, providing detailed documentation, photos, and scope of work to help ensure your claim is properly filed and approved.",
        },
      ]}
      images={[
        "/projects/web-pictures/roof-repair-shingles.webp",
        "/projects/web-pictures/modern-farmhouse-exterior.jpg",
        "/projects/web-pictures/colonial-exterior-blue.webp",
        "/projects/web-pictures/cape-style-american-home.webp",
        "/projects/web-pictures/blue-siding-house.webp",
        "/projects/web-pictures/custom-home-sunset.jpg",
      ]}
    />
  );
}
