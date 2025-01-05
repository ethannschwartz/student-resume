<!-- components/projects/index.vue -->
<template>
  <section id="projects" class="h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-3xl mx-auto p-6">
      <h2 class="text-3xl font-semibold mb-6">{{ $t('Academic Projects') }}</h2>
      <div class="mb-8">
        <h3 class="text-2xl font-bold">{{ $t('Design of a Multifunctional Community Center') }}</h3>
        <p class="text-lg italic">{{ $t('Advanced Design Course') }}</p>
        <ul class="list-disc list-inside mt-4">
          <li>{{ $t('Designed a community center combining commercial, cultural, and educational spaces.') }}</li>
          <li>{{ $t('Focused on integrating sustainability principles and using green materials.') }}</li>
          <li>{{ $t('Created a detailed 3D model and presented it to faculty and students.') }}</li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold">{{ $t('Research on the Impact of Natural Lighting on Interior Design') }}</h3>
        <p class="text-lg italic">{{ $t('Environment and Lighting Course') }}</p>
        <ul class="list-disc list-inside mt-4">
          <li>{{ $t('Conducted a research paper analyzing methods to maximize the use of natural light.') }}</li>
          <li>{{ $t('Aimed to improve energy efficiency and user comfort in building designs.') }}</li>
          <li>{{ $t('Presented findings at a regional student conference.') }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
