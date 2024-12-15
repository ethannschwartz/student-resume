<template>
  <a
      :href="link.path"
      class="hover:text-black text-zinc-600 relative group"
      :class="{ '!text-black': activeLink === link.name }"
  >
    {{ link.name }}
    <hr
        class="opacity-0 group-hover:opacity-100 w-0 group-hover:w-full duration-150 border-black"
        :class="{ 'opacity-100 w-full': activeLink === link.name }"
    />
  </a>
</template>

<script setup>
defineProps(['link', 'activeLink']);
</script>