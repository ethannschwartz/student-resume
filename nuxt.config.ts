// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
    site: {
      url: "https://master.d2pnv63bvvqq5p.amplifyapp.com/",
    },
  modules: ["nuxt-aos", "vue3-carousel-nuxt", "@nuxtjs/sitemap"]
})