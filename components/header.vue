<template>
  <header class="bg-zinc-tier-1/10 backdrop-blur z-40 flex items-center justify-between fixed top-0 left-0 right-0 py-4 px-8 md:py-6 md:px-16">
    <div data-aos="fade" data-aos-delay="100" class="flex items-center gap-2">
      <a href="#" class="text-emerald-600 flex items-center gap-2">
        <pre>Eitan Schwartz<span class="flex items-center text-xs type-secondary font-mono">(+972) 053-324-4272 <i class="fi fi-brands-whatsapp"></i></span></pre>
      </a>
    </div>
    <button @click="toggleMobileMenu()" class="type-primary flex flex-col gap-1.5 items-center md:hidden">
      <i class="fi fi-rr-grip-lines"></i>
    </button>
    <ul class="hidden md:flex items-center gap-4">
      <li data-aos="fade-down" class="type-primary hover:text-emerald-600">
        <button @click="toggleDarkMode()" class="flex items-center">
          <i v-if="isDarkMode" class="fi fi-rr-sun"></i>
          <i v-else class="fi fi-rr-moon"></i>
        </button>
      </li>


      <li
          v-for="(section, i) in sections"
          class="type-primary hover:text-emerald-600"
          data-aos="fade-down"
          :data-aos-delay="100 + (i * 50)"
      >
        <a :href="'#'+section">{{ section }}</a>
      </li>
      <li data-aos="fade-down" :data-aos-delay="100 + (sections.length * 50)">
        <a
            href="/assets/files/Resume-Ethan-Schwartz.pdf"
            class="text-xs font-mono flex items-center gap-1 border border-black dark:border-white bg-transparent text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full px-4 py-1"
        >
          <i class="fi fi-rr-resume"></i>
          resume
        </a>
      </li>
    </ul>
    <Transition name="slide-left">
      <div v-if="isMenuSeen" class="bg-white dark:bg-zinc-800 p-8 md:p-16 fixed inset-0 h-screen w-screen z-50">
        <div class="type-primary mb-4 flex justify-end items-center">
          <button>
            <i @click="toggleMobileMenu()" class="fi fi-rr-cross"></i>
          </button>
        </div>
        <ul class="flex flex-col w-full gap-2">
          <li
              v-for="(section, i) in sections"
              data-aos="fade-left"
              :data-aos-delay="100 + (i * 50)"
              class="block type-primary w-full"
          >
            <a
                @click="isMenuSeen = false"
                :href="'#'+section"
                class="font-medium block active:bg-zinc-100 dark:active:bg-zinc-700 p-2 rounded-md w-full"
            >
              {{ section }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
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

const isMenuSeen = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
}

const toggleMobileMenu = () => {
  isMenuSeen.value = !isMenuSeen.value;
}
</script>

<style scoped>
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.15s ease-in-out;
}

.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(100%);
}

.slide-left-enter-to, .slide-left-leave-from {
  transform: translateX(0);
}
</style>