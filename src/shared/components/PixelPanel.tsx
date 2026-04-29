import type { HTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

interface PixelPanelProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'primary' | 'accent' | 'secondary'
}

const toneClasses = {
  primary: 'border-primary/40 bg-primary/5',
  accent: 'border-accent/40 bg-accent/5',
  secondary: 'border-secondary/40 bg-secondary/5',
}

export function PixelPanel({
  children,
  className,
  tone = 'primary',
  ...props
}: PixelPanelProps) {
  return (
    <div
      className={cn(
        'pixel-frame panel-surface transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,255,136,0.18)]',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
