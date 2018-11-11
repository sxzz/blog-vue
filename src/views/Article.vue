<script>
  import {
    Markdown
  } from '@/utils'
  
  export default {
    data() {
      return {
        loading: true,
        content: ''
      }
    },
    created() {
      this.getArticle(this.$route.params.id);
    },
    methods: {
      getArticle(id) {
        this.$api.post(id)
          .then(data => {
            this.content = Markdown.toHtml(data.data.post.content)
            this.loading = false
          })
          .catch(err => {
            console.log(err);
            alert("请求失败，请检查网络连接");
          });
      }
    }
  }
</script>

<template>
  <b-container>
    <p v-if="loading">Loading...</p>
    <article class="markdown-body" v-html="content"></article>
  </b-container>
</template>

<style>
  
</style>
