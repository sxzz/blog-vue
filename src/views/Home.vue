<script>
  // import {
  //   Time
  // } from '@/utils'
  import marked from 'marked'
  export default {
    name: "index",
    data() {
      return {
        loading: true,
        articles: []
      }
    },
    created() {
      this.getArticles();
    },
    methods: {
      // formatTime(t) {
      //   return Time.format(t);
      // },
      getArticles() {
        this.$api.posts()
          .then(data => {
            const articles = [];
            for (const article of data.data.posts.list) {
              articles.push({
                id: article.alias,
                title: article.title,
                time: article.created,
                abstract: article.content
              })
            }
            this.articles = articles
            this.loading = false
          })
          .catch(err => {
            console.log(err);
            alert("请求失败，请检查网络连接");
          });
      }
    }
  };
</script>

<template>
  <b-container>
    <p v-if="loading">Loading...</p>
    <ul v-else class="article-list">
      <li v-for="article in articles" :key="article.id">
        <span>{{ article.time }}</span>
        <router-link :to="{ name: 'article', params: { id : article.id }}">
          <p class="article-list-title">{{ article.title }}</p>
        </router-link>
        <p class="article-list-abstract" v-html="article.abstract"></p>
      </li>
    </ul>
  </b-container>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
  
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .article-list>li {
    border-bottom: 1px solid #eee;
    margin: 1.5rem 0;
  }
  
  .article-list-title {
    font-size: 1.6rem;
    font-weight: 400;
    color: #404040;
    margin-top: 0;
    margin: 0;
  }
</style>