import type { ReactNode } from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  action,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  action?: ReactNode
}) {
  const centered = align === 'center'

  return (
    <div
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${
        action ? 'flex flex-col gap-6 md:flex-row md:items-end md:justify-between' : ''
      }`}
    >
      <div className={action ? 'max-w-2xl' : ''}>
        <span className={`eyebrow ${light ? '!text-brand-400' : ''}`}>{eyebrow}</span>
        <h2
          className={`heading-display mt-4 text-4xl font-bold sm:text-5xl lg:text-[3.4rem] ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 max-w-2xl text-[0.95rem] leading-relaxed ${
              centered ? 'mx-auto' : ''
            } ${light ? 'text-steel-300' : 'text-steel-500'}`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
