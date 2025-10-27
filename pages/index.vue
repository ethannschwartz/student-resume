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
    <footer class="fixed bottom-0 left-0 right-0 px-12 py-6 bg-white/80 backdrop-blur-sm border-t border-gray-200 z-20">
      <ul class="flex items-center justify-start gap-6">
        <li v-for="link in headerLinks" :key="link.name">
          <UTooltip :text="link.tooltip" :delay-duration="0">
            <UButton
              :to="link.href"
              :icon="link.icon"
              color="neutral"
              variant="ghost"
              target="_blank"
              class="hover:scale-110 transition-transform duration-200"
            />
          </UTooltip>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',
});

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

  onBeforeUnmount(() => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  });
});

const headerLinks = [
  {
    name: "email",
    icon: "i-lucide-mail",
    tooltip: "Email me",
    href: "mailto:Oryanschwartz@gmail.com",
  },
  {
    name: "whatsapp",
    icon: "i-lucide-message-circle",
    tooltip: "WhatsApp",
    href: "https://wa.me/972528809027",
  },
  {
    name: "phone",
    icon: "i-lucide-phone",
    tooltip: "Call me",
    href: "tel:+972528809027",
  },
];
</script>