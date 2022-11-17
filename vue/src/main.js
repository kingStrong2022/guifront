import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './assets/styles/reset.scss'
import listHome from "./pages/list.vue";
import liveRoom from "./pages/live.vue";
import indexHome from "./pages/index.vue";
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
		{ name: "indexHome", component: indexHome, path: "/" },
    { name: "listHome", component: listHome, path: "/list" },
    { name: "liveRoom", component: liveRoom, path: "/live" },
  ]
});
new Vue({
  render: h => h(App),
	router
}).$mount('#app')
