<template>
	<div class="quick_sell" >
		<ul class="items" ref="selli">
			<li class="sell_num">
				<p class="t">{{ $t('quickSale.quickBuySell.sell.mrsl') }}</p>
				<div class="input">
					<input
						type="number"
						v-model="sell.num"
						@input="inputChange(0)"
						:error="$t('quickSale.quickBuySell.sell.mrsl')"
						:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrsl')"
					/>
					<span>
						<img :src="$t('global.usdt')" alt="">
						<b>USDT</b>
					</span>
				</div>
				<div class="num">
					<span>{{ $t('quickSale.quickBuySell.sell.ky') }} {{Number(userInfos.coin).toFixed(4) }}</span>
					<i @click="maxNum">{{ $t('quickSale.quickBuySell.sell.zd') }}</i>
				</div>
			</li>
			<li class="jh">
				<svg t="1596700800611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8219" width="24" height="24">
					<path
						d="M912 369.1c0 4.1-1.3 7.6-4 10.3L765.2 522.3c-2.7 2.7-6.1 4-10.3 4-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8H126.3c-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8c0-3.8 1.4-7.2 4.2-10.1 2.8-2.8 6.2-4.2 10.1-4.2h614.3V226c0-4.1 1.3-7.6 4-10.3 2.7-2.6 6.1-4 10.3-4 3.5 0 7.1 1.5 10.7 4.5L908 358.6c2.7 2.9 4 6.3 4 10.5z m0 242.9v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2H283.4v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2-3.5 0-7.1-1.5-10.7-4.5L116.1 664.9c-2.7-2.7-4-5.9-4-9.9 0-4.1 1.3-7.6 4-10.3L259 501.8c2.7-2.7 6.1-4 10.3-4 3.8 0 7.2 1.4 10.1 4.2s4.2 6.2 4.2 10.1v85.8h614.3c3.8 0 7.2 1.4 10.1 4.2 2.6 2.7 4 6 4 9.9z"
						p-id="8220"
					></path>
				</svg>
			</li>
			<li>
				<p class="t">{{ $t('quickSale.quickBuySell.sell.mrje') }}</p>
				<div class="input">
					<input
						type="number"
						@input="inputChange(1)"
						v-model="sell.price"
						:error="$t('quickSale.quickBuySell.sell.mrje')"
						:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrje')"
					/>
					<span>
						<img :src="sysInfos.hv.dwimg" alt="">
						<b>{{sysInfos.hv.dw}}</b>
					</span>
				</div>
			</li>
			<li>
				<p class="t">{{ $t('quickSale.quickBuySell.sell.fkfs') }}</p>			
				<div class="pay_type"><myselect v-model="sell.active" height="160px" multiple :lists="payTypeShow"></myselect></div>
			</li>
		</ul>
		<div class="ckdj">
			<span>{{ $t('quickSale.quickBuySell.sell.ckdj') }}:</span>
			<i>{{sysInfos.hv.sellPrice}} {{sysInfos.hv.dw}}/USDT</i>
		</div>
		<div class="btn">
			<van-button :disabled="!(sell.num > 0 && sell.price > 0 && sell.active.length)" block @click="buySellM()" type="info">{{ $t('quickSale.quickBuySell.sell.ljgm') }}</van-button>
			<p>{{ $t('quickSale.quickBuySell.sell.sxf') }}:{{ userInfos.fastsell}}%</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sell: {
				flag: false,
				active: [],
				num:'',
				price:''
			},
			payType:[]
		};
	},
	filters: {
		sellPayType(arr) {
			return arr.map(item => item.title).join(",")
		}
	},
	computed:{
		payTypeShow(){
			
			if(!this.userInfos.islogin){
				return this.$t('global.payType')
			}
			
			let hasType = this.userInfos.payList.map(item=>Number(item.type))
			let allType= this.$copy(this.$t('global.payType'))
			return allType.filter(item=>{
				if(!this.payType.length){
					return true
				}
				return this.payType.includes(item.id)
			}).map(item=>{
				if(!hasType.includes(item.id)){
					item.add = true
					item.addMethod = (res)=>{
						this.$router.push({
							path:'/paymentMethod',
							query:{
								type:res.id
							}
						})
					}
				}else{
					item.add = false
				}
				return item 
			})
		}
	},
	mounted() {
		
		if(this.userInfos.islogin){
			let hasType = this.userInfos.payList.map(item=>Number(item.type))
			this.sell.active = hasType
		}else{
			this.sell.active = this.$t('global.payType').map(item=>item.id)
		}
		
		
	},
	methods: {
		buySellM() {
			if(this.$isLogin()){
				return
			}

			
			
			
			if(this.sell.price<this.sysInfos.config.coinLimit.sellmin || this.sell.price>this.sysInfos.config.coinLimit.sellmax){
				this.$notify(this.$t('global.base.dbxew')+this.sysInfos.config.coinLimit.sellmin+'-'+this.sysInfos.config.coinLimit.sellmax+this.sysInfos.hv.dw)
				return
			}
			if(Number(this.sell.num).toFixed(4)>Number(this.userInfos.coin).toFixed(4)){
				this.$notify(this.$t('global.base.kyye')+Number(this.userInfos.coin).toFixed(4)+"USDT")
				return
			}
			
			if(!this.payType.length){
				this.$notify(this.$t('global.base.nopp'))
				this.sell.num=''
				this.sell.price=''
				return
			}
			
			let payType = this.$t('global.payType').filter(item => this.sell.active.some(tt => tt == item.id));

			let okBuySell = {
				show: this.$inputCheak(this.$refs.selli),
				type: 2,
				title: this.$t('quickSale.quickBuySell.okSell.title'),
				lists: this.$t('quickSale.quickBuySell.okSell.list'),
				datas: {
					payType: payType.map(item => item.title).join(','),
					payTypeId: this.sell.active.join(","),
					price: this.sysInfos.hv.sellPrice,
					nums: this.sell.num,
					allPrice: Number(this.sell.price).toFixed(2)
				}
			};
			this.$emit('okBuySell', okBuySell);
		},
		inputChange(type){
			if(type==0){
				this.sell.price = Number(this.sell.num * this.sysInfos.hv.sellPrice).toFixed(2)
			}else{
				this.sell.num = Number(this.sell.price/this.sysInfos.hv.sellPrice).toFixed(4)
			}
			
			if(this.userInfos.islogin){
				
				/* if(this.sell.price>this.userInfos.coin){
					return
				} */
				
				if(this.sell.price<this.sysInfos.config.coinLimit.sellmin || this.sell.price>this.sysInfos.config.coinLimit.sellmax){
					return
				}
				
				this.$http.getPaymentList({
					coin:this.sell.num,
					type:1
				}).then(res=>{
					this.payType = res.data.map(item=>Number(item))
					this.sell.active = this.payTypeShow.filter(item=>!item.add).map(item=>Number(item.id))
				})
			}
		},
		maxNum(){
			this.sell.num = Number(this.userInfos.coin).toFixed(4) 
			this.inputChange(0)
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.quick_sell {
}
</style>
