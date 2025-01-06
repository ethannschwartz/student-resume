<template>
  <div>
    <nav class="hidden lg:block">
      <ul class="flex gap-4 items-center">
        <li v-for="link in sections.navLinks" :key="link.name">
          <NavButton :link="link" :active-link="activeLink" />
        </li>
        <li class="flex items-center">
          <LanguageButton />
        </li>
      </ul>
    </nav>
    <BurgerToggle :is-menu-open="isMenuOpen" @toggle="toggleMenu" />
  </div>
</template>

<script setup>
import sections from "~/constants/sections.js";

defineProps(['activeLink']);
const emits = defineEmits(['toggle']);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  emits('toggle');
};
</script>