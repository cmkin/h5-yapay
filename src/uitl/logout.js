
import socket from './socket'
import sql from './sql'

export default function(){
		
		//退出之前，保存当前用户聊天记录
		let chats = this.$store.state.chat.lists;
		sql.update(chats);
		
		//清楚缓存
		localStorage.clear()
		//关闭socket
		socket.close()
		//清除user信息
		this.$store.commit('updateUserInfo',false)
		
		
		location.href = '/#/login-register?type=0'
		location.reload();
		
}