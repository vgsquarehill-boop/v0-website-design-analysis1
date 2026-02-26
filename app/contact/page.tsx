"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Navigation,
  Train,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react"

/* ─── Contact Data ────────────────────────────────────────────────────── */

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Our Clinic",
    value: "Aartas Clinishare, 1st Floor, 10P",
    detail: "Golf Course Road, Sector 28, DLF Phase 1, Gurugram, Haryana 122002",
  },
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    value: "+91 7017193675",
    href: "tel:+917017193675",
    detail: "Also available on WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    value: "swiraniwala@gmail.com",
    href: "mailto:swiraniwala@gmail.com",
    detail: "drswikritiaesthetics@gmail.com",
    detailHref: "mailto:drswikritiaesthetics@gmail.com",
  },
  {
    icon: Clock,
    label: "Clinic Hours",
    value: "Mon - Sat: 10:00 AM - 8:00 PM",
    detail: "Sunday: 10:00 AM - 4:00 PM",
  },
]

const visitingInfo = [
  {
    icon: Navigation,
    label: "By Road",
    detail:
      "Located on Golf Course Road, Sector 28. The clinic is easily accessible from NH-48 and Sohna Road. Ample parking is available at the Aartas Clinishare complex.",
  },
  {
    icon: Train,
    label: "By Metro",
    detail:
      "The nearest metro stations are HUDA City Centre and Guru Dronacharya on the Yellow Line. Auto-rickshaws and cabs are readily available from both stations.",
  },
]

const procedureOptions = [
  "Hair Transplant / Restoration",
  "Facial Surgery (Rhinoplasty, etc.)",
  "Body Contouring / Lipo",
  "Breast Procedures",
  "Non-Surgical / Skin",
  "Other",
]

/* ─── Form State Types ────────────────────────────────────────────────── */

interface FormData {
  name: string
  email: string
  phone: string
  interest: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  interest?: string
  consent?: string
}

/* ─── Page Component ──────────────────────────────────────────────────── */

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function validate(): FormErrors {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = "Full name is required."
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required."
    } else if (!/^[+]?\d[\d\s-]{7,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number."
    }
    if (!formData.interest) newErrors.interest = "Please select an area of interest."
    if (!formData.consent)
      newErrors.consent = "You must agree to the privacy policy to proceed."
    return newErrors
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setIsSubmitting(true)

    // Pluggable: replace with Formspree, Netlify Forms, or your backend endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  function handleChange(
    field: keyof FormData,
    value: string | boolean,
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

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
                Contact & Location
              </span>
            </div>
            <h1 className="mt-6 font-[var(--font-cormorant)] text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Begin Your Journey with{" "}
                <span className="italic text-rose-gold">SWI Infinity</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-montserrat)] text-sm leading-relaxed text-cream/60">
              We are here to answer your questions and guide you towards your
              aesthetic goals. Reach out to schedule a consultation or learn more
              about our services.
            </p>
          </div>
          <div className="absolute bottom-0 left-6 h-24 w-px bg-rose-gold/40 lg:left-8" />
        </section>

        {/* ── Contact Info Cards ──────────────────────────────────────── */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-rose-gold" />
                <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                  Get in Touch
                </span>
                <div className="h-px w-12 bg-rose-gold" />
              </div>
              <h2 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
                <span className="text-balance">
                  Contact{" "}
                  <span className="italic text-rose-gold">Information</span>
                </span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <article
                    key={index}
                    className="group flex flex-col border border-border bg-card p-8 transition-all duration-300 hover:border-rose-gold/40 hover:shadow-md"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center border border-rose-gold/30 transition-all duration-300 group-hover:border-rose-gold group-hover:bg-rose-gold/10">
                      <Icon className="h-6 w-6 text-rose-gold" />
                    </div>
                    <h3 className="mb-2 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-light">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-[var(--font-cormorant)] text-lg font-semibold text-charcoal transition-colors hover:text-rose-gold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                        {item.value}
                      </p>
                    )}
                    {item.detailHref ? (
                      <a
                        href={item.detailHref}
                        className="mt-1 font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light transition-colors hover:text-rose-gold"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="mt-1 font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light">
                        {item.detail}
                      </p>
                    )}
                  </article>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10 text-center">
              <a
                href="https://wa.me/917017193675"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold transition-colors hover:text-rose-gold-dark"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Google Maps + Form ──────────────────────────────────────── */}
        <section className="border-t border-border bg-cream-dark py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Map + Directions */}
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-px w-12 bg-rose-gold" />
                  <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                    Our Location
                  </span>
                </div>
                <h2 className="mb-8 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
                  <span className="text-balance">
                    Find{" "}
                    <span className="italic text-rose-gold">Our Clinic</span>
                  </span>
                </h2>

                {/* Responsive Google Maps embed */}
                <div className="relative mb-10 w-full overflow-hidden border border-border shadow-md" style={{ aspectRatio: "4/3" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3!2d77.0926!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d4e1234567%3A0xabcdef!2sAartas+Clinishare%2C+Golf+Course+Rd%2C+Sector+28%2C+DLF+Phase+1%2C+Gurugram%2C+Haryana+122002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Maps showing SWI Infinity Clinic location at Aartas Clinishare, Golf Course Road, Sector 28, DLF Phase 1, Gurugram"
                    title="Clinic Location"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Aartas+Clinishare+Golf+Course+Road+Sector+28+DLF+Phase+1+Gurugram+Haryana+122002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-10 inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold transition-colors hover:text-rose-gold-dark"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Visiting the Clinic */}
                <div className="mt-4">
                  <h3 className="mb-6 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.25em] text-charcoal-light">
                    Visiting the Clinic
                  </h3>
                  <div className="flex flex-col gap-6">
                    {visitingInfo.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-rose-gold/30">
                            <Icon className="h-5 w-5 text-rose-gold" />
                          </div>
                          <div>
                            <h4 className="mb-1 font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                              {item.label}
                            </h4>
                            <p className="font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Consultation Request Form */}
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-px w-12 bg-rose-gold" />
                  <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                    Request Consultation
                  </span>
                </div>
                <h2 className="mb-8 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
                  <span className="text-balance">
                    Send Us a{" "}
                    <span className="italic text-rose-gold">Message</span>
                  </span>
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center border border-border bg-card p-12 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center border border-rose-gold/30 bg-rose-gold/10">
                      <CheckCircle className="h-8 w-8 text-rose-gold" />
                    </div>
                    <h3 className="mb-3 font-[var(--font-cormorant)] text-2xl font-semibold text-charcoal">
                      Request Received
                    </h3>
                    <p className="mb-6 max-w-sm font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                      Thank you for reaching out. Our team will review your
                      inquiry and contact you within 24 hours to schedule your
                      consultation.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          interest: "",
                          message: "",
                          consent: false,
                        })
                      }}
                      className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold transition-colors hover:text-rose-gold-dark"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 border border-border bg-card p-8 lg:p-10"
                    noValidate
                  >
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-light"
                      >
                        Full Name <span className="text-rose-gold">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full border border-border bg-background px-4 py-3 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal-light/40 focus:border-rose-gold"
                        placeholder="Dr. Jane Smith"
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1.5 font-[var(--font-montserrat)] text-xs text-destructive">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-light"
                      >
                        Email Address <span className="text-rose-gold">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full border border-border bg-background px-4 py-3 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal-light/40 focus:border-rose-gold"
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1.5 font-[var(--font-montserrat)] text-xs text-destructive">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-light"
                      >
                        Phone Number <span className="text-rose-gold">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full border border-border bg-background px-4 py-3 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal-light/40 focus:border-rose-gold"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1.5 font-[var(--font-montserrat)] text-xs text-destructive">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label
                        htmlFor="contact-interest"
                        className="mb-2 block font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-light"
                      >
                        Area of Interest <span className="text-rose-gold">*</span>
                      </label>
                      <select
                        id="contact-interest"
                        value={formData.interest}
                        onChange={(e) => handleChange("interest", e.target.value)}
                        className="w-full appearance-none border border-border bg-background px-4 py-3 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition-colors focus:border-rose-gold"
                      >
                        <option value="">Select a procedure...</option>
                        {procedureOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.interest && (
                        <p className="mt-1.5 flex items-center gap-1.5 font-[var(--font-montserrat)] text-xs text-destructive">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.interest}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.15em] text-charcoal-light"
                      >
                        Message{" "}
                        <span className="normal-case tracking-normal text-charcoal-light/60">
                          (Optional)
                        </span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="w-full resize-none border border-border bg-background px-4 py-3 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal-light/40 focus:border-rose-gold"
                        placeholder="Tell us a little about what you're looking for..."
                      />
                    </div>

                    {/* Consent */}
                    <div>
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) =>
                            handleChange("consent", e.target.checked)
                          }
                          className="mt-0.5 h-4 w-4 shrink-0 accent-rose-gold"
                        />
                        <span className="font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light">
                          By submitting this form, you agree to our privacy
                          policy. Your information is kept strictly confidential
                          and will only be used to respond to your inquiry.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1.5 flex items-center gap-1.5 font-[var(--font-montserrat)] text-xs text-destructive">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border border-rose-gold bg-rose-gold px-10 py-3.5 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-rose-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust & Compliance ──────────────────────────────────────── */}
        <section className="border-t border-border bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-rose-gold/30">
                  <CalendarCheck className="h-5 w-5 text-rose-gold" />
                </div>
                <div>
                  <h3 className="mb-1 font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                    By Appointment
                  </h3>
                  <p className="font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light">
                    All visits are by prior appointment to ensure you receive
                    dedicated, unhurried attention from our team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-rose-gold/30">
                  <ShieldCheck className="h-5 w-5 text-rose-gold" />
                </div>
                <div>
                  <h3 className="mb-1 font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                    Consultation Required
                  </h3>
                  <p className="font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light">
                    A thorough in-person consultation is required before any
                    surgical or non-surgical procedure is scheduled.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-rose-gold/30">
                  <Phone className="h-5 w-5 text-rose-gold" />
                </div>
                <div>
                  <h3 className="mb-1 font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                    Immediate Assistance
                  </h3>
                  <p className="font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light">
                    For urgent queries or post-operative concerns, call us
                    directly at{" "}
                    <a
                      href="tel:+917017193675"
                      className="text-rose-gold transition-colors hover:text-rose-gold-dark"
                    >
                      +91 7017193675
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="bg-charcoal py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="mb-6 font-[var(--font-cormorant)] text-4xl font-light text-cream md:text-5xl">
              <span className="text-balance">
                Your Transformation{" "}
                <span className="italic text-rose-gold">Begins Here</span>
              </span>
            </h2>
            <p className="mb-10 font-[var(--font-montserrat)] text-sm leading-relaxed text-cream/60">
              Schedule a private consultation to discuss your goals and explore
              how our expertise can help you achieve natural, lasting results
              tailored to your unique anatomy and aesthetic vision.
            </p>
            <Link
              href="tel:+917017193675"
              className="inline-block border border-rose-gold bg-rose-gold px-10 py-3.5 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-rose-gold-dark"
            >
              Call Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
