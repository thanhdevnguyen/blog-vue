<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "assets/scss/main";
</style>
