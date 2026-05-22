<template>
  <div>
    <UPageHero
      class="ct-card"
      description="Your System, Your Choice. Make it your own "
      :links="[{
        label: 'Download Now',
        to: '/download',
        trailingIcon: 'i-lucide-download',
        variant: 'subtle',
        size: 'xl'
      }, {
        label: 'Donate',
        to: 'https://ko-fi.com/hypherionsa',
        target: '_blank',
        icon: 'i-lucide-hand-coins',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    >
      <template #title>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          The NO Bull<span class="blur hover:blur-none transition-all">shit</span> Linux Distro
        </h1>
      </template>
    </UPageHero>

    <UPageSection>
      <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between dark:text-white">
        <div class="w-full lg:w-1/2 text-center lg:text-left lg:pr-8">
          <h1 class="text-2xl font-bold">
            About LunaWolf Linux
          </h1>
          <div class="borderbox borderboxleft" />
          <br>
          <p>
            LunaWolf Linux is a lightweight, super minimal Linux Distro, built on top of Arch Linux.
            It provides only the bare minimum for the OS to run, with KDE Plasma for the desktop environment.
            <br><br>
            We do include some goodies like AUR and Flatpak support, through the software center
            <br><br>
            We believe that your OS, should be your choice, so we don't include any pre-installed crap like LibreOffice, VSCode or anything else. We only provide you
            with a web browser, file manager, terminal, some system utilities and a text editor or two. The rest, is yours to choose, install and configure.
            <br><br>
            Who are we to tell you what you should do with your OS? Do it you way!
          </p>
        </div>

        <div class="w-full lg:w-1/2 mt-8 lg:mt-0 hidden lg:block">
          <img
            src="/assets/img/plasma.webp"
            alt="LunaWolf Linux"
          >
        </div>
      </div>
    </UPageSection>

    <UPageSection class="ct-card">
      <div class="dark:text-white w-full">
        <h1 class="text-4xl font-bold text-center">OS Features</h1>
        <div class="borderbox" />
        <br>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-[512px] lg:max-w-screen-xl mx-0 centerbox">
          <FeatureCard
            title="Lightweight"
            icon="assets/icons/lightweight.svg"
            description="LunaWolf Linux can run on less than 1GB of ram, requiring less than 10GB of disk space to install. No added garbage or fancy tools"
          />

          <FeatureCard
            title="Some Fancy Themes"
            icon="assets/icons/theme.svg"
            description="This OS is like my soul. Dark, dreary and colorless. Just a dark theme and some frost. That's all"
          />

          <FeatureCard
            title="Powerful"
            icon="assets/icons/strong.svg"
            description="With a rolling release, you can always be up to date with the latest and greatest. Did we mention built in AUR and Flatpak support?"
          />

          <FeatureCard
            title="Built On Arch"
            icon="assets/icons/arch.svg"
            description="Yes, I use arch. Deal with it. And now, so do you. Sort of. Built on the stability and reliability of Arch Linux"
          />

          <FeatureCard
            title="The OS you don't need"
            icon="assets/icons/question-mark.svg"
            description="There. I said it. This OS sucks, just like most of the other distro's out there. Your mission, if you accept, is to make it not suck"
          />

          <FeatureCard
            title="Potato PC Friendly"
            icon="assets/icons/potato.svg"
            description="Did we mention it's lightweight? We did? Good. Now, to answer the question... Can it run Crysis? (Yes. Yes it can)"
          />
        </div>
      </div>
    </UPageSection>

    <JoinBox />
  </div>
</template>
<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
import JoinBox from '../components/JoinBox.vue'
</script>
