import styles from './Home.module.scss'
import { Layout } from 'src/components/modules'
import step1 from 'src/assets/images/guide/steep1.png'
import step2 from 'src/assets/images/guide/step2.png'
import step3 from 'src/assets/images/guide/step3.png'
import step4 from 'src/assets/images/guide/step4.png'
import load from 'src/assets/images/guide/load.png'
import step6 from 'src/assets/images/guide/steep6.png'
import { useNavigate } from 'react-router-dom'

import img1 from 'src/assets/images/1.png'
import img2 from 'src/assets/images/2.png'
import img4 from 'src/assets/images/4.png'
import img6 from 'src/assets/images/6.png'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.block} >
          <div className={styles.block_title} >Копирайтер нового поколения My Copy!</div>
          <div className={styles.block_subtitle}>17-03-2023</div>
          <div className={styles.divider}/>
          <div className={styles.text} style={{marginTop: '20px', gap: '20px'}}>
            <p className={styles.text_title}>В сотрудничестве с лучшей площадкой для селлеров - <a href='https://sellershub.ru/' target='_blank'>Sellers Hub</a></p>
            <p>Что уже успели заметить пользователи на нашем сервисе?</p>

            <ul>
              <li>
                <div className={styles.img}><img src={img1} alt='' /></div>
                <span>В 93% случаев My Copy пишет конечный текст, не требующий правок, тогда как на других сервисах релевантно лишь каждое третье описание.</span>
              </li>
              <li>
                <div className={styles.img}><img src={img2} alt='' /></div>
                <span>Самообучаемость на базе на 30.000+ товаров WB позволяет сервису отлично анализировать и расставлять в тексте заданные вами ключи. Поэтому он улучшает показатели SEO и полностью соответствует целевой аудитории.</span>
              </li>
              <li>
                <div className={styles.img}><img src={img6} alt='' /></div>
                <span>Наш сервис разработан для экономии ресурсов: благодаря его интуитивному интерфейсу и мгновенным результатам, вам не придется тратить время на поиск информации.</span>
              </li>
              <li>
                <div className={styles.img}><img src={img4} alt='' /></div>
                <span>Наш сервис не требует использования VPN, и на территории СНГ не возникнет проблем с регистрацией. Более того, доступны различные способы оплаты: через Юмани, Тинькофф или Сбер.</span>
              </li>
            </ul>

            <p>Воспользуйтесь АИ-сервисом My Copy уже сегодня и оцените его уникальные преимущества! 🚀</p>

            <p>Наслаждайтесь жизнью уже сейчас, а мы возьмем рутину на себя 🥰</p>
          </div>

        </div>


        <div className={styles.block}>
          <div className={styles.block_title}>Краткое руководство по использованию сервисов My Copy</div>
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
              <div className={styles.text_content}>
                <img src={step6} alt='' />
              </div>
            </div>

            <div>
              <div className={styles.text_title}>
                <div>Шаг 6. А теперь сами попробуйте наши сервисы</div>
              </div>
              <div className={styles.text_content}>
                <div onClick={() => navigate('/templates')} className={styles.button}>Выбрать шаблон</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
