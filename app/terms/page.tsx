import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | SWI Infinity — Premier Aesthetic & Plastic Surgery Clinic",
  description:
    "Review the Terms of Service for using the SWI Infinity website. Understand your rights, responsibilities, and our medical disclaimers.",
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
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "description", label: "Description of Services" },
  { id: "medical-disclaimer", label: "Medical Disclaimer" },
  { id: "no-doctor-patient", label: "No Doctor-Patient Relationship" },
  { id: "consultation-policy", label: "Consultation & Appointment Policy" },
  { id: "user-obligations", label: "User Obligations" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "website-use", label: "Permitted Use of the Website" },
  { id: "user-content", label: "User-Submitted Content" },
  { id: "third-party-links", label: "Third-Party Links & Services" },
  { id: "limitation", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "privacy", label: "Privacy" },
  { id: "modifications", label: "Modifications to Terms" },
  { id: "severability", label: "Severability" },
  { id: "governing-law", label: "Governing Law & Jurisdiction" },
  { id: "contact", label: "Contact Information" },
]

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">
        {/* ── Hero ── */}
        <section className="relative bg-charcoal py-24 text-center" aria-labelledby="terms-hero">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/10 px-4 py-1.5 text-sm font-medium text-rose-gold font-[var(--font-montserrat)]">
                <FileText className="h-4 w-4" />
                Legal Agreement
              </span>
            </div>
            <h1
              id="terms-hero"
              className="text-4xl md:text-5xl font-bold tracking-wide text-white font-[var(--font-cormorant)]"
            >
              Terms of Service
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
            Welcome to the website of SWI Infinity Aesthetic &amp; Plastic Surgery Clinic
            (&ldquo;SWI Infinity,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our website
            at{" "}
            <Link href="/" className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark">
              www.swiinfinity.com
            </Link>{" "}
            and any related services we offer through this platform. Please read these Terms carefully
            before using our website.
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

          {/* ── 1. Acceptance of Terms ── */}
          <SectionHeading id="acceptance">1. Acceptance of Terms</SectionHeading>
          <P>
            By accessing, browsing, or using this website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service and our{" "}
            <Link href="/privacy" className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark">
              Privacy Policy
            </Link>
            . If you do not agree with any part of these Terms, you must discontinue use of this
            website immediately.
          </P>
          <P>
            These Terms constitute a legally binding agreement between you (&ldquo;User,&rdquo;
            &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and SWI Infinity Aesthetic &amp; Plastic Surgery
            Clinic. Your continued use of the website after any modifications to these Terms signifies
            your acceptance of the updated Terms.
          </P>

          {/* ── 2. Description of Services ── */}
          <SectionHeading id="description">2. Description of Services</SectionHeading>
          <P>
            SWI Infinity operates this website to provide general information about our aesthetic and
            plastic surgery clinic, the procedures and treatments we offer, our medical team, and our
            facilities. The website also enables visitors to:
          </P>
          <BulletList
            items={[
              "Learn about available surgical and non-surgical aesthetic procedures",
              "Submit consultation request forms and general enquiries",
              "Access contact details and clinic location information",
              "View educational content related to aesthetic and plastic surgery",
            ]}
          />
          <P>
            This website does not provide online medical consultations, telemedicine services, or
            remote treatment. All clinical services are provided exclusively through in-person
            consultations at our clinic.
          </P>

          {/* ── 3. Medical Disclaimer ── */}
          <SectionHeading id="medical-disclaimer">3. Medical Disclaimer</SectionHeading>
          <P>
            The content on this website, including text, images, graphics, and other materials, is
            provided for general informational and educational purposes only. It is not intended as,
            and shall not be construed as, medical advice, diagnosis, or a recommendation for any
            specific treatment or procedure.
          </P>
          <BulletList
            items={[
              "All surgical and non-surgical procedures carry inherent risks, including but not limited to infection, scarring, anaesthesia complications, and unsatisfactory results.",
              "Individual results vary significantly based on the patient's anatomy, health, lifestyle, and adherence to pre- and post-operative instructions.",
              "Before-and-after photographs, if displayed, are for illustrative purposes only and do not guarantee similar outcomes for any other patient.",
              "All clinical images are used with the express written consent of the patient.",
              "No information on this website replaces a thorough, in-person medical evaluation by a qualified surgeon.",
            ]}
          />
          <P>
            You should always seek the advice of a qualified healthcare professional for any questions
            regarding a medical condition or treatment. Never disregard professional medical advice or
            delay seeking treatment because of something you have read on this website.
          </P>

          {/* ── 4. No Doctor-Patient Relationship ── */}
          <SectionHeading id="no-doctor-patient">4. No Doctor-Patient Relationship</SectionHeading>
          <P>
            Your use of this website, including the submission of a consultation request form, does not
            create a doctor-patient relationship between you and SWI Infinity or any of its medical
            practitioners. A doctor-patient relationship is established only through a formal, in-person
            clinical consultation at our facility, with mutual agreement between the patient and the
            treating surgeon.
          </P>
          <P>
            Information exchanged through website forms, email, phone, or WhatsApp prior to a formal
            consultation is for scheduling and preliminary enquiry purposes only and does not constitute
            medical advice.
          </P>

          {/* ── 5. Consultation & Appointment Policy ── */}
          <SectionHeading id="consultation-policy">5. Consultation &amp; Appointment Policy</SectionHeading>
          <P>All consultations at SWI Infinity are subject to the following conditions:</P>
          <BulletList
            items={[
              "Consultations are by appointment only. Walk-in consultations may not be accommodated without prior scheduling.",
              "A consultation request submitted through our website does not guarantee an appointment. Our team will confirm the appointment separately via phone, email, or WhatsApp.",
              "Consultation fees, if applicable, will be communicated at the time of scheduling. Fee structures are subject to change without prior notice.",
              "Patients are expected to provide accurate, complete, and honest medical history during consultations. Withholding or misrepresenting medical information may adversely affect treatment outcomes and safety.",
              "Cancellation or rescheduling policies will be communicated at the time of booking.",
            ]}
          />

          {/* ── 6. User Obligations ── */}
          <SectionHeading id="user-obligations">6. User Obligations</SectionHeading>
          <P>By using this website, you agree to:</P>
          <BulletList
            items={[
              "Provide accurate and truthful information when submitting any form or enquiry",
              "Use the website solely for lawful purposes and in compliance with all applicable Indian laws",
              "Not attempt to gain unauthorised access to any part of the website, its servers, or connected systems",
              "Not use automated systems (bots, scrapers, crawlers) to extract content from the website without prior written permission",
              "Not transmit any material that is defamatory, obscene, threatening, or otherwise objectionable",
              "Not impersonate any person or entity, or misrepresent your affiliation with any person or entity",
              "Not interfere with or disrupt the operation or security of the website",
            ]}
          />

          {/* ── 7. Intellectual Property ── */}
          <SectionHeading id="intellectual-property">7. Intellectual Property</SectionHeading>
          <P>
            All content on this website, including but not limited to text, graphics, logos, images,
            photographs, videos, page layouts, and software, is the property of SWI Infinity
            Aesthetic &amp; Plastic Surgery Clinic or its licensors and is protected under Indian
            copyright, trademark, and intellectual property laws.
          </P>
          <BulletList
            items={[
              "The SWI Infinity name, logo, and all related marks are trademarks of SWI Infinity. Unauthorised use is strictly prohibited.",
              "You may view, download, and print pages from this website for personal, non-commercial use only, provided you do not modify the content or remove any copyright or proprietary notices.",
              "Reproduction, distribution, modification, public display, or commercial exploitation of any website content without prior written consent from SWI Infinity is prohibited.",
            ]}
          />

          {/* ── 8. Permitted Use ── */}
          <SectionHeading id="website-use">8. Permitted Use of the Website</SectionHeading>
          <P>
            This website is intended for personal, non-commercial use by individuals seeking
            information about aesthetic and plastic surgery services. You may not use this website for
            any purpose that is unlawful or prohibited by these Terms.
          </P>
          <P>Prohibited uses include but are not limited to:</P>
          <BulletList
            items={[
              "Copying or mirroring website content on any other server or platform",
              "Using the website to collect personal data of other users",
              "Uploading or transmitting viruses, malware, or any harmful code",
              "Attempting to probe, scan, or test the vulnerability of the website or its systems",
              "Using the website to advertise or promote unrelated products, services, or businesses",
            ]}
          />

          {/* ── 9. User-Submitted Content ── */}
          <SectionHeading id="user-content">9. User-Submitted Content</SectionHeading>
          <P>
            When you submit information through our consultation request form, contact form, or any
            other channel on our website, you grant SWI Infinity a non-exclusive, royalty-free right to
            use that information for the purpose of responding to your enquiry, scheduling
            appointments, and providing relevant follow-up communications.
          </P>
          <P>
            You represent and warrant that any information you submit is accurate, does not infringe
            upon any third party&apos;s rights, and does not contain unlawful or harmful content. SWI
            Infinity reserves the right to refuse or remove any submission that violates these Terms.
          </P>

          {/* ── 10. Third-Party Links ── */}
          <SectionHeading id="third-party-links">10. Third-Party Links &amp; Services</SectionHeading>
          <P>
            Our website may contain links to third-party websites, applications, or services, including
            but not limited to Google Maps, WhatsApp, and social media platforms. These links are
            provided for your convenience only.
          </P>
          <BulletList
            items={[
              "SWI Infinity does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party site.",
              "Your interaction with any third-party service is governed by that third party's own terms and privacy policy.",
              "We strongly encourage you to review the terms and privacy policies of any third-party website before providing personal information.",
            ]}
          />

          {/* ── 11. Limitation of Liability ── */}
          <SectionHeading id="limitation">11. Limitation of Liability</SectionHeading>
          <P>
            To the fullest extent permitted by applicable law:
          </P>
          <BulletList
            items={[
              "This website and its content are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
              "SWI Infinity does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
              "SWI Infinity shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of, or inability to use, this website.",
              "This limitation applies to damages of any kind, including but not limited to loss of data, loss of revenue, loss of goodwill, or any other intangible loss.",
              "Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under Indian law.",
            ]}
          />

          {/* ── 12. Indemnification ── */}
          <SectionHeading id="indemnification">12. Indemnification</SectionHeading>
          <P>
            You agree to indemnify, defend, and hold harmless SWI Infinity, its directors, officers,
            employees, agents, and affiliates from and against any claims, liabilities, damages, losses,
            costs, and expenses (including reasonable legal fees) arising out of or related to:
          </P>
          <BulletList
            items={[
              "Your use of or access to the website",
              "Your violation of these Terms of Service",
              "Your violation of any third-party rights, including intellectual property rights",
              "Any content or information you submit through the website",
            ]}
          />

          {/* ── 13. Privacy ── */}
          <SectionHeading id="privacy">13. Privacy</SectionHeading>
          <P>
            Your use of this website is also governed by our{" "}
            <Link href="/privacy" className="text-rose-gold underline underline-offset-2 hover:text-rose-gold-dark">
              Privacy Policy
            </Link>
            , which details how we collect, use, and protect your personal information. By using this
            website, you consent to the data practices described in our Privacy Policy. We encourage you
            to read the Privacy Policy in full.
          </P>

          {/* ── 14. Modifications ── */}
          <SectionHeading id="modifications">14. Modifications to Terms</SectionHeading>
          <P>
            SWI Infinity reserves the right to modify, update, or replace these Terms of Service at any
            time without prior notice. Changes will be effective immediately upon posting to this page.
            The &ldquo;Last Updated&rdquo; date at the top of this page indicates the most recent
            revision.
          </P>
          <P>
            It is your responsibility to review these Terms periodically. Your continued use of the
            website after any changes constitutes your binding acceptance of the updated Terms. If you
            do not agree with the revised Terms, you must discontinue use of the website.
          </P>

          {/* ── 15. Severability ── */}
          <SectionHeading id="severability">15. Severability</SectionHeading>
          <P>
            If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court
            of competent jurisdiction, the remaining provisions shall continue in full force and effect.
            The invalid provision shall be modified to the minimum extent necessary to make it valid and
            enforceable while preserving the original intent.
          </P>

          {/* ── 16. Governing Law ── */}
          <SectionHeading id="governing-law">16. Governing Law &amp; Jurisdiction</SectionHeading>
          <P>
            These Terms of Service shall be governed by and construed in accordance with the laws of
            India, without regard to conflict-of-law principles. Any dispute arising out of or in
            connection with these Terms or your use of the website shall be subject to the exclusive
            jurisdiction of the competent courts located in Gurugram, Haryana, India.
          </P>

          {/* ── 17. Contact ── */}
          <SectionHeading id="contact">17. Contact Information</SectionHeading>
          <P>
            If you have any questions, concerns, or feedback regarding these Terms of Service, please
            contact us:
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

          {/* Acknowledgement */}
          <div className="mt-14 rounded-xl border border-rose-gold/20 bg-rose-gold/5 p-6">
            <p className="font-[var(--font-montserrat)] text-[15px] text-charcoal-light leading-relaxed">
              <span className="font-semibold text-charcoal">Acknowledgement:</span> By using this
              website, you acknowledge that you have read these Terms of Service in their entirety and
              agree to be legally bound by them. If you are using this website on behalf of an
              organisation, you represent and warrant that you have authority to bind that organisation
              to these Terms.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
