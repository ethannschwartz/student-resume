<!-- components/skills/index.vue -->
<template>
  <section class="h-screen flex items-center justify-center bg-white">
    <div class="max-w-2xl mx-auto p-4">
      <h2 data-aos="fade-up" class="text-3xl font-semibold mb-6">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(category, index) in skillCategories" :key="index">
          <h3 data-aos="fade-up" class="text-xl font-bold mb-2">{{ category.title }}</h3>
          <ul class="list-disc list-inside">
            <li data-aos="fade-up" v-for="(skill, idx) in category.skills" :key="idx">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Software Proficiency',
    skills: [
      'SketchUp',
      'Revit',
      'AutoCAD',
      'Microsoft Office Suite',
    ],
  },
  {
    title: 'Technical Skills',
    skills: [
      'Architectural drafting and design',
      '3D modeling and rendering',
      'Basic structural analysis',
      'Knowledge of building codes and regulations',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Creative problem-solving',
      'Excellent communication and teamwork',
      'Time management',
      'Attention to detail',
    ],
  },
];
</script>
