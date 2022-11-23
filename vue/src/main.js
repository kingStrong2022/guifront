//https://vietteltelecom.vn/
/* eslint-disable */ 
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './assets/styles/reset.scss'
import listHome from "./pages/list.vue";
import liveRoom from "./pages/live.vue";
import serveSocketHome from "./pages/serveSocket"; 
import collteHome from "./pages/collte.vue"; 
import formHome from "./pages/form.vue"; 
import downHome from "./pages/down.vue"; 
import http from "./http"; 
import store from './store'
import {
		Button,Form,Dialog,
		FormItem,Input,MessageBox,Badge,
		Loading,Table,tableColumn,Select,Option,Pagination
} from 'element-ui';
import variables from './assets/styles/element-variables.scss'
Vue.use(Badge)
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

console.log(MessageBox)

Vue.prototype.$http=http 
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "listHome", component: listHome, path: "/" },
    { name: "liveRoom", component: liveRoom, path: "/live" },
		{ name: "serveSocketHome", component: serveSocketHome, path: "/serve" },
		{ name: "collteHome", component: collteHome, path: "/msg" },
		{ name: "formHome", component: formHome, path: "/form" },
		{ name: "downHome", component: downHome, path: "/download" },
  ]
});
new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')
