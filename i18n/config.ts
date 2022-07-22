import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translation_en from './en_US.json';
import translation_ja from './ja_JP.json';

const resources = {
  ja: {
    translation: translation_ja,
  },
  en: {
    translation: translation_en,
  },
};

const detector = new LanguageDetector(null, {
  order: ['querystring', 'cookie', 'navigator', 'localStorage', 'htmlTag'],
  htmlTag: document.documentElement,
});

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
