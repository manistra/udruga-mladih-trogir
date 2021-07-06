<template>
  <div class="relative bg-gray-900">
    <Navbar />
    <div
      class="flex flex-col px-6 text-3xl text-left bg-gray-900 border-gray-700 border-opacity-50  lg:justify-center lg:px-16 h-90v border-b-1"
    >
      <div
        class="flex justify-center -mt-10 lg:items-end lg:-mt-28 lg:h-1/2 h-2/3"
      >
        <suspense
          ><Typewriter
            class="pr-16 text-6xl text-gray-400 lg:text-8xl xl:text-9xl lg:pr-0"
            :textList="['udruga mladih trogir']"
            :typingDelay="120"
            :breakWords="false"
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
            class="pr-5 text-3xl text-right text-gray-400 lg:text-6xl"
            :textList="['Organiziramo: ']"
          />
        </suspense>
        <suspense>
          <Typewriter
            :typingDelay="100"
            class="text-3xl text-left text-gray-400 lg:text-6xl"
            v-if="showSubSubTitle"
            @finished="subSubTitleFinishedPrinting"
            :textList="[
              'koncerte',
              'radionice',
              'druženja',
              'večer filma',
              'slušaone',
            ]"
          />
        </suspense>
      </div>
    </div>
    <div ref="content" class="w-full h-full bg-transparent">
      <div
        ref="linkOne"
        class="flex flex-col items-center justify-center w-full h-screen gap-20 text-2xl text-gray-100 bg-gray-700 "
      >
        <div class="text-6xl">Tko Smo Mi?</div>

        Ode ce bit kontent neki
      </div>
      <div
        ref="linkTwo"
        class="flex flex-col items-center justify-center w-full h-screen gap-20 text-2xl text-gray-100 bg-gray-800 "
      >
        <div class="text-6xl">Projekti</div>
        Ode ce bit kontent neki
      </div>
      <div
        ref="linkThree"
        class="flex flex-col items-center justify-center w-full h-screen gap-20 text-2xl text-gray-100 bg-gray-700 "
      >
        <div class="text-6xl">Radionice</div>
        Ode ce bit kontent neki
      </div>
      <div
        ref="linkFour"
        class="flex flex-col items-center justify-center w-full h-screen gap-20 text-2xl text-gray-100 bg-gray-800 "
      >
        <div class="text-6xl">Kontakt</div>
        Ode ce bit kontent neki
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "../store";
import { ActionTypes } from "../store/actions";
import Navbar from "@/components/Navbar.vue";
import Typewriter from "../components/Typewriter.vue";
export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Typewriter,
  },
  setup() {
    const store = useStore();
    const content = ref<HTMLElement | null>(null);
    const linkOne = ref<HTMLElement | null>(null);
    const linkTwo = ref<HTMLElement | null>(null);
    const linkThree = ref<HTMLElement | null>(null);
    const linkFour = ref<HTMLElement | null>(null);
    const showSubTitle = ref<boolean>(false);
    const showSubSubTitle = ref<boolean>(false);

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = (e: any) => {
      if (content.value != null) {
        if (content.value?.getBoundingClientRect().top < 300) {
          if (store.state.navbarTransparent === true)
            store.dispatch(ActionTypes.MakeNavbarSolid);
        }
        if (content.value?.getBoundingClientRect().top > 300) {
          if (store.state.navbarTransparent === false)
            store.dispatch(ActionTypes.MakeNavbarTransparent);
        }
      }
    };
    store.watch(
      (state) => state.scrollToLinkOne,
      () => scrollToLinkOne()
    );
    store.watch(
      (state) => state.scrollToLinkTwo,
      () => scrollToLinkTwo()
    );
    store.watch(
      (state) => state.scrollToLinkThree,
      () => scrollToLinkThree()
    );
    store.watch(
      (state) => state.scrollToLinkFour,
      () => scrollToLinkFour()
    );
    store.watch(
      (state) => state.scrollToTop,
      () => scrollToTop()
    );

    const scrollToLinkOne = () => {
      if (linkOne.value != null)
        linkOne.value.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToLinkTwo = () => {
      if (linkTwo.value != null)
        linkTwo.value.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToLinkThree = () => {
      if (linkThree.value != null)
        linkThree.value.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToLinkFour = () => {
      if (linkFour.value != null)
        linkFour.value.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToTop = () => {
      console.log("dasd");

      window.scrollBy({ top: -document.body.scrollHeight, behavior: "smooth" });
    };

    const titleFinishedPrinting = () => {
      showSubTitle.value = true;
    };
    const subTitleFinishedPrinting = () => {
      showSubSubTitle.value = true;
    };
    const subSubTitleFinishedPrinting = () => {
      showSubSubTitle.value = true;
    };

    console.log(content.value);

    return {
      titleFinishedPrinting,
      subTitleFinishedPrinting,
      subSubTitleFinishedPrinting,
      showSubTitle,
      showSubSubTitle,
      content,
      linkOne,
      linkTwo,
      linkThree,
      linkFour,
    };
  },
});
</script>
