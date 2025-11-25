import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Details from "../view/Details.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/pokemon/:name", component: Details, props: true }
  ]
});
