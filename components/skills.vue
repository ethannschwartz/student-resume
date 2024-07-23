<template>
  <article id="skills" class="scroll-mt-12 p-4 md:p-16 py-36 grid grid-cols-1 md:grid-cols-2">
    <div class="mb-4" data-aos="fade-up" v-for="category in skillsArray">
      <h5 class="mb-4 font-bold text-3xl type-secondary">{{ category.title }}</h5>
      <ul>
        <li data-aos="fade-up" class="flex items-center gap-2 type-primary" v-for="skill in category.skills">
          <i class="fi fi-rr-check text-xs"></i>
          {{ skill.name }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
const skillsArray = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: "https://path-to-logo/javascript-logo.png" },
      { name: "TypeScript", logo: "https://path-to-logo/typescript-logo.png" },
      { name: "PHP", logo: "https://path-to-logo/php-logo.png" },
      { name: "Python", logo: "https://path-to-logo/python-logo.png" },
      { name: "SQL", logo: "https://path-to-logo/sql-logo.png" },
      { name: "HTML5", logo: "https://path-to-logo/html5-logo.png" },
      { name: "CSS", logo: "https://path-to-logo/css-logo.png" }
    ]
  },
  {
    title: "Frameworks and Libraries",
    skills: [
      { name: "Vue.js", logo: "https://path-to-logo/vue-logo.png" },
      { name: "Nuxt.js", logo: "https://path-to-logo/nuxt-logo.png" },
      { name: "Angular", logo: "https://path-to-logo/angular-logo.png" },
      { name: "Laravel", logo: "https://path-to-logo/laravel-logo.png" },
      { name: "Inertia.js", logo: "https://path-to-logo/inertia-logo.png" },
      { name: "Redux", logo: "https://path-to-logo/redux-logo.png" },
      { name: "NgRx", logo: "https://path-to-logo/ngrx-logo.png" },
      { name: "RxJS", logo: "https://path-to-logo/rxjs-logo.png" },
      { name: "NgXs", logo: "https://path-to-logo/ngxs-logo.png" },
      { name: "TailwindCSS", logo: "https://path-to-logo/tailwindcss-logo.png" },
      { name: "Node.js", logo: "https://path-to-logo/nodejs-logo.png" }
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: ".NET Entity Framework", logo: "https://path-to-logo/dotnet-logo.png" },
      { name: "REST APIs", logo: "https://path-to-logo/rest-api-logo.png" },
      { name: "AWS", logo: "https://path-to-logo/aws-logo.png" },
      { name: "CI/CD", logo: "https://path-to-logo/cicd-logo.png" }
    ]
  },
  {
    title: "Tools and Platforms",
    skills: [
      { name: "Jira/Atlassian", logo: "https://path-to-logo/jira-logo.png" },
      { name: "Figma", logo: "https://path-to-logo/figma-logo.png" },
      { name: "Cloudinary", logo: "https://path-to-logo/cloudinary-logo.png" },
      { name: "SEO", logo: "https://path-to-logo/seo-logo.png" },
      { name: "Google Search Console", logo: "https://path-to-logo/google-search-console-logo.png" },
      { name: "OpenAI GPT", logo: "https://path-to-logo/openai-logo.png" },
      { name: "Stripe", logo: "https://path-to-logo/stripe-logo.png" }
    ]
  },
  {
    title: "Development Techniques and Practices",
    skills: [
      { name: "MVC Architecture", logo: "https://path-to-logo/mvc-logo.png" },
      { name: "SPA", logo: "https://path-to-logo/spa-logo.png" },
      { name: "Agile Development", logo: "https://path-to-logo/agile-logo.png" },
      { name: "Debounce", logo: "https://path-to-logo/debounce-logo.png" },
      { name: "Asynchronous functions", logo: "https://path-to-logo/async-logo.png" },
      { name: "UX/UI Design", logo: "https://path-to-logo/ux-ui-logo.png" },
      { name: "Real-time data fetching", logo: "https://path-to-logo/realtime-logo.png" },
      { name: "Performance optimization", logo: "https://path-to-logo/performance-logo.png" },
      { name: "Technical SEO", logo: "https://path-to-logo/technical-seo-logo.png" },
      { name: "Schema implementation", logo: "https://path-to-logo/schema-logo.png" },
      { name: "Dynamic content handling", logo: "https://path-to-logo/dynamic-content-logo.png" }
    ]
  },
  {
    title: "Database Management",
    skills: [
      { name: "MySQL", logo: "https://path-to-logo/mysql-logo.png" },
      { name: "PostgreSQL", logo: "https://path-to-logo/postgresql-logo.png" }
    ]
  }
];

// Note: Replace the placeholder URLs (https://path-to-logo) with the actual URLs to the logos.

</script>