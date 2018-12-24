<script>
import Vue from "vue";
import bContainer from "bootstrap-vue/es/components/layout/container";
import "bootstrap/dist/css/bootstrap.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

Vue.component("b-container", bContainer);

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<template>
  <div id="app">
    <Header/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<style>
* {
  transition: all 0.3s ease;
}

body {
  background-color: #fafafa;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "PingFang SC", "'Hiragino Sans GB", STHeiti, "Microsoft Yahei",
    "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", Arial,
    Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #606975;
  line-height: 1.7;
}

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-active {
  display: none;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
