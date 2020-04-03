<template>
  <div>
    <b-container class="header">
      <div class="logo">
        <h1>三咲智子</h1>
      </div>
      <ul class="nav">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/archive">Archive</router-link>
        </li>
        <li>
          <router-link to="/links">Links</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </b-container>
    <hr />
  </div>
</template>

<style scoped>
.header {
  padding-top: 30px;
}

.logo h1 {
  font-weight: bold;
  color: #000;
}

.logo small {
  font-weight: normal;
  font-size: 1.4rem;
}

.nav > li {
  padding-right: 20px;
}

.nav > li.active {
  text-decoration: underline;
}
</style>
