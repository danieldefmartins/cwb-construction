"use client";

import { useState } from "react";

type ProjectType = "kitchen" | "bathroom" | "home-remodel" | "addition" | "new-construction" | "roofing" | "siding" | "windows" | "deck" | "basement" | "fire-water" | "other";
type Budget = "under-25k" | "25k-50k" | "50k-100k" | "100k-200k" | "200k-plus" | "not-sure";
type Timeline = "emergency" | "asap" | "1-3-months" | "3-6-months" | "6-plus" | "exploring";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-primary py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Thank You!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We&apos;ve received your request. A member of our team will reach out
              within 24 hours to discuss your project.
            </p>
            <a href="/" className="text-accent hover:text-accent/80 font-semibold inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Get a Free Estimate
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            Tell us about your project and we&apos;ll provide a free, detailed estimate.
            No obligation, no pressure — just honest advice.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">1</span>
                Your Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">Property Address</label>
                  <input type="text" id="address" name="address" placeholder="Street, city, state" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" />
                </div>
              </div>
            </div>

            {/* Project */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">2</span>
                Project Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Project Type *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {([
                      { value: "kitchen", label: "Kitchen" },
                      { value: "bathroom", label: "Bathroom" },
                      { value: "home-remodel", label: "Home Remodel" },
                      { value: "addition", label: "Addition" },
                      { value: "new-construction", label: "New Construction" },
                      { value: "roofing", label: "Roofing" },
                      { value: "siding", label: "Siding" },
                      { value: "windows", label: "Windows & Doors" },
                      { value: "deck", label: "Deck & Outdoor" },
                      { value: "basement", label: "Basement" },
                      { value: "fire-water", label: "Fire/Water Damage" },
                      { value: "other", label: "Other" },
                    ] as { value: ProjectType; label: string }[]).map((type) => (
                      <label key={type.value} className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card cursor-pointer hover:border-accent/30 has-[:checked]:border-accent has-[:checked]:bg-accent/5 transition-colors">
                        <input type="radio" name="projectType" value={type.value} required className="accent-[#1a3a2a]" />
                        <span className="text-sm font-medium text-foreground">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Budget Range</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {([
                      { value: "under-25k", label: "Under $25K" },
                      { value: "25k-50k", label: "$25K - $50K" },
                      { value: "50k-100k", label: "$50K - $100K" },
                      { value: "100k-200k", label: "$100K - $200K" },
                      { value: "200k-plus", label: "$200K+" },
                      { value: "not-sure", label: "Not Sure" },
                    ] as { value: Budget; label: string }[]).map((budget) => (
                      <label key={budget.value} className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card cursor-pointer hover:border-accent/30 has-[:checked]:border-accent has-[:checked]:bg-accent/5 transition-colors">
                        <input type="radio" name="budget" value={budget.value} className="accent-[#1a3a2a]" />
                        <span className="text-sm font-medium text-foreground">{budget.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Timeline</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {([
                      { value: "emergency", label: "Emergency" },
                      { value: "asap", label: "ASAP" },
                      { value: "1-3-months", label: "1-3 Months" },
                      { value: "3-6-months", label: "3-6 Months" },
                      { value: "6-plus", label: "6+ Months" },
                      { value: "exploring", label: "Just Exploring" },
                    ] as { value: Timeline; label: string }[]).map((timeline) => (
                      <label key={timeline.value} className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card cursor-pointer hover:border-accent/30 has-[:checked]:border-accent has-[:checked]:bg-accent/5 transition-colors">
                        <input type="radio" name="timeline" value={timeline.value} className="accent-[#1a3a2a]" />
                        <span className="text-sm font-medium text-foreground">{timeline.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-foreground mb-1.5">Tell Us About Your Project</label>
                  <textarea id="details" name="details" rows={4} placeholder="Describe your project — what you want done, any specific requirements, timeline constraints..." className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-display font-bold text-lg transition-colors">
                Submit Request
              </button>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                We respond within 24 hours. No spam, no obligation.
              </p>
            </div>
          </form>

          <div className="mt-16 text-center p-8 bg-muted rounded-2xl">
            <p className="text-foreground font-display font-semibold mb-2">Prefer to talk?</p>
            <p className="text-muted-foreground mb-4">Call us directly or send an email.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19789046969" className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (978) 904-6969
              </a>
              <a href="mailto:support@cwbconstructioninc.com" className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                support@cwbconstructioninc.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
