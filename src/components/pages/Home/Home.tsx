import styles from './Home.module.scss'
import { Layout } from 'src/components/modules'
import money from 'src/assets/images/infoBlock/money.png'
import InfoSmallBlock from 'src/components/modules/InfoBlocks/InfoSmallBlock/InfoSmallBlock'
import { TokenIcon } from 'src/components/common/Icon'
import { Link } from 'react-router-dom'
import { Paths } from 'src/utils/paths/paths'
import step1 from 'src/assets/images/guide/steep1.png'
import step2 from 'src/assets/images/guide/step2.png'
import step3 from 'src/assets/images/guide/step3.png'
import step4 from 'src/assets/images/guide/step4.png'
import load from 'src/assets/images/guide/load.png'
import step5 from 'src/assets/images/guide/steep5.png'
import step6 from 'src/assets/images/guide/steep6.png'

const balance = 2000
const requests = 1950
const rang = 10

const Home = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.block_title}>Краткое руководство по использованию сервисов Aw-AI</div>
          <div className={styles.block_subtitle}>08-03-2023</div>
          <div className={styles.divider}/>

          <div className={styles.text}>
            <div>
              <div className={styles.text_title}>
                <div>Шаг 1. Перейдите в раздел шаблонов</div>
              </div>
              <div className={styles.text_content}>
                <img src={step1} alt='' />
              </div>
            </div>

            <div>
              <div className={styles.text_title}>
                <div>Шаг 2. Выберите подходящий шаблон</div>
              </div>
              <div className={styles.text_content}>
                <img src={step2} alt='' />
              </div>
            </div>

            <div>
              <div className={styles.text_title}>
                <div>Шаг 3. Мы для примера взяли "Написание статей"</div>
              </div>
              <div className={styles.text_subtitle}>
                <p>Перейдя в него, вы увидите следующее окно. Оно довольно простое.</p>
                <p>Заполняйте поля, которые на скриншоте отмечены стрелочкой и жмите кнопку отправить!</p>
              </div>
              <div className={styles.text_content}>
                <img src={step3} alt='' />
              </div>
            </div>


            <div>
              <div className={styles.text_title}>
                <div>Вот наш пример!</div>
              </div>
              <div className={styles.text_content}>
                <img src={step4} alt='' />
              </div>
            </div>

            <div>
              <div className={styles.text_title}>
                <div>Шаг 4. Ожидание...</div>
              </div>
              <div className={styles.text_subtitle}>
                <p>Не спишите идти заваривать чай, результат скоро будет на месте!</p>
              </div>
              <div className={styles.text_content}>
                <img src={load} alt='' />
              </div>
            </div>

            <div>
              <div className={styles.text_title}>
                <div>Шаг 5. Радуемся и живем полной жизнью, а рутину на себя возьмет Aw-AI</div>
              </div>
              <div className={styles.text_subtitle}>
                <p>Не спишите идти заваривать чай, результат скоро будет на месте!</p>
              </div>
              <div className={styles.text_content}>
                <img src={step6} alt='' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
