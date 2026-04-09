import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process | CWB Construction",
  description: "How CWB Construction works — from initial consultation to final walkthrough. Clear communication, quality craftsmanship, and no surprises.",
};

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We visit your home to understand your vision, assess the scope, and discuss your budget. You'll get a clear picture of possibilities and a rough timeline.",
    details: ["In-home visit at your convenience", "Discuss goals, style, and must-haves", "Assess structural, plumbing, and electrical needs", "Provide preliminary budget range"],
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "We develop a detailed plan for your project. Material selections, design layouts, and a comprehensive scope of work — all documented before we start.",
    details: ["Detailed project scope and specifications", "Material and finish selections", "Floor plans and layout options", "Engineering and permits as needed"],
  },
  {
    number: "03",
    title: "Proposal & Agreement",
    description: "You'll receive a clear, itemized proposal. Every material, labor cost, and milestone is documented — no hidden fees, no vague allowances.",
    details: ["Line-item cost breakdown", "Detailed project timeline", "Payment schedule tied to milestones", "Warranty terms and conditions"],
  },
  {
    number: "04",
    title: "Pre-Construction",
    description: "Materials are ordered, permits pulled, and your dedicated project manager builds the schedule. We prepare everything so day one runs smoothly.",
    details: ["All permits secured", "Materials ordered and staged", "Project manager assigned", "Neighbors notified if applicable"],
  },
  {
    number: "05",
    title: "Construction",
    description: "Our skilled crew gets to work. We protect your home, maintain a clean site, and keep you updated throughout. No surprises — just quality work, on schedule.",
    details: ["Professional home protection", "Daily cleanup and site management", "Regular progress updates", "Quality checkpoints throughout"],
  },
  {
    number: "06",
    title: "Final Walkthrough",
    description: "We walk through every detail together. Any punch list items are addressed promptly. The project isn't done until you're completely satisfied.",
    details: ["Detailed inspection together", "Punch list addressed immediately", "Care and maintenance guidance", "Warranty documentation provided"],
  },
];

export default function OurProcessPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">How We Work</span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Process
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            Clear steps, honest communication, and no surprises. Here&apos;s exactly
            what to expect when you work with CWB Construction.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-border hidden sm:block" />
                )}
                <div className="flex gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <span className="font-display font-bold text-accent text-lg">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            The first step is a free consultation. Tell us about your project
            and we&apos;ll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+19789046969"
              className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-display font-semibold transition-colors"
            >
              Call (978) 904-6969
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
