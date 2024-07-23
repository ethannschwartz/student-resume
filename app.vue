<template>
  <NuxtLayout :class="useState('isDarkMode').value ? ' dark ' : ''">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const isDarkMode = useState("isDarkMode", () => false);
</script>
