import { Atom, Database, Globe, Laptop, Wrench } from 'lucide-react'

import { CORE_STACK_IDS, TECH_STACK_GROUPS, TECHNOLOGIES } from '../constants'
import type { Technology } from '../types'
import { PixelPanel, SectionHeading } from '@/shared/components'
import { TechnologyLogo } from './TechnologyLogo'

const SKILL_GROUP_ICONS = {
  languages: Globe,
  'frameworks-libraries': Atom,
  databases: Database,
  tools: Wrench,
} as const

const SQL_TECH_IDS = new Set(['mysql', 'postgresql'])
const NOSQL_TECH_IDS = new Set(['mongodb'])

export function Technologies() {
  const technologiesById = new Map(TECHNOLOGIES.map((technology) => [technology.id, technology]))
  const coreStack = CORE_STACK_IDS.map((technologyId) => technologiesById.get(technologyId)).filter(
    (technology): technology is Technology => technology !== undefined,
  )
  const resolveTechnologies = (technologyIds: string[]) =>
    technologyIds
      .map((technologyId) => technologiesById.get(technologyId))
      .filter((technology): technology is Technology => technology !== undefined)

  return (
    <section id="technologies" className="relative z-[1] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="[ Skill Tree ]"
          title="TECHNOLOGIES"
          description="Core stack up top, followed by the full technology lineup with labeled logo cards in each group."
        />

        <div className="mt-10">
          <div className="mb-8 flex items-center gap-3 border-b border-primary/15 pb-4">
            <Laptop aria-hidden className="text-primary" size={22} />
            <div className="font-heading text-[1.1rem] tracking-[1px] text-foreground">
              Core Stack
            </div>
          </div>

          <PixelPanel className="border-white/10 bg-white/[0.03] p-5 hover:shadow-[0_0_18px_rgba(255,255,255,0.06)]">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-5">
              {coreStack.map((technology, index) => (
                <TechnologyLogo key={technology.id} technology={technology} index={index} />
              ))}
            </div>
          </PixelPanel>

          <div className="mb-8 mt-12 flex items-center gap-3 border-b border-primary/15 pb-4 reveal reveal-delay-1">
            <Wrench aria-hidden className="text-accent" size={22} />
            <div className="font-heading text-[1.1rem] tracking-[1px] text-foreground">
              All Technologies
            </div>
          </div>

          <div className="grid gap-5">
            {TECH_STACK_GROUPS.map((group, index) => {
              const Icon = SKILL_GROUP_ICONS[group.id as keyof typeof SKILL_GROUP_ICONS] ?? Wrench
              const technologies = resolveTechnologies(group.technologyIds)
              const sqlTechnologies = technologies.filter((technology) => SQL_TECH_IDS.has(technology.id))
              const noSqlTechnologies = technologies.filter((technology) => NOSQL_TECH_IDS.has(technology.id))
              const defaultGridClassName =
                'grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'

              return (
                <PixelPanel
                  key={group.id}
                  className={`border-white/10 bg-white/[0.03] p-5 hover:shadow-[0_0_18px_rgba(255,255,255,0.06)] reveal reveal-delay-${((index + 1) % 4) + 1}`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon aria-hidden className="text-primary" size={18} />
                    <div className="font-heading text-[0.72rem] tracking-[2px] text-foreground">
                      {group.label}
                    </div>
                  </div>

                  {group.id === 'databases' ? (
                    <div className="grid gap-6">
                      <div>
                        <div className="mb-3 inline-flex border border-white/10 bg-white/5 px-3 py-1 font-heading text-[0.55rem] uppercase tracking-[2px] text-secondary">
                          No SQL
                        </div>
                        <div className={defaultGridClassName}>
                          {noSqlTechnologies.map((technology, technologyIndex) => (
                            <TechnologyLogo
                              key={technology.id}
                              technology={technology}
                              index={index + technologyIndex}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="mb-3 inline-flex border border-white/10 bg-white/5 px-3 py-1 font-heading text-[0.55rem] uppercase tracking-[2px] text-primary">
                          SQL
                        </div>
                        <div className={defaultGridClassName}>
                          {sqlTechnologies.map((technology, technologyIndex) => (
                            <TechnologyLogo
                              key={technology.id}
                              technology={technology}
                              index={index + technologyIndex + noSqlTechnologies.length}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={defaultGridClassName}>
                      {technologies.map((technology, technologyIndex) => (
                        <TechnologyLogo
                          key={technology.id}
                          technology={technology}
                          index={index + technologyIndex}
                        />
                      ))}
                    </div>
                  )}
                </PixelPanel>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
