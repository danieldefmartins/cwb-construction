import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Windows & Doors | CWB Construction",
  description:
    "Expert window and door installation in Greater Boston, MA & Southern NH. Energy-efficient replacements from Andersen, Pella, and Marvin. Free estimates from CWB Construction.",
};

export default function WindowsDoorsPage() {
  return (
    <ServicePage
      badge="Services"
      title="Windows & Doors"
      subtitle="Upgrade your home's comfort, curb appeal, and energy efficiency with professionally installed windows and doors built for New England weather."
      description={`Old, drafty windows and worn-out doors are more than an eyesore — they're costing you money every month on heating and cooling. In New England, where winters hit hard and nor'easters are part of life, quality windows and doors aren't optional. They're essential.

CWB Construction installs high-performance replacement windows and entry doors from trusted brands like Andersen, Pella, and Marvin. Whether you need a single window swap, a full-house replacement, or a new front entry system, we handle the job from measurement through final trim — with zero shortcuts.

We serve homeowners across Greater Boston, the North Shore, Merrimack Valley, and Southern New Hampshire. Every installation is done to manufacturer specs with proper flashing, insulation, and weatherproofing so your new windows and doors perform for decades, not just years.`}
      features={[
        {
          title: "Energy-Efficient Replacement Windows",
          description:
            "Double- and triple-pane windows with Low-E glass and argon gas fill to cut heat loss and reduce energy bills year-round.",
        },
        {
          title: "Entry & Patio Door Installation",
          description:
            "Front entry doors, sliding patio doors, and French doors — insulated, weathersealed, and installed with precision hardware.",
        },
        {
          title: "Premium Brand Selection",
          description:
            "We install windows and doors from Andersen, Pella, Marvin, and Harvey — brands proven to hold up in harsh New England conditions.",
        },
        {
          title: "Storm Windows & Storm Doors",
          description:
            "Additional protection against wind, rain, and cold. Ideal for historic homes where full replacement isn't practical or desired.",
        },
        {
          title: "Proper Flashing & Weatherproofing",
          description:
            "Every installation includes house wrap integration, flashing tape, foam insulation, and caulking to prevent water intrusion and air leaks.",
        },
        {
          title: "Interior & Exterior Trim",
          description:
            "Finished casings, sills, and exterior trim that match your home's style — no exposed gaps or rough edges left behind.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "In-Home Consultation",
          description:
            "We inspect your current windows and doors, take precise measurements, and discuss style preferences, energy goals, and budget.",
        },
        {
          step: "2",
          title: "Product Selection & Quote",
          description:
            "You receive a detailed estimate with product specs, energy ratings, and installation costs — no hidden fees or surprise upcharges.",
        },
        {
          step: "3",
          title: "Professional Installation",
          description:
            "Our crew removes old units, prepares openings, installs new windows or doors, and seals everything tight against the elements.",
        },
        {
          step: "4",
          title: "Inspection & Cleanup",
          description:
            "We test every window and door for smooth operation, verify weathertight seals, clean up completely, and haul away all old materials.",
        },
      ]}
      faqs={[
        {
          question: "How much can new windows save on energy bills?",
          answer:
            "Homeowners in the Boston area typically see a 15–30% reduction in heating and cooling costs after replacing single-pane or older double-pane windows with modern energy-efficient units. The exact savings depend on the number of windows, your home's insulation, and heating system.",
        },
        {
          question: "What window brands do you recommend for New England?",
          answer:
            "We most commonly install Andersen, Pella, and Marvin for their proven durability in cold climates. Harvey is another strong option for budget-conscious projects. We'll help you choose the right product based on your priorities — whether that's energy performance, aesthetics, or cost.",
        },
        {
          question: "How long does a full window replacement take?",
          answer:
            "Most whole-house window replacements (10–20 windows) are completed in 2 to 4 days. Individual window or door replacements can often be done in a single day. We schedule work to minimize disruption and never leave openings exposed overnight.",
        },
        {
          question: "Do you work on historic homes with special window requirements?",
          answer:
            "Yes. We have experience with historic properties across the North Shore and Greater Boston. We offer insert replacements that preserve existing exterior trim and can match period-appropriate styles while upgrading to modern energy performance.",
        },
      ]}
      images={[
        "/projects/web-pictures/impact-of-windows-on-home-comfort.webp",
        "/projects/web-pictures/Champion-Windows-Siding-1-min.webp",
        "/projects/web-pictures/patio-enclosure-1-xlarge.webp",
        "/projects/siding-exterior/victorian-exterior-finished-01.jpg",
        "/projects/siding-exterior/porch-stairs-finished.jpg",
        "/projects/web-pictures/home-remodeling.jpg",
      ]}
    />
  );
}
