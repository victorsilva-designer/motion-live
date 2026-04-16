import '../../tokens/sbk-playground.css'
import styles from './Live.module.css'

export type LiveProps = {
  /** Rótulo para leitores de ecrã */
  label?: string
  className?: string
  /**
   * Quando `false`, desliga ripple e respiração do núcleo.
   * `prefers-reduced-motion` também desliga animações.
   */
  animated?: boolean
}

export function Live({
  label = 'Live',
  className,
  animated = true,
}: LiveProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-motion={animated ? 'on' : 'off'}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className={styles.ripple} aria-hidden />
      <span className={styles.ripple} aria-hidden />
      <span className={styles.core} aria-hidden />
    </div>
  )
}
