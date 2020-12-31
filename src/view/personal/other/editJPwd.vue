<template>
	<div class="view_personal_elpwd">
		<header-top :titlet=" $t('personal.editJPwd.title') " :title="$t('personal.title')"></header-top>
		
		<div class="global_main">
			<div class="main">
				<div class="tips">
					<i class="iconfont icon-gantanhao"></i>
					<span style="padding-left: 40px;padding-right: 20px;max-width: 80%;display: inline-block;"> {{ $t('personal.editJPwd.tip') }} </span>
					<i class="iconfont icon-close1" @click="remove"></i>
				</div>
				<ul>
					<div v-if="userInfos.payPassword">
						<li v-if="rmm.sflag">
							<span>{{ $t('personal.editJPwd.ymm') }} <i class="rmm" @click="rmm.show = true"> {{$t('global.base.wjmm')}}? </i> </span>
							<input type="password" v-model="from.ypwd" :placeholder="$t('global.qsr') + $t('personal.editJPwd.ymm')" />
						</li>
						<li v-else>
							<span> {{ $t('global.base.yzm') }} </span>
							<div class="scode">
								<div class="l">
									<input type="number" v-model="code" :placeholder=" $t('global.qsr') + $t('global.base.yzm')" />
								</div>
								
								<!-- //userInfos.verifytype ==1 手机 2  邮箱验证 -->
								<div class="r">
									<i> {{userInfos.areacode}}
									
										{{ userInfos.verifytype ==1 ? userInfos.phone : userInfos.mail }}
									</i>
									<span>
										<send-code :urlType="userInfos.verifytyp" :data="{ account:userInfos.verifytype ==1 ? userInfos.phone : userInfos.mail,regionCode:userInfos.areacode,type:6 }" ></send-code>
									</span>
								</div>
							</div>
						</li>
					</div>
					<li>
						<span>{{ $t('personal.editJPwd.xmm') }} <i class="jys"> {{$t('personal.editJPwd.jys')}} </i> </span>
						<input v-model="from.pwd" maxlength="6" type="password" :placeholder="$t('global.qsr') + $t('personal.editJPwd.xmm')" />
					</li>
					<li>
						<span>{{ $t('personal.editJPwd.rmm') }}</span>
						<input v-model="from.repwd" maxlength="6" type="password" :placeholder=" $t('personal.editJPwd.rmm')" />
					</li>
				</ul>
				<div class="btn">
					<van-button type="info" :disabled=" !Boolean(from.pwd) || !Boolean(from.repwd) " v-if="!userInfos.payPassword" :loading="loading" @click="setPwd"> {{ $t('global.base.ok') }} </van-button>
					<van-button type="info" :disabled=" !Boolean(from.pwd) || !Boolean(from.repwd) " v-else :loading="loading"  @click="resetPwd"> {{ $t('global.base.reset') }} </van-button>
				</div>
			</div>
		</div>
		
		
		<dialogx v-model="rmm.show" :onOk="rmmOk" :title="$t('global.base.wxts')" >
			<template v-slot:content>
				<div class="rmts" v-html="$options.filters.language( $t('personal.editJPwd.rts') , userInfos.verifytype ==1 ? userInfos.phone : userInfos.mail ) "></div>
			</template>
		</dialogx>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				from:{
					ypwd:'',
					pwd:'',
					repwd:''
				},
				loading:false,
				pageType:0,
				rmm:{
					show:false,
					sflag:true
				},
				code:''
			}
		},
		mounted() {
			this.pageType = this.$route.query.type
		},
		methods:{
			remove(e){
				document.querySelector(".view_personal_elpwd .tips").remove()
			},
			rmmOk(){
				this.rmm.show = false
				this.rmm.sflag = false
				setTimeout(()=>{
					document.querySelector(".view_personal_elpwd .g_send_code span").click()
				},500)
			},
			setPwd(){
				if(this.from.pwd != this.from.repwd){
					this.$notify(this.$t('global.base.lcbyz'))
					return
				}
				this.loading = true
				this.$http.updatePayPassword({
					payPassword:this.from.pwd
				}).then(res=>{
					this.loading = false
					if(res.code==0){
						this.$notify({
							type:"success",
							message:this.$t('global.base.szcc')
						})
						this.$store.commit('updateUserInfo',{
							add:true,
							obj:{
								payPassword:true
							}
						})
						this.$router.go(-1)
						
					}
					
				})
			},
			resetPwd(){
				if(this.from.pwd != this.from.repwd){
					this.$notify(this.$t('global.base.lcbyz'))
					return
				}
				
				if(!this.rmm.sflag){
					//验证码重置
					this.loading = true
					let json = {
						password:this.from.repwd,
						verifyCode:this.code
					}
					this.userInfos.verifytype ==1 ? json.phone = this.userInfos.phone : json.email = this.userInfos.mail
					this.$http.restPayPasswordByTwo(this.userInfos.verifytype,json).then(res=>{
						this.loading = false
						if(res.code==0){
							this.$notify({
								type:"success",
								message:this.$t('global.base.xgcg')
							})
							//updateUser.call(this)
							this.$router.go(-1)
						}
					})
					return
				}
				
				
				//密码重置
				
				if(this.from.ypwd == this.from.repwd){
					this.$notify({
						message:this.$t('personal.editLPwd.rn2')
					})
					return
				}
				
				this.loading = true
				
				this.$http.updatePasswordById({
					newPassword:this.from.repwd,
					oldPassword:this.from.ypwd,
					passwordType:2
				}).then(res=>{
					this.loading = false
					if(res.code==0){
						this.$notify({
							type:"success",
							message:this.$t('global.base.xgcg')
						})
						this.$router.go(-1)
					}
				})
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal_elpwd{
		.main{
			padding: 30px 0;
			max-width: 460px;
			.tips{
				.tips-org;
				padding: 10px;
				span{
					width: 100%;
				}
				i:last-child{
					font-size: 12px;
					cursor: pointer;
					left: auto;
					right: 20px;
				}
			}
			ul{
				li{
					margin-top: 20px;
					&>span{
						display: block;
						margin-bottom: 5px;
						color: #666666;
						.rmm{
							float: right;
							color: @blue;
							cursor: pointer;
						}
						.jys{
							color: #B3B3B3;
							font-size: 12px;
							margin-left: 5px;
						}
					}
				}
				.scode{
					.clearfix;
					.l{
						float: left;
						width: 38%;
					}
					.r{
						color: #666;
						float: right;
						max-width: 60%;
						text-align: right;
						span{
							margin-left: 10px;
							color: @blue;
							cursor: pointer;
						}
					}
				}
			}
			.btn{
				margin-top: 40px;
			}
		}
		.rmts{
			color: rgba(0, 0, 0, 0.65);
		}
	}
</style>
