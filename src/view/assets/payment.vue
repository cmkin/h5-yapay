<template>
	<div class="view_assets_payment">
		
		<header-top :title="$t('payment.title')" rlink='/' :rtitle="$t('payment.titler')"></header-top>
		
		<div class="top">
			<div class="main global_main">
				<div class="t">{{ $t('payment.zhfk') }}</div>
				<div class="ip">
					<span>{{$t('payment.dfzh')}}:</span>
					<input type="text" :placeholder="$t('payment.uid')" />
				</div>
				<div class="btn">
					<van-button @click="next" type="info">{{$t('global.base.next')}}</van-button>
				</div>
			</div>
		</div>
		
		<div class="table global_main">
			<div class="t">{{$t('payment.titler')}}</div>
			<tablex :titles="$t('payment.tableTitle')" :datas="datas">
				<template v-slot:df="row">
					<div class="df">
						<img :src="row.item.dfimg" alt="">
						<span>{{row.item.df}}</span>
					</div>
				</template> 
				<template v-slot:usdt="row">
					<div class="usdt">
						<div class="n">
							100.000
						</div>
						<div class="o">
							<span>{{$t('global.base.jylv')}}:7.25 CNY/USDT</span>
							<span>{{$t('global.base.fbje')}}:7.25 CNY</span>
						</div>
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
		
		
		
		
		
		<!-- 弹窗 -->
		
		<!-- 确认付款 -->
		
		<dialogx v-model="payOk.show " :onOk="payOkSubmit"  :disabled="!Boolean(payOk.password)" :title="payOk.title">
			<!-- 出售 -->
			<template v-slot:content>
				<ul class="ok_buy">
					
					<li class="tips">
						<i class="iconfont icon-dui"></i>
						<span v-html="$options.filters.language( $t('payment.payOk.tips') , 10 )"></span>
					</li>
					
					<li v-for="item in payOk.lists">
						<span>{{item.name}}</span>
						<span class="r" :style="{color:item.key=='fwe'?'red':'#666'}">
							{{payOk.datas[item.key]}} 
							<i v-if="item.key=='nums'">USDT</i>
							<i v-if="item.key=='price' || item.key=='allPrice' ">CNY</i>
						</span>
					</li>	
					<li class="password clearfix">
						{{ $t('global.base.jymm') }}
						<input v-model="payOk.password" autofocus="autofocus" type="password"  :placeholder="$t('global.qsr') + $t('global.base.jymm')">
						<a href="#">
							{{ $t('global.base.wjmm') }}?
						</a>
					</li>
					
					
				</ul>
			</template>		
		</dialogx>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				datas:[
					{
						df:'昵称',
						dfimg:'/',
						fl:'买币',
						time:'2020.06.20',
						num:'+100.0000',
						stu:'<span style="color:#FF5B5B">等待付款</span>'
					},
					{
						df:'昵称',
						dfimg:'/',
						fl:'买币',
						time:'2020.06.20',
						num:'+100.0000',
						stu:'已付款'
					},
				],
				
				payOk:{
					show:false,
					title:this.$t('payment.payOk.title'),
					lists:this.$t('payment.payOk.lists'),
					password:'',
					datas:{id:'id',fke:'11',fwf:'11'}
				}
			}
		},
		mounted() {
			
		},
		methods:{
			next(){
				this.payOk.show = true 
			},
			payOkSubmit(){
				this.$router.push('/assets/paymentRecords')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_payment{
		.top{
			background-color: #F2FAFC;
			padding: 30px 0;
			.t{
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 20px;
			}
			.ip{
				span{
					display: block;
					margin-bottom: 6px;
					color: #666666;
				}
				input{
					max-width: 360px;
					//margin-right: 20%;
					margin-bottom: 20px;
				}
			}
			.btn{
				max-width: 360px;
				
				button{
					display: block;
					width: 100%;
					margin-right: 20%;
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
			.usdt{
				
				.n{
					font-size: 16px;
				}
				.o{
					display: flex;
					color: #B3B3B3;
					font-size: 13px;
					margin-top: 5px;
					span{
						flex: 1;
					}
					span:last-child{
						display: inline-block;
						padding-left: 10px;
						border-left: 1px solid #E3E3E3;
					}
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
		
		
		
		.ok_buy{
			.line_rl(#B3B3B3);
			padding-top: 40px;
			li{
				display: block;
				&>.r{
					margin-left: 5px;
					color: #666;
					float: right;
					img{
						width: 16px;
						height: 16px;
						position: relative;
						top: 2px;
					}
				}
			}
			
			.password{
				
				display: block;
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
			.tips{
				display: block;
				font-size: 13px;
				text-align: center;
				position: absolute;
				top: 10px;
				left: 0;
				width: 100%;
				padding: 5px;
				background-color: rgba(77, 184, 114, 0.1);
				color: #666;
				border-top: 1px solid @green;
				border-bottom: 1px solid @green;
				i{
					color: @green;
					font-size: 14px;
					margin-right: 5px;
				}
			}
			
		}
		
		
		
	}
	@media (max-width:1023px) {
		.view_assets_payment{
			.table{
				.df{
					img{
						display: none;
					}
					span{
						margin-left: 0;
					}
				}
				.usdt{
					.o{
						display: block;
						span{
							display: block;
							border: none !important;
							padding: 0 !important;
						}
						span:first-child{
							display: none;
						}
					}
				}
			}
		}
	}
</style>
