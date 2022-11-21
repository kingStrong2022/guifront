import Vue from 'vue'
import Vuex from 'vuex'
import appShell from './modules/app-shell'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    appShell,
  }
})

// 初始化状态拷贝,用于清除vuex数据，使其恢复初始状态,
// 退出登录和登录时使用, 使用this.$store.replaceState()
window.vuexInitialState = JSON.stringify(store.state)

export default store
