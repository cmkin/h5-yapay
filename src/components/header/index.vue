<template>
	<div class="components_header">
		<div class="main_wrap">
			<div class="main clearfix">
				<div class="left clearfix">
					<router-link to="/index" tag="div" class="logo clearfix">
						<img :src="$t('global.logo')" alt="" />
						<span>{{ $t('global.header.name') }}</span>
					</router-link>

					<ul class="meun clearfix">
						<router-link v-for="(item, index) in $t('global.header.meun')" :key="index" :to="item.to" tag="li">{{ item.title }}</router-link>
					</ul>
				</div>
				<div class="right clearfix">
					

					<div class="login" v-if="!userInfos.islogin && !isPhone">
						<span @click="login(0)">{{ $t('global.header.login') }}</span>
						<span @click="login(2)">{{ $t('global.header.reg') }}</span>
					</div>

					<div class="loginok" v-if="userInfos.islogin">
						<div class="select defalut_s">
							<div class="changed" @click.stop="loginZcFlag()">
								<span>{{ $t('global.header.loginOk.title') }}</span>
								<van-icon name="arrow-up" size="12" :class="{ c: loginZc.flag }" />
							</div>
							<transition name="top" mode="out-in">
								<ul v-if="loginZc.flag">
									<router-link tag="li" :to="item.to" v-for="(item, index) in $t('global.header.loginZc.list')" :key="item.to">{{ item.text }}</router-link>
								</ul>
							</transition>
						</div>

						<div class="mine">
							<i class="iconfont icon-lianxiren" @click.stop="loginOkFlag()"></i>
							<transition name="top" mode="out-in">
								<ul v-if="loginok.flag">
									<li class="user" @click="goLink({ to: '/personal' })">
										<p>UID : {{userInfos.uid}}</p>
										<p>{{userInfos.nickname}}</p>
									</li>
									<router-link v-if="item.to" tag="li" :to="item.to" v-for="(item, index) in $t('global.header.loginOk.list')" :key="item.to">{{ item.text }}</router-link>
									<li v-else @click.stop="goLink(item)">{{ item.text }}</li>
								</ul>
							</transition>
						</div>
					</div>

					
					<div class="download" @click.stop="downloadM">
						<span>{{ $t('global.header.down') }}</span>
						<transition name="top" mode="out-in">
						<div class="code" v-if="download">
							<img src="../../assets/img/downloadCode.png" alt="">
							<div class="r">
								<p>{{ $t('global.header.sd') }}</p>
								<p>IOS & Android</p>
								<a href="http://yaotc.com/download.html" target="_blank">{{ $t('global.header.mr') }}</a>
							</div>
						</div>
						</transition>
					</div>
					
					<div class="language">
						<myselect @flag="languageFlag" ref="headerselect" v-model="language.active" @change="changeLanguage" hover :lists="$t('global.header.language')"></myselect>
					</div>
					
					<div class="icons" v-if="userInfos.islogin">
						<svg
							@click.stop="messageFlag"
							t="1596524462854"
							class="icon"
							viewBox="0 0 1024 1024"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							p-id="8570"
							width="20"
							height="20"
							
						>
							<path
								d="M849.6 713.4c8.4-0.4 16.7 1.8 23.8 6.4-28.9-18.5-46.4-50.4-46.3-84.8V436c0-145.9-105.7-267.6-246.9-297.5v-7.2c0-37.1-30.1-67.1-67.2-67.1h-0.1c-37.1 0-67.3 30.1-67.3 67.2v7C304.3 168.4 198.7 290 198.7 436v199.1c0 35.7-18.6 66.9-46.4 84.8 7-4.6 15.4-6.9 23.8-6.4-24.7-0.9-45.5 18.4-46.4 43.1-0.9 24.7 18.4 45.5 43.1 46.4h676.6c24.7 0.1 44.8-20 44.9-44.7 0.1-24.8-19.9-44.9-44.7-44.9zM513 959.8c62 0 112.2-50.2 112.2-111.9H400.7c0 61.7 50.2 111.9 112.3 111.9z"
								fill="#ffffff"
								p-id="8571"
							></path>
						</svg>	
						<i class="new" v-if="getMessage().newType.length"></i>
						<transition name="top" mode="out-in">
							<ul class="message_alert" v-if="message.flag">
								<li class="t">{{ $t('message.title') }}</li>
								<!-- v-if="index < 2 || userInfos.islogin" -->
								<li @click="messagem(index,item)" v-for="(item, index) in $t('message.tabs')">
									<div class="top" :class="{w:index==0}">
										<span :class=" newtClass(item.id) ">[{{ item.text }}] <i class="new"></i> </span>
										<i>{{ getMessage(item.id).text }}</i>
									</div>
									
									<div class="time" v-if="getMessage(item.id).time">{{ getMessage(item.id).time | timeFormat }}</div>
								</li>
								<li class="all" @click="messagem(0)">{{ $t('message.all') }}</li>
							</ul>
						</transition>
					</div>
					
					
					<div class="phone_muen"><van-icon name="wap-nav" @click="phoneMuen = true" size="30" /></div>
				</div>
			</div>
		</div>

		<div class="clear_header"></div>

		<van-popup :safe-area-inset-bottom="true" :close-on-popstate="true" closeable v-model="phoneMuen" position="right" :style="{ width: '100%', height: '100%' }">
			<div class="phone_muen_content">
				<div class="login" v-if="!userInfos.islogin">
					<span @click="login(0)">{{ $t('global.header.login') }}</span>
					<span @click="login(2)">{{ $t('global.header.reg') }}</span>
				</div>
				<ul class="meun clearfix">
					<li @click="phoneGoLink(item)" v-for="(item, index) in $t('global.header.meun')">{{ item.title }}</li>
					<!-- <router-link @click="phoneMuen = false" v-for="(item, index) in $t('global.header.meun')" :key="index" :to="item.to" tag="li">{{ item.title }}</router-link> -->
					<li v-if="userInfos.islogin" @click="phoneGoLink({ to: '/message?type=0' })" >{{ $t('global.header.xx') }}</li>
				</ul>

				<van-collapse :border="false" v-model="activeNames">
					<van-collapse-item v-if="userInfos.islogin" :title="userInfos.nickname" name="3">
						<ul>
							<li @click="phoneGoLink({ to: '/personal/data' })">{{ $t('personal.title') }}</li>
							<li @click="phoneGoLink(item)" v-for="(item, index) in $t('global.header.loginOk.list')">{{ item.text }}</li>
						</ul>
					</van-collapse-item>

					<van-collapse-item v-if="userInfos.islogin" :title="$t('global.header.loginOk.title')" name="2">
						<ul>
							<li @click="phoneGoLink(item)" v-for="(item, index) in $t('global.header.loginZc.list')">{{ item.text }}</li>
						</ul>
					</van-collapse-item>

					<van-collapse-item :title="$t('global.header.language')[language.active] ? $t('global.header.language')[language.active].title : ''" name="1">
						<ul>
							<li :class="{ active: item.id == language.active }" @click="changeLanguage(item.id)" v-for="(item, index) in $t('global.header.language')">
								{{ item.title }}
							</li>
						</ul>
					</van-collapse-item>
				</van-collapse>
			</div>
		</van-popup>

		
	</div>
</template>

<script>
	import logoutM from '@/uitl/logout'
export default {
	data() {
		return {
			language: {
				flag: false,
				active: null
			},
			phoneMuen: false,
			download: false,
			activeNames: [],
			loginok: {
				flag: false,
				active: 0
			},
			loginZc: {
				flag: false,
				active: 0
			},
			message: {
				flag: false
			}
		};
	},
	mounted() {
		this.language.active = localStorage.getItem("locale") ? localStorage.getItem("locale")=='zh' ?0:1  : this.$t('global.header.language')[0].id;
		
		document.addEventListener('click', e => {
			this.loginok.flag = false;
			this.loginZc.flag = false;
			this.message.flag = false;
			this.download = false
		});
		//已经登录成功之后的数据
	},
	computed:{
		getMessage(){
			return function(type){
				
				let obj = {
					announcement: this.$store.state.message.announcement,
					tips: this.$store.state.message.tips,
					notice: this.$store.state.message.notice
				}
				
				let obj2 = {
					text: this.$t('global.base.zusj'),
					time:null,
					newType:this.$store.state.message.newType
				}
				
				
				 switch(type){
					 case 0:
					 if(obj.announcement){
						 obj2.text =  obj.announcement.noticeContent
						 obj2.time =  obj.announcement.createTime 
					 }
					
					 break;
					 case 1:
						if(obj.tips){
							if(obj.tips.protocol ==4){
								obj2.text = this.$t('message.tips.protocol').filter(item=>item.id == obj.tips.status)[0].text[obj.tips.type]
								obj2.time = obj.tips.createtime
							}else{
								obj2.text = this.$t('message.tips.type').filter(item=>item.id == obj.tips.type)[0].text
								obj2.time = obj.tips.createtime
							}	
						}
					 break;
					 case 2:
						if(obj.notice){
							obj2.text =  this.$t('message.notice').filter(item=>item.id == obj.notice.type)[0].text
							obj2.time = obj.notice.createtime
						}
						
					 break;
				 }
				 return obj2
			}
		},
		newtClass(){
			return function(id){
				return this.getMessage().newType.includes(id) ? 'newt' :''
			}
		}
	},
	methods: {
		messagem(type,item) {
			if(type!=0){
				this.$store.commit('updateMessage',{
					type:item.id,
					delete:true,
					isNew:true
				})
			}
			
			this.$router.push({
				path: '/message',
				query: {
					type: type
				}
			});
		},
		login(type) {
			this.phoneMuen = false
			this.$router.push({
				path: '/login-register',
				query: {
					type: type
				}
			});
		},
		changeLanguage(id) {
			this.language.active = id;
			this.$locale(id==0?'zh':'en');
			return;
			if (id == 0) {
				this.$i18n.locale = 'zh';
			} else {
				this.$i18n.locale = 'en';
			}
			

			let obj = {};
			if (item.hasOwnProperty('index')) {
				obj = item.item;
				this.language.active = '';
			} else {
				obj = item;
				this.language.active = index;
			}
		},
		downloadM(){
			this.download = !this.download;
			this.loginok.flag = false;
			this.loginZc.flag = false;
			this.message.flag = false;
			this.$refs.headerselect.open(false, false);
		},
		messageFlag() {
			this.loginok.flag = false;
			this.loginZc.flag = false;
			this.download  = false
			this.message.flag = !this.message.flag;
			this.$refs.headerselect.open(false, false);
		},
		languageFlag() {
			this.loginok.flag = false;
			this.loginZc.flag = false;
			this.message.flag = false;
			this.download  = false
		},
		loginOkFlag() {
			this.loginok.flag = !this.loginok.flag;
			this.loginZc.flag = false;
			this.message.flag = false;
			this.download  = false
			this.$refs.headerselect.open(false, false);
		},
		loginZcFlag() {
			this.loginZc.flag = !this.loginZc.flag;
			this.loginok.flag = false;
			this.message.flag = false;
			this.download  = false
			this.$refs.headerselect.open(false, false);
		},
		changeLogMeun() {},
		goLink(item) {
			if (item.to) {
				this.$router.push({
					path: item.to
				});
			}
			switch (item.event) {
				case 'logout':
					//退出登录
					this.logout();
					break;
			}
			this.loginok.flag = false;
		},
		phoneGoLink(item) {
			this.phoneMuen = false;
			if (item.to) {
				this.$router.push({
					path: item.to
				});
			}
			switch (item.event) {
				case 'logout':
					//退出登录
					this.logout();
					break;
			}
		},
		//退出登录
		logout() {
			this.$dialog
				.confirm({
					title: this.$t('global.base.wxts'),
					message: this.$t('global.header.logout'),
					cancelButtonText: this.$t('global.base.cancel'),
					confirmButtonText: this.$t('global.base.ok'),
					beforeClose: (action, done) => {
						if (action === 'confirm') {
							this.$http
								.loginOut({
									userid: localStorage.getItem('userid')
								})
								.then(res => {
									done();
									if (res.code == 0) {
										logoutM.call(this)
										/* localStorage.clear();
										this.$store.commit('updateUserInfo', false);
										this.$router.push('/login-register'); */
									}
								});
						}else{
							done();
						}
					}
				})
				.then(() => {
					// on confirm
				})
				.catch(() => {
					// on cancel
				});
		}
		
	}
};
</script>

<style lang="less" scoped="scoped">
.components_header {
	color: white;

	.main_wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: @blue-0;
		z-index: 1000;
	}

	.main {
		padding: 20px;

		& > div {
		}

		.left {
			float: left;

			.logo {
				cursor: pointer;
				float: left;

				img {
					float: left;
					width: 50px;
					height: 50px;
					margin-top: -5px;
				}

				span {
					float: left;
					
					margin-top: 5px;
					font-size: 16px;
					position: relative;
					top: 2px;
				}
			}

			.meun {
				padding-top: 10px;
				float: left;

				li {
					float: left;
					margin-left: 30px;
					.hover;
				}
			}
		}

		.right {
			float: right;
			padding-top: 5px;
			text-align: right;

			.language {
				display: inline-block;
				margin-left: 30px;
			}

			.login {
				
				display: inline-block;
				border: 1px solid #fff;
				padding: 4px 8px;
				border-radius: 5px;
				span {
					.hover;
				}

				span:last-child {
					margin-left: 20px;
					position: relative;

					&::after {
						content: '';
						position: absolute;
						width: 1px;
						height: 10px;
						left: -10px;
						top: 2px;
						background: white;
					}
				}
			}
			.loginok {
				
				display: inline-block;
				.defalut_s {
					.select_down_noicon;
					width: auto;
					margin-right: 30px;
					.hover;
					& > ul {
						width: 170px;
						top: 240%;
						margin-bottom: 0;

						.router-link-active {
							border-color: @blue;
							color: @blue;
							background-color: #f1f9ff;
						}
					}
				}
				.mine {
					.select_down_noicon;
					& > ul {
						width: 170px;
						top: 240%;
						.router-link-active {
							border-color: @blue;
							color: @blue;
							background-color: #f1f9ff;
						}
						li.user {
							border-bottom: 1px solid rgba(0, 0, 0, 0.06);
							&:hover {
								color: #666;
							}
							p:last-child {
								color: #888;
								font-size: 13px;
							}
						}
					}
					display: inline-block;
					width: auto;
					& > i {
						.hover;
					}
				}
			}

			.icons {
				margin-left: 30px;
				display: inline-block;
				position: relative;
				top: 5px;
				svg {
					.hover(@blue, true);
				}
				.new{
					position: absolute;
					right: 0;
					top: 0;
					background-color: @red;
					width: 6px;
					height: 6px;
					border-radius: 50%;
				}
				.message_alert {
					position: absolute;
					top: 200%;
					right: 0;
					width: 288px;
					background: #ffffff;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
					border-radius: 2px;
					color: #666;
					.t {
						color: #b3b3b3;
						background-color: #fff !important;
						cursor: default !important;
					}
					li {
						text-align: left;
						padding: 10px 15px;
						transition: all 0.5s;
						cursor: pointer;
						border-bottom: 1px solid rgba(0, 0, 0, 0.06);
						.top {
							position: relative;
							padding-left: 100px;
							min-height: 22px;
							&>span {
								position: absolute;
								top: 0;
								left: 0;
								width: 90px;
								padding-right: 5px;
								box-sizing: border-box;
								font-size: 16px;
								color: #333333;
								font-weight: bold;
								i{
									display: none;
								}
							}
							.newt{
								color: @red;
								i{
									display: block;
								}
							}
							&>i {
								color: #666666;
							}
						}
						.w{
							padding-left: 70px;
							&>span{
								width: 60px;	
							}
						}
						
						.time {
							color: #b3b3b3;
							font-size: 12px;
							padding-top: 10px;
						}
						&:hover {
							background-color: #f1f9ff;
						}
					}
					
					.all {
						text-align: center;
						cursor: pointer;
						.hover;
					}
				}
			}
			
			.download{
				display: inline-block;
				position: relative;
				margin-left: 30px;
				&>span{
					.hover;
				}
				.code{
					padding: 10px;
					box-sizing: border-box;
					width: 250px;
					position: absolute;
					z-index: 10;
					right: 0;
					top: 55px;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
					border-radius: 2px;
					background-color: #fff;
					color: #333;
					.clearfix;
					img{
						float: left;
						width: 100px;
						height: 100px;
						border: 1px solid #ccc;
					}
					.r{
						float: left;
						padding-left: 20px;
						text-align: left;
						p{
							margin-bottom: 10px;
						}
						a{
								background: #0466c8;
							    color: #fff;
							    display: inline-block;
							    padding: 7px 10px;
							    border-radius: 2px;
							
						}
					}
				}
				
			}
			
			.phone_muen {
				float: right;
				display: none;

				i {
					.hover;
				}
			}
		}
	}
	.clear_header{
		height: 80px;
	}
	
}

@media (max-width: 1023px) {
	.components_header {
		.main {
			padding: 10px;

			.left {
				.meun {
					display: none;
				}
			}

			.right {
				.language {
					display: none;
				}
				.loginok {
					display: none;
				}
				.icons {
					display: none;
				}

				.phone_muen {
					display: block;
				}
				.download{
					display: none;
				}
			}
		}
		.clear_header{
			height: 61px;
		}
		.van-popup {
			background: @blue-0;
		}

		.van-popup__close-icon {
			color: rgba(255, 255, 255, 0.8);
		}

		.phone_muen_content {
			padding: 20px;

			.login {
				margin-right: 30px;
				display: inline-block;
				border: 1px solid rgba(255, 255, 255, 0.8);
				padding: 4px 8px;
				border-radius: 5px;
				span {
					.hover;
					color: rgba(255, 255, 255, 0.8);
				}

				span:last-child {
					margin-left: 20px;
					position: relative;

					&::after {
						content: '';
						position: absolute;
						width: 1px;
						height: 10px;
						left: -10px;
						top: 2px;
						background: rgba(255, 255, 255, 0.5);
					}
				}
			}

			.meun {
				li {
					margin-top: 15px;
					font-size: 16px;
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}

	}
}
</style>

<style lang="less">
.components_header {
	.phone_muen_content {
		.van-cell {
			background: none;
			color: rgba(255, 255, 255, 0.8);
			font-size: 16px;
			padding: 0;
			margin-top: 10px;
		}

		.van-collapse-item__content {
			background: none;
			color: rgba(255, 255, 255, 0.8);
			font-size: 16px;

			li {
				padding: 5px;
				color: #808eb6;
				font-size: 15px;
				.hover;
			}

			.active {
				color: @blue;
			}
		}

		.van-collapse-item__title--expanded::after {
			display: none;
		}

		.van-cell__right-icon {
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.van-popup__close-icon {
		color: rgba(255, 255, 255, 0.8);
	}
	.language {
		.defalut_s ul {
			top: 240%;
		}
	}
}
</style>
