<script setup lang="ts">
import HomeJumbo from '@/components/HomeJumbo.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import JoinServer from '@/components/JoinServer.vue'
</script>

<template>
  <main>
    <HomeJumbo />

    <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-5 py-24 md:px-24 dark:text-white">
      <div class="w-full lg:w-1/2 text-center lg:text-left lg:pr-8">
        <h1 class="text-2xl font-bold">About LunaWolf Linux</h1>
        <div class="borderbox borderboxleft"></div>
        <br />
        <p>
          LunaWolf Linux is a lightweight, super minimal Linux Distro, built on top of Arch Linux.
          It provides only the bare minimum for the OS to run, with XFCE and SDDM for the desktop environment.
          <br /><br />
          We believe that your OS, should be your choice, so we don't include any pre-installed crap like LibreOffice, VSCode or anything else. We only provide you
          with a web browser, file manager, terminal, some system utilities and a text editor or two. The rest, is yours to choose, install and configure.
          <br /><br />
          Who are we to tell you what you should do with your OS? Do it you way!
        </p>
      </div>
      <div class="w-full lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
        <img src="https://raw.githubusercontent.com/archcraft-os/misc-files/main/flavors/xfce/themes/theme_1.png" />
      </div>
    </div>

    <div class="bg-ct-light-secondary dark:bg-ct-dark-secondary dark:text-white w-full px-5 py-24 md:px-12 ">
      <h1 class="text-4xl font-bold text-center">OS Features</h1>
      <div class="borderbox"></div>
      <br />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-[512px] lg:max-w-screen-xl mx-0 centerbox"
      >

        <FeatureCard
          title="Lightweight"
          icon="assets/icons/lightweight.svg"
          description="LunaWolf Linux can run on less than 1GB of ram, requiring less than 10GB of disk space to install. No added garbage or fancy tools"
        ></FeatureCard>

        <FeatureCard
          title="No Fancy Themes"
          icon="assets/icons/theme.svg"
          description="This OS is like my soul. Dark, dreary and colorless. Well, there are some colors, but don't expect it to look like neon city"
        ></FeatureCard>

        <FeatureCard
          title="Powerful"
          icon="assets/icons/strong.svg"
          description="With a rolling release, you can always be up to date with the latest and greatest. Did we mention built in AUR support?"
        ></FeatureCard>

        <FeatureCard
          title="Built On Arch"
          icon="assets/icons/arch.svg"
          description="Yes, I use arch. Deal with it. And now, so do you. Sort of. Built on the stability and reliability of Arch Linux"
        ></FeatureCard>

        <FeatureCard
          title="The OS you don't need"
          icon="assets/icons/question-mark.svg"
          description="There. I said it. This OS sucks, just like most of the other distro's out there. Your mission, if you accept, is to make it not suck"
        ></FeatureCard>

        <FeatureCard
          title="Potato PC Friendly"
          icon="assets/icons/potato.svg"
          description="Did we mention it's lightweight? We did? Good. Now, to answer the question... Can it run Crysis?"
        ></FeatureCard>
      </div>
    </div>

    <JoinServer />
  </main>
</template>
