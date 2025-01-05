<template>
  <div>
    <header class="fixed top-0 left-0 right-0 bg-transparent backdrop-blur p-6 flex justify-between gap-6">
      <h5>{{ $t('Oryan Malka Schwartz') }}</h5>
      <Navbar :active-link="activeLink" />
    </header>
    <main>
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
const sections = ref([]);

const updateActiveLink = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeLink.value = entry.target.id;
    }
  });
};

let observer;

onMounted(() => {
  sections.value = Array.from(document.querySelectorAll('section'));
  observer = new IntersectionObserver(updateActiveLink, {
    root: null, // viewport
    threshold: 0.5, // 50% of the section is in view
  });

  sections.value.forEach((section) => observer.observe(section));

});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
