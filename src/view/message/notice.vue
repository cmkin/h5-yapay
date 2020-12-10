<template>
	<div class="lists view_message_notice">
		
		<ul>
			<li v-for="item in 10">
				<span class="l">
					<i class="iconfont icon-tongzhi"></i>
				</span>
				<div class="r">
					<div class="t">
						<span>{{text}}</span>
						12/6  13:12
					</div>
					<div class="t2">六一节特别活动：交易USDT，人人有好礼</div>
					<div class="ct">
						尊敬的用户，为庆祝一年一度的“六一儿童节”到来，keyPay特推出六一儿童节特别活动——“交易USDT，人人有好礼”。6月1日-6月3日期间，在自选交易中单次市价买入610 USDT或单次市价卖出610 USDT，即可参与瓜分
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
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	
</style>
