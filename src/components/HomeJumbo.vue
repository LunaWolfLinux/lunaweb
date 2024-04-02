<template>
  <section class="ct-light-secondary dark:bg-ct-dark-secondary dark:text-white">
    <div class="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The NO Bull<span class="blur hover:blur-none">shit</span> Linux Distro</h1>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        Your System, Your Choice. Make it your own
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <RouterLink to="/download" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Download Now <FontAwesomeIcon :icon="faDownload" class="ml-2" />
        </RouterLink>
        <a href="https://ko-fi.com/hypherionsa" target="_blank" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
          Donate <FontAwesomeIcon :icon="faMoneyBill" class="ml-2" />
        </a>
      </div>
    </div>
  </section>

</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
</script>