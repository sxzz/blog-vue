<script>
// import {
//   Time
// } from '@/utils'
import marked from "marked";
export default {
  name: "index",
  data() {
    return {
      loading: true,
      articles: []
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    // formatTime(t) {
    //   return Time.format(t);
    // },
    getArticles() {
      this.$api
        .posts()
        .then(data => {
          const articles = [];
          for (const article of data.data.posts.list) {
            articles.push({
              id: article.alias,
              title: article.title,
              time: article.created
            });
          }
          this.articles = articles;
          this.loading = false;
        })
        .catch(err => {
          alert("请求失败，请检查网络连接");
        });
    }
  }
};
</script>

<template>
  <b-container>
    <transition name="fade">
      <p v-if="loading">Loading...</p>
      <ul v-else class="article-list">
        <li v-for="article in articles" :key="article.id">
          <span>{{ article.time }}</span>
          <router-link :to="{ name: 'article', params: { id : article.id }}">
            <p class="article-list-title">{{ article.title }}</p>
          </router-link>
        </li>
      </ul>
    </transition>
  </b-container>
</template>

<style scoped>
a {
  text-decoration: none;
}

.article-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.article-list > li {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0.5rem;
}

.article-list-title {
  font-size: 1.6rem;
  font-weight: 400;
  color: #404040;
  margin: 0;
}
</style>