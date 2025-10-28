<!-- components/portfolio/index.vue -->
<template>
  <section class="overflow-hidden min-h-screen bg-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="mb-20 text-center">
        <h2 data-aos="fade-up" class="text-5xl font-bold mb-4">{{ $t('portfolio.title') }}</h2>
        <div data-aos="fade-up" :data-aos-delay="100" class="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p data-aos="fade-up" :data-aos-delay="200" class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ $t('portfolio.subtitle') }}
        </p>
      </div>

      <div class="space-y-32">
        <!-- Project 1: Residential Building -->
        <div data-aos="fade-up" class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 space-y-6">
            <div>
              <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">{{ $t('portfolio.project1.type') }}</span>
              <h3 class="text-3xl font-bold mt-2 mb-2">{{ $t('portfolio.project1.title') }}</h3>
              <UButton
                  color="neutral"
                  class="mb-4"
                  icon="i-lucide-download"
                  size="sm"
                  variant="solid"
                  :loading="isDownloading"
                  @click="downloadPDF(studioFloorPlanPDF, 'Oryan-Malka-Schwartz-Studio-Floor-Plan.pdf')"
              >
                {{ $t('portfolio.project2.downloadButton') }}
              </UButton>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('portfolio.project1.description') }}
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">{{ $t('portfolio.project1.highlights.h1') }}</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">{{ $t('portfolio.project1.highlights.h2') }}</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">{{ $t('portfolio.project1.highlights.h3') }}</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fi fi-rr-check text-gray-900 mt-1"></i>
                <p class="text-gray-700">{{ $t('portfolio.project1.highlights.h4') }}</p>
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
              {{ $t('portfolio.project1.note') }}
            </p>
          </div>

          <div class="order-1 md:order-2 relative">
            <div class="flex items-center justify-center">
              <div dir="ltr">
                <UCarousel arrows v-slot="{ item }" :items="studioProjectImages" autoplay loop>
                  <div class="relative">
                    <img :src="item" :alt="`studio-project-img-${item}`" />
                    <button @click="openImagesModal(item, studioProjectImages, $t('portfolio.project2.title'))" class="opacity-0 hover:opacity-100 hover:bg-zinc-800/50 z-50 inset-0 absolute">
                      <UIcon name="i-lucide-zoom-in" class="text-white text-4xl" />
                    </button>
                  </div>
                </UCarousel>
              </div>
            </div>
            <div class="absolute -bottom-6 -left-6 w-40 h-40 border-4 border-gray-900 -z-10"></div>
          </div>
        </div>

<!--        TODO: Projects 2 and 3-->
<!--        &lt;!&ndash; Project 2: Urban Renewal &ndash;&gt;-->
<!--        <div data-aos="fade-up" class="grid md:grid-cols-2 gap-12 items-center">-->
<!--          <div class="relative">-->
<!--            <div dir="ltr">-->
<!--              <UCarousel arrows v-slot="{ item }" :items="studioProjectImages" autoplay loop>-->
<!--                <div class="relative">-->
<!--                  <img :src="item" :alt="`studio-project-img-${item}`" />-->
<!--                  <button @click="openImagesModal(item, studioProjectImages, $t('portfolio.project2.title'))" class="opacity-0 hover:opacity-100 hover:bg-zinc-800/50 z-50 inset-0 absolute">-->
<!--                    <UIcon name="i-lucide-zoom-in" class="text-white text-4xl" />-->
<!--                  </button>-->
<!--                </div>-->
<!--              </UCarousel>-->
<!--            </div>-->
<!--            <div class="absolute -top-6 -right-6 w-32 h-32 bg-gray-900 -z-10"></div>-->
<!--          </div>-->

<!--          <div class="space-y-6">-->
<!--            <div>-->
<!--              <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">{{ $t('portfolio.project2.type') }}</span>-->
<!--                <h3 class="text-3xl font-bold mt-2 mb-2 ">{{ $t('portfolio.project2.title') }}</h3>-->
<!--                <UButton-->
<!--                    color="neutral"-->
<!--                    class="mb-4"-->
<!--                    icon="i-lucide-download"-->
<!--                    size="sm"-->
<!--                    variant="solid"-->
<!--                    :loading="isDownloading"-->
<!--                    @click="downloadPDF(studioFloorPlanPDF, 'Oryan-Malka-Schwartz-Studio-Floor-Plan.pdf')"-->
<!--                >-->
<!--                  {{ $t('portfolio.project2.downloadButton') }}-->
<!--                </UButton>-->
<!--              <p class="text-gray-700 leading-relaxed">-->
<!--                {{ $t('portfolio.project2.description') }}-->
<!--              </p>-->
<!--            </div>-->

<!--            <div class="space-y-3">-->
<!--              <div class="flex items-start gap-3">-->
<!--                <i class="fi fi-rr-check text-gray-900 mt-1"></i>-->
<!--                <p class="text-gray-700">{{ $t('portfolio.project2.highlights.h1') }}</p>-->
<!--              </div>-->
<!--              <div class="flex items-start gap-3">-->
<!--                <i class="fi fi-rr-check text-gray-900 mt-1"></i>-->
<!--                <p class="text-gray-700">{{ $t('portfolio.project2.highlights.h2') }}</p>-->
<!--              </div>-->
<!--              <div class="flex items-start gap-3">-->
<!--                <i class="fi fi-rr-check text-gray-900 mt-1"></i>-->
<!--                <p class="text-gray-700">{{ $t('portfolio.project2.highlights.h3') }}</p>-->
<!--              </div>-->
<!--              <div class="flex items-start gap-3">-->
<!--                <i class="fi fi-rr-check text-gray-900 mt-1"></i>-->
<!--                <p class="text-gray-700">{{ $t('portfolio.project2.highlights.h4') }}</p>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="pt-4">-->
<!--              <div class="flex flex-wrap gap-2">-->
<!--                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">SketchUp</span>-->
<!--                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">Urban Planning</span>-->
<!--                <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium">Climate Design</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Project 3: Freelance Work &ndash;&gt;-->
<!--        <div data-aos="fade-up" class="bg-gray-50 p-12 relative">-->
<!--          <div class="absolute top-0 left-0 w-2 h-full bg-gray-900"></div>-->

<!--          <div class="max-w-4xl mx-auto">-->
<!--            <div class="mb-8">-->
<!--              <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">{{ $t('portfolio.project3.type') }}</span>-->
<!--              <h3 class="text-3xl font-bold mt-2 mb-4">{{ $t('portfolio.project3.title') }}</h3>-->
<!--            </div>-->

<!--            <div class="grid md:grid-cols-2 gap-8 mb-8">-->
<!--              <div>-->
<!--                <p class="text-gray-700 leading-relaxed mb-6">-->
<!--                  {{ $t('portfolio.project3.description') }}-->
<!--                </p>-->

<!--                <div class="space-y-3">-->
<!--                  <div class="flex items-start gap-3">-->
<!--                    <i class="fi fi-rr-check text-gray-900 mt-1"></i>-->
<!--                    <p class="text-gray-700">{{ $t('portfolio.project3.highlights.h1') }}</p>-->
<!--                  </div>-->
<!--                  <div class="flex items-start gap-3">-->
<!--                    <i class="fi fi-rr-check text-gray-900 mt-1"></i>-->
<!--                    <p class="text-gray-700">{{ $t('portfolio.project3.highlights.h2') }}</p>-->
<!--                  </div>-->
<!--                  <div class="flex items-start gap-3">-->
<!--                    <i class="fi fi-rr-check text-gray-900 mt-1"></i>-->
<!--                    <p class="text-gray-700">{{ $t('portfolio.project3.highlights.h3') }}</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="relative">-->
<!--                <div class="bg-gray-200 aspect-square flex items-center justify-center">-->
<!--                  <div class="text-center space-y-4">-->
<!--                    <i class="fi fi-rr-home text-6xl text-gray-400"></i>-->
<!--                    <p class="text-sm text-gray-500">Apartment Interior</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="flex flex-wrap gap-2">-->
<!--              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">Revit</span>-->
<!--              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">AutoCAD</span>-->
<!--              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">Client Collaboration</span>-->
<!--              <span class="px-3 py-1 bg-white text-gray-800 text-sm font-medium">Space Optimization</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>

      <!-- Portfolio Note -->
      <div data-aos="fade-up" class="mt-20 text-center">
        <p class="text-gray-600 mb-6">{{ $t('portfolio.note') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ImageGalleryDialog } from '#components';
import studioProject1 from '@/assets/images/studio-project-1.png';
import studioProject2 from '@/assets/images/studio-project-2.png';
import studioProject3 from '@/assets/images/studio-project-3.png';
import studioProject4 from '@/assets/images/studio-project-4.png';
import studioProject5 from '@/assets/images/studio-project-5.png';
import studioFloorPlanPDF from '@/assets/images/studio-floor-plan.pdf';
import studioFloorPlanPng from '@/assets/images/studio-floor-plan.png';

const studioProjectImages = [
    studioProject1,
    studioProject2,
    studioProject3,
    studioProject4,
  studioFloorPlanPng,
  studioProject5,
];

const isDownloading = ref(false);

const downloadPDF = (pdfFile, fileName = 'oryan-malka-schwartz-project.pdf') => {
  isDownloading.value = true;

  setTimeout(() => {
    isDownloading.value = false;
  }, 600)
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = String(pdfFile);
  link.download = fileName;
  link.target = '_blank';

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const overlay = useOverlay();

const openImagesModal = (image, images, title) => {
  const modal = overlay.create(ImageGalleryDialog, {
    props: {
      title: title,
      image: image,
      images: images,
    },
  });
  modal.open();
}
</script>
