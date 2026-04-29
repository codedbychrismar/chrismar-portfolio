import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent'
}

const variantStyles = {
  primary: {
    '--game-btn-color': '#00FF88',
    '--game-btn-hover-foreground': '#0A0A0F',
  },
  accent: {
    '--game-btn-color': '#FFD700',
    '--game-btn-hover-foreground': '#0A0A0F',
  },
} as const

export function GameButton({
  children,
  className,
  style,
  variant = 'primary',
  ...props
}: GameButtonProps) {
  return (
    <button
      className={cn('game-btn inline-flex items-center justify-center gap-2', className)}
      style={{ ...variantStyles[variant], ...style }}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
