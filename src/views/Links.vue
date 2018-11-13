<script>
  import {
    Markdown
  } from '@/utils'
  
  export default {
    created() {
      this.$api.links()
        .then(data => {
          this.content = Markdown.toHtml(data.data.link.content)
          this.links = data.data.link.links
          this.loading = false
        })
        .catch(err => {
          console.log(err);
          alert("请求失败，请检查网络连接");
        });
    },
    data() {
      return {
        loading: true,
        content: null,
        links: [],
      }
    }
  }
</script>

<template>
  <b-container>
    <p v-if="loading">Loading...</p>
    <div class="markdown-body" v-html="content"></div>
    <ul class="links clearfix">
      <li v-for="link in links" :key="link.title">
        <a :href="link.link" :title="link.description" target="_blank">{{ link.title }}</a>
      </li>
    </ul>
  </b-container>
</template>

<style scoped>
  .links {
    list-style: none;
    margin-top: 20px;
    padding: 0;
  }
</style>