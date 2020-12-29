<template>
	<div class="view_index">
		<div class="banner">
			<div class="main global_main">
				<div class="bg">
					<img :src="$t('index.bg')" alt="">
				</div>
				<h1>{{ $t("index.kj") }}</h1>
				<p v-html="$t('index.aq')"> </p>
				<div class="buy clearfix">
					<div class="left">
						<div class="input">
							<input type="number" v-model="num" :placeholder="buyPlaceholder">
							<span>{{ buyType==0? 'USDT' : sysInfos.hv.dw }}</span>
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
		
		<div class="tabs global_main">
			<ul class="clearfix">
				<li @click="golink(item,index)" tag="li" :to="item.to" v-for="item,index in $t('index.tabs')">
					<img :src="item.img" alt="">
					<span>{{item.text}}</span>
				</li>
			</ul>
		</div>
		
		<div class="lpk global_main clearfix">
			<div class="left">
				<div class="title">
					{{$t('index.lpk')}}
				</div>
				<div class="t2">
					{{$t('index.kzhy')}}
				</div>
				<p class="nj"> {{$t('index.nkyj')}} </p> 
				<a href="http://yaotc.com/download.html" target="_blank">
					<span class="lj"> {{$t('index.ljty')}} </span>
				</a> 
			</div>
			<div class="right">
				<img src="../../assets/img/index5.png" alt="">
			</div>
		</div>
		
		<div class="lc_wrap">
			<div class="lc global_main">
				<div class="t" v-html="$t('index.lc')"></div>
				<div class="t2" v-html="$t('index.zg')"></div>
				<ul>
					<li v-for="item in $t('index.lcTabs')">
						<img :src="item.img" alt="">
						<span v-html="item.text"></span>
						<img src="../../assets/img/indexj.png" alt="">
					</li>
				</ul>
			</div>
		</div>
		
		
		<div class="lpk dgl global_main clearfix">
			<div class="right">
				<img src="../../assets/img/index1.png" alt="">
			</div>
			<div class="left">
				<div class="title">
					{{$t('index.dgl')}}
				</div>
				<div class="t2">
					{{$t('index.szzf')}}
				</div>
				<p class="nj"> {{$t('index.yhk')}} </p>
				<a href="http://yaotc.com/download.html" target="_blank">
					<span class="lj"> {{$t('index.ljty')}} </span>
				</a>
			</div>
		</div>
		

		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//titles:this.$t("index.tableTitle"),
				
				buyType: 0,
				buyFlag: false,
				num:''
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
			
		},
		methods: {
			changeType(type) {
				this.buyType = type
				this.buyFlag = false
			},
			goQuickSale(){
				this.$router.push({
					path:'/sale/quickBuySell',
					query:{
						type:this.buyType,
						num:this.num
					}
				})
			},
			golink(item,index){
				if(index<2 && this.$isLogin()){
					return
				}
				this.$router.push(item.to)
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
				
				margin: auto;
				box-sizing: border-box;
				

				.bg {
					position: absolute;
					right: 0px;
					top: 0px;

					

					img {
						width: 400px;
						height: 400px;
						transform: translate(-6%, -20%);
					}
				}

				&>h1 {
					color: #fff;
					margin-bottom: 38px;
					font-size: 32px;
				}

				&>p {
					color: #fff;
					font-size: 16px;
					margin-bottom: 66px;
				}

				.buy {
					position: relative;
					z-index: 10;
					margin-bottom: 70px;
					.left {
						max-width: 384px;
						position: relative;
						margin-bottom: 30px;
						display: flex;
						.input {
							position: relative;
							display: inline-block;
							width: 77%;
							input {
								border: none;
								transition: all .3s;
								padding: 9px 20px;
								padding-right: 60px;
								border: 1px solid rgba(227, 227, 227, 1);
								border-right: 0;
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
							button{
								border-radius: 0 2px 2px 0;
								height: 41px;
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
						
						button {
							font-size: 12px;
							padding: 0 30px;
						}
					}
				}
			}
		}
		
		.tabs{
			transform: translateY(-50%);
			ul{
				display: flex;
				box-shadow: -2px 8px 5px rgba(189, 199, 209, 0.5);
				li{
					cursor: pointer;
					padding: 15px 0;
					background-color: #fff;
					flex: 1;
					img{
						width: 80px;
						height: 80px;
						display: block;
						margin: auto;
					}
					span{
						display: block;
						text-align: center;
						font-size: 16px;
					}
				}
				li:nth-child(2){
					color: #fff;
					background: linear-gradient(270deg, #BDC7D1 0%, #718AA2 100%);
				}
				li:nth-child(3){
					color: #fff;
					background: linear-gradient(269deg, #4769A8 0%, #183B7A 100%);
				}
			}
		}
		
		.lpk{
			.left{
				float: left;
				padding-top: 8%;
				padding-right: 10%;
				box-sizing: border-box;
				width: 60%;
				.title{
					padding: 15px 0;
					font-size: 24px;
					color: #333;
					font-weight: bold;
					border-bottom: 2px solid #E3E3E3;
					margin-bottom: 20px;
				}
				.t2{
					font-size: 16px;
					color: #333;
					font-weight: bold;
					margin-bottom: 10px;
				}
				.nj{
					color: #666666;
					margin-bottom: 20px;
				}
				.lj{
					background-color: @blue;
					color: #fff;
					padding: 5px 10px;
					display: inline-block;
					border-radius: 2px;
					cursor: pointer;
				}
			}
			.right{
				width: 40%;
				float: left;
				img{
					display: block;
					width: 100%;
				}
			}
		}
		
		.lc_wrap{
			margin-top: 50px;
			background-color: @blue;
			color: #fff;
			padding: 50px 0;
			.t{
				text-align: center;
				font-size: 22px;
				font-weight: bold;
			}
			.t2{
				text-align: center;
				font-size: 16px;
				padding-top: 20px;
			}
			ul{
				padding-top: 50px;
				display: flex;
				li{
					text-align: left;
					flex: 1;
					position: relative;
					img:first-child{
						display: block;
						width: 120px;
						height: 120px;
						margin: auto;
					}
					span{
						display: block;
						text-align: center;
						padding-top: 20px;
						color: rgba(255,255,255,0.8);
					}
					img:last-child{
						position: absolute;
						right: 0;
						top: 30%;
						transform: translateY(-50%);
						width: 40px;
					}
				}
				li:last-child{
					img:last-child{
						display: none;
					}
				}
			}
		}
		.dgl{
			padding: 100px 20px;
			.left{
				padding: 0;
				padding-left: 5%;
			}
		}
	}
	@media (max-width:1023px) {
		.view_index{
			.banner{
				.main{
					.bg{
						display: none;
					}
				}
			}
			.tabs{
				
				ul{
					li{
						img{
							width: 60px;
							height: 60px;
						}
					}
				}
			}
			.lpk{
				.left{
					width: 100%;
					padding: 0;
				}
				.right{
					display: none;
				}
			}
			.lc_wrap{
				ul{
					display: block;
					li{
						margin-bottom: 20px;
						img:last-child{
							display: none;
						}
						span{
							padding-top: 10px;
						}
					}
				}
			}
			.dgl{
				margin: 30px 0;
				padding: 0 20px;
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
							display: flex;
							.input{
								width: calc(100% - 85.7px);
								input{
									border-radius: 2px 0 0 2px;
									border-right-color: transparent;
								}
							}
							button{
								border-radius: 0;
								height: 41px;
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

