<template>
  <div class="z-[49] bg-white/50 backdrop-blur fixed inset-0 h-screen pt-24 px-8">
    <ul class="text-xl flex flex-col gap-6 items-center">
      <li data-aos="fade-left" :data-aos-delay="i * 100" v-for="(link,i) in sections.navLinks" :key="link.name">
        <NavButton @select="$emit('select')" :link="link" :active-link="activeLink" />
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