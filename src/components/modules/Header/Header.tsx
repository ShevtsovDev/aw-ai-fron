import styles from './Header.module.scss'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { headerDataset } from 'src/utils/datasets/header'
import { Paths } from 'src/utils/paths/paths'
import { useAppSelector } from 'src/store/store'
import { getBalance } from 'src/store/slices/userSlice/userSlice'

const Header = () => {
  const { pathname } = useLocation()

  const balance = useAppSelector(getBalance)
  console.log(balance)
  return (
    <div className={styles.header}>
      <div>Header</div>
      {/*{headerDataset[pathname as Paths]}*/}
    </div>
  )
}

export default Header

