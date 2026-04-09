import Image from "next/image";
import Link from "next/link";

interface ServiceFeature {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  process: { step: string; title: string; description: string }[];
  faqs: FAQ[];
  images?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  emergency?: boolean;
}

export function ServicePage({
  badge,
  title,
  subtitle,
  description,
  features,
  process,
  faqs,
  images,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Get a free, no-obligation estimate for your project. We'll walk through your options and provide a detailed proposal.",
  emergency = false,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">{badge}</span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">{subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-primary px-7 py-3.5 rounded-lg font-display font-bold transition-colors text-center"
            >
              Get a Free Estimate
            </Link>
            {emergency && (
              <a
                href="tel:+19789046969"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-lg font-display font-bold transition-colors text-center"
              >
                Emergency: (978) 904-6969
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {images && images.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Our Work</span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Recent Projects
                </h2>
              </div>
              <Link href="/portfolio" className="hidden sm:inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {images.map((img, i) => (
                <div key={i} className="aspect-[4/3] relative rounded-xl overflow-hidden bg-card group">
                  <Image
                    src={img}
                    alt={`${title} project photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description + Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Overview
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                {description.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                What&apos;s Included
              </h2>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="bg-card rounded-2xl p-6 border border-border text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-display font-bold text-sm mb-3">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">{ctaTitle}</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{ctaDescription}</p>
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
