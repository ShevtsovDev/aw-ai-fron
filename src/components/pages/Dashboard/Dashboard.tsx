import styles from './Dashboard.module.scss'
import { Layout } from 'src/components/modules'
import money from 'src/assets/images/infoBlock/money.png'
import InfoSmallBlock from 'src/components/modules/InfoBlocks/InfoSmallBlock/InfoSmallBlock'
import { TokenIcon } from 'src/components/common/Icon'
import { Link } from 'react-router-dom'
import { Paths } from 'src/utils/paths/paths'
import { useAppSelector } from 'src/store/store'
import { getBalance, getUser } from 'src/store/slices/userSlice/userSlice'


const requests = 1950
const rang = 10

const Dashboard = () => {
  const user = useAppSelector(getUser)

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.greeting}>Hello, {user.user?.name}</div>

          <div className={styles.small_info}>
            <InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Ваш баланс</span>
                <span className={styles.small_info_value}>{user?.balance} <TokenIcon width={36} height={36} /></span>
                <span className={styles.small_info_subtitle}>
                <Link to={Paths.Payment}>Получить токены</Link>
              </span>
                <img className={styles.small_info_img} src={money} alt='' />
              </div>
            </InfoSmallBlock>

            <InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Количество запросов</span>
                <span className={styles.small_info_value}>{requests} <TokenIcon width={36} height={36} /></span>
                <span className={styles.small_info_subtitle}>
                <Link to={Paths.Payment}>Посмотреть статистику</Link>
              </span>
                <img className={styles.small_info_img} src={money} alt='' />
              </div>
            </InfoSmallBlock>

            <InfoSmallBlock>
              <div className={styles.block}>
                <span className={styles.small_info_title}>Ваш ранг</span>
                <span className={styles.small_info_value}>{rang} <TokenIcon width={36} height={36} /></span>
                <span className={styles.small_info_subtitle}>
              </span>
                <img className={styles.small_info_img} src={money} alt='' />
              </div>
            </InfoSmallBlock>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </Layout>
  )
}

export default Dashboard
