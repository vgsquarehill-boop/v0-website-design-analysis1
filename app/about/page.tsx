import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Award,
  GraduationCap,
  ShieldCheck,
  HeartPulse,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About | SWI Infinity — Premier Aesthetic & Plastic Surgery Clinic",
  description:
    "Meet the team behind SWI Infinity. Learn about our board-certified surgeon, our mission, certifications, and the philosophy that drives our clinic.",
}

/* ─── Data ──────────────────────────────────────────────────────────────── */

const certifications = [
  {
    icon: GraduationCap,
    title: "MBBS, MS (General Surgery)",
    detail: "All India Institute of Medical Sciences, New Delhi",
  },
  {
    icon: Award,
    title: "MCh (Plastic & Reconstructive Surgery)",
    detail: "Postgraduate Institute of Medical Education & Research, Chandigarh",
  },
  {
    icon: ShieldCheck,
    title: "Board Certified — ISAPS Member",
    detail:
      "International Society of Aesthetic Plastic Surgery, full member since 2012",
  },
  {
    icon: HeartPulse,
    title: "Fellowship in Microsurgery",
    detail:
      "Advanced fellowship in microvascular free-flap reconstruction, Seoul National University Hospital",
  },
]

const stats = [
  { value: "20+", label: "Years of Practice" },
  { value: "10,000+", label: "Successful Procedures" },
  { value: "74", label: "Advanced Techniques" },
  { value: "98%", label: "Patient Satisfaction" },
]

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <section className="relative bg-charcoal pt-32 pb-20 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-rose-gold" />
              <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold-light">
                About the Clinic
              </span>
            </div>
            <h1 className="mt-6 font-[var(--font-cormorant)] text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Where Surgical Excellence Meets{" "}
                <span className="italic text-rose-gold">Aesthetic Harmony</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-montserrat)] text-sm leading-relaxed text-cream/60">
              Founded on a commitment to safety, artistry, and patient-centered
              care, SWI Infinity has grown into one of the most trusted names in
              aesthetic and reconstructive surgery.
            </p>
          </div>
          {/* Decorative accent */}
          <div className="absolute bottom-0 left-6 h-24 w-px bg-rose-gold/40 lg:left-8" />
        </section>

        {/* ── Doctor Profile ──────────────────────────────────────────── */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Image placeholder */}
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <Users className="mx-auto h-16 w-16 text-rose-gold/40" />
                      <p className="mt-4 font-[var(--font-montserrat)] text-xs uppercase tracking-widest text-charcoal-light/60">
                        Doctor Portrait
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accent line */}
                <div className="absolute -left-4 top-8 h-32 w-px bg-rose-gold" />
                {/* Floating experience badge */}
                <div className="absolute -bottom-6 -right-6 border border-border bg-card p-8 shadow-lg md:bottom-8 md:right-[-40px]">
                  <span className="font-[var(--font-cormorant)] text-5xl font-light text-rose-gold">
                    20+
                  </span>
                  <p className="mt-1 font-[var(--font-montserrat)] text-xs uppercase tracking-widest text-charcoal-light">
                    Years of Excellence
                  </p>
                </div>
              </div>

              {/* Profile content */}
              <div className="lg:pl-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-px w-12 bg-rose-gold" />
                  <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                    Lead Surgeon
                  </span>
                </div>

                <h2 className="mb-2 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
                  Dr. Swikriti Raniwala
                </h2>
                <p className="mb-8 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold">
                  MCh Plastic Surgery &bull; ISAPS Member
                </p>

                <p className="mb-6 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                  With over two decades of experience in aesthetic and
                  reconstructive surgery, Dr. Raniwala is recognized for her
                  meticulous technique, artistic sensibility, and unwavering
                  commitment to patient safety. Her philosophy centers on
                  achieving natural, harmonious results that enhance each
                  patient&apos;s unique features rather than conforming to a
                  single standard of beauty.
                </p>
                <p className="mb-10 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                  Trained at India&apos;s premier medical institutions and
                  further honed through international fellowships, she brings a
                  global perspective to every consultation. Her areas of special
                  interest include rhinoplasty, breast aesthetics, hair
                  restoration, and complex reconstructive microsurgery.
                </p>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold transition-colors hover:text-rose-gold-dark"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Certifications ──────────────────────────────────────────── */}
        <section className="border-t border-border bg-cream-dark py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-rose-gold" />
                <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                  Credentials
                </span>
                <div className="h-px w-12 bg-rose-gold" />
              </div>
              <h2 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
                <span className="text-balance">
                  Certifications &{" "}
                  <span className="italic text-rose-gold">Affiliations</span>
                </span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <article
                    key={index}
                    className="group flex gap-6 border border-border bg-card p-8 transition-all duration-300 hover:border-rose-gold/40 hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-rose-gold/30 transition-all duration-300 group-hover:border-rose-gold group-hover:bg-rose-gold/10">
                      <Icon className="h-6 w-6 text-rose-gold" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-[var(--font-cormorant)] text-xl font-semibold text-charcoal">
                        {cert.title}
                      </h3>
                      <p className="font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                        {cert.detail}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Mission Statement ────────────────────────────────────────── */}
        <section className="bg-charcoal py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-rose-gold" />
              <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold-light">
                Our Mission
              </span>
              <div className="h-px w-12 bg-rose-gold" />
            </div>

            <blockquote className="font-[var(--font-cormorant)] text-3xl font-light italic leading-snug text-cream md:text-4xl">
              <span className="text-balance">
                &ldquo;To advance the science and art of aesthetic surgery
                through relentless innovation, uncompromising safety, and a
                deeply personal commitment to every patient who entrusts us with
                their care.&rdquo;
              </span>
            </blockquote>

            <p className="mt-8 font-[var(--font-montserrat)] text-sm leading-relaxed text-cream/60">
              Every procedure we perform is guided by this principle. We believe
              that true beauty is not manufactured — it is revealed through
              careful, considered enhancement that respects the individual.
            </p>
          </div>
        </section>

        {/* ── Stats Bar ───────────────────────────────────────────────── */}
        <section className="border-t border-border bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="font-[var(--font-cormorant)] text-4xl font-light text-rose-gold md:text-5xl">
                    {stat.value}
                  </span>
                  <p className="mt-2 font-[var(--font-montserrat)] text-xs uppercase tracking-widest text-charcoal-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clinic Overview ─────────────────────────────────────────── */}
        <section className="border-t border-border bg-cream-dark py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Content */}
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-px w-12 bg-rose-gold" />
                  <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                    The Clinic
                  </span>
                </div>

                <h2 className="mb-8 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
                  <span className="text-balance">
                    A Space Designed for{" "}
                    <span className="italic text-rose-gold">
                      Comfort & Precision
                    </span>
                  </span>
                </h2>

                <p className="mb-6 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                  SWI Infinity operates from a state-of-the-art facility in
                  Gurugram, designed to combine clinical excellence with a calm,
                  reassuring atmosphere. Every detail — from our consultation
                  suites to our operating theatres — has been crafted to ensure
                  patient comfort and surgeon precision.
                </p>
                <p className="mb-10 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                  Our clinic features fully accredited operating rooms equipped
                  with the latest surgical technology, private recovery suites,
                  and a dedicated post-operative care team available around the
                  clock. We adhere to international safety protocols and maintain
                  the highest standards of sterilization and patient monitoring.
                </p>

                <ul className="flex flex-col gap-4" role="list">
                  {[
                    "Fully accredited surgical facility",
                    "Advanced laser & imaging technology",
                    "Private recovery suites",
                    "24/7 post-operative support",
                    "International safety protocols",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-rose-gold/30">
                        <ShieldCheck className="h-3.5 w-3.5 text-rose-gold" />
                      </div>
                      <span className="font-[var(--font-montserrat)] text-sm text-charcoal-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinic image placeholder */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <Clock className="mx-auto h-16 w-16 text-rose-gold/40" />
                      <p className="mt-4 font-[var(--font-montserrat)] text-xs uppercase tracking-widest text-charcoal-light/60">
                        Clinic Interior
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accent line */}
                <div className="absolute -right-4 top-8 h-32 w-px bg-rose-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="mb-6 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
              <span className="text-balance">
                Begin Your{" "}
                <span className="italic text-rose-gold">Transformation</span>
              </span>
            </h2>
            <p className="mb-10 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
              Schedule a private consultation to discuss your goals and explore
              how our expertise can help you achieve natural, lasting results
              tailored to your unique anatomy and aesthetic vision.
            </p>
            <Link
              href="#contact"
              className="inline-block rounded-sm border border-rose-gold bg-rose-gold px-10 py-3.5 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-rose-gold-dark"
            >
              Book Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
