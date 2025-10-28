<!-- components/skills/index.vue -->
<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 relative">
    <!-- Decorative grid pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid grid-cols-12 gap-4 h-full">
        <div v-for="i in 12" :key="i" class="border-r border-white"></div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto w-full relative z-10">
      <div class="text-center mb-16">
        <h2 data-aos="fade-up" class="text-5xl font-bold text-white mb-4">{{ $t('skills.title') }}</h2>
        <div data-aos="fade-up" :data-aos-delay="100" class="w-20 h-1 bg-white mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(category, index) in skillCategories"
             :key="index"
             data-aos="fade-up"
             :data-aos-delay="100 + (index * 100)"
             class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
          <div class="mb-6">
            <i :class="category.icon" class="text-4xl text-white mb-4"></i>
            <h3 class="text-2xl font-bold text-white mb-2">{{ $t(`skills.categories.${category.key}.title`) }}</h3>
            <div class="w-12 h-1 bg-white/50 group-hover:w-20 transition-all duration-300"></div>
          </div>

          <ul class="space-y-3">
            <li v-for="(skillKey, idx) in category.skillKeys"
                :key="idx"
                class="flex items-start gap-3 text-gray-300">
              <i class="fi fi-rr-check text-white text-sm mt-1"></i>
              <span>{{ $t(`skills.categories.${category.key}.skills.${skillKey}`) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Languages Section -->
      <div data-aos="fade-up" :data-aos-delay="500" class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-white mb-6">{{ $t('skills.languages.title') }}</h3>
        <div class="flex justify-center gap-8">
          <div class="text-center">
            <div class="w-24 h-24 rounded-full bg-white/10 border-4 border-white flex items-center justify-center mb-3">
              <span class="text-2xl font-bold text-white">HE</span>
            </div>
            <p class="text-white font-medium">{{ $t('skills.languages.hebrew') }}</p>
            <p class="text-gray-400 text-sm">{{ $t('skills.languages.native') }}</p>
          </div>
          <div class="text-center">
            <div class="w-24 h-24 rounded-full bg-white/10 border-4 border-white flex items-center justify-center mb-3">
              <span class="text-2xl font-bold text-white">EN</span>
            </div>
            <p class="text-white font-medium">{{ $t('skills.languages.english') }}</p>
            <p class="text-gray-400 text-sm">{{ $t('skills.languages.fluent') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    key: 'designSoftware',
    icon: 'fi fi-rr-computer',
    skillKeys: ['revit', 'autocad', 'sketchup', 'enscape'],
  },
  {
    key: 'technicalKnowledge',
    icon: 'fi fi-rr-drafting-compass',
    skillKeys: ['buildingCodes', 'lightingDesign', 'constructionMgmt', 'environmentalDesign', 'installationSystems'],
  },
  {
    key: 'professionalSkills',
    icon: 'fi fi-rr-users',
    skillKeys: ['teamCollaboration', 'precision', 'creativeThinking', 'clientCommunication', 'timeManagement'],
  },
];
</script>
