import { ABOUT_CARDS, SITE_PROFILE } from '../constants'
import { PixelPanel, SectionHeading } from '@/shared/components'

export function About() {
  return (
    <section id="about" className="relative z-[1] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="[ Character Lore ]" title="ABOUT_ME" />

        <div className="grid gap-6 md:grid-cols-3">
          <PixelPanel className="p-6 md:col-span-2 reveal reveal-delay-1">
            <div className="mb-4 font-heading text-[0.55rem] uppercase tracking-[3px] text-accent">
              [ Player Biography ]
            </div>
            <div className="grid gap-4 font-mono text-sm leading-8 text-foreground/75">
              <p>
                &gt; I’m a BSIT graduate from{' '}
                <span className="text-primary">{SITE_PROFILE.school}</span>, currently
                working as a Junior Developer and driven by a strong passion for
                technology, with the goal of becoming a full-stack web developer.
              </p>
              <p>
                &gt; I create websites that are{' '}
                <span className="text-primary">functional</span>,{' '}
                <span className="text-accent">intuitive</span>, and{' '}
                <span className="text-secondary">user-friendly</span>. My current stack
                includes React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Node.js,
                and Express.js.
              </p>
              <p>
                &gt; Outside of development, I unwind by gaming, training, learning new
                skills, and watching anime. I’m also constantly exploring new
                technologies, especially in AI, and often enjoy vibe coding and
                experimenting with creative ideas.
              </p>
            </div>
          </PixelPanel>

          <div className="grid gap-4">
            {ABOUT_CARDS.map((item, index) => (
              <PixelPanel
                key={item.label}
                className={`p-4 reveal reveal-delay-${index + 2}`}
                tone={item.tone}
              >
                <div className="mb-2 font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                  {item.label}
                </div>
                <div className="font-heading text-[0.65rem] text-primary">
                  {item.value}
                </div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  {item.subtext}
                </div>
              </PixelPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
