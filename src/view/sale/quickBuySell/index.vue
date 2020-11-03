<template>
	<div class="view_quickSale_buy global_main">
		<div class="main">
			<van-tabs v-model="tabType" line-height="0" lazy-render animated>
				<van-tab :title="$t('quickSale.quickBuySell.buy.wym')">
					<ul class="items" ref="buy">
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
						<van-button :disabled="!(buy.num>0 && buy.price>0)" @click="buySellM(1)" block type="info"> {{ $t('quickSale.quickBuySell.buy.ljgm') }} </van-button>
						<p>{{ $t('quickSale.quickBuySell.buy.sxf') }}:0%</p>
					</div>
				</van-tab>
				<van-tab :title="$t('quickSale.quickBuySell.sell.wym')">
					<ul class="items" ref="sell">
						<li class="sell_num">
							<p class="t">
								{{ $t('quickSale.quickBuySell.sell.mrsl') }}
							</p>
							<div class="input">
								<input type="number" v-model="sell.num" :error="$t('quickSale.quickBuySell.sell.mrsl')" :placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrsl') ">
								<span>
									<img :src="$t('global.usdt')" alt="">
									<b>USDT</b>
								</span>
							</div>
							<div class="num">
								<span>{{ $t('quickSale.quickBuySell.sell.ky') }} 10.00</span>
								<i> {{ $t('quickSale.quickBuySell.sell.zd') }}</i>
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
								{{ $t('quickSale.quickBuySell.sell.mrje') }}
							</p>
							<div class="input">
								<input type="number" v-model="sell.price" :error="$t('quickSale.quickBuySell.sell.mrje')" :placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrje') ">
								<span>
									<img :src="$t('global.cny')" alt="">
									<b>CNY</b>
								</span>
							</div>
						</li>
						<li>
							<p class="t">{{ $t('quickSale.quickBuySell.sell.fkfs') }}</p>
							<div class="pay_type">
								<myselect v-model="sell.active"  height="160px"  multiple :lists="$t('global.payType')"></myselect>
							</div>
						</li>
					</ul>
					<div class="ckdj">
						<span> {{ $t('quickSale.quickBuySell.sell.ckdj') }}:</span>
						<i>7.03 CNY/USDT</i>
					</div>
					<div class="btn">
						<van-button :disabled="!(sell.num>0 && sell.price>0)" block @click="buySellM(2)" type="info"> {{ $t('quickSale.quickBuySell.sell.ljgm') }} </van-button>
						<p>{{ $t('quickSale.quickBuySell.sell.sxf') }}:0%</p>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		
		
		<dialogx v-model="okBuySell.show" :onOk="okPay" :title="okBuySell.title">
			<template v-slot:content>
				<ul class="ok_buy">
					<li v-for="item in okBuySell.lists">
						<span>{{item.name}}</span>
						<span class="r" :style="{color:item.key=='allPrice'?'red':'#333'}">
							<img :src="okBuySell.datas.img" alt="" v-if="okBuySell.type==1 && item.key=='payType'">
							{{okBuySell.datas[item.key]}} 
							<i v-if="item.key=='nums'">USDT</i>
							<i v-if="item.key=='price' || item.key=='allPrice' ">CNY</i>
						</span>
					</li>	
				</ul>
			</template>
		</dialogx>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				tabType: 0,
				buy: {
					flag: false,
					active: null,
					num:'',
					price:''
				},
				sell: {
					flag: false,
					active: [],
					num:'',
					price:''
				},
				//弹窗
				okBuySell:{
					show:false,
					type:null,
					title:'',
					lists:[],
					datas:{}
				}
			}
		},
		filters: {
			sellPayType(arr) {
				return arr.map(item => item.title).join(",")
			}
		},
		mounted() {
			this.buy.active = this.$t('global.payType')[0].id
			this.sell.active = this.$t('global.payType').map(item=>item.id)
			
		},
		watch:{
			tabType(){
				this.buy.flag = false
				this.sell.flag = false
			}
		},
		methods: {

			buySellM(type){
			
				if(type==1){
					let payType = this.$t('global.payType').filter(item=>item.id == this.buy.active)[0]
					this.okBuySell={
						show:this.$inputCheak(this.$refs.buy),
						type:type,
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
				}
				
				if(type==2){
					
					let payType = this.$t('global.payType').filter(item=>this.sell.active.some(tt=>tt==item.id))

					this.okBuySell={
						show:this.$inputCheak(this.$refs.sell),
						type:type,
						title:this.$t('quickSale.quickBuySell.okSell.title'),
						lists:this.$t('quickSale.quickBuySell.okSell.list'),
						datas:{
							payType:payType.map(item => item.title).join(","),
							price:this.sell.price,
							nums:this.sell.num,
							allPrice:Number(this.sell.num * this.sell.price).toFixed(2)
						}
					}
				}
				
			},
			okPay(){
				let path = ''
				if(this.okBuySell.type==1){
					path = 'payment'
				}else{
					path = 'collection'
				}
				this.$router.push({
					path:path,
					query:{}
				})
			}

		}
	}
</script>

<style lang="less" scoped="scoped">
	
	.view_quickSale_buy {
		overflow-y: hidden;

		.main {
			.box_wrap;
			margin: 96px auto;
			.items {
				padding-top: 20px;

				&>li {
					padding-bottom: 5px;
					margin-bottom: 20px;
					border-bottom: 1px solid #E3E3E3;

					.t {
						padding-bottom: 15px;
					}

					.input {
						img {
							display: inline-block;
							width: 18px;
							height: 18px;
						}

						input {
							border: none;
							width: 70%;
							border: none;
							display: inline-block;
							padding-left: 0;
							&::placeholder {
								color: #D3D3D3;
								font-size: 16px;
								font-weight: 100;
							}
						}

						span {
							float: right;

							b {
								font-size: 16px;
								margin-left: 5px;
								position: relative;
								top: -2px;
							}
						}
					}

					.pay_type {
					}
				}

				.jh {
					border: none;
					text-align: center;
					padding-bottom: 0;

					svg {
						//.hover(@blue, true);
						transform: rotate(90deg);
						display: inline-block;

						path {
							fill: rgba(4, 102, 200, 0.3);
						}
					}
				}

				.sell_num {
					position: relative;

					.num {
						position: absolute;
						right: 0;
						bottom: -25px;
						font-size: 12px;
						color: #B3B3B3;

						i {
							color: @blue;
							.hover;
							margin-left: 10px;
						}
					}
				}
			}

			.ckdj {
				font-size: 12px;
				margin-bottom: 24px;

				span {
					color: #B3B3B3;
					margin-right: 5px;
				}
			}

			.btn {
				margin-bottom: 30px;

				p {
					margin-top: 10px;
					text-align: right;
					color: #C5C9D4;
					font-weight: 100;
				}
			}
		}
		
		.ok_buy{
			.line_rl(#B3B3B3);
			li{
				&>.r{
					img{
						width: 16px;
						height: 16px;
						position: relative;
						top: 2px;
					}
				}
			}
		}
	}

	@media (max-width:768px) {
		.view_quickSale_buy {
			.main {
				margin: 36px auto;
			}
		}
	}
</style>
<style lang="less">
	.view_quickSale_buy {
		.main {

			.van-hairline--top-bottom::after,
			.van-hairline-unset--top-bottom::after {
				border: none;
			}

			.van-tab {
				color: #B3B3B3;
				font-size: 16px;
				.hover;
			}

			.van-tab--active {
				color: #2E323D !important;
				font-size: 24px;
			}
		}
	}
</style>
