<template>
	<div class="quick_buy">
		<ul class="items"  ref="buyi">
			<li>
				<p class="t">
					{{ $t('quickSale.quickBuySell.buy.mrsl') }}
				</p>
				<div class="input">    
					<input type="number" @input="inputChange(0)" :error="$t('quickSale.quickBuySell.buy.mrsl')" v-model="buy.num" :placeholder=" $t('global.qsr') + $t('quickSale.quickBuySell.buy.mrsl') ">
					<span>
						<img :src="$t('global.usdt')" alt="">
						<b>USDT</b>
					</span>
				</div>
			</li>
			<li class="jh">
				<svg t="1596700800611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
				 p-id="8219" width="24" height="24">
					<path d="M912 369.1c0 4.1-1.3 7.6-4 10.3L765.2 522.3c-2.7 2.7-6.1 4-10.3 4-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8H126.3c-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8c0-3.8 1.4-7.2 4.2-10.1 2.8-2.8 6.2-4.2 10.1-4.2h614.3V226c0-4.1 1.3-7.6 4-10.3 2.7-2.6 6.1-4 10.3-4 3.5 0 7.1 1.5 10.7 4.5L908 358.6c2.7 2.9 4 6.3 4 10.5z m0 242.9v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2H283.4v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2-3.5 0-7.1-1.5-10.7-4.5L116.1 664.9c-2.7-2.7-4-5.9-4-9.9 0-4.1 1.3-7.6 4-10.3L259 501.8c2.7-2.7 6.1-4 10.3-4 3.8 0 7.2 1.4 10.1 4.2s4.2 6.2 4.2 10.1v85.8h614.3c3.8 0 7.2 1.4 10.1 4.2 2.6 2.7 4 6 4 9.9z"
					 p-id="8220"></path>
				</svg>
			</li>
			<li>
				<p class="t">
					{{ $t('quickSale.quickBuySell.buy.mrje') }}
				</p>
				<div class="input">
					<input @input="inputChange(1)" type="number" :error="$t('quickSale.quickBuySell.buy.mrje')" v-model="buy.price" :placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.buy.mrje') ">
					<span>
						<img :src="sysInfos.hv.dwimg" alt="">
						<b>{{sysInfos.hv.dw}}</b>
					</span>
				</div>
			</li>
			<li>
				<p class="t">{{ $t('quickSale.quickBuySell.buy.fkfs') }}</p>
				<div class="pay_type">		
					<myselect v-model="buy.active" height="160px"  icon :lists="payTypeShow"></myselect>
				</div>
			</li>
		</ul>
		<div class="ckdj">
			<span> {{ $t('quickSale.quickBuySell.buy.ckdj') }}:</span>
			<i>{{sysInfos.hv.buyPrice}} {{sysInfos.hv.dw}}/USDT</i>
		</div>
		<div class="btn">
			<van-button :disabled="!(buy.num>0 && buy.price>0)" @click="buySellM()" block type="info"> {{ $t('quickSale.quickBuySell.buy.ljgm') }} </van-button>
			<p>{{ $t('quickSale.quickBuySell.buy.sxf') }}:{{ userInfos.fastbuy}} %</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				buy: {
					flag: false,
					active: null,
					num:'',
					price:''
				},
				payType:[]
			}
		},
		computed:{
			payTypeShow(){
				if(!this.payType.length){
					return this.$t('global.payType')
				}
				return this.$t('global.payType').filter(item=>{
					return this.payType.includes(item.id)
				})
			}
		},
		mounted() {
			let query = this.$route.query
			 if(query.num){
				  if( query.type=='0' ){
					  this.buy.num = query.num
					  this.inputChange(0)
				  }else{
					  this.buy.price = query.num
					  this.inputChange(1)
				  }
			 }
			 
			 this.$router.replace('/sale/quickBuySell')
			
			this.buy.active = this.$t('global.payType')[0].id
		},
		methods:{
			buySellM(){
					
					if(this.$isLogin()){
						return
					}
					
					if(this.buy.price<this.sysInfos.config.coinLimit.buymin || this.buy.price>this.sysInfos.config.coinLimit.buymax){
						this.$notify(this.$t('global.base.dbxew')+this.sysInfos.config.coinLimit.buymin+'-'+this.sysInfos.config.coinLimit.buymax+this.sysInfos.hv.dw)
						return
					}
					
					if(!this.payType.length){
						this.$notify(this.$t('global.base.nopp'))
						this.buy.num=''
						this.buy.price=''
						return
					}
					
				
					let payType = this.$t('global.payType').filter(item=>item.id == this.buy.active)[0]
					
					let okBuySell={
						show:this.$inputCheak(this.$refs.buyi),
						type:1,
						title:this.$t('quickSale.quickBuySell.okBuy.title'),
						lists:this.$t('quickSale.quickBuySell.okBuy.list'),
						datas:{
							payType:payType.title,
							payTypeId:this.buy.active,
							img:payType.img,
							price:this.sysInfos.hv.buyPrice,
							nums:this.buy.num,
							allPrice:Number(this.buy.price).toFixed(2)
						}
					}
					this.$emit("okBuySell",okBuySell)
			
			},
			inputChange(type){
				if(type==0){
					this.buy.price = Number(this.buy.num * this.sysInfos.hv.buyPrice).toFixed(2)
				}else{
					this.buy.num = Number(this.buy.price/this.sysInfos.hv.buyPrice).toFixed(4)
				}
				
				if(this.userInfos.islogin){
					if(this.buy.price<this.sysInfos.config.coinLimit.buymin || this.buy.price>this.sysInfos.config.coinLimit.buymax){
						return
					}
					
					
					this.$http.getPaymentList({
						coin:this.buy.num,
						type:0
					}).then(res=>{
						this.payType = res.data.map(item=>Number(item))
						this.buy.active = this.payTypeShow[0].id
					})
				}
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.quick_sell{
		
	}
</style>
