// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
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
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  modules: [
    "nuxt-aos",
    "vue3-carousel-nuxt",
    "@nuxtjs/sitemap",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
})