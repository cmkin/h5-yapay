import logout from '@/uitl/logout'

import updateUser from './updateUser'

const url = "ws://219.153.20.218:9001/ws"
let ws = null
let _this = null //拿到vue指向
let restart = true

const socket = {
	//初始化连接

	init() {
		//当前this指向vue，其他函数指向 当前对象
		_this = this
		socket.start()
	},
	start() {
		try {
			ws = new WebSocket(url);

			ws.onopen = (event) => {
				//alert("已经与服务器建立了连接\r\n当前连接状态：" + this.readyState);
				console.log("socket连接成功")
				this.login()
				this.ping()
			};
			ws.onmessage = (event) => {
				//alert("接收到服务器发送的数据：\r\n" + event.data);
				let data = event.data
				if (data == 'pong') {
					return
				}

				this.getMessage(JSON.parse(data))
			};
			ws.onclose = (event) => {
				//alert("已经与服务器断开连接\r\n当前连接状态：" + this.readyState);
				console.log("socket断开连接",event)
				if(restart){
					_this.$notify({ type: 'primary', message: '通讯断开连接-重新中...' })
					this.start()
				}
			};
			ws.onerror = function(event) {
				//alert("WebSocket异常！" + event.toString());
				console.log("socket异常",event)
				//_this.$notify({ type: 'primary', message: '测试提示-socket异常...' })
			};
		} catch (ex) {
			//alert(ex.message);
			console.log(ex)
		}
	},
	close() {
		restart = false  //手动断开，不需要重新连接。
		ws.close()
	},
	//login 登录
	login() {

		let obj = {
			"protocol": 0,
			"token": _this.$getToken(),
			"chatRecord": {
				"userid": _this.$getToken(1),
				"deviceType":1 //网页登录
			}
		}
		ws.send(JSON.stringify(obj))
	},
	ping() {
		if(!restart){
			return
		}
		let obj = {
			"protocol": 3,
			"token": _this.$getToken(),
			"chatRecord": {
				"userid": _this.$getToken(1)
			},
		}
		ws.send(JSON.stringify(obj))
		setTimeout(() => {
			this.ping();
		}, 10000);
	},
	getMessage(data) {
		//接受到消息
		if (data.hasOwnProperty("client_id")) {			
			//发送成功回执
			return
		}
		let type = data.protocol
		switch (type) {
			case 8: //首页跑马灯
				_this.$store.commit('updateMessage', {
					type: 0,
					isNew: true,
					data: data
				})
				break;
			
			case 12:
			case 13:
			case 14: //动账消息
				_this.$store.commit('updateMessage', {
					type: 2,
					isNew: true,
					data: data
				})

				//更新userinfo
				updateUser.call(_this)

				break;

			case 1: //聊天消息
				let obj = {
					"friendid": data.chatRecord.userid,
					"time": new Date().getTime(), //data.chatRecord.createtime,
					"message": data.chatRecord.message,
					"type": data.chatRecord.type, // 0文字消息 ， 1 订单  2图片消息  3 时间
				}

				_this.$store.commit('updateChatHis', {
					...obj,
					msgType: 1, //0是发送 -自己 1 是接受 别人 
				})
				break;

			
			
			case 7: //账号变化推送 系统通知
				_this.$store.commit('updateMessage', {
					type: 1,
					isNew: true,
					data: data
				})
				//更新userinfo
				updateUser.call(_this)

				break;
			case 4: //订单推送
				if (data.status == 0 && data.initiator != _this.$getToken(1)) { // -- 0添加到聊天记录，并提示
					let obj = {
						"friendid": data.posterId,
						"time": data.createtime,
						"message": data,
						"type": 1,
					}

					_this.$store.commit('updateChatHis', {
						...obj,
					})
					console.log(obj,'dasdad')

					//触发订单弹窗提示处理的事件

					let filter = _this.$options.filters
					let time = data.overtimetype * 60
					let message = () => {

						return filter.language(_this.$t('message.newOrder'), filter.MS(time))
					}
					let inter = setInterval(() => {

						if (time <= 0) {
							clearInterval(inter)
							return
						}
						time--
						_this.$dialog.confirm({
								cancelButtonText: _this.$t('global.base.cancel'),
								confirmButtonText: _this.$t('global.base.ok'),
								title: _this.$t('global.base.wxts'),
								message: message()

							})
							.then(() => {
								// on confirm
								clearInterval(inter)
								_this.$router.replace({
									path:data.type==0? '/sale/payment' : '/sale/collection',
									query: {
										id: data.id
									}
								})

							})
							.catch(() => {
								// on cancel
								clearInterval(inter)
							});

					}, 1000)

				}

				_this.$store.commit('updateMessage', {
					type: 1,
					isNew: true,
					data: data
				})
				//更新userinfo
				updateUser.call(_this)

				break;

			case 15: //别处登录
				this.close()
				_this.$dialog.alert({
					cancelButtonText: _this.$t('global.base.cancel'),
					confirmButtonText: _this.$t('global.base.ok'),
					title: _this.$t('global.base.wxts'),
					message: data.msg == 1 ? _this.$t('logout.qtsb') : _this.$t('logout.dlsx'),
				}).then(() => {
					// on close
					logout.call(vm)
				});
				break;

		}
		console.log(data)
	},
	sendMessage(data) {
		let obj = {
			"protocol": 1,
			"token": _this.$getToken(),
			"chatRecord": {
				"id": null,
				"userid": _this.$getToken(1),
				/* "friendid": 100000086,
				"message": "您好！我是用户2",
				"type": 0 */
				...data
			},
			"ext": null,
			"client_id": "abcdefg"
		}
		ws.send(JSON.stringify(obj))
	}



}

export default socket
