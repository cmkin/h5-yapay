<template>
	<div class="view_quickSale_buy global_main">
		<div class="main">
			<van-tabs v-model="tabType"  line-height="0" lazy-render animated>
				<van-tab :title="$t('quickSale.quickBuySell.buy.wym')">
					<buy @okBuySell="okBuySellM"  ref="buy"></buy>
				</van-tab>
				<van-tab :title="$t('quickSale.quickBuySell.sell.wym')">
					<sell @okBuySell="okBuySellM"  ref="sell"></sell>
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
	import buy from './buy'
	import sell from './sell'
	export default {
		data() {
			return {		
				tabType: 0,				
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
		components:{buy,sell},
		mounted() {
			
		},
		watch:{},
		methods: {
			okBuySellM(obj){
				this.okBuySell = obj
			},
			okPay(){
					
				let path = ''
				let json = {}
				let obj = this.okBuySell.datas
				if(this.okBuySell.type==1){
					path = 'payment'
					json={
						buyType:0,
						coin:obj.nums,
						paymenttype:obj.payTypeId,
						type:0
					}
				}else{
					path = 'collection'
					json={
						buyType:0,
						coin:obj.nums,
						paymenttype:obj.payTypeId,
						type:1
					}
				}
				
				this.$http.tradeCoin(json).then(res=>{
					if(res.code==0){
						this.$router.push({
							path:path,
							query:{
								id:res.data
							}
						})
					}else{
						this.okBuySell.show = false
					}
				})
			
				
			}

		}
	}
</script>

<style lang="less">
	
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
				margin: 25px auto;
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
