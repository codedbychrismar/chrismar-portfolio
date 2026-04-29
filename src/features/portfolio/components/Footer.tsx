import { NAV_LINKS, SITE_PROFILE } from '../constants'
import { smoothScrollToId } from '../utils'

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-primary/20 px-6 py-10 text-center reveal">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 flex items-center justify-center gap-3 font-heading text-sm uppercase tracking-[2px]">
          <span className="site-logo-mark site-logo-mark--footer">
            <img
              src={SITE_PROFILE.avatarSrc}
              alt=""
              className="site-logo-mark__image"
              loading="lazy"
              decoding="async"
            />
          </span>
          <span>
            <span className="text-primary neon-glow">CHRISMAR</span>
            <span className="text-accent gold-glow">.DEV</span>
          </span>
        </div>

        <div className="mb-2 font-heading text-[0.5rem] uppercase tracking-[3px] text-muted-foreground">
          Developer / Creator / Gamer
        </div>

        <div className="mb-6 font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground/80">
          My dream and my purpose.
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-5">
          {NAV_LINKS.filter((link) => link.href !== '#hero').map((link) => (
            <button
              key={link.href}
              className="font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground transition hover:text-primary"
              type="button"
              onClick={() => smoothScrollToId(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="font-mono text-xs text-muted-foreground/70">
          Copyright {new Date().getFullYear()} {SITE_PROFILE.name}. All rights reserved.
        </div>

        <div className="mt-2 font-heading text-[0.45rem] uppercase tracking-[3px] text-muted-foreground/50">
          Game over? No. Game continues.
        </div>
      </div>
    </footer>
  )
}
