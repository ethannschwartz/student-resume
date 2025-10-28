<template>
  <UHeader class="fixed top-0 left-0 right-0" menu="test" mode="slideover">
    <template #left>
      <div>
        <h5 class="font-bold">Oryan Malka-Schwartz</h5>
        <p class="text-xs type-secondary">052-880-9027</p>
      </div>
    </template>
    <template #right>
      <div class="flex items-center gap-6">
        <ul class="hidden lg:flex items-center justify-end gap-4">
          <li v-for="link in sections" :key="link.href">
            <UTooltip :text="link.tooltip" :delay-duration="1000">
              <a :href="link.href" class="duration-300">
                <div class="w-fit relative">
                  {{link.name}}
                  <hr class="duration-200 border border-gray-500" :class="currentSection === link.href.substring(1) ? 'w-full opacity-100' : 'w-0 opacity-0'"/>
                </div>
              </a>
            </UTooltip>
          </li>
        </ul>
        <UDropdownMenu :items="languages" :content="{ side: 'bottom', align: 'end' }">
          <UButton color="neutral" variant="ghost" trailing-icon="i-lucide-globe" />
        </UDropdownMenu>
      </div>
    </template>
  </UHeader>
</template>

<script setup>

defineProps(['currentSection']);

const languages = ref([
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'עברית',
    value: 'he',
  }
])

const sections = [
  {
    name: 'About me',
    href: '#summary',
    tooltip: "Learn about my journey and passion for architecture.",
  },
  {
    name: 'Education',
    href: '#education',
    tooltip: "See my academic background and architectural studies.",
  },
  {
    name: 'Skills',
    href: '#skills',
    tooltip: "Explore my architectural and technical skills.",
  },
  // {
  //   name: 'Experience',
  //   href: '#experience',
  //   tooltip: "Review my professional experiences in architecture.",
  // },
  {
    name: 'Portfolio',
    href: '#portfolio',
    tooltip: "Browse my academic and personal architectural portfolio.",
  },
  {
    name: 'Contact',
    href: '#contact',
    tooltip: "Let's get in touch.",
  },
];

</script>