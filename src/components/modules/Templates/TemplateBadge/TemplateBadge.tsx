import { FC } from 'react'
import styles from './TemplateBadge.module.scss'
import { TemplateBadgeFC } from 'src/components/modules/Templates/Template.types'
import cn from 'classnames'

const TemplateBadge: FC<TemplateBadgeFC> = props => {
  return <div
    className={cn(styles.badge, {
      [styles.badge_alpha]: props.badge.name === 'alpha',
      [styles.badge_beta]: props.badge.name === 'beta',
      [styles.badge_stable]: props.badge.name === 'stable',
    })}
  >
    {props.badge.name}
  </div>
}

export default TemplateBadge
