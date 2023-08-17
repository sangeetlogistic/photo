import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import { LocalStorageKeys } from './constants/Keys';
// import { useLocalStorage } from './hooks';
import translationENG from './locales/en/translation.json';

// the translations
export const resources = {
    en: {
        translation: translationENG,
    },
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const localStorage = 'useLocalStorage()';
let language = localStorage.getItem('LocalStorageKeys.i18nLanguage');

if (!language && navigator?.language && navigator.language in resources) {
    language = navigator.language;
}

if (!language) {
    localStorage.setItem('LocalStorageKeys.i18nLanguage', 'en');
}

i18n.use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('LocalStorageKeys.i18nLanguage') || 'en',
        fallbackLng: 'en', // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
