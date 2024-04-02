<template>
  <main>
    <div class="bg-ct-light-secondary dark:bg-ct-dark-secondary dark:text-white w-full px-5 py-24 md:px-12 ">
      <h1 class="text-4xl font-bold text-center">Download LunaWolf Linux</h1>
      <div class="borderbox"></div>
      <div class="mt-10">
        <img src="/assets/img/overview.png" class="max-w-4xl w-full centerbox" />
        <h3 class="text-lg text-center centerbox pt-5">You can download LunaWolf from either <b>Google Drive</b>, <b>Mega Cloud</b> or <b>our Servers</b>.</h3>
        <div class="text-center mt-5 mb-10">
          <a href="#mirrors" type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download Mirrors</a>
          <a href="https://github.com/LunaWolfLinux/lunawolf/blob/master/changelog.md" target="_blank" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Changelog</a>
        </div>

        <div class="border-l-4 border-gray-700 pl-10 max-w-4xl w-full centerbox">
          <p class="italic">Latest Release: <code class="bg-gray-800 p-1.5 rounded">lunawolf-2024.04.01-x86_64.iso</code></p>
          <p class="italic">The live username and password is: <b>liveuser</b></p>
          <p class="italic">LunaWolf is only available for 64-bit architectures. There is no 32-bit, ARM or WSL image available. This might change in the future</p>
        </div>
      </div>
    </div>

    <div class="dark:text-white w-full px-5 py-24 md:px-12" id="mirrors">
      <h1 class="text-4xl font-bold text-center">Download Mirrors</h1>
      <div class="borderbox"></div>

     <div class="mt-10">
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full centerbox">
         <div class="text-center">
           <img src="/assets/icons/mega-icon.svg" class="centerbox" style="width: 100px; height: 100px;" alt="mega" />
           <a href="https://mega.nz/file/phpj2QbA#-OVldgEbv15pPWa3iIfKCOV_8baT7eAasmUuxJLAWnQ" target="_blank" class="inline-block mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download from Mega Cloud</a>
         </div>

         <div class="text-center">
           <img src="/assets/icons/google-drive.svg" class="centerbox" style="width: 100px; height: 100px;" alt="mega" />
           <a href="https://drive.google.com/file/d/1RaAAtdn3uhSBJN7ZIIwSPxAXH-xXLUYD/view" target="_blank" class="mt-5 inline-block text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download from Google Drive</a>
         </div>

         <div class="text-center">
           <img src="https://cdn.firstdark.dev/discord/fdd_new_icon.png" class="centerbox" style="width: 100px; height: 100px;" alt="mega" />
           <a href="https://lunawolf.firstdark.dev/iso/lunawolf-2024.04.01-x86_64.iso" target="_blank" class="inline-block mt-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download from FDD (Direct)</a>
         </div>
       </div>
     </div>

    </div>

    <div class="bg-ct-light-secondary dark:bg-ct-dark-secondary dark:text-white w-full px-5 py-24 md:px-12 ">
      <h1 class="text-4xl font-bold text-center">Release Cycle</h1>
      <div class="borderbox"></div>

      <div class="mt-10">
        <div class="max-w-4xl w-full text-center centerbox">
          <p>Like Arch Linux, LunaWolf also has rolling releases. This means that you don't need to download a new ISO to update your system. You can simply upgrade your OS by running <code class="bg-gray-800 p-1.5 rounded">sudo pacman -Syyu</code></p>
          <br />
          <p>New ISO's are released <b>Quarterly</b>. This means any date during <i>January, April, July and October</i>. The exception being if there are any MAJOR bugs, or upstream issues, that require immediate action.</p>
          <br /><br />
          <p class="font-bold italic">Please note that LunaWolf is a one man show. Any contributions are welcome, but will be reviewed before being merged into the main OS. Any donations are also welcome, to pay for infrastructure and other bills.</p>
        </div>
      </div>
    </div>

    <JoinServer />
  </main>
</template>

<script setup lang="ts">
import JoinServer from '@/components/JoinServer.vue'
</script>