<template>
	<div class="components_index">
		<headerx></headerx>
		 <div class="components_index_main">
			 <transition name="left" mode="out-in">
			 	<router-view></router-view>
			 </transition>
		 </div>
		<footerx v-if="isFooter"></footerx>
	</div>
</template>

<script>
	import headerx from '../header'
	import footerx from '../footer'
	export default {
		data(){
			return{
				isFooter:true
			}
		},
		watch:{
			$route(n){
				this.isf(n)
			}
		},
		components:{headerx,footerx},
		mounted() {
			this.isf(this.$route)
		},
		methods:{
			isf(n){
				let no = ['/login-register']
				if(no.includes(n.path)){
					this.isFooter = false
				}else{
					this.isFooter = true
				}
			}
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
