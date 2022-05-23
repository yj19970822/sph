import { getCatagoryList } from "@/api/home"
const state = {
  categoryList: [],
}

const mutations = {
  SET_CATEGORYLIST(state, list) {
    state.categoryList = list
  },
}

const actions = {
  async getCatagoryList({ commit }) {
    let res = await getCatagoryList()
    if (res.code === 200) {
      commit("SET_CATEGORYLIST", res.data)
    }
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
