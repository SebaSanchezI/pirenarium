import { type Language } from '../model/language.type'
import flagEs from '@assets/flag-es.svg'
import flagUK from '@assets/flag-uk.svg'

export const LANGUAGE_LIST: Language[] = [
  { id: 1, value: 'es-ES', label: 'Español', flagImg: flagEs },
  { id: 2, value: 'en-GB', label: 'English', flagImg: flagUK }
]
