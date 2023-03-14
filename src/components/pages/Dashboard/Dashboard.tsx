import styles from './Dashboard.module.scss'
import { Layout } from 'src/components/modules'
import money from 'src/assets/images/infoBlock/money.png'
import InfoSmallBlock from 'src/components/modules/InfoBlocks/InfoSmallBlock/InfoSmallBlock'
import { TokenIcon } from 'src/components/common/Icon'
import { Link } from 'react-router-dom'
import { Paths } from 'src/utils/paths/paths'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import {
  fetchStatistic,
  getBalance,
  getStatistic,
  getUser,
} from 'src/store/slices/userSlice/userSlice'
import LineChart from 'src/components/modules/Charts/LineChart/LineChart'
import { useEffect } from 'react'
import { convertNumber } from 'src/utils/helpers/convertNumber'

const requests = 1950
const rang = 10

const Dashboard = () => {
  const user = useAppSelector(getUser)
  const statistic = useAppSelector(getStatistic)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchStatistic())
  }, [])

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.small_info}>
            <InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Ваш баланс</span>
                <span className={styles.small_info_value}>
                  {user?.balance && convertNumber(user?.balance)} символов
                </span>
                <span className={styles.small_info_subtitle}>
                  <Link to={Paths.Payment}>Пополнить баланс</Link>
                </span>
              </div>
            </InfoSmallBlock>

            <InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Общее количество генераций</span>
                <span className={styles.small_info_value}>
                  {convertNumber(statistic.reduce((acc, cur) => acc + +cur.requestCount, 0))}
                </span>
                <span className={styles.small_info_subtitle}>
                  {statistic.reduce((acc, cur) => acc + +cur.requestCount, 0) > 30 ? 'Это больше, чем у 59% пользователей' : <Link to={'/templates'}>Выбрать шаблон для генерации</Link>}

                </span>
              </div>
            </InfoSmallBlock>

            {/*<InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Ваш ранг</span>
                <span className={styles.small_info_value}>{rang} <TokenIcon width={36} height={36} /></span>
                <span className={styles.small_info_subtitle}>
              </span>
                <img className={styles.small_info_img} src={money} alt='' />
              </div>
            </InfoSmallBlock>*/}
          </div>
        </div>
        {/*<div className={styles.right}></div>*/}
      </div>
      <div className={styles.statistic}>
        <LineChart statistic={statistic} />
      </div>
    </Layout>
  )
}

export default Dashboard
