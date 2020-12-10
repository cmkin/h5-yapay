<template>
	<div class="g_login">
		<div class="m_wrap">
		
			<transition name="left" mode="out-in">
			
				<component :is="coms[pageType]"></component>
			
			</transition>
			
			
			
			
		</div>
		
		
		<!-- 电话 -->
		<van-popup v-model="phoneDlg.show" :position="isPhone ? 'bottom' : 'center'">
			 <van-picker
			  title=""
			  show-toolbar
			  :columns="citys"
			  :confirm-button-text="$t('global.base.ok')"
			  :cancel-button-text="$t('global.base.cancel')"
			  @confirm="phoneOk"
			  @cancel=" phoneDlg.show = false "
			/> 
		</van-popup>
		
	</div>
</template>

<script>
	import citys from '@/uitl/citys'
	
	import login from './login'
	import phoneLogin from './phoneLogin'
	import phoneRegister from './phoneRegister'
	import emailRegister from './emailRegister'
	import forget from './forget'

	export default {
		data(){
			return{
				pageType:0, // 0 账户登录 1 短信登录  2 手机号注册 3 邮箱注册 4 忘记密码
				phoneDlg:{
					show:false
				},
				coms:[login,phoneLogin,phoneRegister,emailRegister,forget]
				
			}
		},
		computed:{
			citys(){
				let citysD = []
				citys.Citylist.map(item=>{
					item.data.map(tt=>{
						this.$i18n.locale == 'zh' ? citysD.push(`+${tt.num}-${tt.cityName}`) : citysD.push(`+${tt.num}-${tt.en}`)
						
					})
				})
				return citysD
			},
		},
		mounted() {
			this.pageType =this.$route.query.type ? this.$route.query.type : 0
		},
		watch:{
			$route(n){
				this.pageType =this.$route.query.type ? this.$route.query.type : 0
			}
		},
		methods:{
			//选择电话
			phoneOk(value){
				console.log(value.split("-"))
			},
			pageChange(type){
				this.$router.push({
					path:'/login-register',
					query:{
						type:type
					}
				})
			}
		
			
		}
	}
</script>

<style lang="less">
	.g_login{
		width: 100%;
		min-height: calc(100vh - 80px);
		background-color: #001845;
		position: relative;
		.m_wrap{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 420px;
			box-sizing: border-box;
			
			box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
			opacity: 1;
			
		}
		.main{
			padding: 30px;
			border-radius: 4px;
			background-color: #fff;
			.t{
				text-align: center;
				font-size: 20px;
				color: #585858;
			}
			.ot{
				text-align: right;
				color: @blue;
				padding: 10px 0;
				cursor: pointer;
			}
			.from{
				&>li{
					padding: 5px 0;
					margin-bottom: 10px;
					background-color: #E9EBF0;
					display: flex;
					position: relative;
					border-radius: 2px;
					align-items: center;
					&>span{
						width: 70px;
						letter-spacing: 5px;
						text-align: right;
						box-sizing: border-box;
					}
					.dx_phone{
						letter-spacing: 0;
						padding-right: 5px;
					}
					&>i{
						position: absolute;
						right: 10px;
						top: 13px;
						cursor: pointer;
						.hover;
					}
					input{
						background-color: transparent;
						border: none;
					}
				}
				
				
			}
			
			.wjmm{
				text-align: right;
				color: @blue;
				cursor: pointer;
			}
			.btns{
				padding: 15px 0;
				button{
					display: block;
					width: 100%;
					height: auto;
					border: 1px solid rgba(32, 53, 128, 0.16078431372549018);
					background: linear-gradient(305deg, #0466C8 0%, #0088FF 100%, #5533FF 100%);
					opacity: 1;
					border-radius: 4px;
					color: #fff;
					font-size: 16px;
					text-align: center;
					padding: 12px 0;
					cursor: pointer;
					border: none;
					box-shadow: 0 3px 3px 1px rgba(32, 53, 128, 0.5);
				}
			}
			
			.other{
				text-align: right;
				color: rgba(102, 102, 102, 1);
				span{
					color: @blue;
					cursor: pointer;
				}
			}
		}
	}
	
	@media (max-width:1023px) {
		.g_login{
			min-height: calc(100vh - 61px);
			.m_wrap{
				width: 90%;
				
			}
		}
	}
</style>
