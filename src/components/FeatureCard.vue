<template>
  <div
    class="bg-ct-card-light dark:bg-ct-card-dark border border-ct-card shadow-md rounded-lg px-5 py-3 flex items-center text-left dark:text-white"
  >
    <div class="w-full md:w-3/4">
      <h2 class="text-md font-semibold">{{ props.title }}</h2>
      <p class="text-gray-900 dark:text-gray-400 text-sm se">{{ props.description }}</p>
    </div>

    <div class="w-1/4 md:w-1/4 flex justify-end">
      <img :src="icon" v-if="icon" class="featicon" alt="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['title', 'description', 'icon'])
</script>