<template>
	<div class="view_assets_payment_records">
		<div class="header">
			<div class="main clearfix global_main">
				<ul class="left clearfix">
					<router-link tag="li" class="router-link-active" to="/assets/payment">{{ $t('payment.title') }}</router-link>
					<span class="res">
						> {{ $t('paymentRecords.res') }}
					</span>
				</ul>
				
			</div>
		</div>
		<div style="height: 64px;"></div>
		
		<div class="global_main content">
			<div class="succ">
				<i class="iconfont icon-dui"></i>
				<div class="t">{{ $t('paymentRecords.succ') }}</div>
				<p v-html="$options.filters.language( $t('paymentRecords.yh') , 'sxsfs' )"></p>
			</div>
			<div class="nums">
				<b>-100.1000</b>USDT
			</div>
			<ul class="iis">
				<li v-for="item in $t('paymentRecords.lists')">
					<span>{{item.name}}</span>
					<span>213</span>
				</li>
			</ul>
			<div class="btn">
				<van-button @click="back" type="default">{{ $t('paymentRecords.back') }}</van-button>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods:{
			back(){
				this.$router.back()
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_payment_records{
		.header{
			.res{
				float: left;
				font-size: 16px;
				padding-top: 22px;
				margin-left: 30px;
				color: #B3B3B3;
			}
		}
	
		.content{
			text-align: center;
			max-width: 552px;
			padding-top: 30px;
			padding-bottom: 30px;
			.succ{
				padding-bottom: 20px;
				border-bottom: 1px solid #E3E3E3;
				i{
					font-size: 70px;
					color: @green;
				}
				.t{
					font-size: 24px;
					color: #333333;
					margin-top: 30px;
				}
				p{
					color: #B3B3B3;
					padding-top: 5px;
				}
			}
			.nums{
				padding: 20px 0;
				color: #B3B3B3;
				b{
					font-size: 24px;
					color: #333;
					margin-right: 2px;
				}
			}
			.iis{
				margin: auto;
				max-width: 360px;
				li{
					display: flex;
					padding: 5px 0;
					flex-flow: row nowrap;
					justify-content: space-between;	
					span:first-child{
						color: #B3B3B3;
					}
				}
			}
			.btn{
				padding: 20px;
			}
		}
	}
</style>
