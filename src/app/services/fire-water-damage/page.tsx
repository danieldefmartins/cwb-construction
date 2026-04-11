import { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fire & Water Damage Restoration | CWB Construction",
  description:
    "24/7 emergency fire and water damage restoration in Greater Boston, MA & Southern NH. Board-up, water extraction, smoke damage cleanup, mold remediation, and full structural repair by CWB Construction.",
};

export default function FireWaterDamagePage() {
  return (
    <ServicePage
      badge="Services"
      title="Fire & Water Damage Restoration"
      subtitle="24/7 emergency response for fire, water, smoke, and storm damage. We stabilize, restore, and rebuild — so you can get your life back to normal."
      description={`When disaster strikes, you need a contractor who shows up fast and knows exactly what to do. CWB Construction provides full-service fire and water damage restoration across Greater Boston, the North Shore, Merrimack Valley, and Southern New Hampshire. We respond around the clock — nights, weekends, and holidays — because emergencies don't wait for business hours.

From the moment we arrive, we work to stop further damage with emergency board-up, tarping, and water extraction. Then we handle every phase of restoration: structural drying, smoke and soot removal, mold remediation, content cleaning, and complete structural repair. When we're done, your home is restored — not just patched.

We work directly with all major insurance carriers and can assist with your claim from documentation through final settlement. Our team understands the claims process inside and out, which means less stress and faster approvals for you. One call puts the entire recovery in motion.`}
      features={[
        {
          title: "24/7 Emergency Response",
          description:
            "We answer the phone day and night and dispatch a crew to your property within hours to assess damage and begin stabilization.",
        },
        {
          title: "Board-Up & Tarping",
          description:
            "Immediate securing of your property — boarding up broken windows, tarping damaged roofs, and preventing further exposure to weather or intrusion.",
        },
        {
          title: "Water Extraction & Structural Drying",
          description:
            "Industrial pumps, dehumidifiers, and air movers to remove standing water and dry your home's structure to prevent mold and rot.",
        },
        {
          title: "Smoke & Soot Damage Cleanup",
          description:
            "Professional cleaning of walls, ceilings, HVAC systems, and surfaces to eliminate smoke odor, soot stains, and airborne contaminants.",
        },
        {
          title: "Mold Remediation",
          description:
            "Containment, removal, and treatment of mold caused by water damage — with post-remediation testing to verify your home is safe.",
        },
        {
          title: "Full Structural Repair & Rebuild",
          description:
            "From framing and drywall to flooring, cabinetry, and paint — we rebuild damaged areas to pre-loss condition or better.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Emergency Contact",
          description:
            "Call us anytime at (978) 904-6969. We dispatch a team to your property to assess the damage, secure the structure, and begin mitigation.",
        },
        {
          step: "2",
          title: "Insurance Coordination",
          description:
            "We document all damage with photos and detailed reports, communicate directly with your insurance adjuster, and help move your claim forward.",
        },
        {
          step: "3",
          title: "Mitigation & Cleanup",
          description:
            "Water extraction, structural drying, smoke cleanup, content restoration, and mold treatment — whatever your property needs to stop the damage.",
        },
        {
          step: "4",
          title: "Restoration & Rebuild",
          description:
            "We handle the full rebuild — framing, electrical, plumbing, drywall, flooring, and finishes — returning your home to pre-loss condition.",
        },
      ]}
      faqs={[
        {
          question: "How quickly can you respond to an emergency?",
          answer:
            "We provide 24/7 emergency response across Greater Boston and Southern New Hampshire. In most cases, a crew is on-site within 2 to 4 hours of your call. We prioritize stabilization — stopping water flow, boarding up openings, and preventing further damage — before beginning full restoration.",
        },
        {
          question: "Do you work with insurance companies?",
          answer:
            "Yes. We work with all major homeowner's insurance carriers and have extensive experience navigating the claims process. We handle damage documentation, provide detailed scope-of-work reports, communicate directly with adjusters, and help ensure you receive fair coverage for the restoration.",
        },
        {
          question: "Can you handle both the cleanup and the rebuild?",
          answer:
            "Absolutely. Unlike companies that only do mitigation or only do construction, CWB handles the entire process under one roof — from emergency water extraction and smoke cleanup through full structural repair, finishing, and final inspection. One contractor, one point of contact, start to finish.",
        },
        {
          question: "How do you prevent mold after water damage?",
          answer:
            "Speed is critical. We begin water extraction and structural drying within hours of arrival using industrial-grade equipment. We monitor moisture levels throughout the drying process and won't close up walls until readings are within safe range. If mold is already present, we perform full containment and remediation with post-treatment testing.",
        },
      ]}
      emergency={true}
      images={[
        "/projects/web-pictures/Greenfield_Roof-Repair_img3-1-1024x768-1.webp",
        "/projects/web-pictures/Greenfield_Roof-Repair_img3-1-1024x768-1.webp",
        "/projects/web-pictures/yankee-home-improvement.webp",
        "/projects/web-pictures/home-remodeling.jpg",
      ]}
    />
  );
}
