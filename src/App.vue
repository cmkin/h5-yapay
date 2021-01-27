<template>
	<div id="app">
		<transition name="left" mode="out-in"><router-view></router-view></transition>
	</div>
</template>

<script>
import loginInit from '@/uitl/loginInit';
import sql from '@/uitl/sql';
export default {
	name: 'App',
	components: {},
	data() {
		return {};
	},
	mounted() {
		this.appInit();
		
		
		document.body.onbeforeunload = () => {
			//页面关闭之前，保存聊天记录
			let chats = this.$store.state.chat.lists;
			sql.update(chats);
		};
	},
	watch: {},
	methods: {
		//所有接口，数据等 初始化
		appInit() {
			this.getrate();
			this.getUserInfo();
		},
		//获取汇率
		getrate() {
			this.$http.getExchangeRate().then(res => {
				this.$store.commit('updateSystemInfos', {
					hv: {
						AED: res['USDT/AED'],
						CNY: res['USDT/CNY'],
						EUR: res['USDT/EUR'],
						USD: res['USDT/USD']
					}
				});
			});

			if (!this.$getToken()) {
				this.$http
					.getCoinPrice({
						currency: this.userInfos.currency
					})
					.then(res => {
						this.$store.commit('updateUserPrice', res.data);
					});
			}
		},
		//获取用户信息
		getUserInfo() {
			if (localStorage.getItem('token')) {
				loginInit.call(this);
			}

			setTimeout(() => {
				if (document.getElementById('oneLoading')) {
					document.getElementById('oneLoading').remove();
				}
			}, 1000);
		}
	}
};
</script>

<style>
@import url('https://at.alicdn.com/t/font_2139670_renghch1hxi.css');
</style>
<style lang="less">
//自定义样式
//@import url('./assets/less/class.less');
</style>
