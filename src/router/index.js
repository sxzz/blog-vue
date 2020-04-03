import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Article from "@/views/Article.vue";
import Archive from "@/views/Archive.vue";
import Links from "@/views/Links.vue";
import About from "@/views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/article/:id",
      name: "article",
      component: Article,
    },
    {
      path: "/archive",
      name: "archive",
      component: Archive,
    },
    {
      path: "/links",
      name: "links",
      component: Links,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      name: "home",
      component: Home,
    },
  ],
});
