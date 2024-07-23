<template>
  <footer class="fixed bottom-0 left-0 right-0 type-primary flex items-center justify-between p-4 md:px-16">
    <span class="block w-fit px-6 py-2 my-8 border border-black dark:border-white rounded-full">
      <a class="text-sm font-mono group flex items-center gap-1.5" href="mailto:e.schwartz@me.com">
        <i class="fi fi-rr-envelope"></i>
        <span class="group-hover:underline underline-offset-4">e.schwartz@me.com</span>
      </a>
    </span>
    <hr class="min-w-4 grow hidden md:block border-black dark:border-white"/>
    <div class="border-black dark:border-white border rounded-full px-6 py-2 my-8 flex items-center gap-4">
      <a v-for="link in socialLinks" :href="link.href" class="group">
        <i :class="link.iconClass" class="fi text-xl group-hover:text-pink-600"></i>
      </a>
    </div>
  </footer>
</template>

<script setup>
const githubLink = "https://github.com/ethannschwartz";
const linkedInLink = "https://www.linkedin.com/in/ethan-schwartz-69003022a/";

const socialLinks = [
  {
    iconClass: "fi-brands-github",
    href: githubLink,
  },
  {
    iconClass: "fi-brands-linkedin",
    href: linkedInLink,
  },
];
</script>