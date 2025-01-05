import en from '~/locales/en.json';
import he from '~/locales/he.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        he
    }
}))