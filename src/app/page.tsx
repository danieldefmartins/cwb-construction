import Image from "next/image";
import Link from "next/link";

const recentProjects = [
  {
    title: "Custom Ipe Hardwood Deck",
    type: "Decks & Outdoor",
    image: "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-exterior-full.jpg",
    href: "/portfolio",
  },
  {
    title: "Victorian Exterior Renovation",
    type: "Siding & Exterior",
    image: "/projects/siding-exterior/victorian-exterior-finished-01.jpg",
    href: "/portfolio",
  },
  {
    title: "Composite Deck & Paver Patio",
    type: "Decks & Outdoor",
    image: "/projects/decks-outdoor/composite-deck-2023-b/composite-deck-evening-01.jpg",
    href: "/portfolio",
  },
  {
    title: "Elevated Deck & Staircase",
    type: "Decks & Outdoor",
    image: "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-finished-exterior.jpg",
    href: "/portfolio",
  },
];

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Custom kitchen renovations that blend functionality with style. From cabinet installation to complete kitchen overhauls.",
    href: "/services/kitchen-remodeling",
    icon: "M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6z",
  },
  {
    title: "Bathroom Remodeling",
    description: "Transform your bathroom into a spa-like retreat with premium fixtures, tile, and expert craftsmanship.",
    href: "/services/bathroom-remodeling",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Home Remodeling",
    description: "Whole-home renovations that modernize your living space while preserving what makes your home unique.",
    href: "/services/home-remodeling",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    title: "Roofing",
    description: "Complete roofing services — new installations, replacements, and repairs. Built for New England weather.",
    href: "/services/roofing",
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
  },
  {
    title: "New Construction",
    description: "Build your dream home from the ground up. Custom designs, quality materials, and expert project management.",
    href: "/services/new-construction",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21",
  },
  {
    title: "Fire & Water Damage",
    description: "Emergency restoration services. We respond fast to minimize damage and restore your home to pre-loss condition.",
    href: "/services/fire-water-damage",
    icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Licensed", label: "& Fully Insured" },
  { value: "24/7", label: "Emergency Response" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        {/* Background Photo */}
        <Image
          src="/projects/siding-exterior/victorian-exterior-finished-01.jpg"
          alt="CWB Construction project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-primary/85 to-primary/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <Image
              src="/logo-white.png"
              alt="CWB Construction"
              width={260}
              height={70}
              className="h-14 sm:h-16 w-auto mb-8"
            />
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Licensed & Insured</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Quality Craftsmanship.{" "}
              <span className="text-accent">Reliable Service.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl">
              From kitchen remodels to new construction and emergency restoration —
              CWB Construction delivers premium results for homeowners across
              Greater Boston, Massachusetts & New Hampshire.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold text-base transition-colors text-center"
              >
                Get a Free Estimate
              </Link>
              <Link
                href="/services/kitchen-remodeling"
                className="border-2 border-white/15 hover:border-white/30 text-white px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl sm:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Comprehensive Construction Services
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Everything your home needs, handled by one trusted team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <svg className="w-6 h-6 text-primary group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-accent font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services/home-addition" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              + 5 more services including additions, basement, siding, windows & decks
            </Link>
          </div>
        </div>
      </section>

      {/* Why CWB */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Why Choose CWB</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
                Built on Trust,{" "}
                <span className="text-accent">Delivered with Excellence</span>
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed">
                At CWB Construction, every project receives the same commitment to
                quality, transparency, and respect for your home. We treat every
                house like it&apos;s our own.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more about us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Quality Materials", desc: "We use only premium, brand-name materials that last. No cutting corners." },
                { title: "Clear Communication", desc: "Regular updates, honest timelines, and no surprise costs. Ever." },
                { title: "Clean Job Sites", desc: "We protect your home during construction and clean up daily." },
                { title: "Warranty Backed", desc: "Every project comes with a comprehensive workmanship warranty." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="h-1 w-10 bg-accent rounded mb-4" />
                  <h3 className="font-display font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Recent Work</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
                Our Latest Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{project.type}</p>
                  <h3 className="font-display font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link
              href="/portfolio"
              className="text-accent font-semibold inline-flex items-center gap-2"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Fire or Water Damage?</h3>
                <p className="text-muted-foreground">24/7 emergency response. We&apos;ll be there fast to minimize damage and start restoration.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <a
                href="tel:+19789046969"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-display font-bold transition-colors text-center text-sm sm:text-base"
              >
                Call Now: (978) 904-6969
              </a>
              <Link
                href="/services/fire-water-damage"
                className="border-2 border-red-200 hover:border-red-300 text-red-700 px-6 py-3 rounded-lg font-display font-semibold transition-colors text-center text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Start Your Project</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a free, no-obligation estimate for your project. Our team is ready
            to help you transform your home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-display font-bold text-base transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+19789046969"
              className="border-2 border-border hover:border-primary/30 text-foreground px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors"
            >
              Call (978) 904-6969
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
