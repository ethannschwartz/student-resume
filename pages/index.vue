<template>
  <section class="p-4 md:p-8 h-auto flex flex-col items-center justify-center w-screen">
    <div class="text-center mb-4 md:mb-8">
      <Logo class="w-24" />
      <h1 class="font-extrabold text-4xl md:text-7xl type-primary mb-4">Nuxt Template</h1>
      <p class="opacity-75 type-primary text-base font-light">This is my personal project kickstarter</p>
    </div>
    <ul class="mb-8 p-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <li
          v-for="(item, i) in included"
          data-aos="flip-down"
          :data-aos-delay="(i * 50) + 100"
      >
        <UTooltip text="View documentation">
          <a :href="item.href" class="block hover:scale-[1.02] duration-150 hover:shadow-md !shadow-teal-600/20 dark:!shadow-teal-900 w-full border h-full border-teal-600/25 dark:hover:border-white hover:border-black dark:border-teal-400 rounded-xl p-4  md:p-8">
            <img :src="item.icon" alt="" class="w-auto h-8 mb-2">
            <h2 class="text-black text-lg dark:text-teal-400 font-bold">{{ item.name }}</h2>
            <p class="dark:text-white">{{ item.description }}</p>
          </a>
        </UTooltip>
      </li>
    </ul>
    <div class="bg-black rounded-md text-white font-mono p-8 m-4 mt-0">
      For further documentation, please visit the
      <UTooltip text="Visit this Github repo" :popper="{placement: 'top'}">
        <a class="font-mono text-teal-400 hover:underline underline-offset-4" href="https://github.com/ethannschwartz/nuxt-template/blob/master/README.md">GitHub Repository</a>
      </UTooltip>
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
    href: "https://tailwindcss.com/",
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    description: "Style elements efficiently using classes linked with auto-generated CSS for streamlined and responsive design.",
  },
  {
    name: "Nuxt Sitemap",
    href: "https://nuxtseo.com/",
    icon: "https://raw.githubusercontent.com/nuxt/modules/main/icons/simple-sitemap.svg",
    description: "Easily manage your site's structure; simply add files to the pages directory to have them included in /sitemap.xml.",
  },
  {
    name: "AOS (Animate on Scroll)",
    href: "https://nuxt.com/modules/aos",
    icon: "https://ipx.nuxt.com/s_80,f_auto/gh/nuxt/modules/main/icons/aos.png",
    description: "Enhance your site's interactivity with fades, flips, slides, and more by adding data-aos=\"<name>\" to your elements.",
  },
  {
    name: "Nuxt UI",
    href: "https://ui.nuxt.com/",
    icon: "https://nuxtjs.ir/logos/nuxt-square.svg",
    description: "Access a diverse selection of components offered by Nuxt UI for a consistent and intuitive user experience.",
  },
  // {
  //   name: "Flaticon",
  //   href: "https://www.flaticon.com/",
  //   icon: "https://www.flaticon.com/media/dist/min/img/logos/flaticon-color-negative.svg",
  //   description: "Integrate a wide array of icons into your project seamlessly with Flaticon.",
  // },
]
</script>