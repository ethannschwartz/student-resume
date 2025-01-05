import {
    english,
    hebrew,
    spanish,
    german,
    portuguese,
    italian,
    latin,
    french,
} from './locales';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: english,
        es: spanish,
        he: hebrew,
        fr: french,
        la: latin,
        it: italian,
        de: german,
        pt: portuguese,
    }
}))