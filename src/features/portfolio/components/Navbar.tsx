import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { NAV_LINKS, SITE_PROFILE } from '../constants'
import { smoothScrollToId } from '../utils'
import type { NavLink } from '../types'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: NavLink['href']) => {
    setMenuOpen(false)
    smoothScrollToId(href)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-primary/20 bg-background/95 shadow-[0_0_24px_rgba(0,255,136,0.12)] backdrop-blur'
          : 'bg-transparent'
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          className="group inline-flex items-center gap-3 border-0 bg-transparent p-0 text-left motion-safe:animate-[float_4s_ease-in-out_infinite]"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <span className="site-logo-mark">
            <img
              src={SITE_PROFILE.avatarSrc}
              alt=""
              className="site-logo-mark__image"
              loading="eager"
              decoding="async"
            />
          </span>
          <span className="inline-flex items-baseline gap-1">
            <span className="font-heading text-[0.7rem] text-primary neon-glow">
              CHRISMAR
            </span>
            <span className="font-heading text-[0.7rem] text-accent gold-glow">.DEV</span>
          </span>
          <span className="sr-only">{SITE_PROFILE.name}</span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              className="px-3 py-2 font-heading text-[0.55rem] uppercase tracking-[2px] text-primary/90 transition duration-300 hover:-translate-y-0.5 hover:text-primary hover:neon-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              type="button"
              onClick={() => handleNav(link.href)}
            >
              &gt; {link.label}
            </button>
          ))}
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/5 text-primary transition hover:bg-primary hover:text-primary-foreground md:hidden"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-primary/20 bg-background/95 px-6 py-4 backdrop-blur md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className="border-b border-primary/10 py-3 text-left font-heading text-[0.6rem] uppercase tracking-[2px] text-primary"
                type="button"
                onClick={() => handleNav(link.href)}
              >
                &gt; {link.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
