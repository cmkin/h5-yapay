import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const routes = [{
		path: '',
		redirect: '/index'
	},
	{
		path: '/index',
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
						children:[{
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
						]
						
					}
				]
			}
		]
	}

]



/**
 * 重写路由的replace方法
 */
let routerPush = vueRouter.prototype.replace
vueRouter.prototype.replace = function replace(location) {
	return routerPush.call(this, location).catch(error => error)
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
