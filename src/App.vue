<script>
  import Vue from "vue";
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  
  Vue.use(BootstrapVue)
  
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
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<style>
  * {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }
  
  body {
    background-color: #fafafa;
  }
  
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "'Hiragino Sans GB", STHeiti, "Microsoft Yahei", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", Arial, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #606975;
    line-height: 1.7;
  }
  
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  
  .slide-fade-leave-active {
    display: none;
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>
