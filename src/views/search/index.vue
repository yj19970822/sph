<template>
  <div>
    <header-component />
    <logo-and-search />
    <typeNav />
    <footer-component />
  </div>
</template>

<script>
import headerComponent from "@/components/header"
import footerComponent from "@/components/footer"
import logoAndSearch from "@/components/logoAndSearch"
export default {
  components: {
    headerComponent,
    footerComponent,
    logoAndSearch,
  },
}
</script>

<style lang="scss" scoped></style>
