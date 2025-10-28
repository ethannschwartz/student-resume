import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize AOS on client side only
  nuxtApp.hook('app:mounted', () => {
    AOS.init()

    // Provide AOS instance and methods globally
    return {
      provide: {
        aos: AOS,
      }
    }
  });
});
