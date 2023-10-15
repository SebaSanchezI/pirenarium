import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { LANGUAGE_LIST } from '@components/selectLanguage/data/languageList'

import esES from './locales/es-ES.json'
import enGB from './locales/en-GB.json'

const defaultLanguage = LANGUAGE_LIST[0].value

export const resources = {
  [LANGUAGE_LIST[0].value]: {
    translation: esES
  },
  [LANGUAGE_LIST[1].value]: {
    translation: enGB
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'es-ES',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
