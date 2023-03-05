<template>
  <div id="app">
    <headerMenu />
    <router-view />
  </div>
</template>

<script>
import HeaderMenu from "./views/principal/MenuGit.vue";
export default {
  components: {
    HeaderMenu,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
