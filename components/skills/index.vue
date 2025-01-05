<!-- components/skills/index.vue -->
<template>
  <section class="h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-3xl mx-auto p-4">
      <h2 class="text-3xl font-semibold mb-6">{{ $t('Skills') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="section in skillSections">
          <h3 class="text-xl font-bold mb-2">{{ $t(section.title) }}</h3>
          <ul class="list-disc list-inside">
            <li v-for="item in section.items">{{ $t(item) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillSections = [
  {
    title: "Software Proficiency",
    items: [
      "SketchUp",
      "Revit",
      "AutoCAD",
      "Microsoft Office Suite",
    ],
  },
  {
    title: "Technical Skills",
    items: [
      "Architectural drafting and design",
      "3D modeling and rendering",
      "Basic structural analysis",
      "Knowledge of building codes and regulations",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Creative problem-solving",
      "Excellent communication and teamwork",
      "Time management",
      "Attention to detail",
    ],
  },
  {
    title: "Additional Core Competencies",
    items: [
      "Technical Drawing & Building Technology",
      "Architectural CAD Drafting",
      "Building Codes & Regulations",
      "Project Management & Professional Practice",
      "AutoCAD and Revit for 2D/3D drafting",
      "SketchUp for 3D modeling and rendering",
    ],
  },
];
</script>
