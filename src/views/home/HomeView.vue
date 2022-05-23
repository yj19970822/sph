<template>
  <div class="home">
    <header-component />
    <logo-and-search />
    <typeNav />
    <list-container />
    <recommend />
    <rank />
    <like />
    <brand />
    <footer-component />
  </div>
</template>

<script>
import headerComponent from "@/components/header"
import footerComponent from "@/components/footer"
import logoAndSearch from "@/components/logoAndSearch"
import typeNav from "./components/typeNav"
import like from "./components/like"
import listContainer from "./components/listContainer"
import rank from "./components/rank"
import recommend from "./components/recommend"
import brand from "./components/brand"
export default {
  name: "HomeView",
  components: {
    headerComponent,
    footerComponent,
    logoAndSearch,
    typeNav,
    like,
    listContainer,
    rank,
    recommend,
    brand,
  },
}
</script>
