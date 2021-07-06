<template>
  <Sidebar />
  <router-view />
</template>


<script lang="ts">
import { defineComponent } from "vue";

import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",

  components: {
    Sidebar,
  },
});
</script>


<style>
#app {
  font-family: "Special Elite", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
