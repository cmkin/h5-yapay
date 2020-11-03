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
