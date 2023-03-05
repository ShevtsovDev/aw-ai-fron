import styles from './InfoSmallBlock.module.scss'
import { ReactNode } from 'react'

type InfoSmallBlockType = {
  children: ReactNode,
}

const InfoSmallBlock = (props: InfoSmallBlockType) => {
  const { children } = props
  return <div className={styles.block}>{children}</div>
}

export default InfoSmallBlock
