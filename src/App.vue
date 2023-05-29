<template>
    <div>
      <Header />
      <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view></router-view>
      </div>
      <Footer />
    </div>
</template>

<script>
import Header from "@/components/common/HeaderComponent.vue";
import Footer from "@/components/common/FooterComponent.vue";

export default {
  components: {
    Header,
    Footer,
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
