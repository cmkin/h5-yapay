<template>
	<div class="main sj" >
		
		<div class="t">{{ $t('login.yxt') }}</div>
		<div class="ot" @click="$parent.pageChange(2)"> <i class="iconfont icon-arrowRight"></i> {{ $t('login.sht') }}</div>
		<ul class="from">
			<li class="select">
				<myselect @change="$parent.changeLanguage"  v-model="language.active"  :lists="$t('global.header.language')"></myselect>
			</li>
			<li class="select">
				<myselect  v-model="form.currency" showKey="text"  :lists="$t('global.hbType')"></myselect>
			</li>
			
			<li>
				<span> {{ $t('login.yx') }} </span>
				<input type="email" v-model="form.email" :placeholder="$t('global.qsr') + $t('login.yx')" />
			</li>
			
			<li>
				<span>{{ $t('login.mm') }}</span>
				<input v-model="form.password" :type="isshowPwd?'text':'password'" :placeholder=" $t('login.mts')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd?'icon-Eyesopen':'icon-biyan'"></i>
			</li>
			
			
			<li>
				<span style="letter-spacing: 0;padding-right: 5px;">{{ $t('global.base.yzm') }}</span>
				<input type="number" v-model="form.verifyCode" :placeholder="$t('global.qsr') + $t('global.base.yzm')" />
				<!-- <i style="color: #0466C8;">{{ $t('global.base.sendCode') }}</i> -->
				<i>
					<send-code :urlType="2" :data="{ account:form.email,regionCode:$parent.regionCode,type:4 }" ></send-code>
				</i>
			</li>
			
			<li>
				<span>{{ $t('login.yqm') }}</span>
				<input v-model="form.referralcode" type="text" :placeholder="$t('global.qsr') + $t('login.yqm') +'('+ $t('global.base.xt') +')' " />
			</li>
			
		</ul>
		
		<div class="btns">
			<van-button @click="submit" :disabled="isSend" :loading="submitLoading" type="info">{{ $t('login.lj') }}</van-button>
		</div>
		<div class="other">
			{{ $t('login.yzh') }}? <span @click="$parent.pageChange(0)">{{ $t('login.ljd') }} <i class="iconfont icon-arrowRight"></i></span>
		</div>
		
		<div class="zcty other">
			{{ $t('login.zcjty') }}<span @click="golink(1)"> {{ $t('login.shxy') }} </span>
			{{ $t('login.he') }}<span @click="golink(2)"> {{ $t('login.ysxy') }} </span>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				isshowPwd:false,
				language:{
					active:null
				},
				hbType:{
					active:null
				},
				
				submitLoading:false,
				
				form:{
					currency:1,
					password:'',
					email:'',
					verifyCode:'',
					referralcode:''
				},
				
			}
		},
		computed:{
			isSend(){
				for(let i in this.form){
					if(this.form[i] == '' && i!='referralcode'){
						return true
					}
				}
				return false
			}
		},
		mounted() {
			this.language.active = localStorage.getItem("locale") ? localStorage.getItem("locale")=='zh' ?0:1  : this.$t('global.header.language')[0].id;
			
			this.form.referralcode = this.$route.query.hasOwnProperty("referralcode")?this.$route.query.referralcode:''
		},
		methods:{
			golink(type){
				if(type==1){
					this.$router.push('/help?id=1&childId=100')
				}else{
					this.$router.push('/help?id=1&childId=101')
				}
			},
			submit(){
				let json = {
					...this.form,
					registerlongitude:this.$parent.registerlongitude,
					//regionCode:this.$parent.regionCode,
				}
				this.submitLoading = true
				this.$http.mailRegister(json).then((res)=>{
					this.submitLoading = false
					if(res.code==0){
						this.$notify({
							type:'success',
							message:this.$t('global.base.regOk')
						})
						setTimeout(()=>{
							this.$parent.pageChange(0)
						},3000)
					}
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.sj{
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
		.from{
			.select{
				padding: 8px 0;
				background-color: #fff;
				border: 1px solid #E3E3E3;
				.g_select{
					width: 100%;
				}
			}
		}
		.zcty{
			padding-top: 30px;
			text-align: center !important;
		}
	}
</style>
<style lang="less">
	.sj{
		.from{
			.g_select{
				.changed {
					padding: 0 10px;
				}
			}
		}
	}
</style>
