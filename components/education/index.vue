<!-- components/education/index.vue -->
<template>
  <section class="min-h-screen flex items-center justify-center bg-white py-20 px-6 relative">
    <!-- Decorative element -->
    <div class="absolute top-20 right-20 w-64 h-64 bg-gray-100 -z-0 hidden lg:block"></div>

    <div class="max-w-5xl mx-auto w-full relative z-10">
      <div class="grid md:grid-cols-2 gap-16 items-start">
        <!-- Left: Title and Image -->
        <div class="space-y-8">
          <div>
            <h2 data-aos="fade-right" class="text-5xl font-bold mb-4">Education</h2>
            <div data-aos="fade-right" :data-aos-delay="100" class="w-20 h-1 bg-gray-900"></div>
          </div>

          <!-- Placeholder image for educational institution -->
          <div data-aos="fade-right" :data-aos-delay="200" class="relative">
            <div class="h-80 flex items-center justify-center">
              <img :src="schoolImage" alt="" class="h-full" />
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gray-900 -z-10"></div>
          </div>
        </div>

        <!-- Right: Education Details -->
        <div class="space-y-8">
          <div data-aos="fade-left" class="space-y-4">
            <h3 class="text-3xl font-bold">Practical Engineer in Architecture</h3>
            <div class="space-y-2">
              <p class="text-xl text-gray-700">Shenkar - Engineering. Design. Art.</p>
              <p class="text-lg text-gray-600">Tel Aviv, Israel</p>
              <p class="text-lg font-semibold text-gray-900">Graduated: 2025</p>
            </div>
          </div>

          <div data-aos="fade-left" :data-aos-delay="100" class="space-y-4">
            <h4 class="text-xl font-semibold text-gray-900">Core Curriculum:</h4>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="(course, index) in courses" :key="index"
                   data-aos="fade-left"
                   :data-aos-delay="150 + (index * 50)"
                   class="flex items-start gap-2">
                <i class="fi fi-rr-check text-gray-900 text-sm mt-1"></i>
                <span class="text-gray-700">{{ course }}</span>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" :data-aos-delay="200" class="space-y-4 pt-4">
            <h4 class="text-xl font-semibold text-gray-900">Software Proficiency:</h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="(software, index) in softwareList"
                    :key="index"
                    data-aos="zoom-in"
                    :data-aos-delay="250 + (index * 50)"
                    class="px-4 py-2 bg-gray-900 text-white font-medium">
                {{ software }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import schoolImage from "~/assets/images/Shenkar College of Engineering and Design.svg";
const courses = [
  'Architectural Design Studio',
  'Building Systems Design',
  'Urban Design Fundamentals',
  'Project Planning',
  'Construction Theory',
  'Lighting Design',
  'Building Codes & Regulations',
  'Space Organization',
  'Construction Control & Management',
  'Landscape Architecture',
  'Ergonomics',
  'Climate-Responsive Design',
  'Plumbing & Installations'
];

const softwareList = ['Revit', 'AutoCAD', 'SketchUp', 'Enscape'];
</script>
