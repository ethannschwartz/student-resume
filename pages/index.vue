<template>
  <div>
    <header class="z-50 fixed top-0 left-0 right-0 bg-transparent backdrop-blur p-6 flex justify-between gap-6">
      <div class="flex items-center gap-4">
        <h5>{{ $t('Oryan Malka Schwartz') }}</h5>
        <UTooltip :text="$t('Email')">
          <a href="mailto:orianmalkao@gmail.com" class="group flex items-center text-base">
            <i class="fi-rr-envelope flex items-center opacity-75 group-hover:opacity-100" />
          </a>
        </UTooltip>
        <UTooltip :text="$t('Call')">
          <a href="tel:052-880-9027" class="group flex items-center text-base">
            <i class="fi-rr-phone-call flex items-center opacity-75 group-hover:opacity-100" />
          </a>
        </UTooltip>
      </div>
      <Navbar
          :active-link="activeLink"
          :is-mobile-nav-open="isMobileNavOpen"
          @toggle="isMobileNavOpen=!isMobileNavOpen"
      />
    </header>
    <MobileNav
        @select="isMobileNavOpen = false"
        class="lg:hidden"
        v-if="isMobileNavOpen"
        data-aos="slide-left"
        :active-link="activeLink"
    />
    <main :dir="locale === 'he' ? 'rtl' : 'ltr'" :class="locale !== 'he' ? '!text-left' : '!text-right'">
      <Summary id="Summary" />
      <Education id="Education" />
      <Skills id="Skills" />
      <Experience id="Experience" />
      <Projects id="Projects" />
    </main>
  </div>
</template>

<script setup>
const activeLink = ref('');
const pageSections = ref([]);
const isMobileNavOpen = ref(false);

const { locale } = useI18n();

const updateActiveLink = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeLink.value = entry.target.id;
    }
  });
};

let observer;

onMounted(() => {
  pageSections.value = Array.from(document.querySelectorAll('section'));
  observer = new IntersectionObserver(updateActiveLink, {
    root: null, // viewport
    threshold: 0.5, // 50% of the section is in view
  });

  pageSections.value.forEach((section) => observer.observe(section));

});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

useSeoMeta({
  title: 'Oryan Malka Schwartz',
});
</script>
