<template>
  <img class="mx-auto" :src="`https://nuxtjs.ir/logos/${isDarkMode?'nuxt-square-white':'nuxt-square'}.svg`" alt="">
</template>

<script setup>
const isDarkMode = useState("isDarkMode");
</script>