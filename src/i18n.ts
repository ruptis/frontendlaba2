import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./i18n/en/translation.json";
import ru from "./i18n/ru/translation.json";

const resources = {
    en,
    ru,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        defaultNS: "common",
        fallbackLng: "ru",
    });