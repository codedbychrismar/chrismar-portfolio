import { ArrowDown, Send, Terminal } from 'lucide-react'

import { PROFILE_STATS, PROFILE_TRAITS, SITE_PROFILE } from '../constants'
import { useTypewriter } from '../hooks'
import { smoothScrollToId } from '../utils'
import { GameButton, PixelPanel } from '@/shared/components'

export function Hero() {
  const typedName = useTypewriter(SITE_PROFILE.name.toUpperCase())

  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 text-center reveal">
          <span className="font-heading text-[0.6rem] uppercase tracking-[4px] text-secondary">
            [ New Game Started ]
          </span>
        </div>

        <PixelPanel className="p-6 shadow-card md:p-12 reveal reveal-delay-1">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-3 font-heading text-[0.6rem] uppercase tracking-[3px] text-accent">
                Player 01
              </div>

              <h1 className="mb-3 min-h-[4.5rem] font-heading text-[clamp(0.95rem,3vw,1.65rem)] leading-[1.7] text-primary neon-glow">
                <span>{typedName}</span>
                <span className="cursor-blink" aria-hidden />
              </h1>

              <div className="mb-6 font-heading text-[0.65rem] uppercase tracking-[2px] text-secondary">
                {SITE_PROFILE.role}
              </div>

              <p className="mb-8 max-w-xl font-mono text-sm leading-8 text-foreground/75">
                &gt; I build functional, intuitive, and user-friendly web experiences
                using React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Node.js, and
                Express.js.
              </p>

              <div className="flex flex-wrap gap-4">
                <GameButton onClick={() => smoothScrollToId('#projects')}>
                  <Terminal aria-hidden className="mr-2 inline-block" size={14} />
                  View Projects
                </GameButton>
                <GameButton variant="accent" onClick={() => smoothScrollToId('#contact')}>
                  <Send aria-hidden className="mr-2 inline-block" size={14} />
                  Send Message
                </GameButton>
              </div>
            </div>

            <div className="grid gap-4">
              <PixelPanel className="p-6 reveal reveal-delay-2" tone="secondary">
                <div className="mb-5 text-center font-heading text-[0.6rem] uppercase tracking-[3px] text-accent">
                  Character Stats
                </div>

                <div className="mb-6 grid gap-6 md:grid-cols-[0.82fr_1fr] md:items-start">
                  <div>
                    <div className="mb-3 text-center font-heading text-[0.55rem] uppercase tracking-[3px] text-accent">
                      [ Player Portrait ]
                    </div>
                    <div className="hero-avatar-shell">
                      <img
                        src={SITE_PROFILE.avatarSrc}
                        alt={`${SITE_PROFILE.name} pixel portrait`}
                        className="hero-avatar-image"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {PROFILE_STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="hero-stat-row flex items-center justify-between border-b border-primary/10 pb-2"
                      >
                        <span className="font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                          {stat.label}
                        </span>
                        <div className="text-right">
                          <div className="font-heading text-[0.6rem] text-primary">
                            {stat.value}
                          </div>
                          <div className="font-mono text-[0.65rem] text-muted-foreground">
                            {stat.subtext}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-2 font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                    Traits
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PROFILE_TRAITS.map((trait) => (
                      <span
                        key={trait}
                        className="border border-secondary/50 px-2 py-1 font-heading text-[0.48rem] uppercase tracking-[1px] text-secondary transition duration-300 hover:-translate-y-1 hover:bg-secondary/10"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </PixelPanel>
            </div>
          </div>
        </PixelPanel>

        <div className="mt-12 text-center reveal reveal-delay-3">
          <div className="mb-2 font-heading text-[0.5rem] uppercase tracking-[3px] text-muted-foreground">
            Scroll to explore
          </div>
          <ArrowDown
            aria-hidden
            className="mx-auto animate-bounce text-primary"
            size={20}
          />
        </div>
      </div>
    </section>
  )
}
