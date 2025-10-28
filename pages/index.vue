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
<!--      <section id="experience" class="min-h-screen">-->
<!--        <Exprience />-->
<!--      </section>-->
      <section id="portfolio" class="min-h-screen">
        <Portfolio />
      </section>
      <section id="contact" class="h-full">
        <Contact />
      </section>
    </main>
    <footer class="fixed bottom-0 left-0 right-0 px-12 py-6 bg-white/80 backdrop-blur-sm border-t border-gray-200 z-20">
      <ul class="flex items-center justify-end gap-2">
        <li v-for="link in headerLinks" :key="link.name">
          <UTooltip :text="link.tooltip" :delay-duration="0">
            <UButton
              :to="link.href"
              :icon="link.icon"
              color="neutral"
              variant="ghost"
              target="_blank"
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
  const sectionsArray = Array.from(sections);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0.3, 0.7],
  };

  const observerCallback = (entries) => {
    // Sort entries by intersection ratio to prioritize most visible section
    const sortedEntries = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (sortedEntries.length > 0) {
      const mostVisible = sortedEntries[0];

      // Update current section to the most visible one
      if (mostVisible.intersectionRatio >= 0.3) {
        currentSection.value = mostVisible.target.id;
      }
    }
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Handle scroll to detect when user reaches bottom (for last section)
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If user is within 100px of the bottom, activate last section
    if (documentHeight - scrollPosition < 100) {
      const lastSection = sectionsArray[sectionsArray.length - 1];
      if (lastSection) {
        currentSection.value = lastSection.id;
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  onUnmounted(() => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
    window.removeEventListener('scroll', handleScroll);
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