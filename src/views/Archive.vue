<script>
export default {
  data() {
    return {
      loading: true,
      tags: []
    };
  },
  created() {
    this.$api
      .archive()
      .then(data => {
        this.loading = false;
        this.tags = data.data.tags;
      })
      .catch(err => {
        alert("请求失败，请检查网络连接");
      });
  }
};
</script>

<template>
  <b-container>
    <p v-if="loading">Loading...</p>
    <div v-else v-for="tag in tags" :key="tag.tag">
      <h2>{{ tag.tag }}</h2>
      <ul class="archive">
        <li v-for="post in tag.posts" :key="post.id">
          <article>
            <router-link :to="{ name: 'article', params: { id : post.alias }}">{{ post.title }}</router-link>
            <span>{{ post.created }}</span>
          </article>
        </li>
      </ul>
    </div>
  </b-container>
</template>

<style scoped>
.archive {
  list-style: none;
  padding: 0;
}

.archive li article {
  display: flex;
  line-height: 33px;
  justify-content: space-between;
}
</style>
