"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { name: "Home Remodeling", href: "/services/home-remodeling" },
  { name: "Home Addition", href: "/services/home-addition" },
  { name: "New Construction", href: "/services/new-construction" },
  { name: "Roofing", href: "/services/roofing" },
  { name: "Siding", href: "/services/siding" },
  { name: "Windows & Doors", href: "/services/windows-doors" },
  { name: "Decks & Outdoor", href: "/services/decks-outdoor" },
  { name: "Basement Renovation", href: "/services/basement-renovation" },
  { name: "Fire & Water Damage", href: "/services/fire-water-damage" },
];

const navigation = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Process", href: "/our-process" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-end gap-6 py-2 border-b border-white/10 text-xs text-white/50">
          <a href="tel:+19789046969" className="hover:text-white transition-colors">
            (978) 904-6969
          </a>
          <a href="mailto:support@cwbconstructioninc.com" className="hover:text-white transition-colors">
            support@cwbconstructioninc.com
          </a>
          <span>Greater Boston, MA & NH</span>
        </div>

        <nav className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="CWB Construction"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors inline-flex items-center gap-1"
              >
                Services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-secondary rounded-xl border border-white/10 shadow-2xl py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-accent hover:bg-accent/90 text-primary px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10">
            <div className="pt-4 space-y-1">
              <p className="px-3 py-2 text-xs font-bold text-accent uppercase tracking-widest">Services</p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <div className="my-3 border-t border-white/10" />
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-3 bg-accent hover:bg-accent/90 text-primary px-5 py-3 rounded-lg text-base font-bold text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Estimate
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
