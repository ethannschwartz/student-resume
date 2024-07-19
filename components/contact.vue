<template>
  <section id="contact" class="border-t grid md:grid-cols-2 px-8 py-16 md:p-16 md:py-36 !pb-48  gap-16">
    <div>
      <h5 class="type-secondary font-extrabold text-5xl">Let's chat</h5>
      <p class="type-primary text-sm">
        If you liked what you read and you think I could be of service, don't hesitate to reach out.
      </p>
    </div>
<!--    write me a contact me form  -->
    <form class="flex flex-col gap-6 max-w-md w-full">
      <input class="input-primary" type="text" placeholder="Name">
      <input class="input-primary" type="email" placeholder="Email">
      <textarea class="input-primary" placeholder="Message"></textarea>
      <button class="btn-primary" type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup></script>