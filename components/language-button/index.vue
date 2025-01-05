<template>
<div @mouseover="isVisible=true" @mouseleave="isVisible=false" class="pb-2 relative cursor-pointer flex items-center justify-center">
  <i class="fi fi-tr-world flex items-center"></i>
  <div
      v-if="isVisible"
      class="bg-white z-50 absolute top-full right-0 w-40 p-1 border-black border rounded-md shadow-md duration-150"
  >
    <button class="w-full text-sm px-3 py-1 rounded hover:bg-zinc-200 active:bg-zinc-300">English</button>
    <button class="w-full text-sm px-3 py-1 rounded hover:bg-zinc-200 active:bg-zinc-300">עברית</button>
  </div>
</div>
</template>

<script setup>
const isVisible = ref(false);

</script>