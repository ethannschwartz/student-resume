<template>
  <header class="bg-zinc-tier-1/10 backdrop-blur z-40 flex items-center justify-between fixed top-0 left-0 right-0 py-6 px-16">
    <div data-aos="fade" data-aos-delay="100" class="flex items-center gap-2">
      <a href="#" class="text-pink-600 flex items-center gap-2">
        <pre>Ethan Schwartz<span class="flex items-center text-xs type-secondary font-mono">(+972) 053-324-4272 <i class="fi fi-brands-whatsapp"></i></span></pre>
      </a>

    </div>
    <ul class="flex items-center gap-4">
      <li data-aos="fade-down" class="type-primary hover:text-pink-600">
        <button @click="toggleDarkMode()" class="flex items-center">
          <i v-if="isDarkMode" class="fi fi-rr-sun"></i>
          <i v-else class="fi fi-rr-moon"></i>
        </button>
      </li>
      <li
          v-for="(section, i) in sections"
          class="type-primary hover:text-pink-600"
          data-aos="fade-down"
          :data-aos-delay="100 + (i * 50)"
      >
        <a :href="'#'+section">{{ section }}</a>
      </li>
      <li data-aos="fade-down" :data-aos-delay="100 + (sections.length * 50)">
        <a
            href="/assets/files/Resume-Ethan-Schwartz.pdf"
            class="text-xs font-mono flex items-center gap-1.5 border border-black dark:border-white bg-transparent text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full px-4 py-1"
        >
          <i class="fi fi-rr-download"></i>
          resume
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import {useState} from "#app";

let isDarkMode = useState('isDarkMode', () => false);

const sections = [
    "about",
    "skills",
    "experience",
    "contact",
];

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
}
</script>