<template>
  <div class="max-w-5xl space-y-8 mx-auto mt-36 mb-20 px-3 lg:px-16 font-sans">
    <!--    Banner ctx-->
    <h3 class="font-bold text-slate-800 font-sans lg:text-6xl text-5xl">
      A smarter and simpler way to map Flowcharts
    </h3>
    <!--    Banner keypoint-->
    <div class="mb-4 flex flex-col text-left space-y-3 font-light">
      <div class="flex space-x-2" v-for="point in data.keypoint" :key="point.ctx">
        <div class="pt-1"><img :src="`/images/${point.img}`" alt="" class=""></div>
        <div class="text-slate-600"> {{ point.ctx }}
          <template v-if="point.link_1 && point.link_2 && point.link_3">
            <span class="link">Notion</span>,
            <span class="link"> Teams </span> and <span class="link">Confluence</span>
          </template>
        </div>
      </div>
    </div>
    <!--    Button -->
    <div class="md:space-y-0 space-y-6 md:space-x-6 flex flex-col items-center md:flex-row">
      <button class="btn-blue">Get started for free</button>
      <div class="group">
        <button
            class=" font-thin text-gray-600 flex items-center group-hover:text-blue-700 duration-200 group-hover:sepia">
          <img src="/images/play-circle.svg" alt=""
               class="w-8 mr-2"> Learn more
        </button>
      </div>
    </div>
  </div>
  <!--  Banner Video Section-->
  <section>
    <div class="max-w-6xl mx-auto shadow-md mb-20">
      <video src="/images/Banner-video.mov" autoplay muted loop></video>
    </div>
  </section>
  <!--  Company Section-->
  <section>
    <div class="max-w-6xl mx-auto mb-20 text-center">
      <h5 class="">TRUSTED BY COMPANIES ALL OVER THE WORLD</h5>
      <div class="flex justify-center items-center">
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 mt-4">
          <img src="/images/cocacola.svg" alt="" class="w-60">
          <img src="/images/master-card.svg" alt="" class="w-60">
          <img src="/images/kue.svg" alt="" class="w-60">
          <img src="/images/orkla.svg" alt="" class="w-60">
          <img src="/images/obos.svg" alt="" class="w-60">
          <img src="/images/ram.svg" alt="" class="w-60">
        </div>
      </div>
    </div>
  </section>
  <!--  Feature Section-->
  <section>
    <div class="mx-auto mb-20 bg-gray-100 lg:p-20 p-5">
      <div class="text-5xl text-center font-bold">Features</div>
      <div class="max-w-6xl mx-auto my-8">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <div
              class="border rounded bg-gray-50 px-5 py-3 cursor-pointer font-normal hover:border-gray-400 duration-200">
            <div class="pt-2">
              <h1 class="font-semibold">Automatic flow layout</h1>
              <p>No more crossing spagetti-lines</p>
            </div>
            <video src="/images/feature-1.mp4" muted autoplay loop class="mt-3 border w-full"></video>
          </div>
          <div class="border rounded bg-gray-50 px-5 py-3 cursor-pointer hover:border-gray-400 duration-200">
            <div class="pt-2">
              <h1 class="">Narrative with actors</h1>
              <p class="">Tie your whole organization Together</p>
            </div>
            <img src="/images/feature-2.webp" class="mt-3 border">
          </div>
          <div class="border rounded bg-gray-50 px-5 py-3 cursor-pointer hover:border-gray-400 duration-200">
            <div class="pt-2">
              <h1 class="">Access control</h1>
              <p class="">Keep flows private or share with anyone</p>
            </div>
            <img src="/images/feature-3.webp" class="mt-3 border">
          </div>
        </div>
        <div class="my-14 text-center">
          <button class="btn-blue">Browse all features</button>
        </div>
      </div>
    </div>
  </section>
  <!--  Integrations Section-->
  <section>
    <div class="max-w-6xl mx-auto text-center my-20  px-4">
      <div class="text-5xl font-bold">Integrations</div>
      <p class="pt-5">Bring ShiftX into your other apps with our integrations, embeds and iframe options.</p>
      <div class="grid grid-cols-2 gap-10 xl:grid-cols-5 pt-10 mb-10">
        <div class="p-4 border rounded-lg hover:border-gray-400 duration-200">
          <img src="/images/confluence.png" alt="" class="w-10 mx-auto">
          <p class="pt-3">Confluence</p>
        </div>
        <div class="p-4 border rounded-lg hover:border-gray-400 duration-200">
          <img src="/images/notion.png" alt="" class="w-10 mx-auto">
          <p class="pt-3">Confluence</p>
        </div>
        <div class="p-4 border rounded-lg hover:border-gray-400 duration-200">
          <img src="/images/teams.png" alt="" class="w-10 mx-auto">
          <p class="pt-3">Confluence</p>
        </div>
        <div class="p-4 border rounded-lg hover:border-gray-400 duration-200">
          <img src="/images/sharepoint.png" alt="" class="w-10 mx-auto">
          <p class="pt-3">Confluence</p>
        </div>
        <div class="p-4 border rounded-lg hover:border-gray-400 duration-200">
          <img src="/images/slite.png" alt="" class="w-10 mx-auto">
          <p class="pt-3">Confluence</p>
        </div>
      </div>
      <button class="btn-blue">Browse all integrations</button>
    </div>
  </section>
  <!--  Call to Action-->
  <section>
    <div class="bg-blue-50 text-center w-full md:p-28 py-20 px-3">
      <h1 class="text-5xl font-bold">Try ShiftX for free</h1>
      <p class="max-w-xl mx-auto py-6">Set up your own single-user, free-forever account, or try ShiftX free for 14 days
        with the rest of your colleagues.</p>
      <button class="btn-blue mt-5">Get started</button>
    </div>
  </section>
  <footer class="py-28 max-w-6xl mx-auto">
    <div class="flex flex-col lg:flex-row  items-start">
      <h1 class=" font-extrabold text-3xl pr-36">Shifta</h1>
      <div class="flex space-x-20 flex-col lg:flex-row">
        <div class="space-y-2">
          <h1 class="font-semibold">Product</h1>
          <div class="text-sm font-semibold group text-gray-800 space-y-3">
            <a href="" class="group-hover:text-blue-700">Features</a>
            <p>Why ShiftA?</p>
            <p>Integrations</p>
            <p>Templates</p>
          </div>
        </div>
        <div class="space-y-2">
          <h1 class="font-semibold">Product</h1>
          <div class="text-sm font-semibold group text-gray-800 space-y-3">
            <a href="" class="group-hover:text-blue-700">Features</a>
            <p>Why ShiftA?</p>
            <p>Integrations</p>
            <p>Templates</p>
          </div>
        </div>
        <div class="space-y-2">
          <h1 class="font-semibold">Product</h1>
          <div class="text-sm font-semibold group text-gray-800 space-y-3">
            <a href="" class="group-hover:text-blue-700">Features</a>
            <p>Why ShiftA?</p>
            <p>Integrations</p>
            <p>Templates</p>
          </div>
        </div>
        <div class="space-y-2">
          <h1 class="font-semibold">Get started</h1>
          <div class="text-sm font-semibold text-gray-800 space-y-3">
            <p><a href="" class="hover:text-blue-700">Try for free</a></p>
            <p><a href="" class="hover:text-blue-700">Pricing</a></p>
            <p><a href="" class="hover:text-blue-700">Book a demo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import keypoint from "@/mock/data"

export default {
  name: "Banner",
  data() {
    return {
      data: keypoint
    }
  },
};
</script>

<style scoped>
</style>
