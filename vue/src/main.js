import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './assets/styles/reset.scss'
import listHome from "./pages/list.vue";
import liveRoom from "./pages/live.vue";
import indexHome from "./pages/index.vue";
//import 'element-ui/lib/theme-chalk/index.css' //引入样式，这里是引入全部样式，你也可以单独引入某个组件样式
import { Button } from 'element-ui';

Vue.config.productionTip = false
Vue.use(Button)
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
