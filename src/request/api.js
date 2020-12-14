import {post,get} from './request'



export default {
	//获取汇率
	getExchangeRate(){
		return get("api/getExchangeRate",{
			token:false
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
			success:true,
			token:false
		})
	},
	//手机号注册
	phoneRegister(data){
		return post("payuser/phoneRegister",{
			data:data,
			token:false
		})
	},
	//邮箱注册
	mailRegister(data){
		return post("payuser/mailRegister",{
			data:data,
			token:false
		})
	},
}
