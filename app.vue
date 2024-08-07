<template>
  <NuxtLayout :class="isDarkMode ? ' dark ' : ''">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const isDarkMode = useState("isDarkMode", () => false);
</script>
