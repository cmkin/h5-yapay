<template>
	<div class="main">
		<div class="t">{{ $t('login.zht') }}</div>
		<div class="ot" @click="$parent.pageChange(1)">
			<i class="iconfont icon-arrowRight"></i>
			{{ $t('login.dxt') }}
		</div>
		<ul class="from">
			<li>
				<span>{{ $t('login.zh') }}</span>
				<input type="text" :placeholder="$t('login.zhp')" />
			</li>
			<li>
				<span>{{ $t('login.mm') }}</span>
				<input :type="isshowPwd ? 'text' : 'password'" :placeholder="$t('global.qsr') + $t('login.mm')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd ? 'icon-Eyesopen' : 'icon-biyan'"></i>
			</li>
		</ul>
		<div class="wjmm" @click="$parent.pageChange(4)">{{ $t('global.base.wjmm') }}?</div>
		<div class="btns">
			<van-button type="info">{{ $t('login.dl') }}</van-button>
		</div>
		<div class="other">
			{{ $t('login.nzh') }}?
			<span @click="$parent.pageChange(2)">
				{{ $t('login.lj') }}
				<i class="iconfont icon-arrowRight"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isshowPwd: false
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="less" scoped="scoped"></style>
