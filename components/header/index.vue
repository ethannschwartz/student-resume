<template>
  <header class="p-6 bg-teal-100 dark:bg-teal-950 flex items-center justify-between">
    <h1 class="font-bold type-primary">Nuxt Template</h1>
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