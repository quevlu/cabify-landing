<template>
  <div id="app">
    <headerComponent />
    <router-view />
  </div>
</template>

<script>
import headerComponent from "common/components/header.component";

export default {
  name: "App",
  components: {
    headerComponent
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: $body-color;
  min-height: 100vh;
  color: $body-bg;
}
</style>
