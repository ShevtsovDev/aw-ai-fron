import { Layout } from 'src/components/modules'
import styles from './Payment.module.scss'

const Payment = () => {

  return (
    <Layout>
      <div className={styles.payment}>
        Свяжитесь с нами для пополнения баланса:
        <ul>
          <li>Telegram: <a href='https://t.me/JayPr0' target='_blank'>@JayPr0</a></li>
          <li>Email: <a href='mailto:info@selelrshub.ru'>info@selelrshub.ru</a></li>
        </ul>
      </div>
    </Layout>
  )
}

export default Payment