import { useEffect, useState } from 'react'

interface Props {
  ref: React.RefObject<HTMLDivElement>
}

export const useOnScreen: React.FC<Props> = ({ ref }) => {
  const [isOnScreen] = useState<HTMLDivElement | null>(null) // setIsOnScreen

  const observer = new IntersectionObserver((entry) => {
    console.log(entry)
  })

  useEffect(() => {
    if (ref.current === null) throw new Error('error')
    observer.observe(ref.current)

    return () => { observer.disconnect() }
  }, [])

  return isOnScreen
}
