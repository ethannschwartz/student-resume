<template>
  <section class="p-8 h-screen flex flex-col items-center justify-center w-screen bg-gradient-to-b from-teal-100 dark:from-teal-950 to-transparent dark:to-zinc-900">
    <h1 class="font-extrabold text-4xl md:text-7xl type-primary mb-4 md:mb-8">
      Nuxt Template
    </h1>
    <ul class="mb-8 p-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <li
          v-for="(item, i) in included"
          data-aos="fade-down"
          :data-aos-delay="(i * 50) + 100"
      >
        <div class="block hover:scale-[1.02] duration-150 hover:shadow-xl !shadow-teal-100 dark:!shadow-teal-900 w-full border h-full border-black dark:border-teal-400 rounded-xl p-4  md:p-8">
          <h2 class="text-black dark:text-teal-400 font-bold">{{ item.name }}</h2>
          <p class="dark:text-white">{{ item.description }}</p>
        </div>
      </li>
    </ul>
    <div class="bg-black rounded-md text-white font-mono p-8">
      Check out the <a class="font-mono text-teal-400 hover:underline underline-offset-4" href="https://github.com/ethannschwartz/nuxt-template/blob/master/README.md">Github Repo</a> for more documentation
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: "The Ultimate Nuxt Template",
  description: "Equipped with TailwindCSS, NuxtUI, Sitemap.xml, AOS, and ",
  keywords: "Enter keywords here",
});

let included = [
  {
    name: "TailwindCSS",
    description: "Style elements using classes linked with auto-generated CSS.",
  },
  {
    name: "Nuxt Sitemap",
    description: "Add files to the pages directory to see them automatically added to /sitemap.xml",
  },
  {
    name: "AOS",
    description: "Add fades, flips, slides, and more with Animate on Scroll. just add data-aos=\"\"",
  },
  {
    name: "Nuxt UI",
    description: "Select from a variety of components offered by Nuxt UI.",
  },
]
</script>