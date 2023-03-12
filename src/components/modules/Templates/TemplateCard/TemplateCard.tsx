import styles from './TemplateCard.module.scss'
import { FC, ReactNode } from 'react'
import {
  Amazon,
  Ozon,
  Wb,
  Telegram,
  FavoriteIcon,
  ReWriteIcon,
  NewsIcon,
  TikTok,
} from 'src/components/common/Icon'
import { TemplateCardFC } from 'src/components/modules/Templates/Template.types'
import { TemplateBadge } from 'src/components/modules'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'src/utils/paths/paths'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { getSchemas, setSelectedSchema } from 'src/store/slices/schemaSlice/schemaSlice'
import { statService } from 'src/api/services/statService/statService'

const associateIcon = {
  'ozon': Ozon,
  'amazon': Amazon,
  'wb': Wb,
  'telegram': Telegram,
  'rewrite': ReWriteIcon,
  'post': NewsIcon,
  'tiktok': TikTok,
}

const TemplateCard: FC<TemplateCardFC> = (props) => {
  const { template: { icon, id, isFavorite, title, subtitle, status } } = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const goTo = () => {
    statService.setStat(id)
    navigate(`/workspace?schema=${id}&type=${icon}`)
  }
  const Icon = associateIcon[icon]



  return (
    <div onClick={goTo} className={cn(styles.card, { [styles.card_favorite]: isFavorite })}>
      <div className={styles.head}>
        <div className={styles.head_icon}>
          <Icon />
        </div>
        <div className={styles.head_badges}>
          {status.map(s => <TemplateBadge badge={s} />)}
          {isFavorite && (
            <div className={styles.head_favorite}>
              <FavoriteIcon />
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_title}>
          {title}
        </div>
        <div className={styles.content_subtitle}>
          {subtitle}
        </div>
      </div>
    </div>
  )
}

export default TemplateCard