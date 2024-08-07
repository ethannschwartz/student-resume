<template>
  <header data-aos="fade-down" class="z-20 sticky top-0 p-6 bg-teal-50 dark:bg-teal-950 flex items-center justify-between">
    <h1 class="flex items-center gap-1 font-bold type-primary">
      <Logo class="w-5" />
      Nuxt Template
    </h1>
    <UTooltip :text="`Turn dark mode ${isDarkMode ? 'off':'on'}`">
      <button @click="toggleDarkMode">
        <i :class="isDarkMode ? 'fi-rr-sun text-white':'fi-rr-moon'" class="fi"></i>
      </button>
    </UTooltip>
  </header>
</template>

<script setup>
const isDarkMode = useState("isDarkMode");

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
}
</script>