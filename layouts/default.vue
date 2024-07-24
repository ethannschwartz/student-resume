<template>
  <div class="bg-gradient-to-b from-teal-50 dark:from-teal-950 to-transparent dark:to-zinc-900 h-auto flex flex-col w-full">
    <Header />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
</script>