<template>
  <div class="home">
    <header-component />
    <logo-and-search />
    <typeNav />
    <list-container />
    <recommend />
    <rank />
    <like />
    <floor v-for="(floor, index) in floorList" :key="index" :floor="floor" />
    <brand />
    <footer-component />
  </div>
</template>

<script>
import headerComponent from "@/components/header"
import footerComponent from "@/components/footer"
import logoAndSearch from "@/components/logoAndSearch"
import like from "./components/like"
import listContainer from "./components/listContainer"
import rank from "./components/rank"
import recommend from "./components/recommend"
import brand from "./components/brand"
import floor from "./components/Floor"
import { mapState } from "vuex"
export default {
  name: "HomeView",
  components: {
    headerComponent,
    footerComponent,
    logoAndSearch,
    like,
    listContainer,
    rank,
    recommend,
    brand,
    floor,
  },
  mounted() {
    this.$store.dispatch("home/getFloorList")
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorLis,
    }),
  },
}
</script>
