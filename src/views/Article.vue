<script>
import { Markdown, Disqus } from "@/utils";

export default {
  data() {
    return {
      id: null,
      loading: true,
      content: null,
      gfw: false,
    };
  },
  created() {
    this.getArticle((this.id = this.$route.params.id));
    setTimeout(() => {
      if (!window.DISQUS) {
        console.info("Fucking GFW Detected.");
        this.gfw = true;
      }
    }, 2000);
  },
  methods: {
    getArticle(id) {
      this.$api
        .post(id)
        .then(data => {
          this.content = Markdown.toHtml(data.data.post.content);
          this.loading = false;
          Disqus(this.id);
        })
        .catch(() => {
          alert("请求失败，请检查网络连接");
        });
    },
  },
};
</script>

<template>
  <b-container>
    <transition name="fade">
      <p v-if="loading">Loading...</p>
    </transition>
    <div>
      <article class="markdown-body" v-html="content"></article>
      <hr />
      <div v-if="!gfw" id="disqus_thread"></div>
      <div v-else>
        <strong>你所在的地区不支持评论系统。</strong>
      </div>
    </div>
  </b-container>
</template>

<style scoped>
#disqus_thread:empty:before {
  white-space: pre;
  line-height: 35px;
  content: "正在加载 Disqus 评论系统...";
}
</style>
