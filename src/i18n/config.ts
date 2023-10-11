import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { LANGUAGE_LIST } from '@components/selectLanguage/data/languageList'

import esES from './locales/es-ES.json'
import enGB from './locales/en-GB.json'

const defaultLanguage = LANGUAGE_LIST[0].value

export const defaultNamespace = 'default'

export const resources = {
  [LANGUAGE_LIST[0].value]: {
    [defaultNamespace]: esES
  },
  [LANGUAGE_LIST[1].value]: {
    [defaultNamespace]: enGB
  }
}

await i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    defaultNS: defaultNamespace,
    ns: [defaultNamespace],
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

export const changeLanguage = async (language: string) => {
  await i18n.changeLanguage(language)
}
