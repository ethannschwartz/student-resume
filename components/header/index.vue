<template>
  <UHeader class="fixed top-0 left-0 right-0" :menu="true" mode="slideover">
    <template #body>
      <div>
        <NavMenu />
      </div>
    </template>
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
        <UDropdownMenu :items="languages" :content="{ side: 'bottom', align: 'end' }" @update:open="(isOpen) => isOpen && updateLanguageMenu()">
          <UButton color="neutral" variant="ghost" trailing-icon="i-lucide-globe" />
        </UDropdownMenu>
      </div>
    </template>
  </UHeader>
</template>

<script setup>
const { locale, locales, setLocale, t } = useI18n();

defineProps(['currentSection']);

// Create language menu items with click handlers
const languages = computed(() => [
  [
    {
      label: 'English',
      value: 'en',
      icon: locale.value === 'en' ? 'i-lucide-check' : undefined,
      onClick: () => switchLanguage('en')
    },
    {
      label: 'עברית',
      value: 'he',
      icon: locale.value === 'he' ? 'i-lucide-check' : undefined,
      onClick: () => switchLanguage('he')
    }
  ]
])

// Function to switch language
const switchLanguage = async (newLocale) => {
  await setLocale(newLocale);
  // Force update the body direction for RTL/LTR
  document.documentElement.dir = newLocale === 'he' ? 'rtl' : 'ltr';
}

// Update language menu when opened
const updateLanguageMenu = () => {
  // This will trigger the computed property to update
}

const sections = computed(() => [
  {
    name: t('nav.aboutMe'),
    href: '#summary',
    tooltip: t('nav.aboutMeTooltip'),
  },
  {
    name: t('nav.education'),
    href: '#education',
    tooltip: t('nav.educationTooltip'),
  },
  {
    name: t('nav.skills'),
    href: '#skills',
    tooltip: t('nav.skillsTooltip'),
  },
  // {
  //   name: t('nav.experience'),
  //   href: '#experience',
  //   tooltip: t('nav.experienceTooltip'),
  // },
  {
    name: t('nav.portfolio'),
    href: '#portfolio',
    tooltip: t('nav.portfolioTooltip'),
  },
  {
    name: t('nav.contact'),
    href: '#contact',
    tooltip: t('nav.contactTooltip'),
  },
]);

// Set initial direction based on locale
onMounted(() => {
  document.documentElement.dir = locale.value === 'he' ? 'rtl' : 'ltr';
})

</script>