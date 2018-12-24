<script>
import { Markdown } from "@/utils";

export default {
  created() {
    this.$api
      .about()
      .then(data => {
        this.loading = false;
        this.content = Markdown.toHtml(data.content);
      })
      .catch(err => {
        alert("请求失败，请检查网络连接");
      });
  },
  data() {
    return {
      loading: true,
      content: null
    };
  }
};
</script>

<template>
  <b-container>
    <p v-if="loading">Loading...</p>
    <div class="markdown-body" v-html="content" preve></div>
  </b-container>
</template>

<style scoped>
.links {
  list-style: none;
  margin-top: 20px;
  padding: 0;
}
</style>