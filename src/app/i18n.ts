import i18n from 'i18next';
import Backend, { HttpBackendOptions } from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    ns: [],
    resources: {},
    partialBundledLanguages: true,
    lng: 'ru',
    defaultNS: 'translation',
    fallbackLng: 'ru',
    fallbackNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
