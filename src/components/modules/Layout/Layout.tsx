import styles from './Layout.module.scss'
import { ReactNode } from 'react'


type LayoutType = {
  children: ReactNode
}
const Layout = (props: LayoutType) => {
  const { children } = props
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}

export default Layout