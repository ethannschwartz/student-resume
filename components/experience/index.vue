<!-- components/experience/index.vue -->
<template>
  <section id="experience" class="h-screen flex items-center justify-center bg-white">
    <div class="max-w-3xl mx-auto p-6">
      <h2 class="text-3xl font-semibold mb-6">{{ $t('Experience') }}</h2>
      <div>
        <h3 class="text-2xl font-bold">{{ $t('Assisted in Designing a Private Home in Eilat') }}</h3>
        <p class="text-lg italic">{{ $t('Personal Project') }}</p>
        <ul class="list-disc list-inside mt-4">
          <li>{{ $t('Helped a family member plan and design their new home in Eilat.') }}</li>
          <li>{{ $t('Utilized AutoCAD and Revit to create detailed plans and 3D renderings.') }}</li>
          <li>{{ $t('Customized the design to meet the needs of the family, considering the local climate and energy-efficient solutions.') }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>