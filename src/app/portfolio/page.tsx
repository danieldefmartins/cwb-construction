"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCategory = "all" | "decks" | "siding" | "roofing" | "paving" | "kitchen" | "bathroom" | "remodeling";

interface Project {
  id: string;
  title: string;
  type: string;
  category: Exclude<ProjectCategory, "all">;
  location: string;
  year: string;
  description: string;
  heroImage: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "hardwood-deck-2022",
    title: "Custom Ipe Hardwood Deck",
    type: "Decks & Outdoor",
    category: "decks",
    location: "Greater Boston, MA",
    year: "2022",
    description: "Multi-level ipe hardwood deck with custom lattice privacy screens, built-in stairs, and premium railing. This project went from full framing to a stunning finished outdoor living space.",
    heroImage: "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-exterior-full.jpg",
    images: [
      "/projects/decks-outdoor/hardwood-deck-2022/deck-framing-start-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-framing-structure-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-progress-framing-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-progress-boards-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-progress-boards-02.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-progress-lattice-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-front-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-front-02.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-lattice-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-stairs-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-wide-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-angle-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2022/deck-finished-exterior-angle.jpg",
    ],
  },
  {
    id: "composite-deck-2023",
    title: "Composite Deck with Aluminum Railing",
    type: "Decks & Outdoor",
    category: "decks",
    location: "Greater Boston, MA",
    year: "2023",
    description: "Modern composite deck with sleek black aluminum balusters and composite railing system. Low-maintenance materials built to withstand New England winters.",
    heroImage: "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-exterior-01.jpg",
    images: [
      "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-railing-01.jpg",
      "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-railing-02.jpg",
      "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-wide-01.jpg",
      "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-wide-02.jpg",
      "/projects/decks-outdoor/composite-deck-2023-a/composite-deck-exterior-01.jpg",
    ],
  },
  {
    id: "elevated-deck-2023",
    title: "Elevated Deck & Staircase Build",
    type: "Decks & Outdoor",
    category: "decks",
    location: "Greater Boston, MA",
    year: "2023",
    description: "Second-story elevated deck with custom staircase, white lattice skirting, and painted railings. Built from the ground up with proper footings and structural framing.",
    heroImage: "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-finished-exterior.jpg",
    images: [
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-framing-01.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-framing-02.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-framing-03.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-progress-01.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-progress-02.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-finished-exterior.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-finished-detail-01.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-finished-detail-02.jpg",
      "/projects/decks-outdoor/elevated-deck-2023/elevated-deck-finished-detail-03.jpg",
    ],
  },
  {
    id: "hardwood-deck-2024",
    title: "Hardwood Deck with Lattice Skirt",
    type: "Decks & Outdoor",
    category: "decks",
    location: "Greater Boston, MA",
    year: "2024",
    description: "Beautiful hardwood deck with matching lattice underskirt. From structural framing with concrete footings to finished decking with stairs and railings.",
    heroImage: "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-finished-01.jpg",
    images: [
      "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-framing-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-framing-02.jpg",
      "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-finished-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-finished-lattice-01.jpg",
      "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-finished-02.jpg",
      "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-finished-03.jpg",
      "/projects/decks-outdoor/hardwood-deck-2024/hardwood-deck-stairs-progress.jpg",
    ],
  },
  {
    id: "evening-deck-2023",
    title: "Composite Deck & Paver Patio",
    type: "Decks & Outdoor",
    category: "decks",
    location: "Greater Boston, MA",
    year: "2023",
    description: "Composite deck with integrated paver patio and custom stairs. Evening ambiance with warm exterior lighting.",
    heroImage: "/projects/decks-outdoor/composite-deck-2023-b/composite-deck-evening-01.jpg",
    images: [
      "/projects/decks-outdoor/composite-deck-2023-b/composite-deck-evening-01.jpg",
    ],
  },
  {
    id: "victorian-exterior",
    title: "Victorian Exterior Renovation",
    type: "Siding & Exterior",
    category: "siding",
    location: "Greater Boston, MA",
    year: "2023",
    description: "Complete exterior renovation of a Victorian home. New clapboard siding in blue-gray, cream trim, decorative brackets, and a hardwood front deck with railing.",
    heroImage: "/projects/siding-exterior/victorian-exterior-finished-01.jpg",
    images: [
      "/projects/siding-exterior/victorian-exterior-finished-01.jpg",
      "/projects/siding-exterior/deck-wrap-around-victorian.jpg",
      "/projects/siding-exterior/siding-exterior-renovation.jpg",
      "/projects/siding-exterior/siding-install-crew.jpg",
      "/projects/siding-exterior/siding-renovation-progress-01.jpg",
      "/projects/siding-exterior/siding-renovation-progress-02.jpg",
    ],
  },
  {
    id: "porch-stairs",
    title: "Porch & Stairs Rebuild",
    type: "Siding & Exterior",
    category: "siding",
    location: "Greater Boston, MA",
    year: "2023",
    description: "Rebuilt front porch with new composite stairs, painted railings, and newel posts. Clean, classic New England curb appeal.",
    heroImage: "/projects/siding-exterior/porch-stairs-finished.jpg",
    images: [
      "/projects/siding-exterior/porch-stairs-finished.jpg",
      "/projects/siding-exterior/porch-stairs-finished-02.jpg",
    ],
  },
  {
    id: "roofing-2023",
    title: "Architectural Shingle Roof",
    type: "Roofing",
    category: "roofing",
    location: "Greater Boston, MA",
    year: "2023",
    description: "Complete roof replacement with GAF architectural shingles, new ice and water shield, and proper ventilation. Built to withstand New England nor'easters.",
    heroImage: "/projects/roofing/roof-shingle-install-01.jpg",
    images: [
      "/projects/roofing/roof-shingle-install-01.jpg",
      "/projects/roofing/roof-shingle-install-02.jpg",
      "/projects/roofing/roof-shingle-progress-01.jpg",
    ],
  },
  {
    id: "paver-driveway",
    title: "Paver Driveway & Walkway",
    type: "Paving & Hardscape",
    category: "paving",
    location: "Greater Boston, MA",
    year: "2023",
    description: "Custom paver driveway and walkway installation. Proper base preparation with compacted gravel for New England freeze-thaw durability.",
    heroImage: "/projects/paving-hardscape/paver-driveway-finished-01.jpg",
    images: [
      "/projects/paving-hardscape/paver-driveway-finished-01.jpg",
      "/projects/paving-hardscape/paver-walkway-01.jpg",
    ],
  },
  {
    id: "kitchen-remodel-2024",
    title: "Modern Kitchen Renovation",
    type: "Kitchen Remodeling",
    category: "kitchen",
    location: "Greater Boston, MA",
    year: "2024",
    description: "Complete kitchen transformation with custom gray cabinetry, quartz countertops, modern lighting, and premium appliances. Open-concept layout redesign for improved flow and functionality.",
    heroImage: "/projects/web-pictures/kitchen-barry-78333-4.webp",
    images: [
      "/projects/web-pictures/kitchen-barry-78333-4.webp",
      "/projects/web-pictures/28Burton-29-scaled.webp",
      "/projects/web-pictures/RazzanoColorfulCharmMain.jpg",
      "/projects/web-pictures/Razzano-Homes-Remodeling-living-space-6.jpg",
    ],
  },
  {
    id: "bathroom-remodel-2024",
    title: "Luxury Bathroom Renovation",
    type: "Bathroom Remodeling",
    category: "bathroom",
    location: "Greater Boston, MA",
    year: "2024",
    description: "Spa-like bathroom retreat with premium tile work, modern fixtures, custom vanity, and glass shower enclosure. Complete tear-out and rebuild with updated plumbing and lighting.",
    heroImage: "/projects/web-pictures/SabourinA3-1-scaled.webp",
    images: [
      "/projects/web-pictures/SabourinA3-1-scaled.webp",
      "/projects/web-pictures/1-Koblenz-14.webp",
      "/projects/web-pictures/2-Koblenz-1.webp",
      "/projects/web-pictures/16865-2.webp",
    ],
  },
  {
    id: "new-construction-2024",
    title: "Custom New Construction",
    type: "New Construction",
    category: "remodeling",
    location: "Greater Boston, MA",
    year: "2024",
    description: "Ground-up custom home build with modern farmhouse design, stone and board-and-batten exterior, and premium interior finishes throughout.",
    heroImage: "/projects/web-pictures/home-remodeling.jpg",
    images: [
      "/projects/web-pictures/home-remodeling.jpg",
      "/projects/web-pictures/RazzanoSunsetViewMain.jpg",
      "/projects/web-pictures/16265-17028-24.webp",
      "/projects/web-pictures/16265-17028-26.webp",
      "/projects/web-pictures/16265-17028-31.webp",
    ],
  },
  {
    id: "whole-home-2024",
    title: "Whole Home Interior Renovation",
    type: "Home Remodeling",
    category: "remodeling",
    location: "Greater Boston, MA",
    year: "2024",
    description: "Complete interior renovation including open-concept living areas, indoor-outdoor living space with fire pit patio, and sunset views. Premium hardwood flooring and custom built-ins.",
    heroImage: "/projects/web-pictures/Razzano-Homes-Remodeling-living-space-6.jpg",
    images: [
      "/projects/web-pictures/Razzano-Homes-Remodeling-living-space-6.jpg",
      "/projects/web-pictures/RazzanoSunsetViewMain.jpg",
      "/projects/web-pictures/16265-17028-24.webp",
      "/projects/web-pictures/yankee-home-improvement.webp",
    ],
  },
  {
    id: "windows-siding-2024",
    title: "Windows & Siding Upgrade",
    type: "Siding & Exterior",
    category: "siding",
    location: "Greater Boston, MA",
    year: "2024",
    description: "Full exterior transformation with energy-efficient windows, insulated siding, and updated trim. Improved curb appeal and home energy performance.",
    heroImage: "/projects/web-pictures/Champion-Windows-Siding-1-min.webp",
    images: [
      "/projects/web-pictures/Champion-Windows-Siding-1-min.webp",
      "/projects/web-pictures/impact-of-windows-on-home-comfort.webp",
      "/projects/web-pictures/Vista-Home-Improvement_Insulated-Siding-1.jpg",
      "/projects/web-pictures/patio-enclosure-1-xlarge.webp",
    ],
  },
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "kitchen", label: "Kitchen" },
  { value: "bathroom", label: "Bathroom" },
  { value: "remodeling", label: "Remodeling" },
  { value: "decks", label: "Decks & Outdoor" },
  { value: "siding", label: "Siding & Exterior" },
  { value: "roofing", label: "Roofing" },
  { value: "paving", label: "Paving" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <>
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Project Portfolio
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            Real projects, real results. Browse our completed work across Greater
            Boston and New Hampshire.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-40 bg-card border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === cat.value
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Hero Image */}
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-primary/90 text-white">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-white/90 text-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Gallery toggle */}
                  {project.images.length > 1 && (
                    <button
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                      className="mt-4 text-accent hover:text-accent/80 text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      {expandedId === project.id ? "Hide" : "View"} all {project.images.length} photos
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedId === project.id ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Expanded gallery */}
                {expandedId === project.id && (
                  <div className="px-6 pb-6 grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {project.images.map((img, i) => (
                      <div key={i} className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={img}
                          alt={`${project.title} photo ${i + 1}`}
                          fill
                          sizes="120px"
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Every project starts with a conversation. Tell us about your space
            and we&apos;ll make it happen.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
