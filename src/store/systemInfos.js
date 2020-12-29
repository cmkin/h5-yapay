export default{
	state:{
		infos:false
	},
	mutations:{
		updateSystemInfos(state,datas){
			state.infos = {...state.infos , ...datas }
		}
	}
}