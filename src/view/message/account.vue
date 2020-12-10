<template>
	<div class="lists view_message_account">
		<ul>
			<li v-for="item in 10">
				<span class="l blue">
					<i class="iconfont icon-tongzhi"></i>
				</span>
				<div class="r">
					<div class="t">
						<span>{{text}}</span>
						12/6  13:12
					</div>
					<div class="t3">转账扣款通知</div>
					<div class="usdt">
						<span>-100.00</span>USDT
					</div>
					<div class="btn">
						<van-button type="info">{{ $t('message.jyxq') }}</van-button>
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
