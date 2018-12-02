<script>
  export default {
    computed: {
      time() {
        return Math.round((+new Date() / 1000 - 1541865600) / 86400)
      }
    }
  }
</script>

<template>
  <div class="footer">
    <p>博客已经运行 {{ time }} 天</p>
    <p>&copy; 2018
      <router-link to="/about">Kevin</router-link>. All Rights Reserved.
    </p>
  </div>
</template>

<style scoped>
  .footer {
    margin-top: 50px;
    text-align: center;
    font-size: 0.85rem;
  }
</style>
