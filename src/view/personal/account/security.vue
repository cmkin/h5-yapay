<template>
	<div class="view_personal_account_security view_personal_account_icon">
		<div class="title">
			{{ $t('personal.account.security.title') }}
		</div>
		<ul>
			<li>
				<div>
					<i class="iconfont icon-dui"></i>
					<span> {{ $t('personal.account.security.ccs[0].t') }} </span>
				</div>
				<div> {{ $t('personal.account.security.ccs[0].p') }} </div>
				<div>
					<p>188****207</p>
					<i @click="showDialog(1)"> {{ $t('personal.account.security.xg') }} </i>
				</div>
			</li>
			
			<li>
				<div>
					<i class="iconfont icon-gantanhao"></i>
					<span> {{ $t('personal.account.security.ccs[1].t') }} </span>
				</div>
				<div> {{ $t('personal.account.security.ccs[1].p') }} </div>
				<div>
					<i @click="showDialog(2)"> {{ $t('personal.account.security.bd') }} </i>
				</div>
			</li>
			
			<li>
				<div>
					<i class="iconfont icon-dui"></i>
					<span> {{ $t('personal.account.security.ccs[2].t') }} </span>
				</div>
				<div> {{ $t('personal.account.security.ccs[2].p') }} </div>
				<div class="aqlv" :class="aqlv.class">
					<span>{{aqlv.text}}</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<i @click="goLink('lpwd')"> {{ $t('personal.account.security.xg') }} </i>
				</div>
			</li>
			
			<li>
				<div>
					<i class="iconfont icon-gantanhao"></i>
					<span> {{ $t('personal.account.security.ccs[3].t') }} </span>
				</div>
				<div> {{ $t('personal.account.security.ccs[3].p') }} </div>
				<div>
					<i @click="goLink('jpwd')"> {{ $t('personal.account.security.sz') }} </i>
				</div>
			</li>
			
			
		</ul>
	
		
		<!-- 弹窗 -->
		<dialogx v-model="dialog.show" :disabled="true" :title="dialog.title" :onOk="dialogOk">
			<template v-slot:content>
				
				<!-- 手机 1-->
				<div class="dia_email dia_phone" v-if="dialog.type==1">
					<p class="tips"> {{ $t('personal.account.security.ptips') }} </p>
					<ul>
						<li class="qhs">
							<span> {{ $t('personal.account.security.phone') }} </span>
							<div @click="phoneDlg.show = true">
								+86
								<i class="iconfont icon-jiantou"></i>
							</div>
							<input type="text" :placeholder=" $t('global.qsr') + $t('personal.account.security.phone')">
						</li>
						<li>
							<span>{{ $t('personal.account.security.phoneCode') }} </span>
							<input type="number" :placeholder=" $t('global.qsr') + $t('personal.account.security.phoneCode')">
							<div class="scode">{{ $t('global.base.sendCode') }}</div>
						</li>
					</ul>
				</div>
				
				<!-- 邮箱 2-->
				<div class="dia_email" v-if="dialog.type==2">
					<!-- <p class="tips"> {{ $t('personal.account.security.bdtips') }} </p> -->
					<ul>
						<li>
							<span> {{ $t('personal.account.security.yx') }} </span>
							<input type="text" :placeholder=" $t('global.qsr') + $t('personal.account.security.yx')">
						</li>
						<li>
							<span>{{ $t('personal.account.security.yxcode') }} </span>
							<input type="number" :placeholder=" $t('global.qsr') + $t('personal.account.security.yxcode')">
							<div class="scode">{{ $t('global.base.sendCode') }}</div>
						</li>
					</ul>
				</div>
				
			</template>
		</dialogx>
		
		
		<!-- 电话 -->
		<van-popup v-model="phoneDlg.show" :position="isPhone ? 'bottom' : 'center'">
			 <van-picker
			  title=""
			  show-toolbar
			  :confirm-button-text="$t('global.base.ok')"
			  :cancel-button-text="$t('global.base.cancel')"
			  :columns="citys"
			  @confirm="phoneOk"
			  @cancel=" phoneDlg.show = false "
			/> 
		</van-popup>
		
		
	</div>
</template>

<script>
	import citys from '@/uitl/citys'
	export default {
		data(){
			return{
				
				dialog:{
					show:false,
					title:'',
					type:1,//弹窗类型
					email:{
						
					},
					phone:{
						
					}
				},
				phoneDlg:{
					show:false
				}	
			}
		},
		computed:{
			aqlv(){
				let lt = this.$t('personal.account.security.lt')
				let className = ['one','two','three']
				let lv = 2
				return {
					text:lt[lv],
					lv:lv,
					class:className[lv]
				}
			},
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
			
		},
		methods:{
			showDialog(type){
				switch(Number(type)){
					case 1:
						this.dialog.title = this.$t('personal.account.security.bdphone')
					break;
					case 2:
						this.dialog.title = this.$t('personal.account.security.bdyx')
					break;
				}
				this.dialog.type = type
				this.dialog.show = true
			},
			dialogOk(){
				
			},
			//选择电话
			phoneOk(value){
				console.log(value.split("-"))
			},
			
			//
			goLink(type){
				switch(type){
					case 'lpwd':
						this.$router.push('/editLPwd')
					break;
					case 'jpwd':
						this.$router.push('/editJPwd')
					break;
				}
			},
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal_account_security{
		.title{
			background-color: rgba(3, 83, 164, 0.06);
			font-size: 16px;
			padding:10px 20px;
			border-bottom: 1px solid #E3E3E3;
		}
		&>ul{
			padding: 0 20px;
			&>li{
				padding: 20px 0;
				border-bottom: 1px solid #E3E3E3;
				.clearfix;
				.iconfont{
					font-size: 20px;
				}
				.icon-dui{
					color: @green;
				}
				.icon-gantanhao{
					color: @org-s;
				}
				&>div{
					float: left;
				}
				&>div:first-child{
					margin-right: 30px;
					span{
						display: inline-block;
						font-size: 16px;
						color: #666;
						margin-left: 10px;
						position: relative;
						top: -1px;
					}
				}
				&>div:nth-child(2){
					color: #B3B3B3;
					padding-top: 3px;
				}
				&>div:last-child{
					padding-top: 3px;
					float: right;
					min-width: 20%;
					text-align: right;
					&>p{
						display: inline-block;
						color: #B3B3B3;
					}
					&>i{
						color: @blue;
						margin-left: 20px;
						.hover;
					}
				}
				
				.aqlv{
					&>ul{
						.clearfix;
						position: relative;
						top: -3px;
						display: inline-block;
						li{
							width: 48px;
							height: 4px;
							background: #E3E3E3;
							opacity: 1;
							border-radius: 2px;
							float: left;
							margin-left: 10px;
						}
						
					}
				}
				.one{
					&>span{
						color: #FF5B5B;
					}
					&>ul{
						li:nth-child(1){
							background-color: #FF5B5B;
						}
					}
				}
				.two{
					&>span{
						color: @org-s;
					}
					&>ul{
						li:nth-child(1){
							background-color: @org-s;
						}
						li:nth-child(2){
							background-color: @org-s;
						}
					}
				}
				.three{
					&>span{
						color: @green;
					}
					&>ul{
						li:nth-child(1){
							background-color: @green;
						}
						li:nth-child(2){
							background-color: @green;
						}
						li:nth-child(3){
							background-color: @green;
						}
					}
				}
				
				
			}
			li:last-child{
				border: none;
			}
		}
		
		
		.dia_email{
			.tips{
				color: @org-s;
				text-align: center;
			}
			ul{
				li{
					margin-top: 15px;
					&>span{
						color: #666;
						margin-bottom: 3px;
						display: block;
					}
					.scode{
						text-align: right;
						color: @blue;
						padding-top: 5px;
						.hover;
					}
				}
			}
		}
		
		.dia_phone{
			.qhs{
				
				&>div{
					display: inline-block;
					width: 70px;
					text-align: center;
					padding: 7px 0px;
					border: 1px solid #e3e3e3;
					color: #666;
					.icon-jiantou{
						transform: rotate(-90deg) translateY(2px) translateX(1px);
						display: inline-block;
						font-size: 12px;
					}
				}
				&>input{
					width: calc(100% - 82px);
					margin-left: 10px;
				}
			}
		}
	
	}

	@media (max-width:1023px) {
		.view_personal_account_security{
			&>ul{
				&>li{
					&>div:nth-child(2){
						display: none;
					}
					.aqlv{
						&>span{
							
						}
						&>ul{
							&>li{
								width: 22px;
								margin-left: 5px;
							}
						}
					}
				}
			}
		}
	}
</style>
