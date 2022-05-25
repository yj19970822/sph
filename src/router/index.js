import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/home/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
