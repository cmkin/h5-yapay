<template>
	<div class="main dx">
		<div class="t">{{ $t('login.dxt') }}</div>
		<div class="ot" @click="$parent.pageChange(0)"> <i class="iconfont icon-arrowRight"></i> {{ $t('login.zht') }}</div>
		<ul class="from">
			<li>
				<span class="phone" @click="$parent.phoneDlg.show = true">+86 <i class="iconfont icon-jiantou"></i> </span>
				<input type="number" :placeholder="$t('global.qsr') + $t('login.sjhm')" />
			</li>
			<li>
				<span style="letter-spacing: 0;padding-right: 5px;">{{ $t('global.base.yzm') }}</span>
				<input type="number" :placeholder="$t('global.qsr') + $t('global.base.yzm')" />
				<i style="color: #0466C8;">{{ $t('global.base.sendCode') }}</i>
			</li>
		</ul>
		<div class="btns">
			<van-button type="info">{{ $t('login.dl') }}</van-button>
		</div>
		<div class="other">
			{{ $t('login.nzh') }}? <span @click="$parent.pageChange(2)">{{ $t('login.lj') }} <i class="iconfont icon-arrowRight"></i></span>
		</div>
	
	</div>
				
</template>

<script>

	export default {
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
	.dx{
		.phone{
			cursor: pointer;
			letter-spacing: 0 !important;
			padding-right: 5px;
			i{
				display: inline-block;
				font-size: 12px;
				transform: rotate(-90deg);
			}
		}
	}
</style>
