<template>
	<div id="app">
		
		<transition name="left" mode="out-in">
			<router-view></router-view>
		</transition>
		

	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {

		},
		data(){
			return{
				
			}
		},
		mounted() {
			
			this.$nextTick(()=>{
				setTimeout(()=>{
					document.getElementById("oneLoading").remove()
				},500)	
			})		
		}
	}
</script>

<style>
	@import url("https://at.alicdn.com/t/font_2139670_td1jqs9wxn.css");
	
</style>
<style lang="less">
	
	//自定义样式
	//@import url('./assets/less/class.less');
	
</style>
