<template>
	<div class="components_index">
		<headerx></headerx>
		 <div class="components_index_main">
			 <transition name="left" mode="out-in">
			 	<router-view></router-view>
			 </transition>
		 </div>
		<footerx></footerx>
	</div>
</template>

<script>
	import headerx from '../header'
	import footerx from '../footer'
	export default {
		data(){
			return{
				
			}
		},
		components:{headerx,footerx},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.components_index{
		.components_index_main{
			min-height: calc(100vh - 80px);
		}
	}
	@media (max-width:1023px) {
		.components_index{
			.components_index_main{
				min-height: calc(100vh - 61px);
			}
		}
	}
</style>
