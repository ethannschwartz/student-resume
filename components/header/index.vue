<template>
  <header class="z-20 sticky top-0 p-6 bg-teal-50 dark:bg-teal-950/50 backdrop-blur-lg flex items-center justify-between">
    <h1 class="flex items-center gap-1 font-bold type-primary">
      <Logo class="w-5" />
      Nuxt Template
    </h1>
    <UTooltip :text="`Turn dark mode ${isDark ? 'off':'on'}`">
      <button @click="toggleDarkMode">
        <i :class="isDark ? 'fi-rr-sun text-white':'fi-rr-moon'" class="fi"></i>
      </button>
    </UTooltip>
  </header>
</template>

<script setup>
//dark mode
const colorMode = useColorMode();
const isDark = computed({
  get () {
    return colorMode.value === 'dark';
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
}
</script>