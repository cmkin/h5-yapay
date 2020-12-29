<template>
	<div class="view_personal_elpwd">
		<header-top :titlet=" $t('personal.editLPwd.title') " :title="$t('personal.title')"></header-top>
		
		<div class="global_main">
			<div class="main">
				<div class="tips">
					<i class="iconfont icon-gantanhao"></i>
					<span style="padding-left: 40px; padding-right: 20px;">
						 {{ $t('personal.editLPwd.tip') }} 
					</span>
					<i class="iconfont icon-close1" @click="remove"></i>
				</div>
				<ul>
					<li>
						<span>{{ $t('personal.editLPwd.ymm') }}</span>
						<input v-model="json.ypwd" type="password" :placeholder="$t('global.qsr') + $t('personal.editLPwd.ymm')" />
					</li>
					<li>
						<span>{{ $t('personal.editLPwd.xmm') }}</span>
						<input v-model="json.npwd" type="password" :placeholder="$t('global.qsr') + $t('personal.editLPwd.xmm')" />
					</li>
					<li>
						<span>{{ $t('personal.editLPwd.rmm') }}</span>
						<input v-model="json.rpwd" type="password" :placeholder=" $t('personal.editLPwd.rmm')" />
					</li>
				</ul>
				<div class="btn">
					<van-button type="info" @click="submit" :loading="loading" :disabled="! Boolean(json.ypwd && json.npwd && json.rpwd)"> {{ $t('global.base.tj') }} </van-button>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import updateUser from '@/uitl/updateUser'
	export default {
		data(){
			return{
				json:{
					ypwd:'',
					npwd:'',
					rpwd:''
				},
				loading:false
			}
		},
		mounted() {
			
		},
		methods:{
			remove(e){
				document.querySelector(".view_personal_elpwd .tips").remove()
			},
			submit(){
				if(this.json.ypwd == this.json.rpwd){
					this.$notify({
						message:this.$t('personal.editLPwd.rn2')
					})
					return
				}
				if(this.json.npwd != this.json.rpwd){
					this.$notify({
						message:this.$t('personal.editLPwd.rn')
					})
					return
				}
				this.loading = true
				this.$http.updatePasswordById({
					newPassword:this.json.rpwd,
					oldPassword:this.json.ypwd,
					passwordType:1
				}).then(res=>{
					this.loading = false
					if(res.code==0){
						this.$notify({
							type:"success",
							message:this.$t('global.base.xgcg')
						})
						updateUser.call(this)
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
					}
				}
			}
			.btn{
				margin-top: 40px;
			}
		}
	}
</style>
