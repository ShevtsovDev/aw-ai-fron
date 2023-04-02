import styles from './Aside.module.scss'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
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
import React, { useState } from 'react'
import { useAppSelector } from 'src/store/store'
import { getRoles, getUser } from 'src/store/slices/userSlice/userSlice'
import { Roles } from 'src/types/system/roles'
import logo from 'src/assets/images/logo.svg'
import { Button, Divider } from 'antd'
import giftbox from 'src/assets/images/giftbox.png'
import { copyToClipboard } from 'src/utils/helpers/copyToClipboard'
import JSX = jsx.JSX

const Aside = () => {
  const { pathname } = useLocation()

  const [open, setOpen] = useState(true)

  const [params, _] = useSearchParams()
  const schemaId = params.get('schema')

  const roles = useAppSelector(getRoles)

  const publicButton = buttons.filter(b => !b.protected)
  const privateButton = buttons.filter(b => b.protected)

  const user = useAppSelector(getUser)

  const openAside = () => {
    setOpen(true)
  }
  const closeAside = () => {
    setOpen(false)
  }

  const toggleAside = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className={cn(styles.aside, {
        [styles.aside_open]: open
      })}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <div className={cn(styles.logo_text, {
            [styles.logo_text_open]: open
          })}>My Copy AI</div>
        </div>
        <div onClick={toggleAside}>
          <TemplateIcon />
        </div>
        <div className={styles.buttons}>
          {publicButton.map(b => {
            return (
              <Link
                onClick={e => {
                  closeAside()
                  if (b.path === '/workspace' && !schemaId) {
                    e.preventDefault()
                  }
                }}
                className={cn(styles.button, {
                  [styles.button_active]: pathname === b.path,
                  [styles.button_disabled]: b.path === '/workspace' && !schemaId,
                  [styles.button_disabled_stroke]:
                  b.type === 'stroke' && b.path === '/workspace' && !schemaId,
                  [styles.button_disabled_fill]:
                  b.type === 'fill' && b.path === '/workspace' && !schemaId,
                  [styles.button_active_stroke]: pathname === b.path && b.type === 'stroke',
                  [styles.button_active_fill]: pathname === b.path && b.type === 'fill',
                })}
                to={b.path}

              >
                <b.Icon />
                <div className={cn(styles.button_text, {
                  [styles.button_text_open]: open
                })}>{b.text}</div>
              </Link>
            )
          })}
          {roles?.some(i => i === Roles.admin) && (
            <>
              <Divider>Админ</Divider>
            </>
          )}
          {privateButton.map(b => {
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
                </Link>
              )
            }
          })}

          <div className={styles.banner}>
            <div className={styles.banner_image}>
              <img src={giftbox} alt="" />
            </div>
            <div className={styles.banner_title}>Бонусные символы</div>
            <div className={styles.banner_text}>
              Приглашай друзей и получай за них бесплатные символы
            </div>
            <div className={styles.banner_actions}>
              <Button
                onClick={() =>
                  copyToClipboard(
                    `https://my-copy.io/auth/sign-up?ref=${user.user!.referral_code}`,
                    'Реферальная ссылка скопирована',
                  )
                }
              >
                Пригласить
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.overlay, {
        [styles.overlay_open]: open
      })} onClick={closeAside}></div>
    </>
  )
}

export default Aside

const buttons: ButtonType[] = [
  {
    Icon: HomeIcon,
    path: Paths.Root,
    type: 'stroke',
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
    Icon: TemplateIcon,
    path: Paths.ChatList,
    type: 'stroke',
    text: 'Чаты',
  },
  {
    Icon: WorkspaceIcon,
    path: Paths.Workspace,
    type: 'stroke',
    text: 'Рабочая зона',
  },
  {
    Icon: AdminHistoryIcon,
    path: Paths.Editor,
    type: 'fill',
    text: 'Редактор',
  },
  {
    Icon: AdminUsersIcon,
    path: Paths.Admin_Users,
    type: 'fill',
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
  {
    Icon: AdminHistoryIcon,
    path: Paths.Admin_Services_Control,
    type: 'fill',
    protected: true,
    text: 'Управление услугами',
  },
]

type ButtonType = {
  Icon: (props: IconProps) => JSX.Element
  path: Paths
  type: 'stroke' | 'fill'
  protected?: boolean
  text: string
}
