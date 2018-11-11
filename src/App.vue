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
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
  * {
    -webkit-transition: .3s ease;
    -moz-transition: .3s ease;
    -ms-transition: .3s ease;
    -o-transition: .3s ease;
    transition: .3s ease;
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
</style>
