// Deprecated: removed after the HP and EXP bars were taken out of the live hero stats panel.
interface StatBarProps {
  label: string
  valueLabel: string
  value: number
  color?: string
}

export function StatBar({
  label,
  value,
  valueLabel,
  color = '#00FF88',
}: StatBarProps) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between font-heading text-[0.5rem] text-muted-foreground">
        <span>{label}</span>
        <span style={{ color }}>{valueLabel}</span>
      </div>
      <div className="stat-bar">
        <div
          className="stat-bar-fill"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  )
}
