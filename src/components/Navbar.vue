<template>
  <header
    class="sticky top-0 flex flex-row items-center justify-between w-full px-3 py-2 bg-gray-900 border-gray-700 border-opacity-50  bg-opacity-70 backdrop-filter backdrop-blur h-10v lg:px-5 border-b-1"
  >
    <div class="h-full">
      <img alt="UM-Trogir" src="../assets/logo.png" class="h-full" />
    </div>
    <button
      @click="showSidebar"
      class="flex items-end text-gray-400  lg:hidden focus:outline-none hover:opacity-100 opacity-80"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store";
import { ActionTypes } from "../store/actions";

export default defineComponent({
  name: "Navbar",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  components: {},

  setup() {
    const store = useStore();

    function showSidebar() {
      store.dispatch(ActionTypes.ShowSidebar);
    }
    return {
      showSidebar,
    };
  },
});
</script>



