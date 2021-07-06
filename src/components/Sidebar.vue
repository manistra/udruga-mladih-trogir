<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" static :open="isOpen">
      <div
        class="fixed inset-0 z-40 overflow-hidden lg:hidden"
        aria-modal="true"
      >
        <TransitionChild
          as="template"
          enter="duration-200 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            @click="closeSidebar"
            class="absolute inset-0 bg-gray-900 bg-opacity-50  backdrop-filter backdrop-blur"
            aria-hidden="true"
          >
          </DialogOverlay>
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="duration-500 ease-in-out"
          enter-from=" transform -translate-x-full "
          enter-to=" transform translate-x-0 "
          leave="duration-500 ease-in-out"
          leave-from="transform translate-x-0 "
          leave-to="transform -translate-x-full "
        >
          <div class="absolute inset-0 z-40 flex pointer-events-none">
            <div
              class="flex-1 max-w-sm min-w-0 bg-gray-900 bg-opacity-75 border-r border-white pointer-events-auto  border-opacity-10 backdrop-filter backdrop-blur firefox:bg-opacity-90"
            >
              <div class="w-full h-full py-6 space-y-4 text-gray-500">
                <button
                  class="absolute text-white transition transform cursor-pointer  opacity-80 hover:opacity-100 top-3 right-3 sm:top-4 sm:right-4 focus:outline-none hover:scale-125"
                  @click="closeSidebar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <!-- <SidebarContent /> -->
              </div>
            </div>
            <div class="w-24 pointer-events-none"></div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "../store";
import { ActionTypes } from "../store/actions";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
} from "@headlessui/vue";

export default defineComponent({
  name: "Sidebar",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
  },

  setup() {
    const store = useStore();

    const isOpen = computed(() => store.state.showSidebar);
    function closeSidebar() {
      store.dispatch(ActionTypes.HideSidebar);
    }
    return {
      isOpen,
      closeSidebar,
    };
  },
});
</script>
