import { useEffect, useRef } from 'react'


const useOnceEffect = (cb: () => void, dep?: any[]) => {

  const firstRender = useRef(false)

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true
      cb()
    }
  }, dep)
}

export default useOnceEffect