export default {
	state: {
		//lists:{}
		newType: [], // 0.1.2 
		announcement: false, //公告
		tips: false, //系统提示
		notice: false //动账通知

	},
	mutations: {
		updateMessage(state, infos) {
			if(!infos.delete){
				switch (infos.type) {
					case 0:
						state.announcement = infos.data
						break;
					case 1:
						state.tips = infos.data
						break;
					case 2:
						state.notice = infos.data
						break;
				}
			}
			if (infos.type!=null && infos.isNew) {
				if (state.newType.includes(infos.type)) {
					if (infos.delete) {
						state.newType.splice(state.newType.indexOf(infos.type), 1)
					}
				} else {
					if(!infos.delete){
						state.newType.push(infos.type)
					}
				}
			}

		}

	}



}
