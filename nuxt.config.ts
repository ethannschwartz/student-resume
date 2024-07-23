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
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'ypd0t9ZA4pKl38gtH5GAbitEWQRqHaNjpKgB1E7vlWc',
        },
      ],
    },
  },
  modules: ["nuxt-aos", "vue3-carousel-nuxt", "@nuxtjs/sitemap", "@nuxt/ui"],
})