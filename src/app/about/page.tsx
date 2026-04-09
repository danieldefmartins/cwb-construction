import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | CWB Construction",
  description: "Learn about CWB Construction — Greater Boston's trusted general contractor. Quality craftsmanship, reliable service, and a commitment to excellence on every project.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Building Better Homes,{" "}
            <span className="text-accent">One Project at a Time</span>
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            CWB Construction is a licensed and insured general contractor
            serving Greater Boston, Massachusetts & New Hampshire.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CWB Construction was founded with a simple belief: homeowners deserve
                  a contractor they can trust. Too many families have been burned by
                  unreliable builders, hidden costs, and subpar work. We set out to
                  change that.
                </p>
                <p>
                  Every project we take on — whether it&apos;s a kitchen remodel, a new
                  roof, or emergency fire damage restoration — receives the same level
                  of care, communication, and craftsmanship. We don&apos;t cut corners,
                  we don&apos;t disappear mid-project, and we don&apos;t surprise you with
                  unexpected bills.
                </p>
                <p>
                  Our team of skilled professionals handles everything in-house, from
                  framing and finish carpentry to plumbing and electrical. That means
                  one point of contact, consistent quality, and a team that takes
                  pride in their work.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">Our Values</h2>
              <div className="space-y-6">
                {[
                  { title: "Integrity First", desc: "Honest estimates, transparent pricing, and straight talk. We tell you what your project needs — not what inflates the bill." },
                  { title: "Craftsmanship Matters", desc: "We use premium materials and proven techniques. Every detail is finished to a standard we'd want in our own homes." },
                  { title: "Respect Your Home", desc: "Clean job sites, protective measures, and daily cleanup. We treat your home with the respect it deserves." },
                  { title: "Communicate Always", desc: "Regular updates, quick responses, and proactive problem-solving. You'll never wonder what's happening with your project." },
                ].map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-accent rounded" />
                    <div>
                      <h3 className="font-display font-bold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Service Area</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Proudly Serving Greater Boston & Beyond
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Boston", "Cambridge", "Brookline", "Newton",
              "Wellesley", "Needham", "Quincy", "Somerville",
              "Arlington", "Medford", "Watertown", "Waltham",
              "Lexington", "Concord", "Framingham", "Natick",
              "Dover", "Hingham", "Salem NH", "Nashua NH",
            ].map((city) => (
              <div key={city} className="bg-card rounded-lg px-4 py-3 text-center border border-border text-sm text-foreground">
                {city}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            And many more communities across Massachusetts & New Hampshire
          </p>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re planning a renovation or need emergency restoration,
            we&apos;re ready to help.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
