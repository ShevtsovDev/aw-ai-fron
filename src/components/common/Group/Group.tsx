import styles from './Group.module.scss'
import { CSSProperties, FC } from 'react'
import { GroupProps } from 'src/components/common/Group/Group.type'

const Group: FC<GroupProps> = props => {
  const { orientation, col, children, subtitle, title, numColumns } = props

  const containerStyles: CSSProperties = {
    gap: '10px',
    display: orientation === 'columns' ? 'grid' : 'flex',
    gridTemplateColumns: col ? `repeat(${col}, 1fr)` : undefined,
    flexDirection: orientation === 'row' || orientation === 'columns' ? 'row' : 'column',
    alignItems: orientation === 'row' ? 'center' : undefined,
    columnCount: orientation === 'columns' ? numColumns : undefined,
    columnGap: orientation === 'columns' ? '10px' : undefined,
    width: orientation === 'columns' ? '100%' : undefined,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        {title && <p className={styles.title}>{title}</p>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div style={containerStyles}>
        {children}
      </div>
    </div>
  )
}

export default Group
