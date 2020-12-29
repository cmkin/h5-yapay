<template>
	<div class="g_loading" v-if="active">
		<van-loading class="icon"  color="#1989fa" />
	</div>
</template>

<script>
	export default {
		name:'loading',
		data(){
			return{
				
			}
		},
		model: {
			prop: 'active',
			event: 'change'
		},
		props:{
			active:{
				type:Boolean,
				default:false
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.g_loading{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(255,255,255,0.95);
		.icon{
			position: absolute;
			top: 30%;
			left: 50%;
			
		}
	}
</style>
