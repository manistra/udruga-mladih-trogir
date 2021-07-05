<template>
  <div class="relative bg-gray-800">
    <div
      class="flex flex-col px-5 py-10 text-3xl text-left bg-gray-900 border-gray-700 border-opacity-50  lg:px-16 lg:py-16 h-90v border-b-1"
    >
      <div class="lg:h-1/2 h-2/3 lg:flex lg:items-end lg:justify-center">
        <Typewriter
          class="text-6xl lg:text-9xl"
          text="udruga mladih trogir"
          :breakWords="false"
          :hideCaretAtEnd="true"
          @finished="titleFinishedPrinting"
        />
      </div>

      <div
        class="flex items-start justify-center lg:items-center h-1/3 lg:h-1/2"
      >
        <Typewriter
          v-if="showSubTitle"
          :hideCaretAtEnd="true"
          @finished="subTitleFinishedPrinting"
          class="text-4xl lg:text-6xl"
          text="Organiziramo:  "
        />
        <Typewriter
          class="text-4xl lg:text-6xl"
          text=" pireve"
          v-if="showSubSubTitle"
        />
      </div>
    </div>
    <Navbar />

    <div class="w-20 h-20 bg-purple-500"></div>
    <div class="w-full h-screen bg-gray-200"></div>
    <div class="w-full h-screen bg-gray-100"></div>
    <div class="w-full h-screen bg-gray-200"></div>
    <div class="w-full h-screen bg-gray-100"></div>
    <div class="w-full h-screen bg-gray-200"></div>
    <div class="w-full h-screen bg-gray-100"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Typewriter from "../components/Typewriter.vue";
export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Typewriter,
  },
  setup() {
    const showSubTitle = ref<boolean>(false);
    const showSubSubTitle = ref<boolean>(false);

    const titleFinishedPrinting = () => {
      showSubTitle.value = true;
    };
    const subTitleFinishedPrinting = () => {
      showSubSubTitle.value = true;
    };

    return {
      titleFinishedPrinting,
      subTitleFinishedPrinting,
      showSubTitle,
      showSubSubTitle,
    };
  },
});
</script>
