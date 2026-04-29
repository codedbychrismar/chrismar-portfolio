interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 reveal">
      <div className="mb-2 font-heading text-[0.55rem] uppercase tracking-[4px] text-secondary">
        {eyebrow}
      </div>
      <h2 className="section-title cursor-blink">{title}</h2>
      <div className="mt-3 h-0.5 w-16 bg-primary shadow-[0_0_10px_#00FF88]" />
      {description ? (
        <p className="mt-3 max-w-2xl font-mono text-sm leading-7 text-muted-foreground">
          &gt; {description}
        </p>
      ) : null}
    </div>
  )
}
