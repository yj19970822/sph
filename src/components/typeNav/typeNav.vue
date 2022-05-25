<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="blockEnter" @mouseleave="blockLeave" @click="toSearch">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-show="showSort">
          <div class="all-sort-list2">
            <div class="item" v-for="level1 in category" :key="level1.categoryId">
              <h3>
                <a href="##" :data-categoryName="level1.categoryName" :data-category1Id="level1.categoryId">
                  {{ level1.categoryName }}
                </a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem" v-for="level2 in level1.categoryChild" :key="level2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a href="##" :data-categoryName="level2.categoryName" :data-category2Id="level2.categoryId">
                        {{ level2.categoryName }}
                      </a>
                    </dt>
                    <dd>
                      <em v-for="level3 in level2.categoryChild" :key="level3.categoryId">
                        <a href="##" :data-categoryName="level3.categoryName" :data-category3Id="level3.categoryId">
                          {{ level3.categoryName }}
                        </a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "TypeNav",
  mounted() {
    if (this.$route.name !== "home") this.showSort = false
  },
  data() {
    return {
      showSort: true,
    }
  },
  methods: {
    blockEnter() {
      if (this.$route.name !== "home") {
        this.showSort = true
      }
    },
    blockLeave() {
      if (this.$route.name !== "home") {
        this.showSort = false
      }
    },
    toSearch(event) {
      let { categoryname, category1id, category2id, category3id } = event.target.dataset
      let location = {
        name: "search",
      }
      let query = {}
      if (categoryname) {
        query.categoryName = categoryname
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        location.query = query
        this.$router.push(location)
      }
    },
  },
  computed: {
    ...mapState({
      category: (state) => state.home.categoryList,
    }),
  },
}
</script>

<style lang="scss" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }

            &:hover {
              background-color: #158ecd;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 60px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
