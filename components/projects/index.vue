<!-- components/projects/index.vue -->
<template>
  <section class="min-h-screen bg-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="mb-20 text-center">
        <h2 data-aos="fade-up" class="text-5xl font-bold mb-4">Portfolio</h2>
        <div data-aos="fade-up" :data-aos-delay="100" class="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p data-aos="fade-up" :data-aos-delay="200" class="text-xl text-gray-600 max-w-2xl mx-auto">
          Selected architectural projects demonstrating design thinking, technical proficiency, and attention to detail.
        </p>
      </div>

      <div class="space-y-32">
        <!-- Project 1: Residential Building -->
        <div data-aos="fade-up" class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 space-y-6">
            <div>
              <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">Final Project</span>
              <h3 class="text-3xl font-bold mt-2 mb-4">Two-Story Residential Building</h3>
              <p class="text-gray-700 leading-relaxed">
                Designed a comprehensive two-story residential building for mixed-use purposes, emphasizing sustainable materials, efficient space distribution, and optimization of building rights.
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">Maximized building rights while ensuring optimal layout</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">Strategic positioning of public/private spaces based on sun orientation and facades</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">Focus on sustainable materials and energy efficiency</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">Comprehensive plans, sections, and 3D visualizations using Revit and AutoCAD</p>
              </div>
            </div>

            <div class="pt-4">
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">Revit</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">AutoCAD</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">Sustainable Design</span>
              </div>
            </div>

            <p class="text-sm text-gray-600 italic border-l-4 border-gray-300 pl-4">
              Presented to a professional review committee and received commendations for clarity of planning and presentation.
            </p>
          </div>

          <div class="order-1 md:order-2 relative">
            <div class="bg-gray-200 aspect-[4/3] flex items-center justify-center">
              <div class="text-center space-y-4">
                <i class="fi fi-rr-home-location-alt text-7xl text-gray-400"></i>
                <p class="text-sm text-gray-500">Residential Building Project</p>
              </div>
            </div>
            <div class="absolute -bottom-6 -left-6 w-40 h-40 border-4 border-gray-900 -z-10"></div>
          </div>
        </div>

        <!-- Project 2: Urban Renewal -->
        <div data-aos="fade-up" class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="bg-gray-200 aspect-[4/3] flex items-center justify-center">
              <div class="text-center space-y-4">
                <i class="fi fi-rr-city text-7xl text-gray-400"></i>
                <p class="text-sm text-gray-500">Urban Renewal Project</p>
              </div>
            </div>
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-gray-900 -z-10"></div>
          </div>

          <div class="space-y-6">
            <div>
              <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">Studio Project - Tel Aviv</span>
              <h3 class="text-3xl font-bold mt-2 mb-4">Urban Renewal Design</h3>
              <p class="text-gray-700 leading-relaxed">
                Developed a concept for rehabilitating an existing neighborhood with the goal of improving accessibility and creating connections between public spaces.
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">Enhanced pedestrian accessibility and urban connectivity</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">Integration of public spaces and community areas</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">3D models and presentation boards illustrating spatial organization</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">Climate-responsive design principles</p>
              </div>
            </div>

            <div class="pt-4">
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">SketchUp</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">Urban Planning</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">Climate Design</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3: Freelance Work -->
        <div data-aos="fade-up" class="bg-gray-50 p-12 relative">
          <div class="absolute top-0 left-0 w-2 h-full bg-gray-900"></div>

          <div class="max-w-4xl mx-auto">
            <div class="mb-8">
              <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">Independent Work</span>
              <h3 class="text-3xl font-bold mt-2 mb-4">Small Apartment Redesign Projects</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p class="text-gray-700 leading-relaxed mb-6">
                  Collaborated with an interior designer to transform compact living spaces through innovative design solutions and efficient space planning.
                </p>

                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                    <p class="text-gray-700">Precise AutoCAD and Revit drawings based on client requirements</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                    <p class="text-gray-700">Direct client communication and iterative design refinement</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                    <p class="text-gray-700">Coordination with contractors for accurate implementation</p>
                  </div>
                </div>
              </div>

              <div class="relative">
                <div class="bg-gray-200 aspect-square flex items-center justify-center">
                  <div class="text-center space-y-4">
                    <i class="fi fi-rr-home text-6xl text-gray-400"></i>
                    <p class="text-sm text-gray-500">Apartment Interior</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">Revit</span>
              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">AutoCAD</span>
              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">Client Collaboration</span>
              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">Space Optimization</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Portfolio Note -->
      <div data-aos="fade-up" class="mt-20 text-center">
        <p class="text-gray-600 mb-6">Additional projects and detailed drawings available upon request</p>
        <a href="mailto:Oryanschwartz@gmail.com"
           class="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium">
          Request Full Portfolio
          <i class="fi fi-rr-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
