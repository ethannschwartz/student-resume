<template>
  <NuxtLayout :class="useState('isDarkMode').value ? ' dark ' : ''">
    <NuxtPage />
  </NuxtLayout>
</template>
