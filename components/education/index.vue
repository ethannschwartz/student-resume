<!-- components/education/index.vue -->
<template>
  <section class="h-screen flex items-center justify-center bg-white">
    <div class="max-w-2xl mx-auto p-4">
      <h2 class="text-3xl font-semibold mb-6">{{ $t('Education') }}</h2>
      <div>
        <h3 class="text-2xl font-bold">{{ $t('Practical Engineering and Interior Design Certification') }}</h3>
        <p class="text-lg">{{ $t('Shenkar College of Engineering and Design') }}</p>
        <p class="text-lg">{{ $t('Expected Graduation: May 2025') }}</p>
        <ul class="list-disc list-inside mt-4">
          <li v-for="note in notes">{{ $t(note) }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const notes = [];
</script>
