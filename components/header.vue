<template>
  <header class="bg-zinc-tier-1/10 backdrop-blur z-40 flex items-center justify-between fixed top-0 left-0 right-0 py-6 px-16">
    <div data-aos="fade" data-aos-delay="100" class="flex items-center gap-2">
      <a href="#" class="text-pink-600 flex items-center gap-2">
        <pre>Ethan Schwartz<span class="flex items-center text-xs type-secondary font-mono">053-324-4272 <i class="fi fi-rr-phone-call"></i></span></pre>
      </a>

    </div>
    <ul class="flex items-center gap-4">
      <li class="type-primary hover:text-pink-600">
        <button @click="toggleDarkMode()" class="flex items-center">
          <i v-if="isDarkMode" class="fi fi-rr-sun"></i>
          <i v-else class="fi fi-rr-moon"></i>
        </button>
      </li>
      <li class="type-primary hover:text-pink-600" data-aos="fade-down" data-aos-delay="100">
        <a href="#about">about</a>
      </li>
      <li class="type-primary hover:text-pink-600" data-aos="fade-down" data-aos-delay="150">
        <a href="#skills">skills</a>
      </li>
      <li class="type-primary hover:text-pink-600" data-aos="fade-down" data-aos-delay="200">
        <a href="#experience">experience</a>
      </li>
      <li class="type-primary hover:text-pink-600" data-aos="fade-down" data-aos-delay="250">
        <a href="#contact">contact</a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import {useState} from "#app";

let isDarkMode = useState('isDarkMode', () => false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
}
</script>