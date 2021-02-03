<template>
	<div class="main forget">
		<div class="t">{{ $t('global.base.wjmm') }}</div>
		<div class="ots">
			<span v-if="setp==0">{{ $t('login.wjts') }}</span>
			<span v-if="setp==1">{{ $t('login.yzmfs') }}{{form.phone}}</span>
			<span v-if="setp==2">{{ $t('login.szmm') }}</span>
			<span v-if="setp==3">{{ $t('login.reszmm') }}</span>
		</div>
		<ul class="from">
			<li v-if="setp==0" style="padding-left: 100px;">
				<span style="width: 100px;letter-spacing: 0;">{{ $t('login.zhp') }}</span>
				<input  type="text" v-model="form.phone" :placeholder="$t('global.qsr') + $t('login.zhp')" />
			</li>
			<li v-if="setp==1">
				<span style="letter-spacing: 0;padding-right: 5px;">{{ $t('global.base.yzm') }}</span>
				<input v-model="form.verifyCode" type="number" :placeholder="$t('global.qsr') + $t('global.base.yzm')" />
				<!-- <i style="color: #0466C8;">60s</i> -->
				<!-- <i>
					<send-code  :data="{ account:form.phone,regionCode:$parent.regionCode,type:2 }" ></send-code>
				</i> -->
			</li>
			<li v-if="setp==2">
				<span>{{ $t('login.mm') }}</span>
				<input v-model="form.password" :type="isshowPwd?'text':'password'" :placeholder="$t('login.mts')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd?'icon-Eyesopen':'icon-biyan'"></i>
			</li>
			<!-- <li v-if="setp==3">
				<span>{{ $t('login.mm') }}</span>
				<input v-model="form.repassword" :type="isshowPwd?'text':'password'" :placeholder="$t('login.reszmm')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd?'icon-Eyesopen':'icon-biyan'"></i>
			</li> -->
		</ul>
		<div class="btns">
			<van-button v-if="setp==2" @click="submit()" :disabled="isNext" :loading="submitLoading" type="info">{{ $t('global.base.ok') }}</van-button>
			<van-button :disabled="isNext" v-else @click="next()" :loading="nextLoading" type="info">{{ $t('global.base.next') }}</van-button>
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
				submitLoading:false,
				nextLoading:false,
				setp:0,
				isshowPwd:false,
				
				form:{
					phone:'',
					verifyCode:'',
					password:'',
					//repassword:''
				}
				
				
			}
		},
		computed:{
			isNext(){
				switch(this.setp){
					case 0:
						return this.form.phone==''
					break;
					case 1:
						return this.form.verifyCode==''
					break;
					case 2:
						return this.form.password==''
					break;
				}
			}
		},
		mounted() {
			
		},
		methods:{
			next(){
				this.nextLoading = true
				
				if(this.setp==0){
					this.$http.forgetPassword({
						account:this.form.phone
					}).then((res)=>{
						this.nextLoading = false
						if(res.code==0){
							this.setp++
							this.$notify({
								type:'success',
								message:this.$t('global.base.sendOk')
							})
						}
					})
				}
				
				if(this.setp==1){
					this.setp++
				}
				
				return
				 setTimeout(()=>{
					 this.setp++
					 this.loading = false
				 },1000)
			},
			submit(){
				this.submitLoading = true
				let type =  this.form.phone.indexOf("@")>0
				let json = {
					password:this.form.password,
					verifyCode:this.form.verifyCode,
				}
					if(type){
						json.mail = this.form.phone
					}else{
						json.phone = this.form.phone
					}
				this.$http.restPasswordByTwo(type?2:1,{
					...json
				}).then((res)=>{
					this.submitLoading = false
					if(res.code==0){
						if(res.code==0){
							this.$notify({
								type:'success',
								message:this.$t('global.base.resetOk')
							})
							setTimeout(()=>{
								this.$parent.pageChange(0)
							},3000)
						}
					}
				})
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
