import '../tokens/sbk-playground.css'
import styles from './LiveBolt.module.css'

function BoltIcon() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  )
}

export type LiveBoltProps = {
  label?: string
  className?: string
  animated?: boolean
}

export function LiveBolt({
  label = 'Ao vivo',
  className,
  animated = true,
}: LiveBoltProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-motion={animated ? 'on' : 'off'}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className={styles.face}>
        <BoltIcon />
      </span>
    </div>
  )
}
