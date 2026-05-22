<template>
  <UHeader
    to="/"
    mode="drawer"
  >
    <template #title>
      <img
        :src="LOGO"
        class="h-10 w-auto"
        alt="LunaWolf Logo"
      >
    </template>

    <UNavigationMenu
      color="info"
      :external-icon="false"
      :items="items"
      :highlight="true"
    />

    <template #right>
      <UButton
        label="Download"
        trailing-icon="i-lucide-download"
        to="/download"
        color="success"
        variant="subtle"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :external-icon="false"
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import LOGO from '../assets/img/lunawolf.svg'
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Download',
    icon: 'i-lucide-download',
    to: '/download'
  },
  {
    label: 'GitHub',
    icon: 'simple-icons:github',
    to: "https://github.com/LunaWolfLinux",
    target: '_blank'
  },
  {
    label: 'Donate',
    icon: 'i-lucide-hand-coins',
    to: "https://ko-fi.com/hypherionsa",
    target: '_blank'
  },
  {
    label: 'Discord',
    icon: 'simple-icons:discord',
    to: "https://ko-fi.com/hypherionsa",
    target: '_blank'
  }
])
</script>
