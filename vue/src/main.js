import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import listHome from "./pages/list.vue";
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "main", component: listHome, path: "/list" },
   
  ]
});
new Vue({
  render: h => h(App),
	router
}).$mount('#app')
