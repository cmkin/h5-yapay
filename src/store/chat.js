export default {
	state:{
		lists:{
			//朋友id:{ infos:{朋友信息} , lists:[聊天记录] }
		}
	},
	mutations:{
		updateChatList(state,lists){
			state.lists = lists
		},
		updateChatHis(state,infos){
			
		   if(!state.lists.hasOwnProperty(infos.friendid)){
			   state.lists[infos.friendid] = {
				   infos:{},
				   lists:[]
			   }
		   } 
		   
			if(infos.isInfo){ //更新info
				
				let d = { ...infos }
					delete d.isInfo
					
				state.lists[infos.friendid].infos = d 
				
			}else{
				//添加记录
				state.lists[infos.friendid].lists.push(infos)
				
				if(! state.lists[infos.friendid]){
					//记录不存在，
					console.log("请更新该好友的信息")
				}
					
				
			}
		}
	}
	
	
	
}