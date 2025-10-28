<!-- components/summary/index.vue -->
<template>
  <section class="h-screen relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <!-- Decorative architectural lines -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/4 w-px h-full bg-gray-900"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gray-900"></div>
      <div class="absolute top-1/4 left-0 w-full h-px bg-gray-900"></div>
      <div class="absolute bottom-1/3 left-0 w-full h-px bg-gray-900"></div>
    </div>

    <div class="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
      <div class="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-6">
          <div data-aos="fade-right" :data-aos-delay="100">
            <span class="text-sm font-semibold tracking-wider text-gray-600 uppercase">Practical Engineer</span>
          </div>

          <h1 data-aos="fade-right" :data-aos-delay="200" class="text-5xl md:text-6xl font-bold leading-tight">
            Oryan<br/>
            <span class="text-gray-600">Malka-Schwartz</span>
          </h1>

          <p data-aos="fade-right" :data-aos-delay="300" class="text-xl text-gray-700 leading-relaxed">
            Architectural Engineering graduate with a passion for translating creative ideas into detailed and precise execution plans.
          </p>

          <div data-aos="fade-right" :data-aos-delay="400" class="pt-4 space-y-3">
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-map-pin" class="fi fi-rr-marker text-gray-600"></UIcon>
              <span class="text-gray-700">Tel Aviv-Yafo, Israel</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-mail" class="fi fi-rr-envelope text-gray-600"></UIcon>
              <a href="mailto:Oryanschwartz@gmail.com" class="text-gray-700 hover:text-gray-900 transition-colors">
                Oryanschwartz@gmail.com
              </a>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-phone" class="fi fi-brands-whatsapp text-gray-600"></UIcon>
              <a href="https://wa.me/972528809027" class="text-gray-700 hover:text-gray-900 transition-colors">
                052-880-9027
              </a>
            </div>
          </div>

          <div data-aos="fade-right" :data-aos-delay="500" class="pt-6">
            <a
              href="/#portfolio"
              class="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-none hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              View Portfolio
              <UIcon name="i-lucide-arrow-down" class="duration-200 -translate-y-0 group-hover:translate-y-px" />
            </a>
          </div>
        </div>

        <!-- Right: Decorative Image/Grid -->
        <div data-aos="fade-left" :data-aos-delay="300" class="hidden md:block">
          <div class="relative aspect-square">
            <!-- Placeholder for architectural image -->
            <div class="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <img :src="profilePicture" alt="oryan-malka-schwartz" />
            </div>

            <!-- Accent blocks -->
            <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-900 opacity-90"></div>
            <div class="absolute -top-8 -right-8 w-24 h-24 border-4 border-gray-900"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div data-aos="fade-up" :data-aos-delay="600" class="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
      <i class="fi fi-rr-angle-down text-2xl text-gray-600"></i>
    </div>
  </section>
</template>

<script setup>
import profilePicture from '~/assets/images/oryan-profile-picture.jpeg';
</script>