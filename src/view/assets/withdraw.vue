<template>
	<div class="view_assets_recharge">
		
		<header-top :title="$t('withdraw.title')" rlink='/' :rtitle="$t('withdraw.titler')"></header-top>
		
		
		<div class="top global_main">
			<div class="wh">
				<div class="t">{{ $t('withdraw.title') }}</div>
				<p class="l">{{ $t('recharge.lmc') }}</p>
				<div class="tts">
					<span @click="changet(item.id)" :class="{active:item.id==lid}" v-for="item in $t('recharge.llists')">{{item.id}}</span>
				</div>
				<div class="xq" v-if="ldetails">
					{{ ldetails.xq }}
				</div>
				
				<div class="tbs">
					<ul>
						<li>
							<span>{{ $t('withdraw.an') }}</span>
							<input :placeholder="$t('withdraw.ant')" type="text" />
						</li>
						<li class="sl">
							<span class="tl">{{ $t('withdraw.tl') }}</span>
							<div class="i">
								<input :placeholder="$t('withdraw.tlt') + 10" type="text" />
								<span class="a"> USDT <i>{{ $t('withdraw.at') }}</i> </span>
							</div>
							<div class="s">
								<span> {{ $t('withdraw.ky') }} 9000.0000 USDT </span>
								<span> {{ $t('withdraw.xe') }} 9000.0000 USDT <i>{{ $t('withdraw.ts') }}</i> </span>
							</div>
						</li>
						<li class="sl">
							<span>{{ $t('withdraw.sxf') }}</span>
							<div class="i">
								<input disabled="disabled" :placeholder="0.0000" type="text" />
								<span class="a">USDT</span>
							</div>
							<div class="s">
								{{ $t('withdraw.yq') }} 9000.0000 USDT
							</div>
						</li>
					</ul>
				</div>
				
				
				<div class="zysx" v-if="ldetails">
					<span>{{ $t('recharge.zlt') }}</span>
					<ul>
						<li v-for="item in ldetails.zls" v-html="item"></li>
					</ul>
				</div>
			</div>
		</div>
		
		
		<div class="table global_main">
			<div class="t">{{$t('withdraw.titler')}}</div>
			<tablex :titles="$t('withdraw.tableTitle')" :datas="datas">
			
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
				lid:null,
				datas:[]
			}
		},
		mounted() {
			this.lid = this.$t('recharge.llists')[0].id
		},
		computed:{
			ldetails(){
				return this.$t('recharge.llists').filter(item=>item.id == this.lid)[0]
			}
		},
		methods:{
			changet(id){
				this.lid = id
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_recharge{
		.top{
			padding-top: 30px;
			padding-bottom: 30px;
			.wh{
				max-width: 550px;
			}
			.t{
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 20px;
			}
			.l{
				margin-bottom: 20px;
				color: #666;
			}
			.tts{
				margin-bottom: 20px;
				display: flex;
				span{
					display: inline-block;
					margin-right: 20px;
					background-color: #E4EFFB;
					color: #666;
					text-align: center;
					padding: 13px;
					font-size: 16px;
					flex: 1;
					border-radius: 2px;
					cursor: pointer;
				}
				span:last-child{
					margin: 0;
				}
				.active{
					background-color: @blue;
					color: #fff;
				}
			}
			
			.xq{
				color: #B3B3B3;
				margin-bottom: 20px;
			}
			
			.tbs{
				li{
					margin-bottom: 20px;
					&>span:first-child{
						display: block;
						color: #666666;
						font-size: 12px;
						margin-bottom: 5px;
					}
				}
				.sl{
					.i{
						position: relative;
						input{
							padding-right: 130px;
						}
						.a{
							position: absolute;
							right: 10px;
							top: 50%;
							transform: translateY(-50%);
							i{
								color: @blue;
								display: inline-block;
								position: relative;
								padding-left: 10px;
								margin-left: 10px;
								cursor: pointer;
								&::after{
									content: '';
									position: absolute;
									left: 0;
									top: 20%;
									height: 60%;
									width: 1px;
									background-color: #D3D3D3;
								}
							}
						}
					}
					.s{
						font-size: 12px;
						margin-top: 5px;
						color: #666666;
						span:first-child{
							color: @blue;
						}
						span:last-child{
							float: right;
							i{
								display: inline-block;
								color: @blue;
								margin-left: 10px;
								cursor: pointer;
							}
						}
					}
				}
			}
			
			.zysx{
				font-size: 12px;
				&>span{
					display: block;
					margin-bottom: 5px;
				}
				li{
					color: #B3B3B3;
					margin-bottom: 5px;
				}
			}
		}
		
		.table{
			.t{
				padding: 10px 0;
				padding-top: 20px;
				font-size: 16px;
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
</style>
