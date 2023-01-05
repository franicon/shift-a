<template>
  <div class="max-w-5xl space-y-8 mx-auto mt-36 mb-20 px-5 lg:px-16 font-sans">
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
  <div class="max-w-6xl mx-auto shadow-md mb-20">
    <video src="/images/Banner-video.mov" autoplay muted></video>
  </div>
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
