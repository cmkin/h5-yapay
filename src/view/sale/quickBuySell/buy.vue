<template>
	<div class="quick_buy">
		<ul class="items"  ref="buyi">
			<li>
				<p class="t">
					{{ $t('quickSale.quickBuySell.buy.mrsl') }}
				</p>
				<div class="input">
					<input type="number" :error="$t('quickSale.quickBuySell.buy.mrsl')" v-model="buy.num" :placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.buy.mrsl') ">
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
					<input type="number" :error="$t('quickSale.quickBuySell.buy.mrje')" v-model="buy.price" :placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.buy.mrje') ">
					<span>
						<img :src="$t('global.cny')" alt="">
						<b>CNY</b>
					</span>
				</div>
			</li>
			<li>
				<p class="t">{{ $t('quickSale.quickBuySell.buy.fkfs') }}</p>
				<div class="pay_type">		
					<myselect v-model="buy.active" height="160px"  icon :lists="$t('global.payType')"></myselect>
				</div>
			</li>
		</ul>
		<div class="ckdj">
			<span> {{ $t('quickSale.quickBuySell.buy.ckdj') }}:</span>
			<i>7.03 CNY/USDT</i>
		</div>
		<div class="btn">
			<van-button :disabled="!(buy.num>0 && buy.price>0)" @click="buySellM()" block type="info"> {{ $t('quickSale.quickBuySell.buy.ljgm') }} </van-button>
			<p>{{ $t('quickSale.quickBuySell.buy.sxf') }}:0%</p>
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
			}
		},
		mounted() {
			this.buy.active = this.$t('global.payType')[0].id
		},
		methods:{
			buySellM(){
			
				
					let payType = this.$t('global.payType').filter(item=>item.id == this.buy.active)[0]
					
					let okBuySell={
						show:this.$inputCheak(this.$refs.buyi),
						type:1,
						title:this.$t('quickSale.quickBuySell.okBuy.title'),
						lists:this.$t('quickSale.quickBuySell.okBuy.list'),
						datas:{
							payType:payType.title,
							img:payType.img,
							price:this.buy.price,
							nums:this.buy.num,
							allPrice:Number(this.buy.num * this.buy.price).toFixed(2)
						}
					}
					this.$emit("okBuySell",okBuySell)
			
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.quick_sell{
		
	}
</style>
