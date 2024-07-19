<template>
  <section id="experience" class="h-auto p-8 md:p-16 scroll-mt-8">
    <h4 data-aos="fade-up" class="font-bold type-secondary text-5xl md:text-5xl mb-4">Experience</h4>
    <ul class="gap-16 grid grid-cols-1 md:grid-cols-2">
      <li data-aos="fade-up" :data-aos-delay="100 * (i+1)" v-for="(experience, i) in experiences">
        <h5 class="w-fit font-bold type-primary group mb-4 flex items-center gap-2">
          <a :href="experience.link" class="group-hover:underline underline-offset-4">{{ experience.title }}</a>
          <i class="duration-150 fi fi-rr-arrow-right -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"></i>
        </h5>
        <img
            :src="experience.image"
            :alt="`${experience.title} preview`"
            class="overflow-hidden rounded-md mb-4"
        />
        <div data-aos="fade-up">
          <ul>
            <li
                data-aos="fade-up"
                class="type-primary"
                v-for="item in experience.achievements"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import seclockPreview from '../assets/images/Screen Shot 2024-07-17 at 1.09.00 PM.png';
import semestrPreview from '../assets/images/img.png';

const experiences = [
  {
    title: "SECLOCK",
    link: "https://seclock.com",
    image: seclockPreview,
    achievements: [
      "Vue",
      "Laravel",
      "TailwindCSS",
      "Inertia.js",
      "MySQL",
      "MVC Architecture",
      "RESTful API",
      "UI/UX Design",
      "Figma",
      "Cloudinary",
      "Agile (Jira/Atlassian)",
      "Debounce",
      "Asynchronous Functions",
      "Caching",
    ],
  },
  {
    title: "Semestr",
    link: "https://semestr.io",
    image: semestrPreview,
    achievements: [
      "Angular",
      "TailwindCSS",
      "TypeScript",
      ".NET Entity Framework",
      "ES6",
      "Redux",
      "RxJS",
      "NgRx/NgXs Store",
      "AWS",
      "IONIC Framework",
      "OpenAI GPT",
      "SEO",
      "HTML5",
      "JSON-LD",
    ],
  },
];
</script>