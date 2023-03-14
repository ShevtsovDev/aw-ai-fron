import React, { useEffect } from 'react'
import styles from './App.module.scss'
import { Navigate, Route, RouteProps, Routes, useLocation, useNavigate } from 'react-router-dom'
import { RoutesType } from './types/system/routes'
import { Aside } from './components/modules'
import { Paths } from 'src/utils/paths/paths'
import { Header } from 'src/components/modules'
import { AuthSignIn, AuthSignUp, Dashboard, Home, Templates, Workspace } from 'src/components/pages'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { fetchSchemas } from 'src/store/slices/schemaSlice/schemaSlice'
import { getRoles, getToken, sighInByToken } from 'src/store/slices/userSlice/userSlice'
import { ToastContainer } from 'react-toastify'
import { History, Statistic, Users } from 'src/components/pages/Admin'
import { Roles } from 'src/types/system/roles'
import { setGlobalLoading } from 'src/store/slices/globalSlise/globalSlise'
import { GlobalLoader } from 'src/components/common'

function App() {
  const dispatch = useAppDispatch()
  const lsToken = localStorage.getItem('aw-ai-token')
  const reduxToken = useAppSelector(getToken)
  const roles = useAppSelector(getRoles)
  const { pathname } = useLocation()

  const navigate = useNavigate()
  if (!pathname.includes('auth')) {
    dispatch(setGlobalLoading({ status: true }))
  }
  useEffect(() => {
    if (!pathname.includes('auth')) {
      dispatch(fetchSchemas())
    }
  }, [])

  useEffect(() => {
    if (lsToken) {
      dispatch(sighInByToken({ token: lsToken }))
        .unwrap()
        .then(() => dispatch(setGlobalLoading({ status: false })))
    }
  }, [lsToken])

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        {!pathname.includes('auth') && <Aside />}
        <div className={styles.layout}>
          {!pathname.includes('auth') && <Header />}
          <Routes>
            {publicRoutes.map(r => {
              return <Route key={r.path} path={r.path} element={<r.Component />} />
            })}

            {privateRoutes.map(r => {
              if (!lsToken && !pathname.includes('auth')) {
                navigate('/auth/sign-in')
                dispatch(setGlobalLoading({ status: false }))
                return null
              }
              return <Route key={r.path} path={r.path} element={<r.Component />} />
            })}
            {roles?.some(i => i === Roles.admin) &&
              adminRoutes.map(r => {
                return <Route key={r.path} path={r.path} element={<r.Component />} />
              })}
          </Routes>
        </div>
        <GlobalLoader />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

const publicRoutes: RoutesType[] = [
  {
    path: Paths.Root,
    protected: false,
    Component: Home,
  },
  {
    path: Paths.AuthSignIn,
    protected: false,
    Component: AuthSignIn,
  },
  {
    path: Paths.AuthSignUp,
    protected: false,
    Component: AuthSignUp,
  },
]

const privateRoutes: RoutesType[] = [
  {
    path: Paths.Root,
    protected: true,
    Component: Workspace,
  },
  {
    path: Paths.Dashboard,
    protected: true,
    Component: Dashboard,
  },
  {
    path: Paths.Templates,
    protected: true,
    Component: Templates,
  },
  {
    path: Paths.Workspace,
    protected: true,
    Component: Workspace,
  },
  {
    path: Paths.AuthSignIn,
    protected: false,
    Component: AuthSignIn,
  },
  {
    path: Paths.AuthSignUp,
    protected: false,
    Component: AuthSignUp,
  },
]

const adminRoutes: RoutesType[] = [
  {
    path: Paths.Admin_Users,
    Component: Users,
    protected: true,
  },
  {
    path: Paths.Admin_Statistic,
    Component: Statistic,
    protected: true,
  },
  {
    path: Paths.Admin_History,
    Component: History,
    protected: true,
  },
]
