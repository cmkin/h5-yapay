<template>
	<div class="quick_sell" >
		<ul class="items" ref="selli">
			<li class="sell_num">
				<p class="t">{{ $t('quickSale.quickBuySell.sell.mrsl') }}</p>
				<div class="input">
					<input
						type="number"
						v-model="sell.num"
						:error="$t('quickSale.quickBuySell.sell.mrsl')"
						:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrsl')"
					/>
					<span>
						<img :src="$t('global.usdt')" alt="" />
						<b>USDT</b>
					</span>
				</div>
				<div class="num">
					<span>{{ $t('quickSale.quickBuySell.sell.ky') }} 10.00</span>
					<i>{{ $t('quickSale.quickBuySell.sell.zd') }}</i>
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
						v-model="sell.price"
						:error="$t('quickSale.quickBuySell.sell.mrje')"
						:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrje')"
					/>
					<span>
						<img :src="$t('global.cny')" alt="" />
						<b>CNY</b>
					</span>
				</div>
			</li>
			<li>
				<p class="t">{{ $t('quickSale.quickBuySell.sell.fkfs') }}</p>
				<div class="pay_type"><myselect v-model="sell.active" height="160px" multiple :lists="$t('global.payType')"></myselect></div>
			</li>
		</ul>
		<div class="ckdj">
			<span>{{ $t('quickSale.quickBuySell.sell.ckdj') }}:</span>
			<i>7.03 CNY/USDT</i>
		</div>
		<div class="btn">
			<van-button :disabled="!(sell.num > 0 && sell.price > 0)" block @click="buySellM()" type="info">{{ $t('quickSale.quickBuySell.sell.ljgm') }}</van-button>
			<p>{{ $t('quickSale.quickBuySell.sell.sxf') }}:0%</p>
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
		};
	},
	filters: {
		sellPayType(arr) {
			return arr.map(item => item.title).join(",")
		}
	},
	mounted() {
		this.sell.active = this.$t('global.payType').map(item=>item.id)
	},
	methods: {
		buySellM() {
			let payType = this.$t('global.payType').filter(item => this.sell.active.some(tt => tt == item.id));

			let okBuySell = {
				show: this.$inputCheak(this.$refs.selli),
				type: 2,
				title: this.$t('quickSale.quickBuySell.okSell.title'),
				lists: this.$t('quickSale.quickBuySell.okSell.list'),
				datas: {
					payType: payType.map(item => item.title).join(','),
					price: this.sell.price,
					nums: this.sell.num,
					allPrice: Number(this.sell.num * this.sell.price).toFixed(2)
				}
			};
			this.$emit('okBuySell', okBuySell);
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.quick_sell {
}
</style>
