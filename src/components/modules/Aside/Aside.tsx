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
import { getSelectedSchema } from 'src/store/slices/schemaSlice/schemaSlice'

const Aside = () => {
  const { pathname } = useLocation()

  const parent = useRef<HTMLDivElement>(null)
  const selectedTemplate = useAppSelector(getSelectedSchema)
  console.log(selectedTemplate)
  const roles = useAppSelector(getRoles)

  const [transformTo, setTransformTo] = useState(0)

  useEffect(() => {
    if (parent.current) {
      const el = parent.current.querySelector(`[href='${pathname}']`)
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
                <Link
                  className={cn(styles.button, {
                    [styles.button_active]: pathname === b.path,
                    [styles.button_active_stroke]: pathname === b.path && b.type === 'stroke',
                    [styles.button_active_fill]: pathname === b.path && b.type === 'fill',
                  })}
                  to={b.path}
                >
                  <b.Icon />
                  {b.text}
                  <div className={styles.button_crutch} />
                </Link>
              )
            }
          } else {
            return (
              <Link
                onClick={(e) => b.path === '/workspace' && !selectedTemplate && e.preventDefault()}
                className={cn(styles.button, {
                  [styles.button_active]: pathname === b.path,
                  [styles.button_disabled]: b.path === '/workspace' && !selectedTemplate,
                  [styles.button_disabled_stroke]: b.type === 'stroke' && b.path === '/workspace' && !selectedTemplate,
                  [styles.button_disabled_fill]: b.type === 'fill' && b.path === '/workspace' && !selectedTemplate,
                  [styles.button_active_stroke]: pathname === b.path && b.type === 'stroke',
                  [styles.button_active_fill]: pathname === b.path && b.type === 'fill',
                })}
                to={b.path}
              >
                <b.Icon />
                {b.text}
                <div className={styles.button_crutch} />
              </Link>
            )
          }
        })}
        <div className={styles.marker} style={{ transform: `translateY(${transformTo}px)` }}></div>
      </div>
    </div>
  )
}

export default Aside

const buttons: ButtonType[] = [
  {
    Icon: HomeIcon,
    path: Paths.Root,
    type: 'fill',
    text: 'Главная',
  },
  {
    Icon: LinerArrow,
    path: Paths.Dashboard,
    type: 'stroke',
    text: 'Статистика',
  },
  {
    Icon: TemplateIcon,
    path: Paths.Templates,
    type: 'stroke',
    text: 'Шаблоны',
  },
  {
    Icon: WorkspaceIcon,
    path: Paths.Workspace,
    type: 'stroke',
    text: 'Рабочая зона',
  },
  {
    Icon: AdminUsersIcon,
    path: Paths.Admin_Users,
    type: 'stroke',
    protected: true,
    text: 'Пользователи',
  },
  {
    Icon: AdminStatisticIcon,
    path: Paths.Admin_Statistic,
    type: 'stroke',
    protected: true,
    text: 'Статистика',
  },
  {
    Icon: AdminHistoryIcon,
    path: Paths.Admin_History,
    type: 'fill',
    protected: true,
    text: 'История',
  },
]

type ButtonType = {
  Icon: (props: IconProps) => JSX.Element
  path: Paths
  type: 'stroke' | 'fill'
  protected?: boolean
  text: string
}
