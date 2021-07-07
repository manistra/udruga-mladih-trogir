<template>
  <div class="border-t border-gray-700 border-opacity-60">
    <div
      class="flex flex-col w-full pt-8 pb-3 mx-auto  justify-evenly lg:w-10/12 xl:w-8/12 lg:flex-row"
    >
      <div class="flex flex-col h-full px-3 pb-10 lg:w-3/12 whitespace-nowrap">
        <h3 class="text-xl text-left text-gray-400 lg:pb-2">Navigacija</h3>
        <hr class="w-9/12 pb-2 border-gray-700 lg:hidden" />
        <div
          class="flex flex-row gap-10 px-1 text-left text-gray-500  lg:gap-1 lg:flex-col"
        >
          <div class="flex flex-col gap-1">
            <a
              class="cursor-pointer hover:text-gray-300"
              @click="$emit('link-one')"
              >Tko smo mi?</a
            >
            <a
              class="cursor-pointer hover:text-gray-300"
              @click="$emit('link-two')"
              >Projekti</a
            >
          </div>
          <div class="flex flex-col gap-1">
            <a
              class="cursor-pointer hover:text-gray-300"
              @click="$emit('link-three')"
              >Radionice</a
            >
            <a
              class="cursor-pointer hover:text-gray-300"
              @click="$emit('link-four')"
              >Kontakt</a
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col h-full px-3 pb-10 lg:w-4/12 whitespace-nowrap">
        <h3 class="text-xl text-left text-gray-400 lg:pb-2">Kontakt</h3>
        <hr class="w-9/12 pb-2 border-gray-700 lg:hidden" />
        <div class="flex flex-col gap-1 px-1">
          <a
            href="tel:00 385 976 074 014"
            class="flex flex-row items-center font-mono text-gray-500 cursor-pointer  hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <span class="">+385 976 074 014</span>
          </a>
          <a
            href="mailto:info@udruga-mladih-trogir.com"
            class="flex flex-row items-center font-mono text-base text-gray-500 cursor-pointer  hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            <span class="">info@udruga-mladih-trogir.com</span>
          </a>
        </div>
      </div>
      <div class="flex flex-col h-full px-3 pb-10 lg:w-3/12 whitespace-nowrap">
        <h3 class="text-xl text-left text-gray-400 lg:pb-2">Društvene mreže</h3>
        <hr class="w-9/12 pb-2 border-gray-700 lg:hidden" />
        <div
          class="flex flex-row gap-6 px-1 text-gray-500 lg:gap-2 lg:flex-col"
        >
          <div class="flex flex-row">
            <a
              href="https://www.facebook.com/udrugamladihtrogir"
              class="flex items-center hover:text-gray-300"
            >
              <svg
                class="w-6 h-6 hover:text-gray-300"
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
              <p class="pt-1 ml-2 text-base">Facebook</p>
            </a>
          </div>
          <a
            href="https://www.instagram.com/udruga.mladih.trogir/"
            class="flex items-center hover:text-gray-300"
          >
            <svg
              class="w-6 h-6 hover:text-gray-300"
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

            <p class="pt-1 ml-2 text-base">Instagram</p>
          </a>
        </div>
      </div>
      <div
        class="flex items-center justify-center  pb-7 lg:bottom-8 lg:right-0 lg:absolute lg:w-2/12 lg:justify-center"
      >
        <a
          href="https://registri.uprava.hr/#!udruga-detalji/vwcBAAEAAQF1ZHJ1Z2EgbWxhZGloIHRyb2dp8gAAAAAAAAAAAAABAQFvaeICAZK_HQ"
          class="flex flex-row items-center justify-center h-full font-sans text-left text-gray-600 cursor-pointer  lg:text-center lg:flex-col hover:opacity-100 opacity-40"
        >
          <img
            alt="UM-Trogir"
            src="../assets/stamp.png"
            class="w-12 h-12 lg:w-20 lg:h-20"
          />
          <div class="pl-1 lg:pl-0">
            <p class="text-xs">Copyright Ⓒ 2021,</p>
            <p class="text-xs font-semibold">Udruga mladih Trogir</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "Footer",
  props: {},
  //    setup() {

  //     return {   };
  //   },
});
</script>

