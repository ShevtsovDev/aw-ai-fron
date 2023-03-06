import styles from './Header.module.scss'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { headerDataset } from 'src/utils/datasets/header'
import { Paths } from 'src/utils/paths/paths'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { getBalance, getUser, logoutUser } from 'src/store/slices/userSlice/userSlice'
import { Logout } from 'src/components/common/Icon'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <div className={styles.header}>
      <div className={styles.userCard}>
        <UserPanel />
      </div>
      {/*{headerDataset[pathname as Paths]}*/}
    </div>
  )
}

export default Header


const UserPanel = () => {
  const user = useAppSelector(getUser)

  const dispatch = useAppDispatch()
  const logout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className={styles.user}>
      <div className={styles.user_name}>{user.user?.name}</div>
      <div className={styles.user_action} onClick={logout}>
        <Logout fill={"#de5151"} />
      </div>
    </div>
  )
}

