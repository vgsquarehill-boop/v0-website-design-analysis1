import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  procedures: [
    { label: "Hair Restoration", href: "#procedures" },
    { label: "Body Contouring", href: "#procedures" },
    { label: "Facial Surgery", href: "#procedures" },
    { label: "Skin Treatments", href: "#procedures" },
  ],
  clinic: [
    { label: "About Us", href: "/about" },
    { label: "Our Philosophy", href: "/about#mission" },
    { label: "Patient Stories", href: "#testimonials" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-[var(--font-cormorant)] text-2xl font-semibold tracking-wide text-cream">
                SWI Infinity
              </span>
              <p className="mt-1 font-[var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-rose-gold-light">
                Aesthetic & Plastic Surgery
              </p>
            </div>
            <p className="font-[var(--font-montserrat)] text-sm leading-relaxed text-cream/70">
              Where surgical excellence meets aesthetic harmony. Pioneering
              advanced techniques for natural, lasting results since 2003.
            </p>
          </div>

          {/* Procedures */}
          <div>
            <h4 className="mb-6 font-[var(--font-cormorant)] text-lg font-semibold text-cream">
              Procedures
            </h4>
            <ul className="space-y-3">
              {footerLinks.procedures.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[var(--font-montserrat)] text-sm text-cream/60 transition-colors hover:text-rose-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic */}
          <div>
            <h4 className="mb-6 font-[var(--font-cormorant)] text-lg font-semibold text-cream">
              Clinic
            </h4>
            <ul className="space-y-3">
              {footerLinks.clinic.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[var(--font-montserrat)] text-sm text-cream/60 transition-colors hover:text-rose-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-[var(--font-cormorant)] text-lg font-semibold text-cream">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917017193675"
                  className="flex items-center gap-3 font-[var(--font-montserrat)] text-sm text-cream/60 transition-colors hover:text-rose-gold-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-rose-gold-light" />
                  +91 7017193675
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@swiinfinity.com"
                  className="flex items-center gap-3 font-[var(--font-montserrat)] text-sm text-cream/60 transition-colors hover:text-rose-gold-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-rose-gold-light" />
                  info@swiinfinity.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-[var(--font-montserrat)] text-sm text-cream/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-gold-light" />
                  Gurugram, Haryana, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="font-[var(--font-montserrat)] text-xs text-cream/40">
            &copy; 2026 SWI Infinity. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-[var(--font-montserrat)] text-xs text-cream/40 transition-colors hover:text-rose-gold-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-[var(--font-montserrat)] text-xs text-cream/40 transition-colors hover:text-rose-gold-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
