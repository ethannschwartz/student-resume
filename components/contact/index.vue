<template>
  <!-- Contact Form Section -->
  <div data-aos="fade-up" class="mt-32 mb-80 xl:mb-64">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">{{ $t('contact.title') }}</h2>
        <div class="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
      </div>

      <form
          ref="contactForm"
          action="https://formspree.io/f/mdkpelqv"
          method="POST"
          enctype="multipart/form-data"
          @submit="handleSubmit"
          class="space-y-6 p-8"
      >
        <div class="space-y-2">
          <label for="email" class="block text-sm font-semibold text-gray-700">
            {{ $t('contact.email') }} <span class="text-red-500">{{ $t('contact.emailRequired') }}</span>
          </label>
          <UInput
              id="email"
              v-model="formData.email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              size="xl"
              required
              :disabled="isSubmitting"
              class="w-full"
              color="neutral"
              icon="i-lucide-mail"
          />
        </div>

        <div class="space-y-2">
          <label for="message" class="block text-sm font-semibold text-gray-700">
            {{ $t('contact.message') }}
          </label>
          <UTextarea
              id="message"
              v-model="formData.message"
              name="message"
              class="w-full"
              color="neutral"
              :placeholder="$t('contact.messagePlaceholder')"
              :rows="4"
              size="xl"
              :disabled="isSubmitting"
          />
        </div>

        <UButton
            type="submit"
            color="neutral"
            size="xl"
            block
            :loading="isSubmitting"
            :disabled="!formData.email"
            icon="i-lucide-send"
        >
          {{ isSubmitting ? $t('contact.sending') : $t('contact.sendButton') }}
        </UButton>

        <p v-if="submitMessage" :class="submitSuccess ? 'text-green-600' : 'text-red-600'" class="text-sm text-center font-medium">
          {{ submitMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

// Contact form state
const contactForm = ref(null);
const formData = ref({
  email: '',
  message: '',
});
const selectedFiles = ref([]);
const isSubmitting = ref(false);
const submitMessage = ref('');
const submitSuccess = ref(false);

const handleFileChange = (event) => {
  selectedFiles.value = Array.from(event.target.files);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  isSubmitting.value = true;
  submitMessage.value = '';

  try {
    // Formspree will handle the actual submission via the native form submit
    // We just need to let it submit naturally
    const form = contactForm.value;
    const formDataToSend = new FormData(form);

    const response = await fetch('https://formspree.io/f/mdkpelqv', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      submitSuccess.value = true;
      submitMessage.value = t('contact.successMessage');

      // Reset form
      formData.value.email = '';
      formData.value.message = '';
      selectedFiles.value = [];
      if (form) form.reset();
    } else {
      submitSuccess.value = false;
      submitMessage.value = t('contact.errorMessage');
    }
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value = t('contact.networkError');
  } finally {
    isSubmitting.value = false;

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = '';
    }, 5000);
  }
};
</script>