<template>
	<div class="view_assets_recharge">
		
		<header-top :title="$t('recharge.title')" rlink='/' :rtitle="$t('recharge.titler')"></header-top>
		
		
		<div class="top global_main">
			<div class="wh">
				<div class="t">{{ $t('recharge.title') }}</div>
				<p class="l">{{ $t('recharge.lmc') }}</p>
				<div class="tts">
					<span @click="changet(item.id)" :class="{active:item.id==lid}" v-for="item in $t('recharge.llists')">{{item.id}}</span>
				</div>
				<div class="xq" v-if="ldetails">
					{{ ldetails.xq }}
				</div>
				<div class="addr" v-if="ldetails">
					<span>{{ $t('recharge.an') }}</span>
					<div>
						<span>32apAqXbZeKGVJa8nsLvA2NvS7saVsTywyaVsTywyaVsTywyaVsTywy</span>
						<span>
							<copy content="213123"></copy>
							<i class="iconfont icon-erweima"></i>
						</span>
					</div>
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
			<div class="t">{{$t('recharge.titler')}}</div>
			<tablex :titles="$t('recharge.tableTitle')" :datas="datas">
			
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
				if(id=='TRC20'){
					this.$toast(this.$t('withdraw.whz'))
					return
				}
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
			.addr{
				margin-bottom: 20px;
				&>span{
					display: block;
					margin-bottom: 10px;
				}
				&>div{
					display: flex;
					position: relative;
					padding-right: 50px;
					span:last-child{
						width: 50px;
						position: absolute;
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						text-align: right;
						i{
							color: @blue;
							cursor: pointer;
							display: inline-block;
							margin-left: 12px;
							font-size: 18px;
						}
						.global_copy{
							position: relative;
							top: 1px;
						}
					}
					span:first-child{
						width: 100%;
						color: #666;
						word-wrap: break-word;
						word-break: normal;
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
