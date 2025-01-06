<template>
  <div class="z-[49] bg-white/50 backdrop-blur fixed inset-0 h-screen pt-24 px-8">
    <ul class="text-xl flex flex-col gap-6 items-center">
      <li v-for="link in sections.navLinks" :key="link.name">
        <NavButton :link="link" :active-link="activeLink" />
      </li>
      <li class="flex items-center">
        <LanguageButton />
      </li>
    </ul>
  </div>
</template>

<script setup>
import sections from "~/constants/sections.js";

defineProps(['activeLink']);
</script>