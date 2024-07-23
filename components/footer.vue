<template>
  <footer class="fixed bottom-0 left-0 right-0 type-primary flex items-center justify-between p-4 md:px-16">
    <span class="block w-fit px-6 py-2 my-8 border border-black dark:border-white rounded-full">
      <UTooltip
          text="Email me"
          class="flex items-center"
          :popper="{
            placement: 'top',
          }"
      >
        <a class="text-sm font-mono group flex items-center gap-1.5" href="mailto:e.schwartz@me.com">
          <i class="fi fi-rr-envelope"></i>
          <span class="group-hover:underline underline-offset-4">e.schwartz@me.com</span>
        </a>
      </UTooltip>
    </span>
    <hr class="min-w-4 grow hidden md:block border-black dark:border-white"/>
    <ul class="border-black dark:border-white border rounded-full px-6 py-2 my-8 flex items-center gap-4">
      <li v-for="link in socialLinks" class="flex items-center">
        <UTooltip
            :text="link.tooltip"
            :popper="{
              placement: 'top',
            }"
        >
          <a  :href="link.href" class="group">
            <i :class="link.iconClass" class="fi text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400"></i>
          </a>
        </UTooltip>
      </li>
    </ul>
  </footer>
</template>

<script setup>
const githubLink = "https://github.com/ethannschwartz";
const linkedInLink = "https://www.linkedin.com/in/ethan-schwartz-69003022a/";

const socialLinks = [
  {
    iconClass: "fi-brands-github",
    href: githubLink,
    tooltip: "Github",
  },
  {
    iconClass: "fi-brands-linkedin",
    href: linkedInLink,
    tooltip: "LinkedIn",
  },
];
</script>