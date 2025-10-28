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
  nitro: {
    experimental: {
      wasm: true
    },
    preset: 'node',
    minify: false, // Disable minification for better debugging
    rollupConfig: {
      external: ['node:inspector']
    }
  },
  modules: ["@nuxt/ui", "@nuxtjs/sitemap"],
})