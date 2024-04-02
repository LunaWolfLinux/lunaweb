<template>
  <div class="w-full px-5 py-24 md:px-12 text-center">
    <h5 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
      Join the Community!
    </h5>
    <div class="borderbox"></div>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      Who are we kidding? No one uses this crap... Well if you do, then join us on Discord
    </p>
    <div
      class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse text-white"
    >
      <a
        href="https://discord.lunawolf.cc"
        target="_blank"
        class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
      >
        <FontAwesomeIcon :icon="faDiscord" class="mr-1" />
        Join our Discord
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>