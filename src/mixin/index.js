//全局
import Vue from 'vue'

Vue.mixin({
	created: function() {

	},
	data() {
		return {

		}
	},
	mounted() {


	},
	computed: {
		isPhone() {
			return this.$store.state.screeW <= 1024
		},
		sysInfos() {
			let userinfo = this.userInfos
			let sysinfos = this.$store.state.systemInfos.infos
			
				
				if(!sysinfos){
					//初始化，接口未完成是占位使用
					return {
						hv:{
							dw:'',
							dwimg:'',
							CNY:{}
						},
						config:{
							
						}
					}
				}
			
			//汇率信息	
			let hv = {}
			
			switch (userinfo.currency) {
				case 0:
					//hv = sysinfos.hv ? sysinfos.hv.USD : {}
					hv.dw = 'USD'
					hv.dwf = '$'
					hv.dwimg = require("@/assets/img/meiyuan.png")
					break;
				case 1:
					//hv = sysinfos.hv ? sysinfos.hv.CNY : {}
					hv.dw = 'CNY'
					hv.dwf = '￥'
					hv.dwimg = require("@/assets/img/cny.png")
					break;
				case 2:
					//hv = sysinfos.hv ? sysinfos.hv.EUR : {}
					hv.dw = 'EUR'
					hv.dwf = '€'
					hv.dwimg = require("@/assets/img/Euro.png")
					break;
				case 3:
					//hv = sysinfos.hv ? sysinfos.hv.AED : {}
					hv.dwf =  "د.إ";
					hv.dwimg = require("@/assets/img/dlm.png")
					break;
			}
			hv.sellPrice = userinfo.sellPrice
			hv.buyPrice = userinfo.buyPrice

			return {
				hv,
				config:sysinfos.config
			}
		},
		userInfos() {
			let infos = this.$store.state.userinfo.infos
			let price = this.$store.state.userinfo.price
				if(!infos){
					return{
						sellPrice:price?price.sellPrice:0,
						buyPrice:price?price.buyPrice:0,
						islogin:false,
						coin:0,
						fastbuy:0,
						fastsell:0,
						sell:0,
						buy:0,
						currency:1 //默认人民币 CNY  后期修改该值  显示不同默认地区
					}
				}
				infos.islogin = true
			return infos
		}
	},
})
