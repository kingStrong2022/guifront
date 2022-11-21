
import * as types from '@/store/mutation-types'
let state = {
	headers: {
		showLogin: true,
	},
	slide:{
		drawer: true,
	}
}

let getters = {
 
}

let mutations = {
	[types.SETD_RAWER](state, data) {
		state.slide.drawer = data
	}
}
let actions = {
}


export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
