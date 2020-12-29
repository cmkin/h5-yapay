<template>
	<div class="main dx">
		<div class="t">{{ $t('login.dxt') }}</div>
		<div class="ot" @click="$parent.pageChange(0)"> <i class="iconfont icon-arrowRight"></i> {{ $t('login.zht') }}</div>
		<ul class="from">
			<li>
				<span class="phone" @click="$parent.phoneDlg.show = true"> {{ $parent.regionCode  }} <i class="iconfont icon-jiantou"></i> </span>
				<input v-model="form.phone" type="number" :placeholder="$t('global.qsr') + $t('login.sjhm')" />
			</li>
			<li>
				<span style="letter-spacing: 0;padding-right: 5px;">{{ $t('global.base.yzm') }}</span>
				<input v-model="form.verifyCode" type="number" :placeholder="$t('global.qsr') + $t('global.base.yzm')" />
				<!-- <i style="color: #0466C8;">{{ $t('global.base.sendCode') }}</i> -->
				<i>
					<send-code  :data="{ account:form.phone,regionCode:$parent.regionCode,type:2 }" ></send-code>
				</i>
			</li>
		</ul>
		<div class="btns">
			<van-button @click="submit" :disabled="isSend" :loading="submitLoading"  type="info">{{ $t('login.dl') }}</van-button>
		</div>
		<div class="other">
			{{ $t('login.nzh') }}? <span @click="$parent.pageChange(2)">{{ $t('login.lj') }} <i class="iconfont icon-arrowRight"></i></span>
		</div>
	
	</div>
				
</template>

<script>
import loginInit from '@/uitl/loginInit'
	export default {
		data(){
			return{
				submitLoading:false,
				form:{
					phone:'',
					verifyCode:''
				}
			}
		},
		computed:{
			isSend(){
				for(let i in this.form){
					if(this.form[i] == ''){
						return true
					}
				}
				return false
			}
		},
		mounted() {
			
		},
		methods:{
			submit(){
				this.submitLoading = true
				this.$http.smsLogin({
					...this.form,
					loginlongitude:this.$parent.registerlongitude,
					regionCode:this.$parent.regionCode
				}).then((res)=>{
					
					if(res.code==0){
						this.$saveToken(res.data.token)
						this.$saveToken(res.data.userid,1)
						
						//this.$router.push("/index")
						
						loginInit.call(this,true)
						
						
					}else{
						this.submitLoading = false
					}
				},(err)=>{
					this.submitLoading = false
				})
			}
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
