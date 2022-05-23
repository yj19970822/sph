<template>
  <div class="header-container">
    <div class="float-left">
      <span>shop demo welcome!</span>
      <router-link class="rightBorder" to="/">请登录</router-link>
      <router-link to="/">免费注册</router-link>
    </div>
    <div class="float-right">
      <router-link class="rightBorder" to="/">我的淘宝</router-link>
      <router-link class="rightBorder" to="/">购物车</router-link>
      <router-link class="rightBorder" to="/">收藏夹</router-link>
      <router-link class="rightBorder" to="/">商品分类</router-link>
      <router-link class="rightBorder" to="/">免费开店</router-link>
      <router-link to="/">联系客服</router-link>
    </div>
    <div class="logo"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header-container {
  @include clearfix;
  background-color: $pray;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  div {
    padding: 0 150px;
  }
  a {
    padding: 0 10px;
    color: #2e1e25;
  }
}

.rightBorder {
  border-right: 2px solid #a5a4a2;
}
</style>
