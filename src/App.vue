<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useColorMode } from '@vueuse/core'
import WOLF_HEAD from './assets/img/lunawolf-logo.svg'

const colorMode = useColorMode()
const themeColor = computed(() => colorMode.value === 'dark' ? '#18181b' : '#ffffff')

useHead({
  meta: [
    { name: 'theme-color', content: themeColor }
  ]
})
</script>

<template>
  <Suspense>
    <UApp>
      <SiteHeader />

      <UMain>
        <RouterView />
      </UMain>

      <USeparator>
        <template #default>
          <img
            :src="WOLF_HEAD"
            class="w-20"
            alt="LunaWolf Logo"
          >
        </template>
      </USeparator>

      <UFooter>
        <template #left>
          <p class="text-sm text-muted">
            © 2024 - {{ new Date().getFullYear() }} First Dark Development. Licensed under GPL-3.0
          </p>
        </template>

        <template #right>
          <UButton
            to="https://github.com/LunaWolfLinux/lunawolf"
            target="_blank"
            icon="simple-icons:github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />

          <UButton
            to="https://github.com/LunaWolfLinux/lunawolf/issues"
            target="_blank"
            icon="i-lucide-bug"
            aria-label="Report Bug"
            color="neutral"
            variant="ghost"
          />

          <UButton
            to="https://discord.firstdark.dev"
            target="_blank"
            icon="simple-icons:discord"
            aria-label="Discord"
            color="neutral"
            variant="ghost"
          />
        </template>
      </UFooter>
    </UApp>
  </Suspense>
</template>
