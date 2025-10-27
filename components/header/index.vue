<template>
  <header class="z-10 fixed top-0 left-0 right-0 bg-white/50 backdrop-blur py-6 px-12 flex justify-between gap-6">
    <div>
      <h5 class="font-extrabold">Oryan Malka-Schwartz</h5>
      <p class="text-xs type-secondary">052-880-9027</p>
    </div>
    <ul class="flex items-center justify-end gap-4">
      <li v-for="link in sections">
        <a :href="link.href" class="duration-300">
          <UTooltip :text="link.tooltip" :open-delay="1000">
            <div class="w-fit relative">
              {{link.name}}
              <hr class="duration-200 border-black" :class="currentSection === link.href.substring(1) ? 'w-full opacity-100' : 'w-0 opacity-0'"/>
            </div>
          </UTooltip>
        </a>
      </li>
      <li>
        <UDropdown
            :items="languages"
            mode="hover"
            :popper="{ placement: 'bottom-end' }"
            class="flex items-center"
        >
          <i class="fi fi-rr-globe flex items-center justify-center"></i>
        </UDropdown>
      </li>
    </ul>
  </header>
</template>

<script setup>

defineProps(['currentSection']);

const language = useState("language", () => "english")

const languages = [
  [
      {
        label: 'English',
        click: () => {
          useState('language', () => "english")
        }
      },
      {
        label: 'עברית',
        click: () => {
          useState('language', () => "hebrew")
        }
      }
    ]
];

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
  {
    name: 'Experience',
    href: '#experience',
    tooltip: "Review my professional experiences in architecture.",
  },
  {
    name: 'Projects',
    href: '#projects',
    tooltip: "Browse my academic and personal architectural projects.",
  },
];

</script>