<template>
  <div class="relative bg-gray-800">
    <div
      class="flex flex-col px-5 py-10 text-3xl text-left bg-gray-900 border-gray-700 border-opacity-50  lg:justify-center lg:px-16 lg:py-16 h-90v border-b-1"
    >
      <div class="flex justify-between lg:h-1/2 h-2/3">
        <suspense
          ><Typewriter
            class="text-6xl lg:text-9xl"
            :textList="['udruga mladih trogir']"
            :typingDelay="120"
            :breakWords="true"
            :hideCaretAtEnd="true"
            @finished="titleFinishedPrinting"
          />
        </suspense>
      </div>
      <div
        class="flex flex-col items-start mx-auto  lg:w-1/2 lg:flex-row lg:items-center h-1/3 lg:h-1/2"
      >
        <suspense>
          <Typewriter
            :typingDelay="100"
            v-if="showSubTitle"
            :hideCaretAtEnd="true"
            @finished="subTitleFinishedPrinting"
            class="pr-5 text-3xl text-right lg:text-6xl"
            :textList="['Organiziramo: ']"
          />
        </suspense>
        <suspense>
          <Typewriter
            :typingDelay="100"
            class="text-3xl text-left lg:text-6xl"
            v-if="showSubSubTitle"
            @finished="subSubTitleFinishedPrinting"
            :textList="['pireve', 'sprovode', 'koncerte', 'veselice']"
          />
        </suspense>
      </div>
    </div>
    <Navbar />

    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-700 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-800 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-700 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-800 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-700 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-800 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-700 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-800 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-700 "
    >
      Ode ce bit kontent neki
    </div>
    <div
      class="flex items-center justify-center w-full h-screen text-2xl text-gray-100 bg-gray-800 "
    >
      Ode ce bit kontent neki
    </div>
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
    const subSubTitleFinishedPrinting = () => {
      showSubSubTitle.value = true;
    };

    return {
      titleFinishedPrinting,
      subTitleFinishedPrinting,
      subSubTitleFinishedPrinting,
      showSubTitle,
      showSubSubTitle,
    };
  },
});
</script>
