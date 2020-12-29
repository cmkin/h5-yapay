<template>
	<div class="lists view_message_notice">
		
		<ul>
			<li v-for="item in datas">
				<span class="l">
					<i class="iconfont icon-tongzhi"></i>
				</span>
				<div class="r">
					<div class="t">
						<span>{{text}}</span>
						{{item.holdTime | timeFormat}}
					</div>
					<div class="t2">{{item.noticeTitle}}</div>
					<div class="ct">
						{{item.noticeContent}}
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
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	
</style>
