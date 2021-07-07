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
                <div class="flex flex-col justify-between h-full p-5 px-8">
                  <div>
                    <NavigationBarContent
                      class="gap-4 text-3xl"
                      :isHome="false"
                    />
                  </div>
                  <div class="flex flex-row gap-5">
                    <a
                      href="https://www.facebook.com/udrugamladihtrogir"
                      class="flex items-center justify-center h-1/2"
                    >
                      <svg
                        class="h-10 hover:text-white"
                        version="1.1"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        style="
                          fill-rule: evenodd;
                          clip-rule: evenodd;
                          stroke-linejoin: round;
                          stroke-miterlimit: 2;
                        "
                      >
                        <path
                          d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/udruga.mladih.trogir?utm_medium=copy_link"
                      class="flex items-center justify-center h-1/2"
                    >
                      <svg
                        class="h-10 hover:text-white"
                        version="1.1"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        style="
                          fill-rule: evenodd;
                          clip-rule: evenodd;
                          stroke-linejoin: round;
                          stroke-miterlimit: 2;
                        "
                      >
                        <g>
                          <path
                            d="M256,0c-69.526,0 -78.244,0.295 -105.549,1.541c-27.248,1.243 -45.858,5.57 -62.142,11.899c-16.834,6.542 -31.111,15.296 -45.342,29.528c-14.232,14.231 -22.986,28.508 -29.528,45.342c-6.329,16.283 -10.656,34.893 -11.899,62.141c-1.246,27.305 -1.54,36.023 -1.54,105.549c0,69.524 0.294,78.242 1.54,105.547c1.243,27.248 5.57,45.858 11.899,62.141c6.542,16.834 15.296,31.111 29.528,45.344c14.231,14.231 28.508,22.985 45.342,29.527c16.284,6.328 34.894,10.656 62.142,11.899c27.305,1.245 36.023,1.54 105.549,1.54c69.524,0 78.242,-0.295 105.547,-1.54c27.248,-1.243 45.858,-5.571 62.141,-11.899c16.834,-6.542 31.111,-15.296 45.344,-29.527c14.231,-14.233 22.985,-28.51 29.527,-45.344c6.328,-16.283 10.656,-34.893 11.899,-62.141c1.245,-27.305 1.54,-36.023 1.54,-105.547c0,-69.526 -0.295,-78.244 -1.54,-105.549c-1.243,-27.248 -5.571,-45.858 -11.899,-62.141c-6.542,-16.834 -15.296,-31.111 -29.527,-45.342c-14.233,-14.232 -28.51,-22.986 -45.344,-29.528c-16.283,-6.329 -34.893,-10.656 -62.141,-11.899c-27.305,-1.246 -36.023,-1.541 -105.547,-1.541Zm0,46.127c68.354,0 76.451,0.26 103.445,1.492c24.959,1.139 38.514,5.309 47.535,8.814c11.949,4.644 20.477,10.192 29.435,19.15c8.959,8.958 14.506,17.487 19.15,29.435c3.506,9.021 7.676,22.576 8.815,47.535c1.231,26.995 1.492,35.092 1.492,103.447c0,68.354 -0.261,76.451 -1.492,103.445c-1.139,24.959 -5.309,38.514 -8.815,47.535c-4.644,11.949 -10.191,20.477 -19.15,29.435c-8.958,8.959 -17.486,14.506 -29.435,19.15c-9.021,3.506 -22.576,7.676 -47.535,8.814c-26.99,1.232 -35.086,1.493 -103.445,1.493c-68.361,0 -76.455,-0.261 -103.447,-1.493c-24.959,-1.138 -38.514,-5.308 -47.535,-8.814c-11.949,-4.644 -20.477,-10.191 -29.436,-19.15c-8.958,-8.958 -14.506,-17.486 -19.149,-29.435c-3.506,-9.021 -7.676,-22.576 -8.815,-47.535c-1.232,-26.994 -1.492,-35.091 -1.492,-103.445c0,-68.355 0.26,-76.452 1.492,-103.447c1.139,-24.959 5.309,-38.514 8.815,-47.535c4.643,-11.948 10.191,-20.477 19.149,-29.435c8.959,-8.958 17.487,-14.506 29.436,-19.15c9.021,-3.505 22.576,-7.675 47.535,-8.814c26.995,-1.232 35.092,-1.492 103.447,-1.492Z"
                          ></path>
                          <path
                            d="M256,341.332c-47.129,0 -85.334,-38.205 -85.334,-85.332c0,-47.129 38.205,-85.334 85.334,-85.334c47.127,0 85.332,38.205 85.332,85.334c0,47.127 -38.205,85.332 -85.332,85.332Zm0,-216.792c-72.604,0 -131.46,58.856 -131.46,131.46c0,72.602 58.856,131.458 131.46,131.458c72.602,0 131.458,-58.856 131.458,-131.458c0,-72.604 -58.856,-131.46 -131.458,-131.46Z"
                          ></path>
                          <path
                            d="M423.372,119.346c0,16.967 -13.754,30.72 -30.72,30.72c-16.966,0 -30.72,-13.753 -30.72,-30.72c0,-16.966 13.754,-30.719 30.72,-30.719c16.966,0 30.72,13.753 30.72,30.719Z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
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
import NavigationBarContent from "./NavigationBarContent.vue";
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
    NavigationBarContent,
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
