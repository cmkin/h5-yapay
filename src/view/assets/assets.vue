<template>
	<div class="view_assets_assets">
		
		<header-top :title="$t('assets.title')"></header-top>
		
		<div class="top">
			<div class="main global_main">
				<div class="title clearfix">
					<img src="../../assets/img/usdt.png" alt="">
					<span>{{ $t('assets.zcc') }}</span>
					<i class="iconfont" :class="  showPrice==true ? 'icon-Eyesopen' : 'icon-biyan'  " @click="changeShowPrice()"  ></i>
				</div>
				<div class="num_p">
					<span>₮{{userInfos.numcoin | priceShowHide(that,'an') }}</span>
					<i> ≈ {{ sysInfos.hv.dwf }}{{ userInfos.numcoin*userInfos.buyPrice | priceShowHide(that,'ap') }}</i>
					<div class="r">
						<span @click="golink('/assets/collection')">{{ $t('global.base.sk') }}</span>
						<span @click="golink('/assets/payment')">{{ $t('global.base.fk') }}</span>
					</div>
				</div>
				<ul class="is">
					<li v-for="item in $t('assets.is')">
						<i>{{item.text}}</i>
						<span>₮{{userInfos[item.key] | priceShowHide(that,item.key) }}</span>
					</li>
					<li>
						<van-button @click="golink('/assets/recharge')" type="info">{{ $t('global.base.cb') }}</van-button> <br />
						<van-button @click="golink('/assets/withdraw')" plain type="info">{{ $t('global.base.tb') }}</van-button>
					</li>
				</ul>
			</div>
		</div>
		
		
		<div class="table global_main">
			<div class="t">{{$t('assets.jq')}}</div>
			<tablex :titles="$t('assets.tableTitle')" :datas="datas">
				<template v-slot:df="row">
					<div class="df">
						<img :src="row.item.headUrl" alt="">
						<span>{{row.item.nickname}}</span>
					</div>
				</template> 
				<template v-slot:action="row">
					<div class="action">
						<span>{{ $t('global.base.ckxq') }}</span>
					</div>
				</template> 
			</tablex>
			<div class="show_more">
				<span @click="$router.push('/assets/bill')">{{ $t('global.base.more') }} </span>
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
				datas:[]
			}
		},
		filters:{
			priceShowHide(value,that,key){
				return that.showPrice==true ? key=='ap'? Number(value).toFixed(2):Number(value).toFixed(4) : '******'
			}
		},
		mounted() {
			this.showPrice = localStorage.getItem('showPrice') === 'false' ? false : true
			this.getlist()
		},
		computed:{
			getStatus(){
				return function(type){
				  return this.$t('bill.tjs').filter(item=>item.id == type)[0].text
				}
			}
		},
		methods:{
			changeShowPrice(){
				this.showPrice = !this.showPrice
				localStorage.setItem('showPrice',this.showPrice)
			},
			golink(path){
				this.$router.push({
					path:path
				})
			},
			getlist(){
				this.$http.getTradeLogList({
					type:8,
					current:0,
					size:5
				}).then(res=>{
					if(res.code==0){
						this.datas = res.data.map(item=>{
							item.type =  this.getStatus(item.type)
							item.datetime = this.$options.filters.timeFormat(Number(item.datetime))
							item.tradecoin = Number(item.tradecoin).toFixed(4)
							return item
						})
					}
				})
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
