import { ExternalLink } from 'lucide-react'
import type { MouseEvent } from 'react'

import { PROJECTS } from '../constants'
import { smoothScrollToId } from '../utils'
import type { Project } from '../types'
import { PixelPanel, SectionHeading } from '@/shared/components'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isSectionLink = project.href.startsWith('#')

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isSectionLink) {
      event.preventDefault()
      smoothScrollToId(project.href)
    }
  }

  return (
    <PixelPanel
      className={`group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,136,0.22)] reveal reveal-delay-${Math.min(index + 1, 4)}`}
      tone={project.tone}
    >
      <div className="flex flex-col flex-wrap items-start justify-between gap-5 md:flex-row">
        <div className="min-w-0 w-full flex-1 md:w-auto">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="border border-accent/40 bg-accent/10 px-2 py-1 font-heading text-[0.5rem] uppercase tracking-[2px] text-accent">
              {project.level}
            </span>
            <span className="border border-primary/40 bg-primary/10 px-2 py-1 font-heading text-[0.5rem] uppercase tracking-[2px] text-primary">
              {project.status}
            </span>
            <span className="border border-secondary/40 bg-secondary/10 px-2 py-1 font-heading text-[0.5rem] uppercase tracking-[2px] text-secondary">
              {project.difficulty}
            </span>
          </div>

          <h3 className="mb-3 max-w-full break-words font-heading text-[clamp(0.7rem,2vw,0.95rem)] uppercase leading-7 text-primary neon-glow">
            {project.name}
          </h3>

          <p className="mb-4 max-w-full break-words font-mono text-sm leading-7 text-foreground/65">
            &gt; {project.description}
          </p>

          {project.highlights?.length ? (
            <div className="mb-4 grid gap-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border border-white/8 bg-white/5 px-3 py-2 font-mono text-xs leading-6 text-foreground/72"
                >
                  &gt; {highlight}
                </div>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-white/10 bg-white/5 px-3 py-1 font-heading text-[0.5rem] uppercase tracking-[1px] text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          className="game-btn inline-flex w-full max-w-full items-center justify-center gap-2 self-start text-center text-[0.55rem] sm:w-auto md:ml-auto md:shrink-0"
          href={project.href}
          target={isSectionLink ? undefined : '_blank'}
          rel={isSectionLink ? undefined : 'noopener noreferrer'}
          onClick={handleClick}
        >
          {project.ctaLabel}
          <ExternalLink aria-hidden size={13} />
        </a>
      </div>
    </PixelPanel>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative z-[1] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="[ Quest Log ]"
          title="PROJECTS"
          description="Selected work from my coding journey, with more builds being refined for release."
        />

        <div className="grid gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <PixelPanel className="mt-8 p-6 text-center reveal">
          <div className="font-heading text-[0.65rem] uppercase tracking-[2px] text-muted-foreground">
            More quests loading...
          </div>
          <div className="mt-2 font-mono text-xs text-muted-foreground">
            &gt; New projects are being built and polished.
          </div>
        </PixelPanel>
      </div>
    </section>
  )
}
