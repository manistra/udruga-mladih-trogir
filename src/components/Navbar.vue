<template>
  <header
    :class="
      navbarTransparent
        ? 'border-opacity-0  bg-opacity-0'
        : 'border-opacity-50  bg-opacity-70 backdrop-filter backdrop-blur'
    "
    class="sticky top-0 flex flex-row items-center justify-between w-full px-3 py-2 transition duration-700 transform bg-gray-900 border-gray-700  border-b-1 h-10v lg:px-5"
  >
    <div
      class="w-2/12 h-full transition duration-700"
      :class="navbarTransparent ? 'opacity-0' : 'opacity-100'"
    >
      <img alt="UM-Trogir" src="../assets/logo.png" class="h-full" />
    </div>
    <div class="flex-row items-center hidden gap-5 lg:flex">
      <NavigationBarContent />
    </div>
    <div class="w-2/12 h-full"></div>
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
import { defineComponent, computed } from "vue";
import { useStore } from "../store";
import NavigationBarContent from "../components/NavigationBarContent.vue";
import { ActionTypes } from "../store/actions";

export default defineComponent({
  name: "Navbar",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    NavigationBarContent,
  },

  setup() {
    const store = useStore();

    const navbarTransparent = computed(() => store.state.navbarTransparent);

    function showSidebar() {
      store.dispatch(ActionTypes.ShowSidebar);
    }
    return {
      navbarTransparent,
      showSidebar,
    };
  },
});
</script>



