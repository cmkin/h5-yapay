<template>
	<div class="main">
		<div class="t">{{ $t('login.zht') }}</div>
		<div class="ot" @click="$parent.pageChange(1)">
			<i class="iconfont icon-arrowRight"></i>
			{{ $t('login.dxt') }}
		</div>
		<ul class="from" v-if="isyz">
			<li>
				<span>{{ $t('global.base.yzm') }}</span>
				<input v-model="codeVal" type="number" :placeholder="$t('global.qsr') + $t('global.base.yzm')" />
			</li>
		</ul>
		<ul class="from" v-else>
			<li>
				<span>{{ $t('login.zh') }}</span>
				<input v-model="form.account" type="text" :placeholder="$t('login.zhp')" />
			</li>
			<li>
				<span>{{ $t('login.mm') }}</span>
				<input v-model="form.password" :type="isshowPwd ? 'text' : 'password'" :placeholder="$t('global.qsr') + $t('login.mm')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd ? 'icon-Eyesopen' : 'icon-biyan'"></i>
			</li>
		</ul>
		<div class="wjmm" @click="$parent.pageChange(4)">{{ $t('global.base.wjmm') }}?</div>
		<div class="btns">
			<van-button @click="submit" :disabled="isSend" :loading="submitLoading" type="info">{{ $t('login.dl') }}</van-button>
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
import loginInit from '@/uitl/loginInit';
export default {
	data() {
		return {
			isshowPwd: false,
			submitLoading: false,
			form: {
				account: '19912470783',
				password: '123456'
			},
			codeVal:'',
			isyz:false
		};
	},
	computed: {
		isSend() {
			if(this.isyz && !this.codeVal){
				return  true
			}else{
				for (let i in this.form) {
					if (this.form[i] == '') {
						return true;
					}
				}
			}
			return false;
		}
	},
	mounted() {},
	methods: {
		submit() {
			this.submitLoading = true;
			
			
		
			let json = {
				...this.form,
				loginlongitude: this.$parent.registerlongitude
			}
			if(this.isyz){
				//二次登录
				json.verificationCode = String(this.codeVal)
			}
			this.$http
				.accountLogin({
					...json
				})
				.then(
					res => {
						if (res.code == 0) {
							this.$saveToken(res.data.token);
							this.$saveToken(res.data.userid, 1);

							loginInit.call(this, true);
							//this.$router.push("/index")
						} else {
							this.submitLoading = false;
							if(res.code==500243){
								//需要验证
								this.$dialog.alert({
									cancelButtonText: this.$t('global.base.cancel'),
									confirmButtonText: this.$t('global.base.ok'),
									title: this.$t('global.base.wxts'),
									message:this.$options.filters.language(this.$t('global.base.xyyz'),res.msg)
								});
								this.isyz = true
							}else{
								this.$cheakError(res.code)
							}
							
						}
					},
					err => {
						this.submitLoading = false;
					}
				);
		}
	}
};
</script>

<style lang="less" scoped="scoped"></style>
