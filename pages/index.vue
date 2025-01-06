<template>
  <div>
    <header class="z-50 fixed top-0 left-0 right-0 bg-transparent backdrop-blur p-6 flex justify-between gap-6">
      <h5>{{ $t('Oryan Malka Schwartz') }}</h5>
      <Navbar
          :active-link="activeLink"
          :is-mobile-nav-open="isMobileNavOpen"
          @toggle="isMobileNavOpen=!isMobileNavOpen"
      />
    </header>
    <MobileNav
        class="duration-150"
        :class="{
          'translate-x-full': !isMobileNavOpen,
          'translate-x-0': isMobileNavOpen,
        }"
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
</script>
