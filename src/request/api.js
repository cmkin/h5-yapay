import {post,get} from './request'

//登录，注册，系统信息，用户信息等
const logregsys = {
	//获取汇率
	getExchangeRate(){
		return get("api/getExchangeRate",{})
	},
	//H5获取价格
	getCoinPrice(data){
		return get("payuser/getCoinPrice",{
			data:data
		})
	},
	//获取验证码
	sendSmsCode(urlType,data){
		let url = 'payuser/sendSmsCode'
			switch(urlType){
				case 2:
					url = 'payuser/getMailCode'
				break;
			}
		return post(url,{
			data:data,
		})
	},
	//手机号注册
	phoneRegister(data){
		return post("payuser/phoneRegister",{
			data:data,
		})
	},
	//邮箱注册
	mailRegister(data){
		return post("payuser/mailRegister",{
			data:data,
		})
	},
	//帐号登录
	accountLogin(data){
		return post("payuser/accountLogin",{
			data:data,
			error:true
		})
	},
	//手机验证码登录
	smsLogin(data){
		return post("payuser/smsLogin",{
			data:data,
		})
	},
	//忘记密码
	forgetPassword(data){
		return get("payuser/forgetPassword/"+data.account)
	},
	//重置密码
	restPasswordByTwo(type,data){
		let url = 'payuser/restPasswordByPhone'
			if(type==2){
				url = 'payuser/restPasswordByMail'
			}
		return post(url,{
			data:data,
			token:false
		})
	},
	//重置交易密码
	restPayPasswordByTwo(type,data){
		let url = 'payuser/restPaypasswordByPhone'
			if(type==2){
				url = 'payuser/restPaypasswordByMail'
			}
		return post(url,{
			data:data
		})
	},
	//根据token获取用户信息
	getUserInfoByToken(){
		return get("payuser/getUserInfoByToken")
	},
	//根据用户id获取用户信息
	getUserById(data){
		return get("payuser/getUserById/"+data.userid)
	},
	//获取后台配置接口
	getBackgroundConfig(){
		return get("payuser/getBackgroundConfig")
	},
	//获取用户收付款列表
	getUserPayInfoById(data){
		return get("payuser/getUserPayInfoById/"+data.userid)
	},
	//设置交易密码
	updatePayPassword(data){
		return post('payuser/updatePayPassword',{
			data:data
		})
	},
	//修改登录密码或者交易密码
	updatePasswordById(data){
		return post('payuser/updatePasswordById',{
			data:data
		})
	},
	//根据userid获取公告活动列表
	findNoticeByUserid(data){
		return post('chatrecord/findNoticeByUserid',{
			data:data
		})
	},
	//根据userid获取公告活动列表
	findSystemNoticeByUserid(data){
		return post('chatrecord/findSystemNoticeByUserid',{
			data:data
		})
	},
	//动账提醒
	billReminder(data){
		return post('payuserorder/billReminder',{
			data:data
		})
	},
	//获取用户认证等级信息
	getUserLevelInfo(data){
		return get("payuser/getUserLevelInfo",{
			data:data
		})
	},
	//获取用户认证等级的交易限额
	getUserAmount(data){
		return get("payuser/getUserAmount",{
			data:data
		})	
	},
	//绑定手机
	bindingPhone(data){
		return post('payuser/bindingPhone/'+data.userid,{
			data:data
		})
	},
	//绑定邮箱
	bindingMail(data){
		return post('payuser/bindingMail/'+data.userid,{
			data:data
		})
	},
	//上传图片通用接口
	uploadFile(data){
		return post('payuser/uploadFile',{
			data:data
		})
	},
	//上传支付相关信息
	uploadPayInfo(data){
		return post('payuser/uploadPayInfo',{
			data:data
		})
	},
	//删除支付方式
	deleteUserPayInfo(data){
		return post('payuser/deleteUserPayInfo',{
			data:data
		})
	},
	//上传头像
	uploadUserHead(data){
		return post('payuser/uploadUserHead',{
			data:data
		})
	},
	//基础认证
	basicAuthentication(data){
		return post('payuser/basicAuthentication',{
			data:data
		})
	},
	//视频认证
	videoAuthentication(data){
		return post('payuser/videoAuthentication',{
			data:data
		})
	},
	//保存头像,昵称
	updateUserInfo(data){
		return post('payuser/updateUserInfo',{
			data:data
		})
	},
	//退出登录
	loginOut(data){
		return post('payuser/loginOut',{
			data:data
		})
	},
}


//自选交易，快捷交易

const sale = {
	//获取自选区挂单列表
	getOptionalOrderList(data){
		return post('payuserorder/getOptionalOrderList',{
			data:data
		})
	},
	//获取大户挂单的支付方式
	getPaymentList(data){
		return post('payuserorder/getPaymentList',{
			data:data
		})
	},
	//用户快捷买卖币
	tradeCoin(data){
		return post('payuserorder/tradeCoin',{
			data:data
		})
	},
	//获取订单列表
	getOrderList(data){
		return post('payuserorder/getOrderList',{
			data:data
		})
	},
	//获取待处理的订单(参数0)&&轮询订单状态
	getUnderwayOrder(data){
		return post('payuserorder/getOrderList/'+data.id)
	},
	//根据id查询订单&&获取订单详情
	getOrderById(data){
		return post('payuserorder/getOrderById',{
			data:data
		})
	},
	changeOrderStatus(data){
		return post('payuserorder/changeOrderStatus',{
			data:data
		})
	},
	//自选订单点击进入第一步
	getOptionalDetail(data){
		return post('payuserorder/getOptionalDetail',{
			data:data
		})
	},
	//用户自选区下单
	userOptionalTradeCoin(data){
		return post('payuserorder/userOptionalTradeCoin',{
			data:data
		})
	},
	//用户委托单-自选-发布
	userOrder(data){
		return post('payuserorder/userOrder',{
			data:data
		})
	},
	//大户挂单-服务商-快捷-发布
	openOrder(data){
		return post('payuserorder/openOrder',{
			data:data
		})
	},
	//生成礼品卡
	createRedeemCode(data){
		return post('payuserorder/createRedeemCode',{
			data:data
		})
	},
	//使用礼品卡
	useRedeemCode(data){
		return post('payuserorder/useRedeemCode?code='+data.code)
	},
	//获取生成和使用的礼品卡
	getRedeemCodes(data){
		return post('payuserorder/getRedeemCodes',{
			data:data
		})
	}
}


//个人中心

const assets = {
	//账单记录
	getTradeLogList(data){
		return post('payuserorder/getTradeLogList',{
			data:data
		})
	},
	//输入账号获取对方信息
	getOpponentInfo(data){
		return post('payBusiness/getOpponentInfo',{
			data:data
		})
	},
	//发起转账
	launchTransfer(data){
		return post('payBusiness/launchTransfer',{
			data:data
		})
	},
	//收付款记录
	collectionAndPaymentLog(data){
		return post('payuserorder/collectionAndPaymentLog',{
			data:data
		})
	},
	//getPayLogById
	getPayLogById(data){
		return get("payuserorder/getPayLogById",{
			data:data
		})
	},
	//获取充币地址
	getUserCoinAddress(data){
		return post('payuserorder/getUserCoinAddress')
	},
	//充提币记录
	userDrawCoinLog(data){
		return post("payuserorder/userDrawCoinLog",{
			data:data
		})
	},
	//提币
	withdrawCoin(data){
		return post("payuserorder/withdrawCoin",{
			data:data
		})
	},
	//用户委托单
	getUserOpenOrderList(data){
		return post("payuserorder/getUserOpenOrderList",{
			data:data
		})
	},
	//用户取消/暂停委托单
	cancelUserOrder(data){
		return post("payuserorder/cancelUserOrder",{
			data:data
		})
	},
	//快捷取消/暂停委托单
	cancelOrder(data){
		return post("payuserorder/cancelOrder",{
			data:data
		})
	}
}

export default {
	  ...logregsys,
	  ...sale,
	  ...assets
}
