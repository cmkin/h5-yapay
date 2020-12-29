<template>
	<div class="view_personal_account_security view_personal_account_icon">
		<div class="title">
			{{ $t('personal.account.security.title') }}
		</div>
		<ul>
			<li>
				<div>
					<i class="iconfont" :class="userInfos.phone?'icon-dui':'icon-gantanhao'"></i>
					<span> {{ $t('personal.account.security.ccs[0].t') }} </span>
				</div>
				<div> {{ $t('personal.account.security.ccs[0].p') }} </div>
				<div>
					<p v-if="userInfos.phone">{{userInfos.phone}}</p>
					<i @click="showDialog(1)"> {{ userInfos.phone? $t('personal.account.security.xg') : $t('personal.account.security.bd') }} </i>
				</div>
			</li>
			
			<li>
				<div>
					<i class="iconfont" :class="userInfos.mail?'icon-dui':'icon-gantanhao'"></i>
					<span> {{ $t('personal.account.security.ccs[1].t') }} </span>
				</div>
				<div> {{ $t('personal.account.security.ccs[1].p') }} </div>
				<div>
					<p v-if="userInfos.mail">{{userInfos.mail}}</p>
					<i v-if="!userInfos.mail" @click="showDialog(2)"> {{ userInfos.mail? $t('personal.account.security.xg') : $t('personal.account.security.bd') }} </i>
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
					<i class="iconfont" :class="userInfos.payPassword?'icon-dui':'icon-gantanhao'"></i>
					<span> {{ $t('personal.account.security.ccs[3].t') }} </span>
				</div>
				<div> {{ $t('personal.account.security.ccs[3].p') }} </div>
				<div>
					<i @click="goLink('jpwd')"> {{ userInfos.payPassword ? $t('personal.account.security.xg') : $t('personal.account.security.sz') }} </i>
				</div>
			</li>
			
			
		</ul>
	
		
		<!-- 弹窗 -->
		<dialogx v-model="dialog.show" :loading="dialog.loading" :disabled="dialogDis" :title="dialog.title" :onOk="dialogOk">
			<template v-slot:content>
				
				<!-- 手机 1-->
				<div class="dia_email dia_phone" v-if="dialog.type==1">
					<p class="tips"> {{ $t('personal.account.security.ptips') }} </p>
					<ul>
						<li class="qhs">
							<span> {{ $t('personal.account.security.phone') }} </span>
							<div @click="phoneDlg.show = true">
								{{ dialog.phone.regionCode }}
								<i class="iconfont icon-jiantou"></i>
							</div>
							<input v-model="dialog.phone.phone" type="text" :placeholder=" $t('global.qsr') + $t('personal.account.security.phone')">
						</li>
						<li>
							<span>{{ $t('personal.account.security.phoneCode') }} </span>
							<input v-model="dialog.phone.verifyCode" type="number" :placeholder=" $t('global.qsr') + $t('personal.account.security.phoneCode')">
							<div class="scode">
								<send-code :urlType="1" :data="{ account:dialog.phone.phone,regionCode:dialog.phone.regionCode,type:6 }" ></send-code>
							</div>
						</li>
					</ul>
				</div>
				
				<!-- 邮箱 2-->
				<div class="dia_email" v-if="dialog.type==2">
					 <p class="tips"> {{ $t('personal.account.security.bdtips') }} </p> 
					<ul>
						<li>
							<span> {{ $t('personal.account.security.yx') }} </span>
							<input v-model="dialog.email.email" type="text" :placeholder=" $t('global.qsr') + $t('personal.account.security.yx')">
						</li>
						<li>
							<span>{{ $t('personal.account.security.yxcode') }} </span>
							<input v-model="dialog.email.verifyCode" type="number" :placeholder=" $t('global.qsr') + $t('personal.account.security.yxcode')">
							<div class="scode">
								<send-code :urlType="2" :data="{ account:dialog.email.email,type:6 }" ></send-code>
							</div>
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
	import updateUser from '@/uitl/updateUser'
	export default {
		data(){
			return{
				
				dialog:{
					show:false,
					loading:false,
					title:'',
					type:1,//弹窗类型
					email:{
						email:'',
						verifyCode:''
					},
					phone:{
						phone:'',
						verifyCode:'',
						regionCode:''
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
				let lv = this.userInfos.passwordLevel? this.userInfos.passwordLevel-1 : 0
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
			dialogDis(){
				if(this.dialog.type==1){
					if(Boolean(this.dialog.phone.phone && this.dialog.phone.verifyCode)){
						return  false
					}
				}else{
					if(Boolean(this.dialog.email.email && this.dialog.email.verifyCode)){
						return  false
					}
				}
				
				return true
			}
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
				this.dialog.phone = {
					phone:'',
					verifyCode:'',
					regionCode:'+86'
				}
				this.dialog.email = {
					email:'',
					verifyCode:''
				}
				this.dialog.type = type
				this.dialog.loading = false
				this.dialog.show = true
			},
			dialogOk(){
				this.dialog.loading = true
				if(this.dialog.type==1){
					this.$http.bindingPhone({
						userid:this.$getToken(1),
						...this.dialog.phone 
					}).then(res=>{
						this.dialog.loading =  false
						if(res.code==0){
							this.$notify({
								type:"success",
								message:this.$t('global.base.xgcg')
							})
							this.dialog.show = false
							updateUser.call(this)
						}else{
							
						}
					})
				}else{
					this.$http.bindingMail({
						userid:this.$getToken(1),
						...this.dialog.email 
					}).then(res=>{
						this.dialog.loading =  false
						if(res.code==0){
							this.$notify({
								type:"success",
								message:this.$t('global.base.xgcg')
							})
							this.dialog.show = false
							updateUser.call(this)
						}else{
							
						}
					})
				}
				
			},
			//选择电话
			phoneOk(value){
				this.phoneDlg.show = false
				this.dialog.phone.regionCode = value.split("-")[0]
				//console.log(value.split("-"))
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
