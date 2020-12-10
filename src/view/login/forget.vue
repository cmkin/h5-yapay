<template>
	<div class="main forget">
		<div class="t">{{ $t('global.base.wjmm') }}</div>
		<div class="ots">
			<span v-if="setp==0">{{ $t('login.wjts') }}</span>
			<span v-if="setp==1">{{ $t('login.yzmfs') }}19912470785</span>
			<span v-if="setp==2">{{ $t('login.szmm') }}</span>
			<span v-if="setp==3">{{ $t('login.reszmm') }}</span>
		</div>
		<ul class="from">
			<li v-if="setp==0">
				<span style="width: 130px;letter-spacing: 0;">{{ $t('login.zhp') }}</span>
				<input type="text" :placeholder="$t('global.qsr') + $t('login.zhp')" />
			</li>
			<li v-if="setp==1">
				<span style="letter-spacing: 0;padding-right: 5px;">{{ $t('global.base.yzm') }}</span>
				<input type="number" :placeholder="$t('global.qsr') + $t('global.base.yzm')" />
				<i style="color: #0466C8;">60s</i>
			</li>
			<li v-if="setp==2">
				<span>{{ $t('login.mm') }}</span>
				<input :type="isshowPwd?'text':'password'" :placeholder="$t('login.mts')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd?'icon-Eyesopen':'icon-biyan'"></i>
			</li>
			<li v-if="setp==3">
				<span>{{ $t('login.mm') }}</span>
				<input :type="isshowPwd?'text':'password'" :placeholder="$t('login.reszmm')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd?'icon-Eyesopen':'icon-biyan'"></i>
			</li>
		</ul>
		<div class="btns">
			<van-button v-if="setp==3" @click="submit()" :loading="loading" type="info">{{ $t('global.base.ok') }}</van-button>
			<van-button v-else @click="next()" :loading="loading" type="info">{{ $t('global.base.next') }}</van-button>
		</div>
		<div class="other">
			<span @click="$parent.pageChange(0)">
				{{ $t('login.fhdl') }}
				<i class="iconfont icon-arrowRight"></i>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				loading:false,
				setp:0,
				isshowPwd:false
			}
		},
		mounted() {
			
		},
		methods:{
			next(){
				this.loading = true
				 setTimeout(()=>{
					 this.setp++
					 this.loading = false
				 },1000)
			},
			submit(){
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.forget{
		.ots{
			padding: 10px 0;
			padding-bottom: 30px;
			color: #666666;
			text-align: center;
		}
	}
</style>
