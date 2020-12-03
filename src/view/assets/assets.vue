<template>
	<div class="view_assets_assets">
		<div class="header">
			<div class="main clearfix global_main">
				<ul class="left clearfix">
					<li class="router-link-active">{{ $t('assets.title') }}</li>
				</ul>
			</div>
		</div>
		<div style="height: 64px;"></div>
		
		
		<div class="top">
			<div class="main global_main">
				<div class="title clearfix">
					<img src="../../assets/img/usdt.png" alt="">
					<span>{{ $t('assets.zcc') }}</span>
					<i class="iconfont" :class="  showPrice==true ? 'icon-Eyesopen' : 'icon-biyan'  " @click="changeShowPrice()"  ></i>
				</div>
				<div class="num_p">
					<span>{{ '₮0.0000' | priceShowHide(that) }}</span>
					<i> ≈ {{ '￥0.00' | priceShowHide(that) }}</i>
					<div class="r">
						<span>{{ $t('global.base.sk') }}</span>
						<span>{{ $t('global.base.fk') }}</span>
					</div>
				</div>
				<ul class="is">
					<li v-for="item in $t('assets.is')">
						<i>{{item.text}}</i>
						<span>{{ '₮0.0000' | priceShowHide(that) }}</span>
					</li>
					<li>
						<van-button type="info">{{ $t('global.base.cb') }}</van-button> <br />
						<van-button plain type="info">{{ $t('global.base.tb') }}</van-button>
					</li>
				</ul>
			</div>
		</div>
		
		
		<div class="table global_main">
			<div class="t">{{$t('assets.jq')}}</div>
			<tablex :titles="$t('assets.tableTitle')" :datas="datas">
				<template v-slot:df="row">
					<div class="df">
						<img :src="row.item.dfimg" alt="">
						<span>{{row.item.df}}</span>
					</div>
				</template> 
				<template v-slot:action="row">
					<div class="action">
						<span>{{ $t('global.base.ckxq') }}</span>
					</div>
				</template> 
			</tablex>
			<div class="show_more">
				<span>{{ $t('global.base.more') }} </span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				that: this,
				showPrice:true,
				datas:[
					{
						df:'昵称',
						dfimg:'/',
						fl:'买币',
						time:'2020.06.20',
						num:'+100.0000'
					},
					{
						df:'昵称',
						dfimg:'/',
						fl:'买币',
						time:'2020.06.20',
						num:'+100.0000'
					},
				]
			}
		},
		filters:{
			priceShowHide(value,that){
				return that.showPrice==true ? value : '******'
			}
		},
		mounted() {
			this.showPrice = localStorage.getItem('showPrice') === 'false' ? false : true
				
		},
		methods:{
			changeShowPrice(){
				this.showPrice = !this.showPrice
				localStorage.setItem('showPrice',this.showPrice)
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_assets{
		.top{
			background-color: #F2FAFC;
			padding: 30px 0;
			.title{
				
				img{
					width: 32px;
					height: 32px;
					float: left;
				}
				span{
					color: #838A95;
					float: left;
					font-size: 16px;
					margin: 0 20px;
					position: relative;
					top: 4px;
				}
				i{
					color: #838A95;
					font-size: 18px;
					position: relative;
					top: 6px;
					cursor: pointer;
				}
			}
			
			.num_p{
				padding: 15px 0;
				.clearfix;
				&>span{
					color: @blue;
					font-size: 32px;
					font-weight: bold;
					float: left;
				}
				&>i{
					float: left;
					color: #5C677D;
					font-size: 14px;
					margin-left: 10px;
					opacity: 0.8;
					position: relative;
					top: 14px;
				}
				.r{
					padding-top: 10px;
					float: right;
					color: @blue;
					span{
						font-size: 16px;
						cursor: pointer;
						display: inline-block;
					}
					span:last-child{
						margin-left: 15px;
						padding-left: 15px;
						position: relative;
						&::after{
							content: '';
							position: absolute;
							left: 0;
							top: 20%;
							height: 60%;
							width: 1px;
							background-color: #707070;
						}
					}
				}
			}
			
			.is{
				padding:30px 20px;
				background-color: #E4EFFB;
				display: flex;
				li{
					flex: 1;
					&>i{
						display: block;
						color: #666666;
						font-size: 14px;
						margin-bottom: 6px;
					}
					&>span{
						display: block;
						font-size: 24px;
						font-weight: bold;
					}
				}
				li:last-child{
					position: relative;
					height: 100%;
					text-align: right;
					.van-button{
						height: 32px;
						position: absolute;
						right: 0;
						width: 88px;
						border-radius: 5px;
					}
					.van-button:first-child{
						top: -10px;
					}
					.van-button:last-child{
						margin-top: 20px;
						background-color: transparent;
						border-width: 2px;
						box-sizing: border-box;
					}
				}
			}
			
		}
		
		.table{
			.t{
				padding: 10px 0;
				padding-top: 20px;
				font-size: 16px;
			}
			.df{
				.clearfix;
				img{
					float: left;
					width: 32px;
					height: 32px;
					display: inline-block;
					border-radius: 50%;
					background-color: #ccc;
				}
				span{
					float: left;
					margin-left: 8px;
					margin-top: 5px;
				}
			}
			.action{
				span{
					.hover;
					color: @blue;
				}
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
	@media (max-width:1023px) {
		.view_assets_assets{
			.top{
				.is{
					display: block;
					.clearfix;
					li{
						float: left;
						width: 50%;
						margin-bottom: 10px;
					}
					li:last-child{
						padding-top: 25px;
						display: flex;
						br{
							display: none;
						}
						.van-button{
							position: relative;
							top: 0 !important;
						}
						.van-button:last-child{
							margin: 0;
							margin-left: 20px;
						}
					}
				}
			}
			.table{
				.df{
					img{
						display: none;
					}
					span{
						margin-left: 0;
					}
				}
			}
		}
	}
</style>
