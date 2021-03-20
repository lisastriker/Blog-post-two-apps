import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogPost from "../views/BlogPost.vue";
import About from "../views/About.vue";
import IndividualPost from "../views/IndividualPost";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/blog/me",
    name: "BlogPost",
    component: BlogPost,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/blog/me/:id",
    name: "IndividualPost",
    component: IndividualPost,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
