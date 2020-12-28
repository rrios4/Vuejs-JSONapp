<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TrueComponent />
  </div>
</template>

<script>
import TrueComponent from "./components/TrueComponent.vue";

export default {
  name: 'App',
  components: {
    TrueComponent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
