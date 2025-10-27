<template>
  <div class="type-primary">
    <Header :current-section="currentSection" />
    <main>
      <section id="summary" class="min-h-screen">
        <Summary />
      </section>
      <section id="education" class="min-h-screen">
        <Education />
      </section>
      <section id="skills" class="min-h-screen">
        <Skills />
      </section>
      <section id="experience" class="min-h-screen">
        <Exprience />
      </section>
      <section id="projects" class="min-h-screen">
        <Projects />
      </section>
    </main>
    <footer class="fixed bottom-0 left-0 right-0 px-12 py-6">
      <ul class="flex items-center justify-start gap-4">
        <li v-for="link in headerLinks">
          <a :href="link.href">
            <UTooltip :text="link.tooltip">
              <i :class="link.icon" class="text-black"></i>
            </UTooltip>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',
});
const { locale, setLocale } = useI18n()

const currentSection = ref('summary');

onMounted(() => {
  const sections = document.querySelectorAll('main > section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.id;
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  onUnmounted(() => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  });
});

const headerLinks = [
  {
    name: "email",
    icon: "fi fi-rr-envelope",
    tooltip: "Email me",
    href: "mailto:orianmalkao@gmail.com",
  },
  {
    name: "phone",
    icon: "fi fi-brands-whatsapp",
    tooltip: "Whatsapp",
    href: "mailto:orianmalkao@gmail.com",
  },
];
</script>