<template>
	<div class="view_quickSale_paymentAndCollection global_main">
		<!-- 待付款 -->
		<div class="main clearfix" v-if="pageType==1">
			<div class="left">
				<div class="title clearfix">
					<img :src="$t('global.usdt')" alt="">
					<span>{{ $t('global.base.gm') + $t('global.base.usdt') }}</span>
				</div>

				<van-collapse :border="false" v-model="activeName">

					<van-collapse-item :name="0">
						<template #title>
							<ul class="lists zd_title">
								<li>
									<span class="l">{{$t('quickSale.payment.zf')}}</span>
									<span class="r">
										<img :src="$t('global.payType[0].img')" alt="">
										<s>文字</s>

									</span>
								</li>
							</ul>

						</template>

						<ul class="lists">

							<li>
								<span class="l">{{$t('quickSale.payment.sk')}}</span>
								<span class="r">
									<copy content="12312313">
										<s>12312313</s>
									</copy>
								</span>
							</li>
							<li>
								<span class="l">{{$t('global.base.zh')}}</span>
								<span class="r">
									<copy content="12312313">
										<s>12312313</s>
									</copy>
								</span>
							</li>

							<li class="zfb">
								<img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4112709337,2145947221&fm=58" alt="">
								<p>{{$t('quickSale.payment.codePay')}}</p>
							</li>
							<li class="tips">
								<van-icon name="warning-o" />
								<span>{{$t('quickSale.payment.mtips.t')}}</span>
								<div>{{$t('quickSale.payment.mtips.c')}}</div>
							</li>

						</ul>

					</van-collapse-item>


					<van-collapse-item :name="1" style="margin-bottom: 20px;">
						<template #title>
							<ul class="lists zd_title">
								<li>
									<span class="l">{{$t('quickSale.payment.ddxq.t')}}</span>
									<span class="r"></span>
								</li>
							</ul>

						</template>

						<ul class="lists">
							<li v-for="item in $t('quickSale.payment.ddxq.lists')">
								<span class="l">{{item.name}}</span>
								<span class="r" v-if="item.copy">
									<copy content="12312313">
										<s>dadadadsadasdadad</s>
									</copy>
								</span>
								<span class="r" v-else>数据</span>
							</li>
							
							
							<li class="tips">
								<van-icon name="warning" style="margin-right: 10px;" />

								<div>{{$t('quickSale.payment.ptips')}}</div>
							</li>

						</ul>

					</van-collapse-item>


				</van-collapse>


				<div class="buttoms clearfix">
					<div class="l">
						<div class="p">￥10.00</div>
						<div class="t" v-html="$options.filters.language($t('quickSale.payment.qzfk'),$options.filters.MS(testTime))"></div>
					</div>
					<div class="r">
						<van-button @click="cancelOrderOpen" type="default">{{ $t('quickSale.payment.qxdd') }}</van-button>
						<van-button @click="payOkOpen" type="info">{{ $t('quickSale.payment.wyfk') }}</van-button>
					</div>
				</div>

			</div>
			<div class="right">
				<chat></chat>
			</div>
		</div>


		<!-- 待收款 -->
		<div class="main clearfix" v-else>
			<div class="left">
				<div class="title clearfix">
					<img :src="$t('global.usdt')" alt="">
					<span>{{ $t('global.base.cs') + $t('global.base.usdt') }}</span>
				</div>

				<van-collapse :border="false" v-model="activeNamec">

					<van-collapse-item :name="0" style="margin-bottom: 20px;">
						<template #title>
							<ul class="lists zd_title">
								<li>
									<span class="l">{{$t('quickSale.collection.ddxq.t')}}</span>
									<span class="r"></span>
								</li>
							</ul>

						</template>

						<ul class="lists">
							<li v-for="item,index in $t('quickSale.collection.ddxq.lists')">
								<span class="l">{{ item.name }}</span>
								<span class="r" v-if="item.copy">
									<copy content="12312313">
										<s>134654687787</s>
									</copy>
								</span>
								<span class="r" v-else>数据数据</span>
							</li>
							<li class="tips mtips">
								<van-icon name="warning-o" />
								<span>{{$t('quickSale.collection.tips.t')}}</span>
								<div>{{$t('quickSale.collection.tips.c')}}</div>
							</li>
						</ul>

					</van-collapse-item>
					
					
					<van-collapse-item :name="1" style="margin-bottom: 20px;">
						<template #title>
							<ul class="lists zd_title">
								<li>
									<span class="l">{{$t('quickSale.collection.zfxx.t')}}</span>
									<span class="r"></span>
								</li>
							</ul>
					
						</template>
					
						<ul class="lists">
							<li v-for="item,index in $t('quickSale.collection.zfxx.lists')">
								<span class="l">{{ item.name }}</span>
								<span class="r" v-if="item.copy">
									<copy content="12312313">
										<s>134654687787</s>
									</copy>
								</span>
								<span class="r" v-else>数据数据</span>
							</li>
							<li class="tips">
								<van-icon name="warning-o" style="margin-right: 10px;" />
								
								<div>{{$t('quickSale.collection.zfTips')}}</div>
							</li>
						</ul>
					
					</van-collapse-item>


				</van-collapse>



				<div class="buttoms clearfix">
					<div class="l">
						<div class="p">￥10.00</div>
						<div class="t" v-html="$options.filters.language($t('quickSale.collection.cs'),$options.filters.MS(testTime))"></div>
					</div>
					<div class="r ">
						<van-button class="po" @click="cancelOrderOpen" :disabled="true" type="info">
							{{ $t('quickSale.collection.wsdk') }}
							<svg t="1600838779637" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
							 p-id="6601" width="48" height="48">
								<path d="M884.165 451.494c-2.494-203.504-168.046-367.753-372.161-367.753s-369.666 164.249-372.165 367.753c-34.163 27.314-56.096 69.25-56.096 116.37 0 82.254 66.697 148.969 148.96 148.969 35.899 0 68.818-12.726 94.534-33.857l-70.18-261.923c-7.949-1.294-16.045-2.155-24.353-2.155-5.474 0-10.855 0.339-16.183 0.926 17.954-147.35 143.268-261.601 295.488-261.601 152.199 0 277.532 114.25 295.481 261.601-5.306-0.583-10.705-0.926-16.18-0.926-8.305 0-16.421 0.863-24.375 2.155l-70.159 261.801c19.847 16.295 43.981 27.559 70.459 31.868-35.138 37.751-79.825 66.511-130.378 82.068l-6.164 6.156c-15.77-28.99-46.122-48.892-81.442-48.892-51.427 0-93.102 41.674-93.102 93.118 0 51.431 41.673 93.104 93.102 93.104 42.211 0 77.419-28.27 88.852-66.758 102.752-25.189 188.829-92.829 238.272-183.482 38.595-26.917 63.899-71.562 63.899-122.175-0.002-47.108-21.955-89.058-56.102-116.371z"
								 p-id="6602" fill="#ffffff"></path>
							</svg>
						</van-button>
						<van-button @click="payOkCoinOpen" type="info">{{ $t('quickSale.collection.qrsk') }}</van-button>
					</div>
				</div>

			</div>

			<div class="right">
				<chat></chat>
			</div>

		</div>


		<ul class="tips">
			<li v-for="item in $t('quickSale.payment.dtips')">
				{{item}}
			</li>
		</ul>


		<!-- 弹窗 待付款-->
		<dialogx v-model="cancelOrder.show" :disabled="!cancelOrder.no" :onOk="cancelOrderOk" :okText="$t('quickSale.payment.cancel.ok')"
		 :cancelText="$t('quickSale.payment.cancel.fh')" :title="$t('quickSale.payment.cancel.title')">
			<!-- cancelOrder 取消事件	 -->
			<template v-slot:content>
				<ul class="cancelOrder_content">
					<li v-for="item,index in $t('quickSale.payment.cancel.tips')">
						<span v-if="index==1" v-html="$options.filters.language(item,2)"></span>
						<span v-else>{{item}}</span>
					</li>
				</ul>
				<div class="cancelOrder_no">
					<div style="display: inline-block;">
						<van-checkbox v-model="cancelOrder.no" shape="square">{{ $t('quickSale.payment.cancel.no') }}</van-checkbox>
					</div>
				</div>
			</template>

		</dialogx>

		<dialogx v-model="payOk.show" :title="$t('quickSale.payment.payOk.title')">
			<!-- payOk 确认付款 -->

			<template v-slot:content>
				<ul class="pay_ok_content">
					<li>
						{{ $t('quickSale.payment.payOk.tip') }}
					</li>
					<li>
						{{ $t('quickSale.payment.payOk.fs') }}: 支付宝(15632654874)
					</li>
					<li>
						{{ $t('quickSale.payment.payOk.je') }}: 10.00 CNY
					</li>
				</ul>
			</template>
			<template v-slot:bLeft>
				<div class="pay_ok_bleft" v-html="$options.filters.language($t('global.base.hs'),$options.filters.MS(testTime))"></div>
			</template>

		</dialogx>

		<!-- 弹窗 待收款-->
		<dialogx v-model="payOkCoin.show" :disabled="!Boolean(payOkCoin.password)" :title="$t('quickSale.collection.payOkCoin.title')">
			<!-- 确认收款 -->
			<template v-slot:content>
				<ul class="pay_coin_content">
					<li>
						{{ $t('quickSale.collection.payOkCoin.tips') }}
					</li>
					<li>
						{{ $t('quickSale.collection.payOkCoin.skfs') }} : 支付宝
					</li>
					<li>
						{{ $t('quickSale.collection.payOkCoin.skje') }} : 10.00 CNY
					</li>
					<li class="password clearfix">
						{{ $t('global.base.jymm') }}
						<input v-model="payOkCoin.password" autofocus="autofocus" type="password"  :placeholder="$t('global.qsr') + $t('global.base.jymm')">
						<a href="#">
							{{ $t('global.base.wjmm') }}?
						</a>
					</li>
				</ul>
			</template>
			
			<template v-slot:bLeft>
				<div class="pay_ok_bleft" v-html="$options.filters.language($t('global.base.hs'),$options.filters.MS(testTime))"></div>
			</template>
			
		</dialogx>
		

	</div>
</template>

<script>
	export default {
		data() {
			return {
				//页面类型
				pageType: 1,
				activeName: [0, 1],
				activeNamec: [0,1],
				testTime: 1000,
				//弹窗-待付款
				cancelOrder: {
					show: false,
					no: false
				},
				payOk: {
					show: false
				},
				//弹窗-确认收款
				payOkCoin:{
					show:false,
					password:''
				}
			}
		},
		mounted() {
			this.pageType = this.$route.meta.type

			setInterval(() => {
				this.testTime--
			}, 1000)
		},
		methods: {
			cancelOrderOpen() {
				this.cancelOrder.show = true
				this.cancelOrder.no = false
			},
			cancelOrderOk() {

			},
			payOkOpen() {
				this.payOk.show = true
			},
			payOkCoinOpen(){
				this.payOkCoin.password = ''
				this.payOkCoin.show = true
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_quickSale_paymentAndCollection {
		.main {
			padding-top: 40px;

			.left {
				.box_wrap(550px);
				float: left;
				padding: 0;
				width: 550px;

				.title {
					.box_title;

					&>img {
						width: 24px;
						height: 24px;
						border-radius: 50%;
					}
				}

				.lists {
					.line_rl();
					padding: 0 24px;

					li {
						font-size: 16px;

					}
				}
			}

			.right {
				float: right;
				.box_wrap(360px);

				padding: 0;
			}

			.buttoms {
				background: @blue-d;
				border-top: 1px solid @e3e3;
				padding: 10px 20px;

				.l {
					float: left;

					.p {
						color: @blue;
						font-size: 24px;
						font-weight: bold;
					}

					.t {
						color: #5C677D;
						margin-top: 10px;
						font-size: 12px;
					}
				}

				.r {
					float: right;

					.po {
						margin-right: 20px;
						position: relative;
						padding-right: 40px;
						svg {
							position: absolute;
							right: 12px;
							top: 12px;
							width: 18px;
							height: 18px;
						}
					}
				}

			}
		}

		.tips {
			max-width: 550px;
			padding: 20px;
			padding-left: 30px;
			box-sizing: border-box;

			li {
				margin-bottom: 10px;
				color: #B3B3B3;
				font-size: 12px;
				position: relative;

				&::after {
					content: '';
					position: absolute;
					left: -15px;
					top: 7px;
					width: 7px;
					height: 7px;
					background: #D7DAE2;
					border-radius: 50%;
					opacity: 1;
				}
			}
		}

		.cancelOrder_content {
			li {
				color: #666;
				font-size: 14px;
				position: relative;
				margin-bottom: 10px;
				padding-left: 20px;

				&::after {
					content: '';
					position: absolute;
					left: 0;
					top: 5px;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: @blue;
				}
			}
		}

		.cancelOrder_no {
			text-align: right;
			color: #666 !important;

			.van-checkbox__label {
				color: #666 !important;
			}
		}

		.pay_ok_content {
			color: #666666;

			li {
				margin-bottom: 10px;
				font-size: 14px;
			}
		}

		.pay_ok_bleft {
			position: absolute;
			left: 24px;
			top: 50%;
			transform: translateY(-50%);
			font-size: 14px;
			color: #666;
		}
		
		.pay_coin_content{
			li{
				color: #666666;
				margin-bottom: 10px;
			}
			.password{
				input{
					display: block;
					width: 100%;
					
					margin: 5px 0;
				}
				input:focus{
					border-color: @blue;
				}
				a{
					color:@blue;
					float: right;
				}
			}
		}

	}

	@media (max-width:1023px) {
		.view_quickSale_paymentAndCollection {
			.main {
				.left {
					float: none;
					margin: auto;
					margin-bottom: 20px;
				}

				.right {
					float: none;
					margin: auto;
					width: 100%;
					max-width: 100%;
				}
			}
		}
	}

	@media (max-width:600px) {
		.view_quickSale_paymentAndCollection {
			.main {
				.left {
					width: 100%;
				}
			}
		}
	}
</style>
<style lang="less">
	.view_quickSale_paymentAndCollection {
		.main {
			.left {
				.van-collapse-item {
					padding-top: 10px;
				}

				.lists {
					li.zfb {
						display: block;

						img {
							display: block;
							width: 120px;
							height: 120px;
							margin: auto;
						}

						p {
							text-align: center;
							font-size: 14px;
							color: #B3B3B3;
							margin-top: 20px;
						}
					}

					li.tips {
						display: block;
						.tips-org;
						margin-top: 10px;
					}

					li.mtips {
						display: block;
					}
				}

				.van-cell__right-icon {
					color: #666666;
					font-size: 12px;
					font-weight: bold;
				}

				.van-cell--clickable {
					padding: 12px 24px !important;
					.border-after;
				}

				.title {}

				.zd_title {
					padding: 0px !important;

					li {
						padding: 0 !important;
					}
				}

				.van-cell {
					padding: 0;
				}

				.van-collapse-item__content {
					padding: 0;

					li {
						cursor: default;

						s {}
					}
				}
			}

			.buttoms {
				.l {
					.t {
						.djs {
							color: @org-s;
							padding: 0 5px;
						}
					}
				}

				.r {
					padding-top: 10px;

					.van-button--default {
						background: #F3F3F3;
						margin-right: 20px;
					}
				}
			}
		}

		.pay_ok_bleft {
			.djs {
				color: @org-s;
				margin-left: 5px;
			}
		}
	}
</style>
