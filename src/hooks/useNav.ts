import { useRef } from 'react'
import { useOnScreen } from './useOnScreen'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const useNav: React.FC<Props> = () => {
  const ref = useRef(null)
  useOnScreen(ref)
  return ref
}
