<template>
  <img class="mx-auto" :src="`https://nuxtjs.ir/logos/${isDark?'nuxt-square-white':'nuxt-square'}.svg`" alt="">
</template>

<script setup>
//dark mode
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark';
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
})
</script>