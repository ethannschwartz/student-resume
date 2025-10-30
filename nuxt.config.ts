// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['/assets/css/main.css'],
  site: {
    // url: "enter-site-url-here ",
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          // content: 'enter-site-validation-key-here',
        },
      ],
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  ssr: true,
  nitro: {
    experimental: {
      wasm: true
    },
    preset: 'aws-amplify',
    minify: true,
    rollupConfig: {
      external: ['node:inspector']
    }
  },
  modules: ["@nuxt/ui", "@nuxtjs/sitemap", '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'he', language: 'he-IL', name: 'עברית', dir: 'rtl', file: 'he.json' }
    ],
    defaultLocale: 'he',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  }
})