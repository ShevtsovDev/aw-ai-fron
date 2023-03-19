import styles from './Dashboard.module.scss'
import { Layout } from 'src/components/modules'
import InfoSmallBlock from 'src/components/modules/InfoBlocks/InfoSmallBlock/InfoSmallBlock'
import { Link } from 'react-router-dom'
import { Paths } from 'src/utils/paths/paths'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import {
  fetchReferrals,
  fetchReferralsStatistic,
  fetchStatistic,
  getReferrals,
  getReferralsStatistic,
  getStatistic,
  getUser,
  retrieved,
  retrievedAll,
} from 'src/store/slices/userSlice/userSlice'
import LineChart from 'src/components/modules/Charts/LineChart/LineChart'
import { useEffect } from 'react'
import { convertNumber } from 'src/utils/helpers/convertNumber'
import { copyToClipboard } from 'src/utils/helpers/copyToClipboard'
import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { ReferralStatistic } from 'src/store/slices/userSlice/userSlice.types'

const requests = 1950
const rang = 10

const Dashboard = () => {
  const user = useAppSelector(getUser)
  const statistic = useAppSelector(getStatistic)
  const referrals = useAppSelector(getReferrals)
  const referralsStatistic = useAppSelector(getReferralsStatistic)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchStatistic())
    dispatch(fetchReferrals())
    dispatch(fetchReferralsStatistic())
  }, [])

  const getRetrieved = (id: number) => {
    dispatch(retrieved({ id }))
  }

  const getRetrievedAll = () => {
    dispatch(retrievedAll())
  }

  const columns: ColumnsType<ReferralStatistic> = [
    {
      title: 'Реферал',
      dataIndex: 'referralHistoryFrom',
      key: 'referralHistoryFrom',
      render: row => {
        return row.email
      },
    },
    {
      title: 'Количество символов',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Дата начисления на реферальный баланс',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: row => dayjs(row).format('DD-MM-YYYY hh:mm'),
    },
    {
      title: 'Статус',
      dataIndex: 'retrieved',
      key: 'retrieved',
      render: row => (row ? 'Получено' : 'Не получено'),
    },
    {
      title: 'Действия',
      render: row => {
        if (row.retrieved) {
          return <Button disabled>Получено</Button>
        }
        return <Button onClick={() => getRetrieved(row.id)}>Получить</Button>
      },
    },
  ]

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
                  {statistic.reduce((acc, cur) => acc + +cur.requestCount, 0) > 30 ? (
                    'Это больше, чем у 59% пользователей'
                  ) : (
                    <Link to={'/templates'}>Выбрать шаблон для генерации</Link>
                  )}
                </span>
              </div>
            </InfoSmallBlock>

            <InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Общее количество реферралов</span>
                <span className={styles.small_info_value}>{referrals.length}</span>
                <span className={styles.small_info_subtitle}>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault()
                      copyToClipboard(
                        `https://my-copy.io/auth/sign-up?ref=${user.user!.referral_code}`,
                        'Реферальная ссылка скопирована',
                      )
                    }}
                  >
                    Пригласить друзей
                  </a>
                </span>
              </div>
            </InfoSmallBlock>

            <InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Реферальный баланс</span>
                <span className={styles.small_info_value}>
                  {referralsStatistic
                    .filter(rs => !rs.retrieved)
                    .reduce((acc, cur) => acc + cur.amount, 0)}
                </span>
                <span className={styles.small_info_subtitle}>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault()
                      getRetrievedAll()
                    }}
                  >
                    Получить все
                  </a>
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

      <div className={styles.referral}>
        <div className={styles.referral_title}>Реферальная программа</div>
        <div
          className={styles.referral_code}
          onClick={() =>
            copyToClipboard(
              `https://my-copy.io/auth/sign-up?ref=${user.user!.referral_code}`,
              'Реферальная ссылка скопирована',
            )
          }
        >
          Нажмите для получения реферальной ссылки
        </div>

        <div className={styles.referral_table}>
          <Table
            locale={{ emptyText: 'Тут пока пусто' }}
            pagination={false}
            dataSource={referralsStatistic}
            columns={columns}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard


