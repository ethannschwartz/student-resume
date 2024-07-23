<template>
  <header class="fixed top-0 left-0 right-0 px-8 py-4 flex items-center justify-between">
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