import { Briefcase, CalendarDays } from 'lucide-react'

import { EXPERIENCE_ITEMS } from '../constants'
import { PixelPanel, SectionHeading } from '@/shared/components'

export function Experience() {
  return (
    <section id="experience" className="relative z-[1] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="[ Career Path ]"
          title="EXPERIENCE"
          description="My professional journey so far, from internship work to current product and client delivery."
        />

        <div className="grid gap-6">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <PixelPanel
              key={`${item.company}-${item.period}`}
              className={`p-6 reveal reveal-delay-${Math.min(index + 1, 4)}`}
              tone={item.tone}
            >
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="border border-accent/40 bg-accent/10 px-2 py-1 font-heading text-[0.5rem] uppercase tracking-[2px] text-accent">
                      {item.status}
                    </span>
                    <span className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-2 py-1 font-heading text-[0.5rem] uppercase tracking-[2px] text-primary">
                      <CalendarDays aria-hidden size={12} />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mb-2 font-heading text-[clamp(0.72rem,2vw,0.98rem)] uppercase leading-7 text-primary neon-glow">
                    {item.company}
                  </h3>

                  <div className="mb-4 inline-flex items-center gap-2 font-heading text-[0.58rem] uppercase tracking-[2px] text-secondary">
                    <Briefcase aria-hidden size={13} />
                    {item.role}
                  </div>

                  <p className="mb-4 font-mono text-sm leading-7 text-foreground/70">
                    &gt; {item.summary}
                  </p>

                  <div className="grid gap-2">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="border border-white/8 bg-white/5 px-3 py-2 font-mono text-xs leading-6 text-foreground/72"
                      >
                        &gt; {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PixelPanel>
          ))}
        </div>
      </div>
    </section>
  )
}
