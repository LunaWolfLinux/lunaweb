<template>
  <UPageSection class="ct-card">
    <div class="w-full">
      <h1 class="text-4xl font-bold text-center">
        Download LunaWolf Linux
      </h1>
      <div class="borderbox" />

      <div class="mt-10">
        <img
          src="/assets/img/overview_march_222.webp"
          class="max-w-4xl w-full centerbox"
          alt="LunaWolf Overview"
        >

        <h3 class="text-lg text-center centerbox pt-5">
          You can download LunaWolf from either <b>Google Drive</b>, <b>Mega Cloud</b> or <b>our Servers</b>.
        </h3>

        <div class="text-center mt-5 mb-10 flex gap-2 items-center justify-center">
          <UButton
            label="Download Mirrors"
            size="lg"
            variant="subtle"
            color="primary"
            icon="i-lucide-cloud-download"
            @click="scrollToDownload"
          />

          <UButton
            label="Changelog"
            size="lg"
            variant="subtle"
            color="error"
            icon="i-lucide-file-text"
            to="https://github.com/LunaWolfLinux/lunawolf/blob/master/changelog.md"
            target="_blank"
          />
        </div>

        <div class="border-l-4 border-gray-700 pl-5 max-w-4xl w-full centerbox">
          <p class="italic font-bold">
            It's Plasma time!
          </p>
          <p class="italic">
            Latest Release: <code class="bg-gray-800 p-1.5 rounded">lunawolf-2026.05.20-x86_64.iso</code>
          </p>
          <p class="italic">
            The live username and password is: <b>liveuser</b>
          </p>
          <p class="italic">
            LunaWolf is only available for 64-bit architectures. There are no 32-bit, ARM or WSL images available. This might change in the future
          </p>
        </div>

        <div class="max-w-4xl w-full centerbox pt-10">
          <h1 class="font-bold text-xl mb-2">
            System Requirements:
          </h1>
          <ul>
            <li>Ram: At least 1GB</li>
            <li>Storage: At least 10GB</li>
            <li>GPU: Any. Tested with Intel HD and Nvidia, but any should work</li>
            <li>Internet: Not required initial for installation</li>
          </ul>
        </div>
      </div>
    </div>
  </UPageSection>

  <UPageSection>
    <div
      id="mirrors"
      class="dark:text-white w-full"
    >
      <h1 class="text-4xl font-bold text-center">
        Download Mirrors
      </h1>
      <div class="borderbox" />

      <div class="mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full centerbox">
          <div class="text-center">
            <img
              src="/assets/icons/mega-icon.svg"
              class="centerbox"
              style="width: 100px; height: 100px;"
              alt="mega"
            >

            <UButton
              variant="subtle"
              color="error"
              size="lg"
              class="mt-5"
              icon="i-lucide-download"
              label="Download from Mega Cloud"
              to="https://mega.nz/file/BxgHmLaQ#5AXSel-MRdYORvHyw_uE9QvK2UaLarPTaL2ZDzvuJ3M"
              target="_blank"
            />
          </div>

          <div class="text-center">
            <img
              src="/assets/icons/google-drive.svg"
              class="centerbox"
              style="width: 100px; height: 100px;"
              alt="mega"
            >

            <UButton
              variant="subtle"
              color="success"
              size="lg"
              class="mt-5"
              icon="i-lucide-download"
              label="Download from Google Drive"
              to="https://drive.google.com/file/d/1MvXwSG7v39yKpg_v3nanI2yKfRGyLOK5/view?usp=sharing"
              target="_blank"
            />
          </div>

          <div class="text-center">
            <img
              src="https://cdn.firstdark.dev/discord/fdd_new_icon.png"
              class="centerbox"
              style="width: 100px; height: 100px;"
              alt="mega"
            >

            <UButton
              variant="subtle"
              color="info"
              size="lg"
              class="mt-5"
              icon="i-lucide-download"
              label="Direct Download"
              to="https://lunawolf.ams3.cdn.digitaloceanspaces.com/iso/lunawolf-2026.05.20-x86_64.iso"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </UPageSection>

  <UPageSection class="ct-card">
    <div class="w-full">
      <h1 class="text-4xl font-bold text-center">
        Release Cycle
      </h1>
      <div class="borderbox" />

      <div class="mt-10">
        <div class="max-w-4xl w-full text-center centerbox">
          <p>Like Arch Linux, LunaWolf also has rolling releases. This means that you don't need to download a new ISO to update your system. You can simply upgrade your OS by running <code class="bg-gray-800 p-1.5 rounded">sudo pacman -Syyu</code></p>
          <br>
          <p>New ISO's are released <b>Quarterly</b>. This means any date during <i>January, April, July and October</i>. The exception being if there are any MAJOR bugs, or upstream issues, that require immediate action.</p>
          <br><br>
          <UAlert
            class="text-left"
            title="Notice"
            variant="subtle"
            icon="i-lucide-info"
            color="error"
            description="LunaWolf is a one man show and mostly a personal distro. Any contributions are welcome, but will be reviewed before being merged into the main OS."
          />
        </div>
      </div>
    </div>
  </UPageSection>

  <JoinBox />
</template>
<script setup lang="ts">
import JoinBox from '../components/JoinBox.vue'
import { useRouter } from 'vue-router'

const scrollToDownload = () => {
  const mirrorBox = document.getElementById("mirrors")
  if (!mirrorBox) return;
  mirrorBox.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })

  useRouter().currentRoute.value.params = "#mirrors"
}

</script>
