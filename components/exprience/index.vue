<!-- components/experience/index.vue -->
<template>
  <section class="h-screen flex items-center justify-center bg-white">
    <div class="max-w-3xl mx-auto p-6">
      <h2 data-aos="fade-up" class="text-3xl font-semibold mb-6">{{ $t('Experience') }}</h2>
      <div>
        <h3 data-aos="fade-up" class="text-2xl font-bold">{{ $t('Assisted in Designing a Private Home in Eilat') }}</h3>
        <p data-aos="fade-up" class="text-lg italic">{{ $t('Personal Project') }}</p>
        <ul class="list-disc list-inside mt-4">
          <li data-aos="fade-up">{{ $t('Helped a family member plan and design their new home in Eilat') }}.</li>
          <li data-aos="fade-up">{{ $t('Utilized AutoCAD and Revit to create detailed plans and 3D renderings') }}.</li>
          <li data-aos="fade-up">{{ $t('Customized the design to meet the family\'s needs, considering the local climate and energy-efficient solutions') }}.</li>
        </ul>
      </div>
      <!-- Add any additional experience entries here -->
    </div>
  </section>
</template>

<script setup>
</script>