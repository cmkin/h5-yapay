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
			this.setMainHeight()
			window.addEventListener("resize",()=>{
				this.setMainHeight()
			})
		},
		methods:{
			setMainHeight(){
				let mainHeight = ( document.documentElement.clientHeight || document.body.clientHeight ) - this.$dom.getwh(".components_header .clear_header") - this.$dom.getwh(".components_fonter")
				document.querySelector(".components_index .components_index_main").style.minHeight = mainHeight +'px'
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.components_index{
		
	}
</style>
