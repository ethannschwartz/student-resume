<template>
  <section id="contact" class="grid md:grid-cols-2 px-4 py-16 md:p-16 md:py-36 !pb-48  gap-16">
    <div>
      <h5 data-aos="fade-up" class="type-secondary font-extrabold text-5xl">Let's chat</h5>
      <p :data-aos-delay="50" data-aos="fade-up" class="type-primary text-sm">
        If you liked what you read and you think I could be of service, don't hesitate to reach out.
      </p>
    </div>
<!--    write me a contact me form  -->
    <form
        action="https://formspree.io/f/mldrgrnb"
        method="POST"
        class="type-primary flex flex-col gap-6 max-w-md w-full"
    >
      <input v-model="form.name" class="input-primary" type="text" name="name" placeholder="Name">
      <input v-model="form.email" class="input-primary" type="email" name="email" placeholder="Email">
      <textarea v-model="form.message" class="input-primary resize-none" name="message" rows="6" placeholder="Message"></textarea>
      <button
          :disabled="!(form.name && form.email && form.message)"
          class="btn-primary"
          type="submit"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script setup>
const form = reactive({
  name: "",
  email: "",
  message: "",
});
</script>