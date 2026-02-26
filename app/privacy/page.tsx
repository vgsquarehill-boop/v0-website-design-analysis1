import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | SWI Infinity — Premier Aesthetic & Plastic Surgery Clinic",
  description:
    "Read the SWI Infinity privacy policy. Learn how we collect, use, and protect your personal and medical information.",
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 mb-4 scroll-mt-28 text-2xl font-semibold tracking-wide font-[var(--font-cormorant)] text-charcoal"
    >
      {children}
    </h2>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-lg font-semibold font-[var(--font-montserrat)] text-charcoal">
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 leading-relaxed font-[var(--font-montserrat)] text-charcoal-light text-[15px]">
      {children}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 list-disc pl-6 space-y-1.5 font-[var(--font-montserrat)] text-charcoal-light text-[15px] leading-relaxed">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

/* ─── Table of Contents ──────────────────────────────────────────────────── */

const toc = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "cookies", label: "Cookies & Analytics" },
  { id: "data-sharing", label: "Data Sharing & Disclosure" },
  { id: "data-security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "medical-disclaimer", label: "Medical Disclaimer" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact-us", label: "Contact Us" },
]

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">
        {/* ── Hero ── */}
        <section className="relative bg-charcoal py-24 text-center" aria-labelledby="privacy-hero">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/10 px-4 py-1.5 text-sm font-medium text-rose-gold font-[var(--font-montserrat)]">
                <ShieldCheck className="h-4 w-4" />
                Your Privacy Matters
              </span>
            </div>
            <h1
              id="privacy-hero"
              className="text-4xl md:text-5xl font-bold tracking-wide text-white font-[var(--font-cormorant)]"
            >
              Privacy Policy
            </h1>
            <p className="mt-4 text-cream-dark/80 font-[var(--font-montserrat)] text-base leading-relaxed">
              Effective Date: 1 January 2025 &middot; Last Updated: 25 February 2026
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          {/* intro */}
          <P>
            SWI Infinity Aesthetic &amp; Plastic Surgery Clinic (&ldquo;SWI Infinity,&rdquo;
            &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the
            privacy and confidentiality of every individual who visits our website or engages with our
            services. This Privacy Policy explains how we collect, use, store, disclose, and safeguard
            your personal information when you access our website at{" "}
            <Link href="/" className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark">
              www.swiinfinity.com
            </Link>{" "}
            or contact us through any channel.
          </P>
          <P>
            By using our website or submitting information through our contact and consultation forms,
            you consent to the practices described herein. If you do not agree with this policy, please
            refrain from using our website or services.
          </P>

          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="my-10 rounded-xl border border-border bg-card p-6"
          >
            <h2 className="mb-4 text-lg font-semibold font-[var(--font-cormorant)] text-charcoal">
              Contents
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 font-[var(--font-montserrat)] text-[15px] text-rose-gold">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-charcoal-light hover:text-rose-gold transition-colors underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── 1. Information We Collect ── */}
          <SectionHeading id="information-we-collect">1. Information We Collect</SectionHeading>

          <SubHeading>1.1 Information You Provide Directly</SubHeading>
          <P>
            When you fill out a consultation request form, contact form, or communicate with us via
            phone, email, or WhatsApp, we may collect:
          </P>
          <BulletList
            items={[
              "Full name",
              "Email address",
              "Phone number (including WhatsApp number)",
              "Procedure or treatment of interest",
              "Any additional details you voluntarily include in your message",
            ]}
          />
          <P>
            We do not collect sensitive medical records, diagnostic images, or health data through our
            website forms. Detailed medical information is collected only during in-person consultations
            under clinical data-protection protocols.
          </P>

          <SubHeading>1.2 Information Collected Automatically</SubHeading>
          <P>
            When you browse our website, our servers and third-party analytics services may
            automatically collect:
          </P>
          <BulletList
            items={[
              "IP address and approximate geographic location",
              "Browser type, version, and language preference",
              "Operating system and device type",
              "Pages visited, time spent, and navigation path",
              "Referring URL (the page that led you to our site)",
              "Date and time of each visit",
            ]}
          />

          {/* ── 2. How We Use Your Information ── */}
          <SectionHeading id="how-we-use">2. How We Use Your Information</SectionHeading>
          <P>We use the information we collect for the following purposes:</P>
          <BulletList
            items={[
              "To respond to your consultation requests and enquiries",
              "To schedule appointments and follow up on enquiries",
              "To provide information about our services and procedures",
              "To improve the functionality, content, and user experience of our website",
              "To analyse website traffic and usage patterns through aggregated, non-identifying data",
              "To comply with legal obligations, including healthcare regulations applicable in India",
              "To protect the rights, safety, and property of SWI Infinity and its patients",
            ]}
          />
          <P>
            We will never use your personal information for unsolicited marketing unless you have
            explicitly opted in to receive communications from us.
          </P>

          {/* ── 3. Legal Basis ── */}
          <SectionHeading id="legal-basis">3. Legal Basis for Processing</SectionHeading>
          <P>
            Under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023
            (DPDPA) of India, we process your personal data on the following lawful bases:
          </P>
          <BulletList
            items={[
              "Consent: When you voluntarily submit information through our forms or contact channels.",
              "Legitimate Interest: To improve our services, ensure website security, and respond to enquiries.",
              "Legal Obligation: To comply with applicable healthcare regulations, tax laws, and record-keeping requirements in India.",
              "Contract Performance: To fulfil appointment bookings and provide requested consultation services.",
            ]}
          />

          {/* ── 4. Cookies & Analytics ── */}
          <SectionHeading id="cookies">4. Cookies &amp; Analytics</SectionHeading>

          <SubHeading>4.1 What Are Cookies?</SubHeading>
          <P>
            Cookies are small text files stored on your device when you visit a website. They help the
            site remember your preferences and understand how you interact with the content.
          </P>

          <SubHeading>4.2 Cookies We Use</SubHeading>
          <BulletList
            items={[
              "Essential Cookies: Required for the website to function correctly (e.g., session management, form submission).",
              "Analytics Cookies: Used to collect aggregated, anonymous data about website traffic and user behaviour (e.g., Google Analytics).",
              "Preference Cookies: Used to remember your settings such as language or region, if applicable.",
            ]}
          />

          <SubHeading>4.3 Managing Cookies</SubHeading>
          <P>
            You can control or delete cookies through your browser settings. Disabling cookies may
            affect certain features of the website, such as form submissions and navigation preferences.
            Most browsers allow you to refuse cookies or alert you when a cookie is being set.
          </P>

          <SubHeading>4.4 Google Analytics</SubHeading>
          <P>
            We may use Google Analytics to understand visitor behaviour. Google Analytics collects data
            anonymously and reports website trends without identifying individual visitors. You can opt
            out of Google Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </P>

          {/* ── 5. Data Sharing ── */}
          <SectionHeading id="data-sharing">5. Data Sharing &amp; Disclosure</SectionHeading>
          <P>
            We do not sell, rent, or trade your personal information to third parties. We may share your
            information only in the following circumstances:
          </P>
          <BulletList
            items={[
              "Service Providers: Trusted third-party vendors who assist with website hosting, analytics, and email delivery, bound by strict confidentiality agreements.",
              "Legal Requirements: When disclosure is required by law, regulation, court order, or governmental request.",
              "Safety & Protection: To protect the rights, property, or personal safety of SWI Infinity, our patients, or the public.",
              "Professional Referrals: With your explicit consent, we may share relevant information with referring or consulting medical professionals for continuity of care.",
            ]}
          />

          {/* ── 6. Data Security ── */}
          <SectionHeading id="data-security">6. Data Security</SectionHeading>
          <P>
            We implement industry-standard technical and organisational measures to protect your personal
            information from unauthorised access, alteration, disclosure, or destruction. These measures
            include:
          </P>
          <BulletList
            items={[
              "SSL/TLS encryption for all data transmitted between your browser and our website",
              "Secure server infrastructure with access limited to authorised personnel",
              "Regular security reviews and updates to our systems",
              "Staff training on data protection and confidentiality protocols",
            ]}
          />
          <P>
            While we strive to protect your information, no method of electronic transmission or storage
            is 100% secure. We cannot guarantee absolute security but will promptly notify affected
            individuals in the event of a data breach, in accordance with applicable law.
          </P>

          {/* ── 7. Retention ── */}
          <SectionHeading id="retention">7. Data Retention</SectionHeading>
          <P>
            We retain your personal information only for as long as necessary to fulfil the purposes for
            which it was collected, including:
          </P>
          <BulletList
            items={[
              "Contact form submissions: Retained for up to 24 months from the date of submission, unless a patient relationship is established.",
              "Patient records: Retained in accordance with the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002, which require medical records to be maintained for a minimum of three years.",
              "Analytics data: Aggregated, non-identifying analytics data may be retained indefinitely for statistical analysis.",
            ]}
          />
          <P>
            You may request deletion of your personal data at any time by contacting us (see Section 13
            below), subject to our legal obligations to retain certain records.
          </P>

          {/* ── 8. Your Rights ── */}
          <SectionHeading id="your-rights">8. Your Rights</SectionHeading>
          <P>
            Under the Digital Personal Data Protection Act, 2023 and applicable Indian law, you have the
            following rights regarding your personal data:
          </P>
          <BulletList
            items={[
              "Right to Access: You may request a copy of the personal data we hold about you.",
              "Right to Correction: You may request correction of inaccurate or incomplete personal data.",
              "Right to Erasure: You may request deletion of your personal data, subject to legal retention requirements.",
              "Right to Withdraw Consent: You may withdraw your consent to data processing at any time. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
              "Right to Grievance Redressal: You have the right to file a complaint with the Data Protection Board of India if you believe your data rights have been violated.",
            ]}
          />
          <P>
            To exercise any of these rights, please contact us using the details provided in Section 13.
            We will respond to your request within 30 days.
          </P>

          {/* ── 9. Medical Disclaimer ── */}
          <SectionHeading id="medical-disclaimer">9. Medical Disclaimer</SectionHeading>
          <P>
            The information provided on this website is for general informational and educational
            purposes only. It does not constitute medical advice, diagnosis, or treatment
            recommendations. No doctor-patient relationship is established by your use of this website
            or submission of a consultation request form.
          </P>
          <P>
            All medical procedures, including aesthetic and plastic surgery, carry inherent risks.
            Individual results vary and depend on numerous factors. A thorough in-person consultation
            with a qualified surgeon is essential before any treatment decision. The content on this
            website should not be used as a substitute for professional medical advice.
          </P>
          <P>
            Before-and-after images, if displayed on this website, are for illustrative purposes only
            and do not guarantee similar outcomes. All clinical images are published with the express
            written consent of the patient.
          </P>

          {/* ── 10. Children's Privacy ── */}
          <SectionHeading id="childrens-privacy">{"10. Children's Privacy"}</SectionHeading>
          <P>
            Our website and services are not directed at individuals under the age of 18. We do not
            knowingly collect personal information from minors. If you are a parent or guardian and
            believe your child has provided us with personal data, please contact us immediately and we
            will take steps to delete such information.
          </P>
          <P>
            For patients under 18 years of age, all consultations and consent for treatment must
            involve a parent or legal guardian, in accordance with Indian medical regulations.
          </P>

          {/* ── 11. Third-Party Links ── */}
          <SectionHeading id="third-party-links">11. Third-Party Links</SectionHeading>
          <P>
            Our website may contain links to external websites, social media platforms, or third-party
            services (e.g., Google Maps, WhatsApp, Instagram). We are not responsible for the privacy
            practices or content of these external sites. We encourage you to review the privacy
            policies of any third-party website before providing your personal information.
          </P>

          {/* ── 12. Changes ── */}
          <SectionHeading id="changes">12. Changes to This Policy</SectionHeading>
          <P>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will
            be posted on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to
            review this policy periodically. Continued use of our website after any changes constitutes
            your acceptance of the revised policy.
          </P>

          {/* ── 13. Contact Us ── */}
          <SectionHeading id="contact-us">13. Contact Us</SectionHeading>
          <P>
            If you have questions about this Privacy Policy, wish to exercise your data rights, or have
            concerns about how your information is handled, please contact us:
          </P>
          <div className="rounded-xl border border-border bg-card p-6 font-[var(--font-montserrat)] text-[15px] text-charcoal-light leading-relaxed space-y-1.5">
            <p className="font-semibold text-charcoal">SWI Infinity Aesthetic &amp; Plastic Surgery Clinic</p>
            <p>Ground Floor, Iris Tech Park, Sector 48, Sohna Road, Gurugram, Haryana 122018</p>
            <p>
              Email:{" "}
              <a href="mailto:drvani@swiinfinity.com" className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark">
                drvani@swiinfinity.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+917042559939" className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark">
                +91 70425 59939
              </a>
            </p>
          </div>

          {/* Governing law */}
          <div className="mt-14 rounded-xl border border-rose-gold/20 bg-rose-gold/5 p-6">
            <p className="font-[var(--font-montserrat)] text-[15px] text-charcoal-light leading-relaxed">
              <span className="font-semibold text-charcoal">Governing Law:</span> This Privacy Policy
              is governed by and construed in accordance with the laws of India. Any disputes arising
              under or in connection with this policy shall be subject to the exclusive jurisdiction of
              the courts in Gurugram, Haryana, India.
            </p>
          </div>

          {/* Cross-reference to Terms */}
          <div className="mt-10 text-center">
            <p className="font-[var(--font-montserrat)] text-[15px] text-charcoal-light leading-relaxed">
              Please also review our{" "}
              <Link
                href="/terms"
                className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark"
              >
                Terms of Service
              </Link>{" "}
              which govern your use of the SWI Infinity website and services.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
