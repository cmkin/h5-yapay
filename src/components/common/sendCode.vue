<template>
	<div class="g_send_code">
		<span @click="star" v-if="setp==0">{{ $t('global.base.sendCode') }}</span>
		<span @click="star" v-if="setp==3">{{ $t('global.base.reSend') }}</span>
		<van-loading v-if="setp==1" style="position: relative;top: -5px;" color="rgb(4, 102, 200)"  size="20" />
		<span  v-if="setp==2" v-html="$options.filters.language($t('global.base.scs'),nums+'s')"></span>
	</div>
</template>

<script>
	export default {
		name:'sendCode',
		data(){
			return{
				setp:0,
				loading:false,
				nums:120,
				set:null
			}
		},
		mounted() {
			
		},
		beforeDestroy() {
			clearInterval(this.set)
		},
		methods:{
			star(){
				this.setp = 1
				setTimeout(()=>{
					this.setp = 2
					this.set = setInterval(()=>{
						this.nums--
						if(this.nums<=0){
							clearInterval(this.set)
							this.nums = 120
							this.setp = 3
						}
					},1000)
				},2000)
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.g_send_code{
		display: inline-block;
		color: @blue;
	}
</style>
