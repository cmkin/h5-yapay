import socket from './socket.js';

//sqlite数据库
import sql from './sql.js'


import updateUser from './updateUser'

export default function(index){
	//获取userinfo
	this.$http.getUserInfoByToken().then((user)=>{
		//初始化socket
		socket.init.call(this)
		//初始化数据库
		sql.init.call(this,()=>{
			//加载当前用户已有缓存
			sql.getDatas((res)=>{
				if(res){
					this.$store.commit('updateChatList',res.datas)
				}
			})
		})
		
		
		//个人信息
		this.$store.commit('updateUserInfo',user.data)
		//需要添加到userinfo里边的数据
		updateUser.call(this,index)
		
	})
	//获取后台配置
	this.$http.getBackgroundConfig().then(res=>{
		this.$store.commit('updateSystemInfos',{
			config:res.data
		})
	})
	
	//获取通知,系统提示，动账提示
	this.$http.findNoticeByUserid({
		"userId":this.$getToken(1),
		"pageNo": 1,
		"pageSize":1
	}).then(res=>{
		if(res.code==0 && res.data.length){
			this.$store.commit('updateMessage',{
				type:0,
				data:res.data[0]
			})
		}
		
	})
	this.$http.findSystemNoticeByUserid({
		"userId":this.$getToken(1),
		"pageNo": 1,
		"pageSize":1
	}).then(res=>{
		if(res.code==0 && res.data.length){
			this.$store.commit('updateMessage',{
				type:1,
				data:res.data[0]
			})
		}
	})
	this.$http.billReminder({
		"userId":this.$getToken(1),
		"pageNo": 1,
		"pageSize":1
	}).then(res=>{
		if(res.code==0 && res.data.length){
			this.$store.commit('updateMessage',{
				type:2,
				data:res.data[0]
			})
		}
	})
	

	
	
}