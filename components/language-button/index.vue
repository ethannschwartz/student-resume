<template>
<div @mouseover="isVisible=true" @mouseleave="isVisible=false" class="py-2 relative cursor-pointer flex items-end justify-center">
  <i class="fi fi-tr-world flex items-center"></i>
  <div
      v-if="isVisible"
      class="bg-white z-50 absolute top-full right-0 w-40 p-1 border-black border rounded-md shadow-md duration-150"
  >
    <button
        v-for="language in languages"
        @click="updateLanguage(language.value)"
        class="text-left w-full text-sm px-3 py-1 rounded hover:bg-zinc-100 active:bg-zinc-200"
        :class="locale === language.value ?  'font-bold' : 'opacity-75 hover:opacity-100' "
    >
      {{ language.label }}
    </button>
  </div>
</div>
</template>


<script setup>
const { setLocale, locale } = useI18n();

const isVisible = ref(false);

const updateLanguage = (language) => {
  setLocale(language);
  localStorage.setItem('language', language);
};

onMounted(() => {
  let languagePreference = localStorage.getItem('language');
  if(languagePreference !== 'en') {
    setLocale(languagePreference);
  }
})

const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Español",
    value: "es",
  },
  {
    label: "Português",
    value: "pt",
  },
  {
    label: "Français",
    value: "fr",
  },
  {
    label: "עברית",
    value: "he",
  },
  {
    label: "Deutsch",
    value: "de",
  },
  {
    label: "Italiano",
    value: "it",
  },
  {
    label: "Latin",
    value: "la",
  },
];

</script>