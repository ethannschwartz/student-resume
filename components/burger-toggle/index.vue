<template>
  <button @click="$emit('toggle')" class="z-50 block lg:hidden">
      <span class="flex justify-start w-5 h-5 items-center relative">
            <span
                :class="isMenuOpen ? 'translate-y-0 rotate-45': '-translate-y-1.5'"
                class="block h-px w-5 transform transition bg-black absolute"
            />
            <span
                :class="isMenuOpen ? 'opacity-0 translate-x-3': 'opacity-100'"
                class="block h-px w-5 transform transition bg-black absolute"
            />
            <span
                :class="isMenuOpen ? 'translate-y-0 -rotate-45': 'translate-y-1.5'"
                class="block h-px w-5 transform transition bg-black absolute"
            />
        </span>
  </button>
</template>

<script setup>
defineProps(['isMenuOpen']);
</script>