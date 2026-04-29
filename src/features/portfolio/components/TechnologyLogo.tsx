import type { CSSProperties } from 'react'
import {
  siBootstrap,
  siCss,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siIntellijidea,
  siJavascript,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPostman,
  siReact,
  siRender,
  siShadcnui,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVscodium,
  siDigitalocean,
} from 'simple-icons'

import type { Technology, TechnologyIcon } from '../types'
import { cn } from '@/shared/utils'

const iconMap: Record<TechnologyIcon, { path: string; hex: string }> = {
  javascript: siJavascript,
  typescript: siTypescript,
  php: siPhp,
  html5: siHtml5,
  css3: siCss,
  springBoot: siSpringboot,
  react: siReact,
  next: siNextdotjs,
  vite: siVite,
  tailwind: siTailwindcss,
  shadcnui: siShadcnui,
  node: siNodedotjs,
  express: siExpress,
  mongodb: siMongodb,
  mysql: siMysql,
  postgresql: siPostgresql,
  docker: siDocker,
  bootstrap: siBootstrap,
  git: siGit,
  github: siGithub,
  intellijidea: siIntellijidea,
  postman: siPostman,
  vscode: siVscodium,
  vercel: siVercel,
  render: siRender,
  digitalocean: siDigitalocean,
}

interface TechnologyLogoProps {
  technology: Technology
  index: number
  compact?: boolean
  showLabel?: boolean
}

export function TechnologyLogo({
  technology,
  index,
  compact = false,
  showLabel = true,
}: TechnologyLogoProps) {
  const icon = iconMap[technology.icon]
  const iconColor = technology.color || `#${icon.hex}`

  return (
    <div
      className={cn(
        `tech-card reveal reveal-delay-${(index % 4) + 1}`,
        compact && 'tech-card--compact',
        !showLabel && 'tech-card--icon-only',
      )}
      title={technology.name}
    >
      <div className="tech-card__inner" style={{ '--tech-color': iconColor } as CSSProperties}>
        <div className="tech-card__glow" aria-hidden />
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="tech-card__logo"
          fill="currentColor"
          style={{ color: iconColor }}
        >
          <path d={icon.path} />
        </svg>
        {showLabel ? <div className="tech-card__label">{technology.name}</div> : null}
      </div>
    </div>
  )
}
