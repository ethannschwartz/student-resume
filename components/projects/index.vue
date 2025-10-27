<!-- components/projects/index.vue -->
<template>
  <section class="h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-3xl mx-auto p-6">
      <h2 data-aos="fade-up" class="text-3xl font-semibold mb-6">Academic Projects</h2>
      <div v-for="(project, index) in projects" :key="index" class="mb-8">
        <h3 data-aos="fade-up" class="text-2xl font-bold">{{ project.title }}</h3>
        <p data-aos="fade-up" class="text-lg italic">{{ project.course }}</p>
        <ul class="list-disc list-inside mt-4">
          <li data-aos="fade-up" v-for="(detail, idx) in project.details" :key="idx">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Design of a Multifunctional Community Center',
    course: 'Advanced Design Course',
    details: [
      'Designed a community center combining commercial, cultural, and educational spaces.',
      'Focused on integrating sustainability principles and using green materials.',
      'Created a detailed 3D model and presented it to faculty and students.',
    ],
  },
  {
    title: 'Research on the Impact of Natural Lighting on Interior Design',
    course: 'Environment and Lighting Course',
    details: [
      'Conducted a research paper analyzing methods to maximize the use of natural light.',
      'Aimed to improve energy efficiency and user comfort in building designs.',
      'Presented findings at a regional student conference.',
    ],
  },
  // Add more projects as needed
];
</script>
