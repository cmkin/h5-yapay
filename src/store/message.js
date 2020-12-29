export default {
	state: {
		//lists:{}
		isNew:false,
		announcement: false, //公告
		tips: false, //系统提示
		notice: false //动账通知

	},
	mutations: {
		updateMessage(state, infos) {
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
			state.isNew = infos.isNew || false
		}
	}



}
