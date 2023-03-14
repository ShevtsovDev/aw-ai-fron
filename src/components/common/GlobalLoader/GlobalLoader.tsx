import { useAppSelector } from 'src/store/store'
import { getGlobalLoading } from 'src/store/slices/globalSlise/globalSlise'
import styles from './GlobalLoader.module.scss'
import { Player } from '@lottiefiles/react-lottie-player';
import cn from 'classnames'
import loader from 'src/assets/lottie/loader.json'
import { useEffect, useState } from 'react'


const GlobalLoader = () => {
  const loading = useAppSelector(getGlobalLoading)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoaded(true)
      }, 700)
    }
  }, [loading])

  return (
    <div className={cn(styles.loader, {[styles.loader_show]: !loaded})}>
      <Player
        src={loader}
        autoplay
        loop
        className={styles.player}
      />
    </div>
  )
}

export default GlobalLoader