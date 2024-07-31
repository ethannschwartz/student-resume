<template>
  <header data-aos="fade-down" class="sticky top-0 p-6 bg-teal-50 dark:bg-teal-950 flex items-center justify-between">
    <h1 class="flex items-center gap-1 font-bold type-primary">
      <img class="w-5 mx-auto block dark:hidden" src="https://nuxtjs.ir/logos/nuxt-square.svg" alt="">
      <img class="w-5 mx-auto hidden dark:block" src="https://nuxtjs.ir/logos/nuxt-square-white.svg" alt="">
      Nuxt Template
    </h1>
    <UTooltip :text="`Turn dark mode ${useState('isDarkMode').value ? 'off':'on'}`">
      <button @click="toggleDarkMode">
        <i :class="useState('isDarkMode').value ? 'fi-rr-sun text-white':'fi-rr-moon'" class="fi"></i>
      </button>
    </UTooltip>
  </header>
</template>

<script setup>
const toggleDarkMode = () => {
  useState("isDarkMode").value = !useState("isDarkMode").value;
}
</script>