"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import {
  allCategories,
  categoryMeta,
  groupedProcedures,
  type ProcedureCategory,
} from "@/lib/procedures"
import { useMounted } from "@/hooks/use-mounted"
import { useMediaQuery } from "@/hooks/use-media-query"
import { MegaDropdown } from "@/components/mega-dropdown"

/* ─────────────────────────────────────────────────────────────────────────────
 * NAVIGATION ITEMS
 *
 * Static, module-level constant.  Defined outside the component so it is never
 * re-created across renders and can be safely referenced without deps arrays.
 * ───────────────────────────────────────────────────────────────────────────── */
const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Procedures", href: "/procedures", hasMegaMenu: true },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "/contact" },
] as const

/* ─────────────────────────────────────────────────────────────────────────────
 * CLOSE DELAY (ms)
 *
 * The grace period between the mouse leaving the trigger/dropdown and the menu
 * actually closing.  250ms is the UX sweet spot: long enough that diagonal
 * mouse paths between the trigger and the dropdown don't accidentally dismiss,
 * short enough that it still feels responsive.
 * ───────────────────────────────────────────────────────────────────────────── */
const MEGA_CLOSE_DELAY_MS = 250

/* ─────────────────────────────────────────────────────────────────────────────
 * NAVBAR COMPONENT
 *
 * HYDRATION STRATEGY:
 *   The Navbar is a "use client" component.  It uses `useMounted()` to gate
 *   every piece of client-only logic:
 *   - Scroll listener → only attached after mount.
 *   - Media query (isDesktop) → returns `false` until mounted.
 *   - MegaDropdown → rendered only after mount.
 *   - Mobile drawer → rendered only after mount.
 *
 *   During SSR and the first client paint the navbar renders a static,
 *   deterministic shell: transparent background, menus closed, no scroll
 *   class.  This guarantees zero hydration mismatches regardless of browser
 *   extensions, viewport size, or scroll position.
 *
 * INTERACTION MODEL:
 *   Desktop — hover-to-open with 250ms close delay; click toggles;
 *             Escape dismisses; click-outside dismisses.
 *   Mobile  — hamburger toggle reveals a slide-down drawer with nested
 *             accordion categories.  No hover logic runs on mobile because
 *             `isDesktop` gates it.
 *
 * OVERLAY MODEL:
 *   The MegaDropdown is `position: fixed` and manages its own stacking
 *   context (z-40), below the navbar (z-50).  The mobile drawer is part of
 *   the navbar flow (overflow-hidden + max-h transition).
 * ───────────────────────────────────────────────────────────────────────────── */

export function Navbar() {
  /* ── Core state ─────────────────────────────────────────────────────────── */
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileProceduresOpen, setMobileProceduresOpen] = useState(false)
  const [mobileActiveCategory, setMobileActiveCategory] =
    useState<ProcedureCategory | null>(null)

  /* ── Refs ────────────────────────────────────────────────────────────────── */
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* ── SSR / CSR boundary guards ──────────────────────────────────────────── */
  const mounted = useMounted()

  /*
   * isDesktop: true when viewport is >= 1024px (Tailwind `lg`).
   * Defaults to `false` so the server renders the mobile-safe path.
   * This JS flag is ONLY used to decide which event handlers attach;
   * visual show/hide is still driven by Tailwind responsive classes so
   * there is no layout shift.
   */
  const isDesktop = useMediaQuery("(min-width: 1024px)", false)

  /* ── Scroll listener (client-only) ──────────────────────────────────────── */
  useEffect(() => {
    if (!mounted) return

    /*
     * Passive listener: we never call preventDefault, so marking it passive
     * lets the browser optimise scroll performance.
     */
    const handleScroll = () => setScrolled(window.scrollY > 20)

    // Sync immediately in case the page loaded mid-scroll (e.g. back/forward cache).
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  /* ── Reset mega menu when switching from desktop to mobile ──────────────── */
  useEffect(() => {
    if (!isDesktop) {
      setMegaMenuOpen(false)
      // Clear any pending close timeout to avoid a stale closure firing later.
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
        closeTimeoutRef.current = null
      }
    }
  }, [isDesktop])

  /* ── Reset mobile drawer when switching to desktop ──────────────────────── */
  useEffect(() => {
    if (isDesktop) {
      setMobileOpen(false)
      setMobileProceduresOpen(false)
      setMobileActiveCategory(null)
    }
  }, [isDesktop])

  /* ── Lock body scroll when mobile drawer is open ────────────────────────── */
  useEffect(() => {
    if (!mounted) return

    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup: always restore scroll when the component unmounts.
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen, mounted])

  /* ── Hover handlers (desktop only) ──────────────────────────────────────── */
  const handleMouseEnter = useCallback(() => {
    /*
     * Guard: if we're on mobile/tablet, bail.  Touch devices fire synthetic
     * mouseenter events, which would open the mega menu unintentionally.
     */
    if (!isDesktop) return

    // Cancel any pending close so the menu stays open.
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setMegaMenuOpen(true)
  }, [isDesktop])

  const handleMouseLeave = useCallback(() => {
    if (!isDesktop) return

    /*
     * Start a delayed close.  The 250ms window allows the user to move their
     * mouse diagonally from the trigger into the dropdown without the menu
     * flickering closed.  If they re-enter before the timeout fires,
     * handleMouseEnter clears this timeout.
     */
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false)
      closeTimeoutRef.current = null
    }, MEGA_CLOSE_DELAY_MS)
  }, [isDesktop])

  /* ── Cleanup on unmount ─────────────────────────────────────────────────── */
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  /*
   * CONTRAST STRATEGY:
   * When the header is transparent (over the hero), all text must be white/cream
   * so it's legible against the dark hero overlay.  When scrolled, the header
   * gets a solid card background, so text switches to charcoal.
   *
   * We derive a single `textClass` token here and thread it through every
   * text element below rather than duplicating the conditional in each spot.
   */
  const headerTextColor = scrolled ? "text-charcoal" : "text-cream"
  const headerSubTextColor = scrolled ? "text-rose-gold" : "text-rose-gold-light"
  const headerMutedColor = scrolled ? "text-charcoal-light" : "text-cream/70"

  /* ── Render ─────────────────────────────────────────────────────────────── */
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          /*
           * `scrolled` is always false during SSR (useState default), so the
           * server renders the transparent variant.  After mount the scroll
           * listener may immediately flip it, but that's a client-only paint
           * update, not a hydration mismatch.
           */
          scrolled
            ? "bg-card/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* ── Logo ──────────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className={`font-[var(--font-cormorant)] text-2xl font-semibold tracking-wide transition-colors duration-500 ${headerTextColor}`}>
                SWI Infinity
              </span>
              <span className={`font-[var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${headerSubTextColor}`}>
                Aesthetic & Plastic Surgery
              </span>
            </div>
          </Link>

          {/* ── Desktop links ─────────────────────────────────────────── */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigationItems.map((item) =>
              item.hasMegaMenu ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    ref={triggerRef}
                    className={`flex items-center gap-1 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider transition-colors duration-500 hover:text-rose-gold ${headerTextColor}`}
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                    aria-controls="mega-dropdown"
                    onClick={() => setMegaMenuOpen((prev) => !prev)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-300 ${
                        megaMenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider transition-colors duration-500 hover:text-rose-gold ${headerTextColor}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* ── Desktop CTA ───────────────────────────────────────────── */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+917017193675"
              className={`flex items-center gap-2 font-[var(--font-montserrat)] text-sm transition-colors duration-500 hover:text-rose-gold ${headerMutedColor}`}
              aria-label="Call us at +91 701 719 3675"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="#contact"
              className="rounded-sm border border-rose-gold bg-rose-gold px-6 py-2.5 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-rose-gold-dark"
            >
              Book Consultation
            </Link>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`transition-colors duration-500 lg:hidden ${headerTextColor}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* ── Mobile drawer ───────────────────────────────────────────── */}
        {/*
         * HYDRATION NOTE: We always render this div (for transition purposes)
         * but it starts at max-h-0 + opacity-0.  The `mounted` guard below
         * ensures the inner content is only rendered client-side, avoiding
         * any window/viewport-dependent code in the SSR path.
         */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          {mounted && (
            <div className="border-t border-border bg-card/95 px-6 py-6 backdrop-blur-md">
              <div className="max-h-[65vh] overflow-y-auto overscroll-contain">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.hasMegaMenu ? (
                      <div>
                        {/* Procedures accordion toggle */}
                        <button
                          onClick={() => {
                            setMobileProceduresOpen((prev) => !prev)
                            setMobileActiveCategory(null)
                          }}
                          className="flex w-full items-center justify-between py-3 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal"
                          aria-expanded={mobileProceduresOpen}
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              mobileProceduresOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {/* Category accordions */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileProceduresOpen
                              ? "max-h-[2000px]"
                              : "max-h-0"
                          }`}
                        >
                          {allCategories.map((category) => {
                            const meta = categoryMeta[category]
                            const items = groupedProcedures[category]
                            const isActive =
                              mobileActiveCategory === category

                            return (
                              <div
                                key={category}
                                className="border-b border-border/50 last:border-b-0"
                              >
                                <button
                                  onClick={() =>
                                    setMobileActiveCategory(
                                      isActive ? null : category,
                                    )
                                  }
                                  className="flex w-full items-center justify-between py-3 pl-4"
                                  aria-expanded={isActive}
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                                      {category}
                                    </span>
                                    <span className="font-[var(--font-montserrat)] text-[10px] text-muted-foreground">
                                      {items.length} procedures
                                    </span>
                                  </span>
                                  <ChevronDown
                                    className={`h-3.5 w-3.5 text-rose-gold transition-transform duration-300 ${
                                      isActive ? "rotate-180" : ""
                                    }`}
                                    aria-hidden="true"
                                  />
                                </button>

                                {/* Procedure links */}
                                <div
                                  className={`overflow-hidden transition-all duration-300 ${
                                    isActive
                                      ? "max-h-[2000px] pb-2"
                                      : "max-h-0"
                                  }`}
                                >
                                  <Link
                                    href={meta.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-1 py-2 pl-8 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold"
                                  >
                                    View All {category}
                                    <ArrowRight
                                      className="h-3 w-3"
                                      aria-hidden="true"
                                    />
                                  </Link>
                                  {items.map((proc) => (
                                    <Link
                                      key={proc.url}
                                      href={proc.url}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-2 pl-8 font-[var(--font-montserrat)] text-sm text-charcoal-light transition-colors active:text-rose-gold"
                                    >
                                      {proc.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal transition-colors active:text-rose-gold"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-4 border-t border-border pt-4">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-sm border border-rose-gold bg-rose-gold px-6 py-3 text-center font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-widest text-primary-foreground"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── Desktop Mega Dropdown (rendered outside <header> to avoid
           overflow/stacking issues) ──────────────────────────────────── */}
      {/*
       * HYDRATION SAFETY: Only rendered after mount.  During SSR this branch
       * is skipped entirely, so there is zero risk of client/server mismatch
       * from viewport-dependent or hover-dependent state.
       *
       * PREVIEW SAFETY: Because `mounted` is false during SSR, preview
       * environments (Vercel preview, Storybook, etc.) that do SSR will
       * also get the safe fallback.  Feature flags that toggle `hasMegaMenu`
       * on a nav item will simply not render this component if no nav item
       * has the flag set (the trigger won't exist).
       */}
      {mounted && isDesktop && (
        <MegaDropdown
          isOpen={megaMenuOpen}
          setIsOpen={setMegaMenuOpen}
          triggerRef={triggerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </>
  )
}
