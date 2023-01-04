<template>
  <div class="max-w-5xl space-y-8 mx-auto my-36 px-5 lg:px-10">
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
    <div class="space-y-6">
      <button class="btn-blue">Get started for free</button>
    </div>
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
