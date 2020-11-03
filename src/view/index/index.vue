<template>
	<div class="view_index">
		<div class="banner">
			<div class="main">
				<div class="bg">
					<img :src="$t('index.bg')" alt="">
				</div>
				<h1>{{ $t("index.kj") }}</h1>
				<p v-html="$t('index.aq')"> </p>
				<div class="buy clearfix">
					<div class="left">
						<div class="input">
							<input type="number" :placeholder="buyPlaceholder">
							<span>{{ buyType==0? 'USDT' : 'CNY' }}</span>
						</div>
						<div class="btn" @click="buyFlag = !buyFlag">
							<van-button type="info">
								{{ $t('index.a') }}{{ buyType==0 ? $t('index.sl') : $t('index.je') }}
								<van-icon name="arrow-down" size="12" />
							</van-button>
						</div>
						<ul class="buy_type" v-if="buyFlag">
							<li :class="{active:buyType==0}" @click="changeType(0)">
								{{ $t('index.a') }}{{ $t('index.sl')}}
								<van-icon name="success" size="16" />
							</li>
							<li :class="{active:buyType==1}" @click="changeType(1)">
								{{ $t('index.a') }}{{ $t('index.je')}}
								<van-icon name="success" size="16" />
							</li>
						</ul>
					</div>
					<div class="right">
						<van-button @click="goQuickSale" type="info">
							{{ $t('index.lj') }}
						</van-button>
					</div>
				</div>
			</div>
		</div>


		<div class="hq global_main">
			<h1 class="title"> {{ $t('index.hq') }}</h1>
			<div class="tab">
				<van-tabs v-model="hq.tabActive" animated swipeable lazy-render background="#F3F3F3" line-height="0"
				 :swipe-threshold="swipeThreshold">
					<van-tab :title="item.name" :key="index" v-for="item,index in $t('index.hb')">
						<div class="main">
							<div class="num">
								<svg t="1596681534365" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
								 p-id="2786" width="13" height="16">
									<path d="M968.625624 448.106489l-442.995008-442.995008c-6.815308-6.815308-17.03827-6.815308-23.853578 0l-442.995008 442.995008c-3.407654 3.407654-6.815308 13.630616-3.407654 17.03827 0 10.222962 6.815308 13.630616 13.630616 13.630615h255.574043v528.186356c0 10.222962 6.815308 17.03827 17.038269 17.03827h340.765392c10.222962 0 17.03827-6.815308 17.038269-17.03827V478.775374H954.995008c6.815308 0 13.630616-3.407654 17.03827-10.222961 0-6.815308 0-13.630616-3.407654-20.445924z"
									 fill="" p-id="2787"></path>
								</svg>
								<b>{{ tabActiveItem.fh }}1.00</b>
							</div>

							<div class="items clearfix">
								<ul class="item">
									<li>
										<span> {{ $t('index.r') }} </span>
										<i>
											(+0.05)
											<font style="width: 5px;display: inline-block;"></font> 
											+0.05% 
										</i>
									</li>
									<li>
										<span> {{ $t('index.z') }} </span>
										<i>
											(+0.05)
											<font style="width: 5px;display: inline-block;"></font> 
											+0.05% 
										</i>
									</li>
									<li>
										<span> {{ $t('index.y') }} </span>
										<i>
											(+0.05)
											<font style="width: 5px;display: inline-block;"></font> 
											+0.05% 
										</i>
									</li>
								</ul>
								<ul class="item">
									<li>
										<span> {{ $t('index.open') }} </span>
										<i>{{ tabActiveItem.fh }}1.00</i>
									</li>
									<li>
										<span> {{ $t('index.last') }} </span>
										<i>{{ tabActiveItem.fh }}1.00</i>
									</li>
									<li>
										<span> {{ $t('index.higt') }} </span>
										<i>{{ tabActiveItem.fh }}1.00</i>
									</li>
								</ul>
								<ul class="item">
									<li>
										<span> {{ $t('index.mkt') }} </span>
										<i>{{ tabActiveItem.fh }}1.00</i>
									</li>
									<li>
										<span> {{ $t('index.vol') }} </span>
										<i>{{ tabActiveItem.fh }}1.00</i>
									</li>
									<li>
										<span> {{ $t('index.low') }} </span>
										<i>{{ tabActiveItem.fh }}1.00</i>
									</li>
								</ul>
							</div>

						</div>
					</van-tab>
				</van-tabs>
			</div>
		</div>
		
		<div class="table global_main">
			<tablex :titles="titles" :datas="datas">
				<template v-slot:fb="row">
					<div class="fb">
						<svg t="1596681534365" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
						 p-id="2786" width="13" height="16">
							<path d="M968.625624 448.106489l-442.995008-442.995008c-6.815308-6.815308-17.03827-6.815308-23.853578 0l-442.995008 442.995008c-3.407654 3.407654-6.815308 13.630616-3.407654 17.03827 0 10.222962 6.815308 13.630616 13.630616 13.630615h255.574043v528.186356c0 10.222962 6.815308 17.03827 17.038269 17.03827h340.765392c10.222962 0 17.03827-6.815308 17.038269-17.03827V478.775374H954.995008c6.815308 0 13.630616-3.407654 17.03827-10.222961 0-6.815308 0-13.630616-3.407654-20.445924z"
							 fill="" p-id="2787"></path>
						</svg>
						<span>
							{{row.item.fb}}<i>/USDT</i>
						</span>
					</div>
				</template>
				<template v-slot:zdf="row">
					<div class="zdf">
						<p>{{row.item.zdf.bfb}}</p>
						<p>{{row.item.zdf.num}}</p>
					</div>
				</template>
			</tablex>
			<div class="show_more">
				<span>查看更多行情</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				titles:this.$t("index.tableTitle"),
				datas:[
					{
						fb:'USD',
						price:'$1.00',
						zdf:{
							num:'0.11',
							bfb:'50%'
						}
					},
					{
						fb:'USD',
						price:'$1.00',
						zdf:{
							num:'0.11',
							bfb:'50%'
						}
					},
				],
				buyType: 0,
				buyFlag: false,
				swipeThreshold:10,
				hq: {
					tabActive: 0
				}
			}
		},
		computed: {
			buyPlaceholder() {
				return this.$t('global.qsr') + this.$t('index.gm') + (this.buyType == 0 ? this.$t('index.sl') :
					this.$t('index.je'))
			},
			tabActiveItem() {
				return this.$t('index.hb')[this.hq.tabActive]
			}

		},
		mounted() {
			//tab数量
			let w = ( document.documentElement.clientWidth || document.body.clientWidth )
				w<=768 ? this.swipeThreshold = 5 : this.swipeThreshold = 10
				window.addEventListener("resize",()=>{
					let w = ( document.documentElement.clientWidth || document.body.clientWidth )
						w<=768 ? this.swipeThreshold = 5 : this.swipeThreshold = 10
				})
		},
		methods: {
			changeType(type) {
				this.buyType = type
				this.buyFlag = false
			},
			goQuickSale(){
				this.$router.push({
					path:'/index/sale/quickBuySell',
					query:{}
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_index {
		.banner {
			padding: 120px 0;
			background: @blue-0;

			.main {
				position: relative;
				background: white;
				max-width: 744px;
				margin: auto;
				box-sizing: border-box;
				padding: 96px 80px;
				box-shadow: 0px 20px 40px rgba(4, 102, 200, 0.2);

				.bg {
					position: absolute;
					right: 0;
					top: 0;

					opacity: .1;

					img {
						width: 340px;
						height: 340px;
						transform: translate(20%, -20%);
					}
				}

				&>h1 {
					color: @blue;
					margin-bottom: 48px;
					font-size: 32px;
				}

				&>p {
					color: @blue;
					font-size: 16px;
					margin-bottom: 96px;
				}

				.buy {
					position: relative;
					z-index: 10;

					.left {
						float: left;
						position: relative;
						width: 60%;
						.input {
							position: relative;
							display: inline-block;
							width: 75%;
							input {
								border: none;
								transition: all .3s;
								padding: 9px 20px;
								padding-right: 60px;
								border: 1px solid rgba(227, 227, 227, 1);
								display: inline-block;
								width: 100%;
								&:focus {
									border-color: @blue;
								}

								&::placeholder {
									color: rgba(4, 102, 200, .3);
								}
							}

							&>span {
								position: absolute;
								right: 10px;
								top: 50%;
								transform: translateY(-50%);
								font-weight: bold;
								font-size: 16px;
							}
						}

						.btn {
							display: inline-block;
							width: auto;
							span {
								font-size: 12px;
							}

							.van-icon {
								margin-left: 3px;
							}
						}

						.buy_type {
							position: absolute;
							top: 120%;
							left: 0;
							width: 100%;
							background: white;
							box-shadow: 0px 2px 4px rgba(4, 102, 200, 0.2);
							z-index: 100;
							li {
								padding: 10px;
								color: #666666;

								i {
									float: right;
									display: none;
								}

								.hover;
							}

							.active {
								background: #F1F9FF;
								color: @blue;

								i {
									display: block;
								}
							}
						}
					}

					.right {
						float: right;

						button {
							font-size: 12px;
							padding: 0 30px;
						}
					}
				}
			}
		}

		.hq {
			h1.title {
				text-align: center;
				font-size: 24px;
				font-weight: normal;
				font-family: 'sy-m';
				padding: 40px 0;
			}

			.tab {
				.van-tab--active {
					background: #E3E3E3;
				}

				.main {
					
					.num {
						padding: 48px 0;
						color: @green;
						font-size: 32px;
						svg {
							display: inline-block;
							margin-right: 10px;

							path {
								fill: @green;
							}
						}
					}
					.items{
						border-bottom: 1px solid rgba(211,211,211,1);
						margin-bottom: 30px;
						.item{
							float: left;
							width: 33%;
							li{
								padding-left: 5%;
								margin-bottom: 30px;
								display: flex;
								span{
									color: #B3B3B3;
									flex: 1;
								}
								i{
									flex: 1;
								}
							}
						}
						.item:nth-child(3){
							i{
								text-align: right;
							}
						}
						.item:nth-child(2){
							position: relative;
							&::after,&::before{
								content: '';
								position: absolute;
								top: 50%;
								left: 0;
								height: 60%;
								width: 1px;
								background: #E3E3E3;
								transform: translateY(-70%);
							}
							&::before{
								left: auto;
								right: 0;
								
							}
						}
						.item:nth-child(1){
							i{
								color: @green;
							}
						}
						
					}
				}
			}
		}
		
		.table{
			padding-top: 30px;
			.fb{
				svg{
					path{
						fill: @green;
					}
				}
				span{
					margin-left: 5px;
					i{
						font-size: 12px;
						color: #B3B3B3;
					}
				}
			}
			.zdf{
				color: @green;
				line-height: 150%;
			}
			.show_more{
				text-align: center;
				padding: 15px 0;
				border-bottom: 1px solid #f3f3f3;
				margin-bottom: 60px;
				color: @blue;
				font-size: 16px;
				.hover;
			}
		}
	}
	
	@media (max-width:768px) {
		.view_index{
			.banner{
				padding: 20px 0;
				.main{
					padding: 20px;
					margin: 0 20px;
					&>p{
						margin-bottom: 46px;
					}
					&>h1{
						margin-bottom: 20px;
					}
					.bg{
						img{
							width: 50%;
							height: auto;
							transform: translate(120%,-20%);
						}
					}
					.buy{
						.left{
							float: none;
							width: 100%;
							margin-bottom: 20px;
							.input{
								width: calc(100% - 85.7px);
							}
						}
						.right{
							float: none;
							button{
								width: 100%;
							}
						}
					}
				}
			}
			.hq{
				.tab{
					.main{
						.items{
							.item{
								margin-bottom: 20px;
								width: 100%;
								border-bottom: 1px solid #d3d3d3;
								li{
									margin-bottom: 20px;
								}
								i{
									text-align: right;
								}
							}
							.item:nth-child(2){
								&::after,&::before{
									display: none;
								}
							}
							.item:last-child{
								border: none;
								margin-bottom: 0;
							}
						}
					}
				}
			}
			
		}
	}
	@media (max-width:320px) {
		.view_index{
			.banner{
				.main{
					&>p{
						display: none;
					}
				}
			}
		}
	}
</style>
<style lang="less">
	.view_index {
		.hq {
			.tab {
				.van-tab {
					.hover;
				}

				.van-tab--active {
					background: #E3E3E3;
					color: #333 !important;
				}

				.van-tabs__wrap {
					width: 60%;
				}
			}
		}
	}
	@media (max-width:768px) {
		.view_index{
			.hq {
				.tab {
					.van-tabs__wrap {
						width: 100%;
					}
				}
			}
		}
	}
</style>
