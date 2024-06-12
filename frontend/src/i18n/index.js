import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from "./constant";
import {en} from"./copies/en.js"
import {esp} from"./copies/esp.js"
import {ru} from"./copies/ru.js"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  [LOCALS.EN]: {
    translation: en
  },
  [LOCALS.ESP]: {
    translation:esp
  },
  [LOCALS.Ru]: {
    translation: ru
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)  
  .init({
    resources,
    fallbackLng:LOCALS.EN,
   
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;