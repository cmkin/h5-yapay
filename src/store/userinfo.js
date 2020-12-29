export default {
	state:{
		infos:false,
		price:false,
	},
	mutations:{
		updateUserInfo(state,infos){
			if(infos.add){
				state.infos = {...state.infos,...infos.obj}
			}else{
				state.infos = infos
			}
			
		},
		updateUserPrice(state,datas){
			state.price = datas
		}
	}
	
	
	
}