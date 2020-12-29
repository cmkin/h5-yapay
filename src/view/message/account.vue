<template>
	<div class="lists view_message_account">
		<ul>
			<li v-for="item in datas">
				<span class="l blue">
					<i class="iconfont icon-tongzhi"></i>
				</span>
				<div class="r">
					<div class="t">
						<span>{{text}}</span>
						{{item.createtime | timeFormat}}
					</div>
					<div class="t3">{{getTitle(item)}}</div>
					<div class="usdt">
						<span> {{Number(item.coin).toFixed(4)}} </span>USDT
					</div>
					<div class="btn" v-if="item.type<4">
						<van-button @click="goDetail(item)" type="info">{{ $t('message.jyxq') }}</van-button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props:{
			text:{
				type:String,
				default:''
			},
			datas:{}
		},
		computed:{
			getTitle(){
				return function(obj){
					return  this.$t('message.notice').filter(item=>item.id == obj.type)[0].text
				}
			}
		},
		mounted() {
			
		},
		methods:{
			goDetail(item){
				if(item.type==3){
					//付款
					this.$router.push({
						path:'/assets/paymentRecords',
						query:{
							id:item.remarks,
							type: 1
						}
					})
				}
				if(item.type==2){
					//收款
					this.$router.push({
						path:'/assets/paymentRecords',
						query:{
							id:item.remarks,
							type: 0
						}
					})
				}
				if(item.type==0){
					//交易订单-买
					this.$router.push({
						path:'/sale/payment',
						query:{
							id:item.remarks
						}
					})
				}
				if(item.type==1){
					//交易订单-卖
					this.$router.push({
						path:'/sale/collection',
						query:{
							id:item.remarks
						}
					}) 
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	
</style>
