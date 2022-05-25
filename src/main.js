import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

//全局组件引入
import "@/components/typeNav/index"
import "@/components/banner/index"

import "@/mock/mockServe.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
