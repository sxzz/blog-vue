<script>
  import {
    Markdown
  } from '@/utils'
  
  export default {
    data() {
      return {
        id: null,
        loading: true,
        content: null
      }
    },
    created() {
      this.getArticle(this.id = this.$route.params.id);
      this.loadDisqus();
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
      },
      loadDisqus() {
        let disqus_config = () => {
          this.page.url = location.href;
          this.page.identifier = this.id;
        };
        let s = document.createElement('script');
        s.src = 'https://sxzz.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (document.head || document.body).appendChild(s);
      }
    }
  }
</script>

<template>
  <b-container>
    <transition name="slide-fade">
      <p v-if="loading">Loading...</p>
      <div v-else>
        <article class="markdown-body" v-html="content"></article>
        <hr>
        <div id="disqus_thread"></div>
      </div>
    </transition>
  </b-container>
</template>

<style>
  
</style>
