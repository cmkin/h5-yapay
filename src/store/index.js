import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



import userinfo from './userinfo'
import systemInfos from './systemInfos'
import chat from './chat'
import message from './message'

const store = new Vuex.Store({
  state: {
    screeW:document.documentElement.clientWidth,
	login:{
		token:null
	}
	
  },
  mutations: {
    updeteScreeW(state,nums){
		state.screeW = nums
	},
	updateLogin(state,datas){
		state.login = datas
	},
	
  },
  modules:{
	  userinfo,
	  systemInfos,
	  chat,
	  message
  }
})


window.addEventListener("resize",function(){
	store.commit('updeteScreeW',document.documentElement.clientWidth)
})



export default store