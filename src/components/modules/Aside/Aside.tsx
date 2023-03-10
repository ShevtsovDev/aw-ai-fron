import styles from './Aside.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { jsx } from '@emotion/react'
import cn from 'classnames'
import { IconProps } from 'src/components/common/Icon/IconProps'
import {
  AdminHistoryIcon,
  AdminStatisticIcon,
  AdminUsersIcon,
  HomeIcon,
  LinerArrow,
  TemplateIcon,
  WorkspaceIcon,
} from 'src/components/common/Icon'
import { Paths } from 'src/utils/paths/paths'
import React, { useEffect, useRef, useState } from 'react'
import JSX = jsx.JSX
import { useAppSelector } from 'src/store/store'
import { getRoles } from 'src/store/slices/userSlice/userSlice'
import { Roles } from 'src/types/system/roles'

const Aside = () => {
  const { pathname } = useLocation()

  const parent = useRef<HTMLDivElement>(null)

  const roles = useAppSelector(getRoles)

  const [transformTo, setTransformTo] = useState(0)

  useEffect(() => {
    if (parent.current) {
      const el = parent.current.querySelector(`[href='${pathname}']`);
      if (el) {
        const parentY = parent.current!.getBoundingClientRect().y
        const elementY = el.getBoundingClientRect().y
        setTransformTo(elementY - parentY - 5)
      }
    }
  }, [pathname])

  return (
    <div className={styles.aside}>
      <div className={styles.logo}>A-AI</div>

      <div ref={parent} className={styles.buttons}>
        {buttons.map(b => {
          if (b.protected) {
            if (roles?.some(i => i === Roles.admin)) {
              return (
                <Link className={cn(styles.button, {
                    [styles.button_active]: pathname === b.path,
                    [styles.button_active_stroke]: pathname === b.path && b.type === 'stroke',
                    [styles.button_active_fill]: pathname === b.path && b.type === 'fill',
                  },
                )}
                      to={b.path}
                >
                  <b.Icon />
                  <div className={styles.button_crutch}/>
                </Link>
              )
            }
          } else {
            return (
              <Link className={cn(styles.button, {
                  [styles.button_active]: pathname === b.path,
                  [styles.button_active_stroke]: pathname === b.path && b.type === 'stroke',
                  [styles.button_active_fill]: pathname === b.path && b.type === 'fill',
                },
              )}
                    to={b.path}
              >
                <b.Icon />
                <div className={styles.button_crutch}/>
              </Link>
            )
          }

        })}
        <div className={styles.marker} style={{transform: `translateY(${transformTo}px)`}}>

        </div>
      </div>
    </div>
  )
}

export default Aside

const buttons: ButtonType[] = [
  {
    Icon: HomeIcon,
    path: Paths.Root,
    type: 'fill'
  },
  {
    Icon: LinerArrow,
    path: Paths.Dashboard,
    type: 'stroke',
  },
  {
    Icon: TemplateIcon,
    path: Paths.Templates,
    type: 'stroke'
  },
  {
    Icon: WorkspaceIcon,
    path: Paths.Workspace,
    type: 'stroke'
  },
  {
    Icon: AdminUsersIcon,
    path: Paths.Admin_Users,
    type: 'stroke',
    protected: true,
  },
  {
    Icon: AdminStatisticIcon,
    path: Paths.Admin_Statistic,
    type: 'stroke',
    protected: true,
  },
  {
    Icon: AdminHistoryIcon,
    path: Paths.Admin_History,
    type: 'fill',
    protected: true,
  },

]

type ButtonType = {
  Icon: (props: IconProps) => JSX.Element,
  path: Paths,
  type: 'stroke' | 'fill',
  protected?: boolean,
}