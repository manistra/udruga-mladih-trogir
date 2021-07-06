<template>
  <suspense>
    <Typewriter
      @click="scrollToLinkOne"
      class="text-left text-gray-400 cursor-pointer  font-specialElite hover:text-white"
      :class="isHome ? 'text-2xl px-5' : 'text-2xl py-2'"
      :textList="['Tko smo mi?']"
      :typingDelay="isHome ? 45 : 10"
      :hideCaretAtEnd="true"
      @finished="linkTwo = true"
    />
  </suspense>
  <suspense>
    <Typewriter
      @click="scrollToLinkTwo"
      class="text-left text-gray-400 cursor-pointer  font-specialElite hover:text-white"
      :class="isHome ? 'text-2xl px-5' : 'text-2xl py-2'"
      :textList="['Projekti']"
      :typingDelay="isHome ? 50 : 10"
      :hideCaretAtEnd="true"
      v-if="linkTwo"
      @finished="linkThree = true"
    />
  </suspense>
  <suspense>
    <Typewriter
      @click="scrollToLinkThree"
      class="text-left text-gray-400 cursor-pointer  font-specialElite hover:text-white"
      :class="isHome ? 'text-2xl px-5' : 'text-2xl py-2'"
      :textList="['Radionice']"
      :typingDelay="isHome ? 70 : 10"
      :hideCaretAtEnd="true"
      v-if="linkThree"
      @finished="linkFour = true"
    />
  </suspense>
  <suspense>
    <Typewriter
      @click="scrollToLinkFour"
      v-if="linkFour"
      class="text-left text-gray-400 cursor-pointer  font-specialElite hover:text-white"
      :class="isHome ? 'text-2xl px-5' : 'text-2xl py-2'"
      :textList="['Kontakt']"
      :typingDelay="isHome ? 100 : 25"
      :hideCaretAtEnd="true"
    />
  </suspense>
</template> 

<script lang="ts">
import { defineComponent, ref } from "vue";
import Typewriter from "./Typewriter.vue";
import { useStore } from "../store";
import { ActionTypes } from "../store/actions";

export default defineComponent({
  components: {
    Typewriter,
  },
  props: {
    isHome: {
      type: Boolean,
      deafult: true,
    },
  },
  setup(props) {
    const store = useStore();
    const linkTwo = ref<boolean>(false);
    const linkThree = ref<boolean>(false);
    const linkFour = ref<boolean>(false);

    const scrollToLinkOne = () => {
      store.dispatch(ActionTypes.ScrollToLinkOne);
      if (!props.isHome) store.dispatch(ActionTypes.HideSidebar);
      console.log(props.isHome);
    };
    const scrollToLinkTwo = () => {
      store.dispatch(ActionTypes.ScrollToLinkTwo);
      if (!props.isHome) store.dispatch(ActionTypes.HideSidebar);
    };
    const scrollToLinkThree = () => {
      store.dispatch(ActionTypes.ScrollToLinkThree);
      if (!props.isHome) store.dispatch(ActionTypes.HideSidebar);
    };
    const scrollToLinkFour = () => {
      store.dispatch(ActionTypes.ScrollToLinkFour);
      if (!props.isHome) store.dispatch(ActionTypes.HideSidebar);
    };

    return {
      linkTwo,
      linkThree,
      linkFour,
      scrollToLinkOne,
      scrollToLinkTwo,
      scrollToLinkThree,
      scrollToLinkFour,
    };
  },
});
</script>
