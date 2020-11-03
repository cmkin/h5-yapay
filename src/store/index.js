import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    screeW:document.documentElement.clientWidth
  },
  mutations: {
    updeteScreeW(state,nums){
		state.screeW = nums
	}
  }
})


window.addEventListener("resize",function(){
	store.commit('updeteScreeW',document.documentElement.clientWidth)
})



export default store