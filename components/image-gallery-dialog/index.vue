<template>
  <UModal fullscreen :title="title">
    <template #body>
      <div class="w-full overflow-hidden my-auto max-h-full flex items-center justify-center">
        <img :src="currentImage" alt="" class="h-full"  />
      </div>
    </template>
    <template #footer>
      <ul class="flex items-center gap-3">
        <li v-for="item in images">
          <button
              @click="handleClick(item)"
              :disabled="item === currentImage"
              class="disabled:opacity-50 enabled:hover:ring-2 ring-blue-500 duration-150"
          >
            <img :src="item" alt="" class="h-24 w-24 object-cover" />
          </button>
        </li>
      </ul>
    </template>
  </UModal>
</template>

<script setup>
const props = defineProps({
  image: String,
  images: Array,
  title: String,
})

const currentImage = ref(props.image);

function handleClick(image) {
  currentImage.value = image;
}
</script>