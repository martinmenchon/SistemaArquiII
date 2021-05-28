import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './static/locales/es-AR.json';
import en from './static/locales/en-US.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: es,
      },
      en: {
        translation: en,
      },
    },
    supportedLngs: ['es', 'en'],
    fallbackLng: 'es',
    nsSeparator: '.',
    debug: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
