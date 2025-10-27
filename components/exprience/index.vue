<!-- components/experience/index.vue -->
<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-6">
    <div class="max-w-5xl mx-auto w-full">
      <div class="mb-16">
        <h2 data-aos="fade-up" class="text-5xl font-bold mb-4">Professional Experience</h2>
        <div data-aos="fade-up" :data-aos-delay="100" class="w-20 h-1 bg-gray-900"></div>
      </div>

      <div class="space-y-12">
        <!-- Freelance Work -->
        <div data-aos="fade-up" class="grid md:grid-cols-3 gap-8 border-l-4 border-gray-900 pl-8 py-4">
          <div class="md:col-span-1">
            <div class="sticky top-24">
              <h3 class="text-2xl font-bold mb-2">Freelance Work</h3>
              <p class="text-gray-600 font-medium mb-2">Independent Contractor</p>
              <p class="text-sm text-gray-500">Tel Aviv Area</p>
            </div>
          </div>

          <div class="md:col-span-2 space-y-6">
            <div>
              <h4 class="text-xl font-semibold mb-3">Collaboration with Interior Designer</h4>
              <p class="text-gray-700 mb-4">
                Partnered with an interior designer on residential projects, specializing in the redesign of small apartments to maximize space efficiency and functionality.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-700">
                  <i class="fi fi-rr-check text-gray-900 text-sm mt-1"></i>
                  <span>Created precise AutoCAD and Revit plans based on client feedback and contractor requirements</span>
                </li>
                <li class="flex items-start gap-2 text-gray-700">
                  <i class="fi fi-rr-check text-gray-900 text-sm mt-1"></i>
                  <span>Collaborated closely with clients to ensure designs met their specific needs and preferences</span>
                </li>
                <li class="flex items-start gap-2 text-gray-700">
                  <i class="fi fi-rr-check text-gray-900 text-sm mt-1"></i>
                  <span>Managed project documentation and technical drawings for construction teams</span>
                </li>
              </ul>
            </div>

            <!-- Placeholder for project image -->
            <div class="relative">
              <div class="bg-gray-200 h-64 flex items-center justify-center">
                <div class="text-center space-y-4">
                  <i class="fi fi-rr-home text-6xl text-gray-400"></i>
                  <p class="text-sm text-gray-500">Apartment Redesign Project</p>
                </div>
              </div>
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-gray-900 opacity-90 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Achievements -->
      <div data-aos="fade-up" :data-aos-delay="200" class="mt-16 bg-white p-8 border-2 border-gray-900">
        <h3 class="text-2xl font-bold mb-6">Key Competencies</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start gap-3">
            <div class="w-12 h-12 bg-gray-900 flex items-center justify-center flex-shrink-0">
              <i class="fi fi-rr-document text-white"></i>
            </div>
            <div>
              <h4 class="font-semibold mb-1">Technical Documentation</h4>
              <p class="text-sm text-gray-600">Expert in creating detailed architectural plans and specifications</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-12 h-12 bg-gray-900 flex items-center justify-center flex-shrink-0">
              <i class="fi fi-rr-users-alt text-white"></i>
            </div>
            <div>
              <h4 class="font-semibold mb-1">Client Relations</h4>
              <p class="text-sm text-gray-600">Strong communication skills with clients and contractors</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-12 h-12 bg-gray-900 flex items-center justify-center flex-shrink-0">
              <i class="fi fi-rr-cube text-white"></i>
            </div>
            <div>
              <h4 class="font-semibold mb-1">3D Visualization</h4>
              <p class="text-sm text-gray-600">Proficient in creating realistic renderings and models</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-12 h-12 bg-gray-900 flex items-center justify-center flex-shrink-0">
              <i class="fi fi-rr-lightbulb text-white"></i>
            </div>
            <div>
              <h4 class="font-semibold mb-1">Problem Solving</h4>
              <p class="text-sm text-gray-600">Creative solutions for space optimization and design challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>