<template>
  <div class="h-screen flex flex-col w-full">
    <Header />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
</script>