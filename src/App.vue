<template>
  <div class="app">
    <Header />
    <Main />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  row-gap: 95px;
}

@media screen and (max-width: 900px) {
  .app {
    row-gap: 0;
  }
}
</style>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Header,
    Main,
  },
};
</script>
