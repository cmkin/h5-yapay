<template>
	<div class="g_no_data">
		<img src="../../assets/img/pnodata.jpg" alt="">
		<p>{{$t('global.base.zusj')}}</p>
	</div>
</template>

<script>
	export default {
		name:'nodata',
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.g_no_data{
		padding: 30px 0;
		text-align: center;
		img{
			display: inline-block;
			width: 120px;
		}
		p{
			text-align: center;
			color: #999;
		}
	}
</style>
