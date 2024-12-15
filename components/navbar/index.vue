<template>
  <nav class="hidden lg:block">
    <ul class="flex gap-4">
      <li v-for="link in navLinks" :key="link.name">
        <NavButton :link="link" :active-link="activeLink" />
      </li>
    </ul>
  </nav>
  <button @click="toggleMenu" class="z-50 block lg:hidden">
    <i :class="isMenuOpen ? 'fi fi-rr-cross' : 'fi fi-rr-menu-burger'"></i>
  </button>
</template>

<script setup>
defineProps(['activeLink']);

const navLinks = [
  {path: '#Summary', name: 'Summary'},
  {path: '#Education', name: 'Education'},
  {path: '#Skills', name: 'Skills'},
  {path: '#Experience', name: 'Experience'},
  {path: '#Projects', name: 'Projects'},
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>