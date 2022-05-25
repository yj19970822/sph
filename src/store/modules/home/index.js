import { getCatagoryList } from "@/api/home"
import { reqBannerList, reqFloorList } from "@/api/mock"
const state = {
  categoryList: [],
  bannerList: [],
  floorLis: [],
}

const mutations = {
  SET_CATEGORYLIST(state, list) {
    state.categoryList = list
  },
  SET_BANNERLIST(state, list) {
    state.bannerList = list
  },
  SET_FLOORLIST(state, list) {
    state.floorLis = list
  },
}

const actions = {
  async getCatagoryList({ commit }) {
    let res = await getCatagoryList()
    if (res.code === 200) {
      commit("SET_CATEGORYLIST", res.data)
    }
  },
  async getBannerList({ commit }) {
    const res = await reqBannerList()
    commit("SET_BANNERLIST", res.data)
  },
  async getFloorList({ commit }) {
    const res = await reqFloorList()
    commit("SET_FLOORLIST", res.data)
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
