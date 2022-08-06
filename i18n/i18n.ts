import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./locales/ru_RU";
import en from "./locales/en_US";
import { ruRU } from "./langs";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ruRU,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru_RU: {
        translation: ru,
      },
      en_US: {
        translation: en,
      },
    },
  });
