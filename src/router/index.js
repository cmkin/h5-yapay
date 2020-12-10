import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const routes = [{
		path: '',
		component: () => import('_c/index/index'),
		children: [{
				path: '',
				redirect: 'index'
			},
			{
				path: 'index',
				component: () => import('_v/index/index'),
				meta: {
					title: "首页"
				}
			},
			{
				path: 'message',
				component: () => import('_v/message/index'),
				meta: {
					title: "消息中心"
				}
			},
			{
				path: 'login-register',
				component: () => import('_v/login/index'),
				meta: {
					title: "登录"
				}
			},
			{
				path: 'sale',
				component: () => import('_v/sale/index'),
				children: [{
						path: '',
						redirect: 'quickBuySell'
					},
					{
						path: 'quickBuySell',
						component: () => import('_v/sale/quickBuySell/index'),
						meta: {
							title: "快捷买卖"
						}
					},
					{
						path: 'payment',
						component: () => import('_v/sale/quickBuySell/paymentAndCollection/index'),
						meta: {
							title: "待付款",
							type: 1
						}
					},
					{
						path: 'collection',
						component: () => import('_v/sale/quickBuySell/paymentAndCollection/index'),
						meta: {
							title: "待收款",
							type: 2
						}
					},
					{
						path: 'c2c',
						component: () => import('_v/sale/c2c/index'),
						meta: {
							title: "c2c交易"
						}
					}
				]
			},
			{
				path: 'personal',
				component: () => import('_v/personal/index'),
				children: [{
						path: '',
						redirect: 'data'
					},
					{
						path: 'data',
						component: () => import('_v/personal/data/index'),
						meta: {
							title: "个人资料"
						}
					},
					{
						path: 'account',
						component: () => import('_v/personal/account/index'),
						children: [{
								path: '',
								redirect: 'security'
							},
							{
								path: 'security',
								component: () => import('_v/personal/account/security'),
								meta: {
									title: "账户安全"
								}
							},
							{
								path: 'identity',
								component: () => import('_v/personal/account/identity'),
								meta: {
									title: "身份认证"
								}
							},
							{
								path: 'payment',
								component: () => import('_v/personal/account/payment'),
								meta: {
									title: "收付款账户设置"
								}
							}
						]

					}
				]
			},
			{
				path: 'assets',
				component: () => import('_v/assets/index'),
				meta: {
					title: "我的资产"
				},
				children: [{
						path: '',
						redirect: 'assets'
					},
					{
						path: 'assets',
						component: () => import('_v/assets/assets'),
						meta: {
							title: "个人资料"
						}
					},
					{
						path: 'payment',
						component: () => import('_v/assets/payment'),
						meta: {
							title: "付款"
						}
					},
					{
						path: 'paymentRecords',
						component: () => import('_v/assets/paymentRecords'),
						meta: {
							title: "付款记录"
						}
					},
					{
						path: 'bill',
						component: () => import('_v/assets/bill'),
						meta: {
							title: "账单"
						}
					},
					{
						path: 'collection',
						component: () => import('_v/assets/collection'),
						meta: {
							title: "收款"
						}
					},
					{
						path: 'recharge',
						component: () => import('_v/assets/recharge'),
						meta: {
							title: "充币"
						}
					},
					{
						path: 'withdraw',
						component: () => import('_v/assets/withdraw'),
						meta: {
							title: "提币"
						}
					},
					{
						path: 'order',
						component: () => import('_v/assets/order'),
						meta: {
							title: "我的订单"
						}
					}
				]
			},
			//其他子级
			{
				path: 'entrust',
				component: () => import('_v/sale/c2c/entrust'),
				meta: {
					title: "我的委托单"
				}
			},
			{
				path: 'editLPwd',
				component: () => import('_v/personal/other/editLPwd'),
				meta: {
					title: "修改登录密码"
				}
			},
			{
				path: 'editJPwd',
				component: () => import('_v/personal/other/editJPwd'),
				meta: {
					title: "修改交易密码"
				}
			},
			{
				path: 'editIdentity',
				component: () => import('_v/personal/other/editIdentity'),
				meta: {
					title: "基础认证"
				}
			},
			{
				path: 'editIdentityt',
				component: () => import('_v/personal/other/editIdentityt'),
				meta: {
					title: "视频认证"
				}
			},
			{
				path:'paymentMethod',
				component: () => import('_v/personal/other/paymentMethod'),
				meta: {
					title: "收付款账户设置"
				}
			}
		]
	}

]




// 解决vue-router在3.0版本以上重复点菜单报错问题
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const originalreplace = vueRouter.prototype.replace
vueRouter.prototype.replace = function replace(location) {
	return originalreplace.call(this, location).catch(err => err)
}

export default new vueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
