import error from './error/zh'

export default  {
	//错误
	error:error,
	//全局公用字符
	global: {
		logo: require("_a/img/logo.png"),
		qsr: '请输入',
		qxz: '请选择',
		jyfl: '交易手续费费率:',
		usdt: require("_a/img/usdt.png"),
		cny: require("_a/img/cny.png"),
		payType: [{
				title: '支付宝',
				id: 0,
				img: require("_a/img/zfb.png")
			},
			{
				title: '微信',
				id: 1,
				img: require("_a/img/wx.png")
			},
			{
				title: '银行卡',
				id: 2,
				img: require("_a/img/yhk.png")
			},
			{
				title: 'PayPal',
				id: 3,
				img: require("_a/img/PayPal.png")
			},
		],
		hbType:[
			{
				id:1,
				text:'人民币'
			},
			{
				id:0,
				text:'美元'
			},
			{
				id:2,
				text:'欧元'
			},
			{
				id:3,
				text:'迪拉姆'
			},
		],
		//头部底部
		header: {
			name: "YaPay",
			meun: [{
					title: "法币交易",
					to: '/sale/quickBuySell'
				},
				{
					title: "行情",
					to: '/quotation'
				},
				{
					title: "活动",
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
						text:'我的资产',
						to:'/assets/assets',
					},
					{
						text:'付款',
						to:'/assets/payment'
					},
					{
						text:'收款',
						to:'/assets/collection'
					},
					{
						text:'充币',
						to:'/assets/recharge'
					},
					{
						text:'提币',
						to:'/assets/withdraw'
					},
					{
						text:'账单',
						to:'/assets/bill'
					},
					{
						text:'我的订单',
						to:'/assets/order'
					},
				]
			},
			logout:'您确定要退出登录么?',
			ydjy:'移动交易，随时随地',
			xz:"下载"
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
			tj:'提交',
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
			zje: "总金额",
			ddh: "订单号",
			fbsx: "放币失效",
			rzdj: "认证等级",
			cdv: "成单/成单率",
			csqx: "{}后超时取消",
			cb:"充币",
			tb:'提币',
			more:"查看更多>>",
			sk:'收款',
			fk:'付款',
			next:'下一步',
			ckxq:'查看详情',
			jylv:'交易汇率',
			fbje:'法币金额',
			djxz:'点击选择',
			year:"年",
			month:'月',
			day:'日',
			hou:'时',
			min:'分',
			sec:'秒',
			copy:'复制',
			zusj:'暂无数据',
			yzm:'验证码',
			sendCode: '发送验证码',
			reSend: '重新发送',
			scs:'{}后重试',
			wxts:'温馨提示',
			networkError:'网络出错,请检查网络后重试!',
			sendOk:"发送成功",
			regOk:"注册成功,3s后跳转去登录"
		}
	},
	
	//登录-注册等
	login:{
			zht:"账号密码登录",
			dxt:'短信验证码登录',
			zh:'账号',
			zhp:'手机号/邮箱',
			mm:"密码",
			dl:'登录',
			lj:'立即注册',
			nzh:'没有账号',
			yzh:'已有账号',
			sjhm:'手机号码',
			
			sht:'手机号注册',
			yxt:'电子邮箱注册',
			yx:'邮箱',
			ljd:'立即登录',
			zcjty:'注册即同意',
			shxy:'YaPay商户服务协议',
			mts:'6-20位数字或字母组成',
			
			wjts:'为了账号安全，需要验证后才能重置密码',
			fhdl:'返回登陆',
			yzmfs:'验证码已发送至',
			szmm:'请设置密码',
			reszmm:'请再次输入密码'
	},
	//首页
	index: {
		bg: require('_a/img/indexbg.png'),
		kj: '充值',
		aq: '快捷、安全、便捷的数字货币支付平台</br>懂支付，更懂你！',
		gm: '购买',
		a: '按',
		sl: "数量",
		je: '金额',
		lj: '立即购买',
		
		
		tabs:[
			{
				img:require("@/assets/img/index2.png"),
				text:'付款',
				to:'/assets/payment'
			},
			{
				img:require("@/assets/img/index3.png"),
				text:'收款',
				to:'/assets/collection'
			},
			{
				img:require("@/assets/img/index4.png"),
				text:'提现',
				to:'/sale/c2c?type=1'
			},
		],
		
		lpk:'礼品卡兑换',
		kzhy:'馈赠好友不二之选',
		nkyj:'您可以将自己的USDT打包生成兑换码，发放给好友或输入获取的兑换码领取他人赠送的USDT',
		ljty:'立即体验',
		
		lc:'低门槛&nbsp;&nbsp;高效率&nbsp;&nbsp;支付更轻松!',
		zg:'整个支付过程仅需 5-8S',
		lcTabs:[
			{
				img:require("@/assets/img/payshop.png"),
				text:'商户在keypay</br>开通商户服务'
			},
			{
				img:require("@/assets/img/pay.png"),
				text:'消费者在商户充值或付</br>款时选择数字货币支付'
			},
			{
				img:require("@/assets/img/paycode.png"),
				text:'拉起keypay支付或打开</br>keypay客端扫码支付'
			},
			{
				img:require("@/assets/img/payok.png"),
				text:'消费者完成支付</br>交易成功'
			}
		],
		
		dgl:'更多功能尽在掌握',
		szzf:'下载YaPay客户端，体验更多功能',
		yhk:'您可通过keypay钱包，随时随地管理数字资产，更棒的是您可以通过我们的钱包向支持数字货币的商户支付，在真实世界进行消费，数字货币不再只是数字',
		
		
		
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
				title: '法币',
				slot: 'fb',
				flex: 2
			},
			{
				title: '价格',
				id: 'price',
			},
			{
				title: '涨跌幅(24H)',
				slot: 'zdf',
				hide: true
			},
		],
	},

	//买卖 - 路由修改为sale
	quickSale: {
		meun: [{
				title: "快捷买卖",
				to: "quickBuySell"
			},
			{
				title: "C2C交易",
				to: "c2c"
			}
		],
		dd: '订单',
		//快捷买卖
		quickBuySell: {
			//买
			buy: {
				wym: "我要买",
				mrsl: '买入数量',
				mrje: '买入金额',
				fkfs: '付款方式',
				ckdj: '参考单价',
				ljgm: '立即购买',
				sxf: '交易手续费费率',
				km: '可买数量'
			},
			//卖
			sell: {
				wym: "我要卖",
				mrsl: '卖出数量',
				mrje: '卖出金额',
				fkfs: '收款方式',
				ckdj: '参考单价',
				ljgm: '立即出售',
				sxf: '交易手续费费率',
				ky: '可用资产',
				zd: '最大'
			},
			//弹窗
			okBuy: {
				title: "确认购买",
				list: [{
						name: '付款方式',
						key: 'payType'
					},
					{
						name: '买入单价',
						key: 'price'
					},
					{
						name: '买入数量',
						key: 'nums'
					},
					{
						name: '实付金额',
						key: 'allPrice'
					},
				]
			},
			okSell: {
				title: "确认出售",
				list: [{
						name: "收款方式",
						key: "payType"
					},
					{
						name: "出售单价",
						key: "price"
					},
					{
						name: "出售数量",
						key: "nums"
					},
					{
						name: "可得金额",
						key: 'allPrice'
					}
				]
			}
		},
		//快捷-待付款
		payment: {
			zf: '支付方式',
			sk: "收款姓名",
			codePay: '二维码付款请点击保存图片',
			mtips: {
				t: '卖家提示',
				c: '切记不要备注任何数字及敏感字眼，非实名付款不放币。不需要请及时取消订单，交易疑问或账号限制等问题及时沟通。'
			},
			ddxq: {
				t: "订单详情",
				lists: [{
						name: '卖家昵称',
						key: 'a'
					},
					{
						name: '交易单价',
						key: ''
					},
					{
						name: '交易数量',
						key: ''
					},
					{
						name: '订单编号',
						key: '',
						copy: true
					}
				]
			},

			ptips: '平台不会自动扣款，如您已向卖家线下转账付款，请务必点击下方“我已付款，请放币”按钮，否则有可能造成您的资金损失。',
			qzfk: '请在{}内付款给卖家',
			qxdd: "取消订单",
			wyfk: '我已付款，请放币',
			dtips: [
				'收到非实名汇款，或买方转账备注中含有Yapay,BTC,ETH,USDT以及其他数字资产名称等字眼，请联系客服将款项原路退回。',
				'非工作时间（节假日及工作日的17:00-8:00收到大于5w以上的跨行汇款且无法确认收款的，请立即联系客服处理。',
				'订单状态变更为买方已付款后，请前往收款账户核实是否收到款项后尽快放币'
			],
			cancel: {
				title: "取消订单",
				tips: [
					'您正在交易过程中，如果您已向卖家付款，请不要取消订单。',
					'当前是第{}次取消订单，每天取消订单3次以上将被惩罚24小时不能交易!'
				],
				no: '确定未向对方付款',
				fh: '返回交易',
				ok: '确认取消'
			},
			payOk: {
				title: "确认付款",
				tip: '如果确认通过以下方式线下付款给对方，方可点击确认。',
				fs: "付款方式",
				je: "付款金额"
			}
		},
		//快捷-待收款
		collection: {
			ddxq: {
				t: '订单信息',
				lists: [{
						name: "订单金额",
						key: "a"
					},
					{
						name: "交易单价",
						key: "b"
					},
					{
						name: "交易数量",
						key: "c"
					},
					{
						name: "下单时间",
						key: "d"
					},
					{
						name: "付款姓名",
						key: "e"
					},
					{
						name: "订单编号",
						key: "f",
						copy: true
					}
				]
			},

			tips: {
				t: "买家提示",
				c: '下单后急速付款，收款后请及时放币。'
			},
			cs: '{}后超时自动取消',
			wsdk: "未收到款",
			qrsk: "确认收款",
			zfxx: {
				t: '支付信息',
				lists: [{
						name: '买家昵称',
						key: ''
					},
					{
						name: '收款方式',
						key: ''
					},
					{
						name: '付款姓名',
						key: ''
					},
					{
						name: '支付时间',
						key: ''
					}
				]
			},
			zfTips: '请您前往银行客户端、支付宝账户、微信钱包查询钱已到账后再进行放币操作，到账短信不可作为付款凭据！',

			payOkCoin: {
				title: "确认放币",
				tips: '如果确认通过以下方式收到对方汇款，方可放币。',
				skfs: '收款方式',
				skje: '收款金额',
			}
		},

		//c2c交易
		c2c: {
			typeTitle: ['购买', '出售'],
			zx: "最小目标金额",
			qbzf: "全部支付方式",
			zffs: "支付方式",
			fbwt: '发布委托单',
			table: {
				zbmz: "不满足{}的限制",
				buyTitle: [{
						title: '卖家(成单量/成交率)',
						id: 'name'
					},
					{
						title: '数量',
						id: 'num'
					},
					{
						title: "限额",
						id: "xe"
					},
					{
						title: "单价",
						id: "price"
					},
					{
						title: "支付方式",
						id: 'paytype'
					},
					{
						title: "交易",
						id: "jy"
					}
				],
				sellTitle: [{
						title: '买家(成单量/成交率)',
						id: 'name'
					},
					{
						title: '数量',
						id: 'num'
					},
					{
						title: "限额",
						id: "xe"
					},
					{
						title: "单价",
						id: "price"
					},
					{
						title: "支付方式",
						id: 'paytype'
					},
					{
						title: "交易",
						id: "jy"
					}
				],
			},
			buy: {
				ts: "交易说明",
				tst: '转完账后顺手加支付宝好友</br>不实名转账退款收取10%的手续费。'
			},
			orderForm: {
				dqpk: "当前盘口价格:",
				wtlxt: '委托类型',
				wtlx: [{
					title: '快捷委托单',
					id: 1
				}, {
					title: '自选委托单',
					id: 2
				}],
				//购买
				jyjg: '交易价格(固定价格)',
				srjy: '请输入交易价格',
				gmsl: '购买数量',
				gmje: '购买金额',
				zdmr: '最低买入',
				sjfw: '交易时间范围',
				ks: '开始时间',
				js: '结束时间',
				fkfs: '付款方式',
				jysm: '交易说明(选填)',
				jysmp: '交易说明50字以内',
				dsxz: '对手限制(选填)',
				rzdj: '认证等级',
				zcsj: '注册时间',
				//出售
				cssl: '出售数量',
				csje: '出售金额',
				zdcs: '最低出售',
				skfs: '收款方式',
				fksj: '付款时间',

				//确认发布-弹窗
				okwt: {
					buy: {
						title: '确认购买',
						list: [{
								name: '付款方式',
								key: 'payType'
							},
							{
								name: '购买单价',
								key: 'price'
							},
							{
								name: '购买数量',
								key: 'num'
							},
							{
								name: '最低买入',
								key: 'lowBuy'
							},
							{
								name: '交易时间',
								key: 'time'
							},
							{
								name: '对手限制',
								key: 'limt'
							}
						]
					},
					sell: {
						title: '确认出售',
						list: [{
								name: '收款方式',
								key: 'skType'
							},
							{
								name: '出售单价',
								key: 'skType'
							},
							{
								name: '出售数量',
								key: 'skType'
							},
							{
								name: '最低卖出',
								key: 'skType'
							},
							{
								name: '付款时间',
								key: 'skType'
							},
							{
								name: '交易时间',
								key: 'skType'
							},
							{
								name: '对手限制',
								key: 'skType'
							}
						],
						lowts: '您的出售价格低于当前盘口价格{}，是否继续发布？'
					}
				}
			},
			//我的委托单
			entrust:{
				title:'我的委托单',
				tabs:[
					{
						id:0,
						text:'全部'
					},
					{
						id:1,
						text:'快捷委托'
					},
					{
						id:2,
						text:'自选委托'
					}
				],
				tableTitle:[
					{
						title:"委托单性质",
					},
					{
						title:"委托价格",
					},
					{
						title:"委托数量",
					},
					{
						title:"已成交量",
					},
					{
						title:"操作",
					},
					{
						title:"委托单状态",
					},
				],
				m1:'买',
				m2:'卖',
				zx:'自选',
				kj:'快捷',
				cx:'撤销委托单',
				jd:'接单中',
				zt:'已暂停',
				dzt:'点击暂停接单',
				dkq:'点击开启接单'
			}
		}

	},

	//个人中心
	personal: {
		title: '个人中心',
		yhm: '用户名:',
		tlists: [{
				text: '总成交单数',
				key: ''
			},
			{
				text: '完成率',
				key: ''
			},
			{
				text: '平均付款时间',
				key: ''
			},
			{
				text: '平均放币时间',
				key: ''
			}
		],
		//个人资料
		data:{
			title:'个人资料',
			bj:'点击编辑资料',
			save:'保存修改',
			yh:'用户头像',
			wmz:'我们完全支持您上传喜欢的图片作为个性头像',
			gj:'国家/地区',
			rzdj:'认证等级：',
			xm:'姓名',
			zjh:'证件号',
			qts:'去提升认证等级',
			scz:'上传中...',
			scs:'上传失败'
		},
		//账户设置
		account: {
			title: '账号设置',
			llists: [{
					text: '账户安全',
					to: 'security'
				},
				{
					text: '身份认证',
					to: 'identity'
				},
				{
					text: '收付款账户设置',
					to: 'payment'
				}
			],
			//安全
			security: {
				title: "账户安全",
				bd: '绑定',
				sz: '设置',
				xg: '修改',
				lt: ['低', '中', '高'],
				ccs: [{
						t: '手机验证',
						p: '用于登录、找回密码、修改安全设置时收取验证短信'
					},
					{
						t: '邮箱验证',
						p: '用于登录、找回密码、修改安全设置时收取验证短信'
					},
					{
						t: '登录密码',
						p: '用于保护账户安全'
					},
					{
						t: '交易密码',
						p: '用于保护资产安全'
					}
				],

				bdyx: '绑定邮箱',
				bdtips: '邮箱绑定后，无法更换，请填写真实有效邮箱',
				yx: '邮箱',
				yxcode: '邮箱验证码',

				bdphone: '更换手机号',
				ptips: '更换手机号后，下次登录可使用新手机号登录',
				phone: '新手机号',
				phoneCode: '手机验证码'

			},
			//身份认证
			identity: {
				title: '身份认证',
				qrz: '去认证',
				lv1: 'Lv.1基础认证',
				lv1p: '认证后24小时内提币上限1000 USDT；24小时内交易上限3000 USDT',
				lv2: 'Lv.2视频认证',
				lv2p: '认证后24小时内提币上限100000 USDT；24小时内交易上限300000 USDT',
				dqrz: '当前认证等级：',
				ky: '可用权限',
				kys: [
					'可以买币、卖币、充币、提币',
					'24小时内提币限额{}usdt',
					'24小时内交易限额{}usdt'
				],
				wcgr: '完成个人身份认证可获得更高权限'
			},
			//收付款账户设置
			payment: {
				title: '收付款账户设置',
				ttips: '添加的收付款方式用于交易时向买方展示',
				add: '添加收付款账户',
				ndata:'您还未添加任何收付款账户',
				qadd:'去添加'
			}

		},
		//修改登录密码
		editLPwd:{
			title:'修改登录密码',
			tip:'密码必须至少6个字符，建议同时包含大小写字母和数字',
			ymm:'原密码',
			xmm:'新密码',
			rmm:'新密码确认'
		},
		//修改交易密码
		editJPwd:{
			title:'修改交易密码',
			tip:'交易密码用于卖币、提币、转账，为保证您的资产安全，请妥善保管',
			ymm:'原交易密码',
			xmm:'新交易密码',
			rmm:'新交易密码确认',
			jys:'交易密码为6位阿拉伯数字',
			rts:'为了您的资产安全，您需要通过验证后才能重置交易密码，您当前设置的验证方式为短信验证，我们会将短信验证码发送到{}这个号码，请注意查收。'
			
		},
		//身份认证
		editIdentity:{
			title:'基础认证',
			lv1:'Lv.1基础认证',
			lv2:'Lv.2视频认证',
			tip:'信息仅用于身份验证，yapay保障您的信息安全',
			zjlx:'证件类型:',
			idType:[
				{
					id:0,
					text:'身份证'
				},
				{
					id:1,
					text:'护照'
				}
			],
			gj:'国籍:',
			gjt:'— 请选择国籍 —',
			m:'名:',
			mt:'请输入证件上的名字',
			x:'姓:',
			xt:'请输入证件上的姓氏',
			zjh:'证件号:',
			zjht:'请输入您的证件号码',
			hzxx:'护照信息页:',
			hzts:'请上传您的护照个人信息页并确保上传的证件真实有效，信息仅用于身份验证，</br>YaPay保障您的信息安全只能上传 <i style="color:#0466C8;">JPG/PNG</i>文件，且不超过 20 M',
			sfts:'中国大陆地区请上传身份证正反面，港澳台及海外地区可上传有效的身份证照片；请上传真实有效的身份证件，信息仅用于身份验证，YaPay保障您的信息安全只能上传<i style="color:#0466C8;">JPG/PNG</i>文件，且不超过 20 M',
			tjrz:'提交认证',
			scrz:'上传认证视频',
			dj:'点击或将视频文件拖拽到这里上传',
			zc:'支持视频：.mp4 .WMV .MOV .AVI ...',
			qzlz:'请在录制视频的时候清晰、准确的说出以下四位数字：'
		},
		//收款方式
		paymentMethod:{
			titlet:'添加收付款方式',
			sfk:'收付款方式',
			xm:'真实姓名',
			zfb:'支付宝账号',
			skm:'收款码',
			add:'添加',
			yhkh:'银行账户',
			khh:'银行名称',
			khd:'开户地址',
			eq:'例:花旗银行迪拜银行',
			pay:'PayPal账户',
			wx:"微信账号"
		}

	},
	
	//消息中心
	message:{
		title:'消息中心',
		tabs:[
			{
				id:0,
				text:'公告'
			},
			{
				id:1,
				text:'系统提示'
			},
			{
				id:2,
				text:'动账通知'
			}
		],
		jyxq:'交易详情',
		ljqw:'立即前往',
		yqx:'已取消',
		syqx:'剩余取消次数:{}次',
		ddsy:'订单剩余时间：{}',
		ddxq:'订单详情',
		all:'查看全部'
	},
	
	//资产 assets
		//我的资产 assets
	assets:{
		title:'我的资产',
		zcc:'总资产',
		is:[
			{
				text:'可用额',
				key:''
			},
			{
				text:'流转额',
				key:''
			},
			{
				text:'锁定额',
				key:''
			}
		],
		tableTitle:[
			{
				title: '对方',
				slot: 'df'
			},
			{
				title:'分类',
				id:'fl'
			},
			{
				title:'创建时间',
				id:'time',
				hide: true
			},
			{
				title:'数量(USDT)',
				id:'num'
			},
			{
				title:'',
				slot:'action'
			}
		],
		jq:'近期'
	},
	payment:{
		title:'付款',
		titler:'付款记录',
		zhfk:'账号付款',
		dfzh:'对方账户',
		uid:'UID/手机号/邮箱号',
		tableTitle:[
			{
				title:'对方',
				slot:'df'
			},
			{
				title:'创建时间',
				id:'time',
				hide:true
			},
			{
				title:'付款额(USDT)',
				slot:'usdt',
				flex:2
			},
			{
				title:'状态',
				id:'stu'
			},
			{
				title:'',
				slot:'action'
			}
		],
		payOk:{
			title:'确认付款',
			tips:'当前环境检测安全，请确认信息后付款！',
			lists:[
				{
					name:'对方ID:',
					key:'id'
				},
				{
					name:'付款额:',
					key:'fke'
				},
				{
					name:'平台服务费:',
					key:'fwf'
				}
			]
		},
	},
	//付款结果
	paymentRecords:{
		res:'付款结果',
		succ:'付款成功',
		yh:'用户(UID:{})已收到您的付款',
		lists:[
			{
				name:'当前状态:',
				key:'zt'
			},
			{
				name:'平台服务费:',
				key:'fwf'
			},
			{
				name:'交易汇率:',
				key:'hv'
			},
			{
				name:'法币金额:',
				key:'je'
			},
			{
				name:'对方UID:',
				key:'uid'
			},
			{
				name:'交易单号:',
				key:'dh'
			},
			{
				name:'交易时间:',
				time:''
			}
		],
		back:'返回'
	},
	//账单
	bill:{
		title:'账单',
		tj:'筛选条件:',
		sj:'时间',
		ctj:'清除筛选条件',
		tjs:[
			{
				id:0,
				text:'全部类型'
			},
			{
				id:1,
				text:'买币'
			},
			{
				id:2,
				text:'卖币'
			},
			{
				id:3,
				text:'充币'
			},
			{
				id:4,
				text:'提币'
			},
			{
				id:5,
				text:'付款'
			},
			{
				id:6,
				text:'收款'
			},
			{
				id:7,
				text:'退款'
			},
			{
				id:8,
				text:'分享利润'
			}
		],
		tableTitle:[
			{
				title: '对方',
				slot: 'df'
			},
			{
				title:'分类',
				id:'fl'
			},
			{
				title:'创建时间',
				id:'time',
				hide: true
			},
			{
				title:'数量(USDT)',
				id:'num'
			},
			{
				title:'',
				slot:'action'
			}
		],
	},
	//收款
	collection:{
		title:'收款',
		titlel:'收款记录',
		titler:'我的收款码',
		skxx:'收款信息',
		szske:'设置收款额',
		qc:'清除',
		skse:'收款数额',
		skbz:'收款备注',
		bc:'保存收款码',
		tableTitle:[
			{
				title:'对方',
				slot:'df'
			},
			{
				title:'创建时间',
				id:'time',
				hide:true
			},
			{
				title:'付款额(USDT)',
				slot:'usdt',
				flex:2
			},
			{
				title:'状态',
				id:'stu'
			},
			{
				title:'',
				slot:'action'
			}
		],
		skalert:{
			title:'设置收款额',
			ske:'收款额<i style="color:#888;">(汇率：{})</i>',
			sl:'数量',
			je:'金额',
			skbz:'收款备注',
			note:'10字以内(非必填)'
		}
		
	},
	//充币
	recharge:{
		title:'充币',
		titler:'充币记录',
		lmc:'链名称',
		an:'充币地址：',
		zlt:'注意事项：',
		llists:[
			{
				id:'ERC20',
				xq:' 基于以太坊网络的ERC20-USDT，ERC20-USDT储存在以太坊地址上，每次转账需要支付旷工手续费（速度快、手续费较低，适合中小额高频转账）',
				zls:[
					'需要12个网络确认才能到账,30个网络确认才能提币。任何非USDT-ERC20资产充值到USDT-ERC20地址后不可找回！',
				]
			},
			{
				id:'OMNI',
				xq:'基于比特币网络的Omni-USDT，Omni-USDT存储在比特币地址上，每次转账需要支付矿工手续费(速度较慢、手续费较高，适合大额转账)',
				zls:[
					'需要1个网络确认才能到账,3个网络确认才能提币。任何非USDT-OMNI资产充值到USDT-OMNI地址后不可找回，充值最小额度为1USDT-OMNI！',
				]
			},
			{
				id:'TRC20',
				xq:'基于波场网络的TRC20-USDT。TRC20-USDT储存在波场地址上（秒级到账、0手续费，适合小额高频转账）',
				zls:[
					'1.请勿向上述地址充值任何非TRC20-USDT资产，否则资产将不可找回。',
					'2.您充值至上述地址后，需要整个网络节点的确认，1次网络确认后到账，1次网络确认后可提币。',
					'3.<i style="color:#FF9E08;">最小充值金额：1USDT</i> ，小于最小金额的充值将不会上账且无法退回。',
					'4.您的充值地址不会经常改变，可以重复充值；如有改变，我们会尽量通过网站公告或邮件通知您',
					'5.请务必确认电脑及浏览器安全，防止信息被篡改或泄露。'
				]
			}
			
		],
		tableTitle:[
			{
				title:'时间',
				id:'time',
				hide:true
			},
			{
				title:'数量',
				id:'num'
			},
			{
				title:'充币地址',
				id:'addr'
			},
			{
				title:'充币状态',
				id:'stu'
			}
		]
	},
	//提币
	withdraw:{
		title:'提币',
		titler:'提币记录',
		an:'提币地址:',
		ant:'填写区块链地址',
		tl:'提币数量',
		tlt:'最小提币数量',
		at:'全部提取',
		ky:'可用:',
		xe:'限额',
		ts:'提升额度',
		sxf:'手续费',
		yq:'预期到账:',
		whz:'维护中',
		tableTitle:[
			{
				title:'时间',
				id:'time',
				hide:true
			},
			{
				title:'数量',
				id:'num'
			},
			{
				title:'提币地址',
				id:'addr'
			},
			{
				title:'提币状态',
				id:'stu'
			}
		]
			
	},
	//我的订单
	order:{
		title:'我的订单',
		tabs:[
			{
				id:0,
				text:'所有订单'
			},
			{
				id:1,
				text:'交易中'
			},
			{
				id:2,
				text:'已完成'
			},
			{
				id:3,
				text:"已取消"
			},
			{
				id:4,
				text:'异议中'
			}
		],
		tableTitle:[
			{
				title:"订单性质",
			},
			{
				title:"数量",
			},
			{
				title:"单价",
			},
			{
				title:"总金额",
			},
			{
				title:"订单号",
			},
			{
				title:"订单状态",
			},
		],
		stustas:[
			{
				type:0,
				text:'交易中'
			},
			{
				type:1,
				text:'异议中'
			},
			{
				type:2,
				text:'交易完成'
			},
			{
				type:3,
				text:'超时取消'
			},
			{
				type:4,
				text:'买家取消'
			},
		]
	}
	
}
