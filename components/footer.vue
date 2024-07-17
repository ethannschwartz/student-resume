<template>
  <footer class="bg-zinc-tier-1 type-primary flex justify-between px-16 border-t relative">
    <span class="block w-fit py-4">
      <a class="text-sm font-mono group flex items-center gap-1.5" href="mailto:e.schwartz@me.com">
        <i class="fi fi-rr-envelope"></i>
        <span class="group-hover:underline underline-offset-4">e.schwartz@me.com</span>
      </a>
    </span>
    <div class="flex items-center gap-4">
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