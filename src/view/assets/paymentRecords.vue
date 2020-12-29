<template>
	<div class="view_assets_payment_records">

		<header-top :title="type == 1 ?  $t('paymentRecords.res') : $t('paymentRecords.res2')"></header-top>
		
		<div class="global_main content" v-if="details">
			<div class="succ">
				<i class="iconfont icon-dui"></i>
				<div class="t">{{ type == 1 ? $t('paymentRecords.succ') : $t('paymentRecords.succ2')}}</div>
				<p v-html="$options.filters.language( type == 1 ?  $t('paymentRecords.yh') : $t('paymentRecords.yh2'), details.id )"></p>
			</div>
			<div class="nums">
				<b>{{ type==1?'-':'+' }}{{Number(details.coin).toFixed(4) }}</b>USDT
			</div>
			<ul class="iis">
				<li v-for="item in $t('paymentRecords.lists')">
					<span>{{item.name}}</span>
					<span>{{  getData(item.key) }}</span>
				</li>
			</ul>
			<div class="btn">
				<van-button @click="back" type="info">{{ $t('paymentRecords.back') }}</van-button>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				details:false,
				type:1
			}
		},
		mounted() {
			this.getDetail()
			this.type=this.$route.query.type
		},
		computed:{
			getData(){
				return function(key){
					switch (key){
						case 'zt':
							return  this.$t('payment.jywc')
						break;
						case 'fwf':
							return this.userInfos.transfer*100 +'%'
						break;
						case 'hv':
							return this.sysInfos.hv.buyPrice+' ' + this.sysInfos.hv.dw+'/USDT'
						break;
						case 'value':
							return this.details[key] +' ' + this.sysInfos.hv.dw
						break;
						case 'time':
							return this.$options.filters.timeFormat(this.details[key])
					}
					return this.details[key]
				}
				
			}
		},
		methods:{
			back(){
				this.$router.back()
			},
			getDetail(){
				this.$http.getPayLogById({
					id:this.$route.query.id
				}).then(res=>{
					if(res.code==0){
						this.details = res.data
					}
					
				})
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
				button{
					width: 100px;
				}
			}
		}
	}
</style>
