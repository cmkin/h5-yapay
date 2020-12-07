module.exports = {
	//全局公用字符
	global: {
		logo: require("_a/img/logo.png"),
		qsr: '请输入',
		qxz: '请选择',
		jyfl: '交易手续费费率:',
		usdt: require("_a/img/usdt.png"),
		cny: require("_a/img/cny.png"),
		payType: [{
				title: '123',
				id: 0,
				img: require("_a/img/zfb.png")
			},
			{
				title: '213',
				id: 1,
				img: require("_a/img/wx.png")
			},
			{
				title: '12',
				id: 2,
				img: require("_a/img/yhk.png")
			},
			{
				title: '123',
				id: 3,
				img: require("_a/img/PayPal.png")
			},
		],
		//头部底部
		header: {
			name: "YaPay",
			meun: [{
					title: "dsadas",
					to: '/sale/quickBuySell'
				},
				{
					title: "dasdsa",
					to: ''
				},
				{
					title: "sadsad",
					to: ''
				}
			],
			language: [{
					title: "简体中文",
					key: "zh",
					id: 0
				},
				{
					title: "EngLish",
					key: "en",
					id: 1
				},
			],
			login: "登录",
			reg: "注册",
			loginOk: {
				title: '资产管理',
				list: [{
						text: '账户安全',
						to: '/personal/account/security'
					},
					{
						text: '身份认证',
						to: '/personal/account/identity'
					},
					{
						text: '收付款账户设置',
						to: '/personal/account/payment'
					},
					{
						text: '退出登录',
						event: 'logout'
					}
				]
			},
			loginZc:{
				list:[
					{
						text:'asda',
						to:'/assets/assets',
					},
					{
						text:'sadsad',
						to:'/assets/payment'
					},
					{
						text:'das',
						to:'/assets/a'
					},
					{
						text:'das',
						to:'/assets/a'
					},
					{
						text:'dsa',
						to:'/assets/a'
					},
					{
						text:'dasd',
						to:'/assets/a'
					},
					{
						text:'sadasd',
						to:'/assets/a'
					},
				]
			}
		},
		fonter: {
			name: "YAPAY",
			c: '© yapay.com 2020',
			lists: [{
					title: '联系我们',
					items: [{
							title: '+44 345 678 903',
							to: ''
						},
						{
							title: 'yapay@mail.com',
							to: ''
						},
						{
							title: '公司地址',
							to: ''
						}
					]
				},
				{
					title: '条款说明&服务',
					items: [{
							title: '关于我们',
							to: ''
						},
						{
							title: '联系客服',
							to: ''
						},
						{
							title: '服务条款',
							to: ''
						},
						{
							title: '隐私政策',
							to: ''
						},
						{
							title: '帮助中心',
							to: ''
						},
						{
							title: '执法请求指南',
							to: ''
						}
					]
				},
				{
					title: '合作伙伴',
					items: [{
							title: 'OKEX',
							to: ''
						},
						{
							title: '火币',
							to: ''
						},
						{
							title: '币安',
							to: ''
						},
						{
							title: 'OTCBTC',
							to: ''
						},
					]
				}
			]
		},
		//弹窗，按钮
		base: {
			ok: "确定",
			reset: "重置",
			cancel: "取消",
			loading: "加载中...",
			bl: "请保留一个收款方式",
			wz: '请填写{}后提交',
			gm: '购买',
			usdt: "USDT",
			zh: "账号",
			copyOk: '复制成功',
			copyFail: "复制失败",
			qsrnr: '请输入内容',
			send: "发送",
			cs: "出售",
			jymm: "交易密码",
			hs: "还剩{}",
			wjmm: "忘记密码",
			sellj: "卖家",
			buyj: "买家",
			d: "单",
			sl: "数量",
			xe: "限额",
			dj: "单价",
			fbsx: "放币失效",
			rzdj: "认证等级",
			cdv: "成单/成单率",
			csqx: "{}后超时取消",
			sendCode: '发送验证码',
			cb:"充币",
			tb:'提币',
			more:"查看更多>>",
			sk:'收款',
			fk:'付款',
			next:'下一步',
			ckxq:'查看详情',
			jylv:'交易汇率',
			fbje:'法币金额'
		}
	},
	//首页
	index: {
		bg: require('_a/img/usdt.png'),
		kj: '快捷买币',
		aq: '快捷、安全、便捷的数字货币支付平台</br>懂支付，更懂你！',
		gm: '购买',
		a: '按',
		sl: "数量",
		je: '金额',
		lj: '立即购买',
		hq: 'USDT行情',
		hb: [{
				key: 'USD',
				name: 'USD',
				fh: '$'
			},
			{
				key: 'CNY',
				name: 'CNY',
				fh: '¥'
			},
			{
				key: 'EUR',
				name: 'EUR',
				fh: '€'
			},
			{
				key: 'GBP',
				name: 'GBP',
				fh: '£'
			},
			{
				key: 'JPY',
				name: 'JPY',
				fh: 'J¥'
			},
			{
				key: 'KRW',
				name: 'KRW',
				fh: '₩'
			},
			{
				key: 'TRY',
				name: 'TRY',
				fh: '₺'
			},
			{
				key: 'BRL',
				name: 'BRL',
				fh: 'R$'
			},
			{
				key: 'RUR',
				name: 'RUR',
				fh: '₽'
			},
			{
				key: 'HKD',
				name: 'HKD',
				fh: 'HK$'
			},
		],
		r: '日',
		z: '周',
		y: '月',
		open: 'Open 24H',
		last: 'Last price',
		higt: 'High 24H',
		mkt: 'Mkt.Cap',
		vol: 'Vol 24H',
		low: 'Low 24H',
		tableTitle: [{
				title: 'dasda',
				slot: 'fb',
				flex: 2
			},
			{
				title: 'dasdasd',
				id: 'price',
			},
			{
				title: 'asdadasd',
				slot: 'zdf',
				hide: true
			},
		],
	},
	
	
}