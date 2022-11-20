/* eslint-disable */ 
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './assets/styles/reset.scss'
import listHome from "./pages/list.vue";
import liveRoom from "./pages/live.vue";
import indexHome from "./pages/index.vue"; 
import collteHome from "./pages/collte.vue"; 
import http from "./http"; 
import {
		Button,Form,Dialog,
		FormItem,Input,MessageBox,
		Loading,Table,tableColumn,Select,Option,Pagination
} from 'element-ui';
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Form)
Vue.use(Dialog)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Loading)
Vue.use(Table)
Vue.use(tableColumn)
Vue.prototype.$MessageBox=MessageBox 



Vue.prototype.$http=http 
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
		//{ name: "indexHome", component: indexHome, path: "/" },
    { name: "listHome", component: listHome, path: "/" },
    { name: "liveRoom", component: liveRoom, path: "/live" },
		{ name: "collteHome", component: collteHome, path: "/msg" },
  ]
});
new Vue({
  render: h => h(App),
	router
}).$mount('#app')
