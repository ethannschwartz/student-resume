<template>
  <ul class="w-full flex flex-col items-center justify-end gap-3">
    <li v-for="link in sections" :key="link.href" class="w-full !divide-y divide-gray-400">
      <UTooltip :text="link.tooltip" :delay-duration="1000">
        <a :href="link.href" class="active:bg-gray-100 p-1 flex w-full justify-end duration-300">
          <div class="text-lg font-medium text-right w-fit relative">
            {{link.name}}
          </div>
        </a>
      </UTooltip>
    </li>
  </ul>
</template>

<script setup>
const { t } = useI18n();

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
</script>