<template>
  <a
      @click="$emit('select')"
      :href="link.path"
      class="hover:text-black text-zinc-600 relative group"
      :class="{ '!text-black': activeLink === link.name }"
  >
    {{ $t(link.name) }}
    <hr
        class="mx-auto opacity-0 group-hover:opacity-100 w-0 group-hover:w-full duration-150 border-black"
        :class="{ 'opacity-100 w-full': activeLink === link.name }"
    />
  </a>
</template>

<script setup>
defineProps(['link', 'activeLink']);
</script>