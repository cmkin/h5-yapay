import error from './error/en'
import help from './help/en'

export default {
	//错误
	error: error,
	//全局公用字符
	global: {
		logo: require("_a/img/logo.png"),
		qsr: '',
		qxz: 'Choice ',
		jyfl: 'Platform service fee:',
		usdt: require("_a/img/usdt.png"),
		cny: require("_a/img/cny.png"),
		payType: [{
				title: 'Alipay',
				id: 1,
				img: require("_a/img/zfb.png")
			},
			{
				title: 'WeChat',
				id: 2,
				img: require("_a/img/wx.png")
			},
			{
				title: 'Bank',
				id: 3,
				img: require("_a/img/yhk.png")
			},
			{
				title: 'PayPal',
				id: 4,
				img: require("_a/img/PayPal.png")
			},
		],
		hbType: [{
				id: 1,
				text: 'RMB',
				currency: "Chinese Mainland"
			},
			{
				id: 0,
				text: 'Dollar',
				currency: "U.S.A"
			},
			{
				id: 2,
				text: 'Euro',
				currency: "Europe"
			},
			{
				id: 3,
				text: 'Dirham',
				currency: "Dubai"
			},
		],
		//头部底部
		header: {
			name: "YaPay",
			meun: [{
					title: "transaction",
					to: '/sale/quickBuySell'
				},
				{
					title: "quotation",
					to: '/quotation'
				},
				{
					title: "activity",
					to: ''
				},
				{
					title: "FAQ",
					to: '/help?id=0&childId=0'
				}
			],
			xx: "message",
			down: "download",
			sd: "Scan code",
			mr: "More clients",
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
			login: "sign",
			reg: "register",
			loginOk: {
				title: 'asset',
				list: [{
						text: 'security',
						to: '/personal/account/security'
					},
					{
						text: 'identity',
						to: '/personal/account/identity'
					},
					{
						text: 'collection & payment',
						to: '/personal/account/payment'
					},
					{
						text: 'invitation',
						to: '/invitation'
					},
					{
						text: 'logout',
						event: 'logout'
					}
				]
			},
			loginZc: {
				list: [{
						text: 'order',
						to: '/entrust'
					},
					{
						text: 'assets',
						to: '/assets/assets',
					},
					{
						text: 'payment',
						to: '/assets/payment'
					},
					{
						text: 'collection',
						to: '/assets/collection'
					},
					{
						text: 'recharge',
						to: '/assets/recharge'
					},
					{
						text: 'withdraw',
						to: '/assets/withdraw'
					},
					{
						text: 'gift',
						to: '/assets/gift'
					},
					{
						text: 'bill',
						to: '/assets/bill'
					}
				]
			},
			logout: 'Are you sure you want to log out?',
			ydjy: 'Mobile transaction, anytime, anywhere',
			xz: "download"
		},
		fonter: {
			name: "YaPay",
			c: '© YaPay.com 2020',
			imgs: [
				require("_a/img/f1.png"),
				require("_a/img/f2.png"),
				require("_a/img/f3.png"),
				require("_a/img/f4.png")
			],
			lists: [{
					title: 'contact us',
					items: [{
							title: '+44 345 678 903',
							to: false
						},
						{
							title: 'yapay@mail.com',
							to: false
						},
						{
							title: 'Company address: </br> Creative Tower, Fujairah, UAE',
							url: 'http://yaotc.com/index.html#/app/introduction'
						}
					]
				},
				{
					title: 'Terms & Services',
					items: [{
							title: 'About us',
							url: 'http://yaotc.com/index.html#/app/introduction'
						},
						{
							title: 'Contact customer service',
							url: 'https://tawk.to/yaotc.com'
						},
						{
							title: 'Terms of service',
							to: '/help?id=1&childId=100'
						},
						{
							title: 'Privacy policy',
							to: '/help?id=1&childId=101'
						},
						{
							title: 'FAQ',
							to: '/help?id=0&childId=0'
						},
						{
							title: 'Guidelines for enforcement requests',
							to: '/help?id=3&childId=1000'
						}
					]
				},
				{
					title: 'cooperative partner',
					items: [{
							title: 'OKEX',
							url: 'https://www.okex.me/'
						},
						{
							title: 'huobi',
							url: 'https://www.huobi.me/'
						},
						{
							title: 'binancezh',
							url: 'https://www.binancezh.com/'
						},
						{
							title: 'OTCBTC',
							url: 'https://otcbtc.io/'
						},
					]
				}
			]
		},
		//弹窗，按钮

		base: {
			ok: "confirm",
			tj: 'submit',
			reset: "reset",
			cancel: "cancel",
			zw: "not yet",
			xt: "optional",
			jsf: 'receiver',
			sys: 'Open yapay「scan」',
			gaq: 'Secure blockchain Wallet',
			bccg: "Saved successfully",
			xgcg: "Modified successfully",
			sccg: "Successfully deleted",
			tjcg: "Submitted successfully",
			tbcg: "Withdraw money successfully",
			fbcg: "Successfully published",
			dhcg: "Successful exchange",
			loading: "loading...",
			bl: "Please keep one selection",
			wz: 'Please fill in {} and submit',
			gm: 'purchase',
			usdt: "USDT",
			zh: "account",
			yhzh: "bank number",
			yhmc: "bank name",
			khh: "bank of deposit",
			copyOk: 'copy succeeded',
			copyFail: "copy failed",
			qsrnr: 'input the content',
			send: "send",
			cs: "sell",
			jymm: "transaction code",
			hs: "there is {} left",
			wjmm: "forget the password",
			sellj: "seller",
			buyj: "buyers",
			d: "single",
			sl: "number",
			xe: "quota",
			dj: "price",
			zje: "total",
			ddh: "order number",
			fbsx: "limitation of release",
			rzdj: "certification level",
			cdv: "order / order rate",
			csqx: "{} cancel after timeout",
			cb: "charge",
			tb: 'withdraw',
			more: "more>>",
			sk: 'collection',
			fk: 'payment',
			next: 'next',
			ckxq: 'details',
			jylv: 'exchange rate',
			fbje: 'money',
			djxz: 'select',
			year: "Y",
			month: 'M',
			day: 'D',
			hou: 'H',
			min: 'm',
			sec: 's',
			copy: 'copy',
			zusj: 'no data',
			yzm: 'verification',
			sendCode: 'send verification',
			reSend: 'resend',
			scs: '{} try again later',
			wxts: 'reminder',
			networkError: 'Network error, please refresh and try again!',
			sendOk: "Sent successfully",
			regOk: "Register successfully, jump to login after 3S",
			resetOk: "Reset successfully, jump to login after 3S",
			qxdl: 'Please log in first',
			qxdlmsg: 'Do you want to log in and do this?',
			dbxew: "The single limit is:",
			nopp: "There is no matching shortcut order, please go to the optional area",
			kyye: "Your maximum available balance is:",
			add: 'add',
			qxcg: "You have successfully cancelled the order",
			gddyqx: "The current order has been cancelled",
			zmyd: "order again",
			ddmjfs: "Waiting for the seller to release the money",
			ycrzh: "USDT has been deposited into your accoun",
			ykczh: "USDT has been deducted from your account",
			ckzc: "view assets",
			yyz: "The current order is in dispute, please contact customer service.",
			lxkf: "Contact",
			szzf: 'Set payment password',
			srzf: 'Enter payment password',
			zfts: "You haven't set the payment password yet. Do you want to set the payment password?",
			srzf: "Please enter the payment password",
			srzfr: "Please enter the payment password again",
			lcbyz: "The two passwords are inconsistent",
			szcc: "Set successfully",
			xyyz: "This login requires verification code, which has been sent to {}, please check",
			allpay: 'You have added all the payment methods',
			jyts: "Transaction agreement",
			jytsl: [
				'<p style="color:#333;">For the safety of your transaction and assets, please confirm that you have understood the following risks:</p></br>',
				'<div style="color:#888; text-align: left;">1.It is known that once the transaction is completed, the assets will be automatically released to your wallet. The investment loss caused by any subsequent operation has nothing to do with yapay platform, and yapay will not bear any responsibility.</br></br>',
				'2.Promise not to take part in illegal and criminal activities such as fund sale / pyramid selling, money laundering, gambling, etc.</br></br>',
				'3.Promise not to buy and withdraw money for others, assist others to commit a crime, etc.</br></br>',
				'4.We know that the platform will conduct a strict risk control review on the trading behavior, promise that the trading account is your own account, and will terminate the transaction once the risk is found, and take the initiative to submit it to the judicial authorities in your region for investigation.</br></div>'
			]

		}
	},

	//登录-注册等
	login: {
		zht: "Account password login",
		dxt: 'SMS verification code login',
		zh: 'account',
		zhp: 'mobile / email',
		mm: "password",
		dl: 'sign',
		lj: 'register now',
		nzh: 'No account',
		yzh: 'Existing account number',
		sjhm: 'phone number',
		sht: 'Mobile number registration',
		yxt: 'Email registration',
		yx: 'email',
		ljd: 'sign',
		zcjty: 'Consent upon registration',
		shxy: 'Yapay user service agreement',
		he: "&",
		ysxy: 'Yapay privacy policy',
		mts: 'It consists of 6-20 digits or letters',

		wjts: 'For account security, the password can be reset only after verification',
		fhdl: 'Back to login',
		yzmfs: 'Verification code sent to',
		szmm: 'Please set the password',
		reszmm: 'Please enter the password again',
		yqm: "Invitation"
	},
	logout: {
		dlsx: "Login has expired. Please login again",
		qtsb: "Your account is logging in on another device"
	},
	//首页
	index: {
		bg: require('_a/img/indexbg.png'),
		kj: 'Recharge',
		aq: 'Fast, safe and convenient digital currency payment platform</br>Know how to pay, know you better！',
		gm: 'purchase',
		a: '',
		sl: "Number",
		je: 'Money',
		lj: 'Buy now',
		ydjy: "Mobile transaction, anytime, anywhere",
		xz: "download",
		tabs: [{
				img: require("@/assets/img/index2.png"),
				text: 'payment',
				to: '/assets/payment'
			},
			{
				img: require("@/assets/img/index3.png"),
				text: 'collection',
				to: '/assets/collection'
			},
			{
				img: require("@/assets/img/index4.png"),
				text: 'withdrawal',
				to: '/sale/quickBuySell?page=1'
			},
		],

		lpk: 'Gift card exchange',
		kzhy: 'Best gift for friends',
		nkyj: 'You can package your own usdt to generate an exchange code and send it to your friends or enter the exchange code to get the usdt from others',
		ljty: 'Experience now',

		lc: 'Low threshold&nbsp;&nbsp;high efficiency&nbsp;&nbsp;Easier to pay!',
		zg: 'The whole payment process only requires 5-8S',
		lcTabs: [{
				img: require("@/assets/img/payshop.png"),
				text: 'Merchants in keypay</br>Open merchant service'
			},
			{
				img: require("@/assets/img/pay.png"),
				text: 'Consumers recharge or pay at the merchant</br>Choose digital currency for payment'
			},
			{
				img: require("@/assets/img/paycode.png"),
				text: 'Pull up keypay to pay or open</br>Keypay client scan payment'
			},
			{
				img: require("@/assets/img/payok.png"),
				text: 'Consumer completes payment</br>Successful trade'
			}
		],

		dgl: 'More functions to master',
		szzf: 'Download yapay client to experience more functions',
		yhk: 'You can manage digital assets anytime and anywhere through keypay wallet. What’s more, you can pay merchants who support digital currency through our wallet and consume in the real world. Digital currency is no longer just digital currency',



		hq: 'Mainstream market',

		tableTitle: [{
				title: 'currency',
				id: 'coinPair',
			},
			{
				title: 'price',
				id: 'last'

			},
			{
				title: '24H Up & down',
				id: 'percent',
			},
			{
				title: '24H turnover',
				id: 'totalQtyIn24'
			}
		],
	},

	//买卖 - 路由修改为sale
	quickSale: {
		meun: [{
				title: "Quick sale",
				to: "quickBuySell"
			},
			{
				title: "C2C transaction",
				to: "c2c"
			}
		],
		dd: 'order',
		//快捷买卖
		quickBuySell: {
			//买
			buy: {
				wym: "buy",
				mrsl: 'Purchase quantity',
				mrje: 'Purchase amount',
				fkfs: 'payment method',
				ckdj: 'price',
				ljgm: 'Buy now',
				sxf: 'Platform service fee',
				km: 'Available quantity'
			},
			//卖
			sell: {
				wym: "sell",
				mrsl: 'Sales volume',
				mrje: 'Selling amount',
				fkfs: 'payment method ',
				ckdj: 'Reference unit price',
				ljgm: 'Immediate sale',
				sxf: 'Platform service fee',
				ky: 'Available assets',
				zd: 'maximum'
			},
			//弹窗
			okBuy: {
				title: "Confirm purchase",
				list: [{
						name: 'payment method',
						key: 'payType'
					},
					{
						name: 'Unit Price',
						key: 'price'
					},
					{
						name: 'Purchase quantity',
						key: 'nums'
					},
					{
						name: 'Amount actually paid',
						key: 'allPrice'
					},
				]
			},
			okSell: {
				title: "Confirmation of sale",
				list: [{
						name: "payment method ",
						key: "payType"
					},
					{
						name: "Unit selling price",
						key: "price"
					},
					{
						name: "Quantity sold",
						key: "nums"
					},
					{
						name: "Available amount",
						key: 'allPrice'
					}
				]
			}
		},
		//快捷-待付款
		payment: {
			zf: 'Payment method',
			sk: "Name of payee",
			codePay: 'For QR code payment, please click Save Picture',
			mtips: {
				t: 'Seller tips',
				c: 'Remember not to remark any figures and sensitive words, non real name payment will not put money. No need, please cancel the order in time, and communicate with us about transaction questions or account restrictions in time.'
			},
			ddxq: {
				t: "Order details",
				lists: [{
						name: "Seller's nickname",
						key: 'nickname'
					},
					{
						name: 'Transaction unit price',
						key: 'price',
						dw: 'dw'
					},
					{
						name: 'Number of transactions',
						key: 'coin',
						usdt: "USDT"
					},
					{
						name: 'Order number',
						key: 'orderid',
						copy: true
					}
				]
			},

			ptips: 'The platform will not automatically deduct money. If you have transferred money to the seller offline, please click the "I have paid, please put money" button below, otherwise it may cause your capital loss.',
			qzfk: 'Please pay the seller within {}',
			fbmf: 'Please put the money to the buyer in {}',
			mjjz: 'The seller will put money in {}',
			lxmj: 'Contact the seller',
			wsdb: "Currency not received",
			fbts: 'The seller will confirm the collection and release the money within {} minutes. If the seller does not release the money after {} minutes, please click the "not received money" button below to contact the customer service',
			fkts: 'Please go to the bank client, Alipay account, WeChat wallet, check that the money has been paid to the currency, and the account short message can not be used as the proof of payment.',
			qxdd: "cancellation of order",
			wyfk: 'I have paid. Please put in the money',
			dtips: [
				'If you receive the non real name remittance, or the buyer’s transfer remarks contain yapay, BTC, ETH, usdt and other digital asset names, please contact customer service to return the money in the original way.',
				'Non working hours (17:00-8:00 on holidays and weekdays), if you receive more than 5W inter-bank remittance and cannot confirm the collection, please contact customer service immediately.',
				'After the order status changes to the buyer has paid, please go to the collection account to verify whether the money has been received and release the money as soon as possible'
			],
			cancel: {
				title: "cancellation of order",
				tips: [
					'You are in the process of transaction. If you have paid the seller, please do not cancel the order.',
					'At present, it is the {} th time to cancel the order. If you cancel the order more than 3 times a day, you will be punished for 24 hours and can’t trade!'
				],
				no: 'Confirm that no payment has been made to the other party',
				fh: 'Return transaction',
				ok: 'Confirm cancellation'
			},
			payOk: {
				title: "confirm the payment",
				tip: 'If you confirm the payment to the other party through the following methods, you can click confirm.',
				fs: "payment method",
				je: "Payment amount"
			}
		},
		//快捷-待收款
		collection: {
			ddxq: {
				t: 'Order information',
				lists: [{
						name: "Order amount",
						key: "value"
					},
					{
						name: "Transaction unit price",
						key: "price"
					},
					{
						name: "Number of transactions",
						key: "coin"
					},
					{
						name: "Order time",
						key: "createtime"
					},
					{
						name: "Payment name",
						key: "name"
					},
					{
						name: "Order number",
						key: "orderid",
						copy: true
					}
				]
			},

			tips: {
				t: "Buyer tips",
				c: 'After placing the order, please pay the money promptly.'
			},
			cs: '{}Automatically cancel after timeout',
			wsdk: "No payment received",
			qrsk: "Confirm receipt",
			zfxx: {
				t: 'Payment information',
				lists: [{
						name: 'Buyer’s nickname',
						key: 'nickname'
					},
					{
						name: 'payment method',
						key: 'paytype'
					},
					{
						name: 'Name of payee',
						key: 'name'
					},
					{
						name: 'Payment time',
						key: 'sendtime'
					}
				]
			},
			zfTips: 'Please go to the bank client, Alipay account, WeChat wallet, and check the money after the account has arrived. Then the money will not be used as the proof of payment.',

			payOkCoin: {
				title: "Confirm release of currency",
				tips: 'If you confirm that you have received the remittance from the other party in the following ways, you can release the money.',
				skfs: 'payment method',
				skje: 'Amount Collected',
			}
		},

		//c2c交易
		c2c: {
			typeTitle: ['buy', 'sell'],
			zx: "Minimum",
			qbzf: "Full payment",
			zffs: "Payment method",
			fbwt: 'Issue order',
			table: {
				zbmz: "The restriction of {} is not satisfied",
				buyTitle: [{
						title: 'Seller (order volume / turnover rate)',
						id: 'name'
					},
					{
						title: 'number',
						id: 'num'
					},
					{
						title: "quota",
						id: "xe"
					},
					{
						title: "Unit Price",
						id: "price"
					},
					{
						title: "Payment method",
						id: 'paytype'
					},
					{
						title: "transaction",
						id: "jy"
					}
				],
				sellTitle: [{
						title: 'Buyer (order volume / turnover rate)',
						id: 'name'
					},
					{
						title: 'number',
						id: 'num'
					},
					{
						title: "quota",
						id: "xe"
					},
					{
						title: "Unit Price",
						id: "price"
					},
					{
						title: "Payment method",
						id: 'paytype'
					},
					{
						title: "transaction",
						id: "jy"
					}
				],
			},
			buy: {
				ts: "Transaction description",
				tst: 'Turn around and add Alipay friends.</br>A 10% service charge will be charged for refund of false name transfer。'
			},
			orderForm: {
				dqpk: "Current opening price:",
				wtlxt: 'Delegation type',
				wtlx: [{
					title: 'Quick order',
					id: 1
				}, {
					title: 'Optional order',
					id: 2
				}],
				verifylevel: [{
						id: 0,
						title: "Lv.0 Not certified"
					},
					{
						id: 1,
						title: "Lv.1 Basic certification"
					},
					{
						id: 2,
						title: "Lv.2 Video authentication"
					}
				],
				overtimetype: [{
						id: 10,
						title: "Payment within 10 minutes"
					},
					{
						id: 15,
						title: "Pay in 15 minutes"
					},
					{
						id: 20,
						title: "Payment within 20 minutes"
					},
				],
				//购买
				jyjg: 'Transaction price',
				jyjgg: 'Fixed price',
				jyjgp: 'Platform pricing',
				srjy: 'Please enter the transaction price',
				gmsl: 'Purchase quantity',
				gmje: 'Purchase amount',
				zdmr: 'Minimum purchase',
				sjfw: 'Duration',
				ks: 'start time',
				js: 'End time',
				fz: 'minute',
				fkfs: 'payment method',
				jysm: 'Transaction description (optional)',
				jysmp: 'Transaction description within 50 words',
				dsxz: 'Opponent restriction (optional)',
				rzdj: 'Certification level',
				zcsj: 'Registration time',
				//出售
				cssl: 'Quantity sold',
				csje: 'Sale amount',
				zdcs: 'Minimum sale',
				skfs: 'payment method',
				fksj: 'Payment time',

				//确认发布-弹窗
				okwt: {
					buy: {
						title: 'Confirm purchase',
						list: [{
								name: 'payment method',
								key: 'payType'
							},
							{
								name: 'Unit purchase price',
								key: 'price'
							},
							{
								name: 'Purchase quantity',
								key: 'num'
							},
							{
								name: 'Duration',
								key: 'duration'
							},

							{
								name: 'Minimum purchase',
								key: 'leastcoin'
							},
							{
								name: 'Opponent restrictions',
								key: 'limt'
							},




						]
					},
					sell: {
						title: 'Confirmation of sale',

						list: [{
								name: 'payment method',
								key: 'payType'
							},
							{
								name: 'Unit selling price',
								key: 'price'
							},
							{
								name: 'Quantity sold',
								key: 'num'
							},
							{
								name: 'Duration',
								key: 'duration'
							},

							{
								name: 'Minimum purchase',
								key: 'leastcoin'
							},
							{
								name: 'Opponent restrictions',
								key: 'limt'
							},




						],
						lowts: 'Current price and index price<i style="color:red;">({})</i>Deviation is too large, continue to publish？'
					}
				}
			},
			//我的订单
			entrust: {
				title: 'Entrustment form',
				tabs: [
					/* {
						id:0,
						text:'全部'
					}, */
					{
						id: 1,
						text: 'Quick Commission'
					},
					{
						id: 2,
						text: 'Optional Commission'
					}
				],
				tableTitle: [{
						title: "Nature of order",
					},
					{
						title: "Commission price",
					},
					{
						title: "Entrusted quantity",
					},
					{
						title: "Turnover",
					},
					{
						title: "Operation",
					},
					{
						title: "Delegation status",
					},
				],
				m1: 'buy',
				m2: 'sell',
				zx: 'Optional',
				kj: 'Quick',
				cx: 'Cancel order',
				jd: 'Receiving order',
				zt: 'Suspended',
				dzt: 'Suspend order receiving',
				dkq: 'Open order receiving',
				recx: "Are you sure you want to cancel the order?",
				cxok: "Successfully cancelled"
			}
		}

	},

	//个人中心
	personal: {
		title: 'Personal Center',
		yhm: 'userName:',
		tlists: [{
				text: 'Total orders',
				key: 'totalOrderCount'
			},
			{
				text: 'Completion rate',
				key: 'successRate'
			},
			{
				text: 'Average payment time',
				key: 'paytime'
			},
			{
				text: 'Average release time',
				key: 'passtime'
			}
		],
		//个人资料
		data: {
			title: 'personal data',
			bj: 'Edit the information',
			save: 'Save',
			yh: 'User profile',
			wmz: 'Support you to upload your favorite picture as your portrait',
			gj: 'Country / Region',
			rzdj: 'Certification level：',
			rzLists: [
				'LV.0 Not certified',
				'LV.1 Basic certification',
				'LV.2 Video authentication'
			],
			xm: 'Name',
			zjh: 'Certificate number',
			qts: 'To upgrade',
			ywc: 'Highest',
			scz: 'Uploading...',
			scs: 'Upload failed',
			dq: [{
					id: 1,
					text: "Chinese Mainland"
				},
				{
					id: 0,

				}
			],
			serve: 'YaPay Service provider',
			zswd: "Five exclusive privileges",
			tqlist: ['Exclusive low transaction fees', 'Exclusive 1v1 key customer service', 'Exclusive credit line',
				'Exclusive new product internal test priority', 'Exclusive birthday gift'
			],
			sqtj: "Application conditions",
			tjtip: 'Have a certain market experience, account assets to achieve <i style="color:#0046c8;">{}</i> USDT,And has passed advanced real name authentication',
			sqwf: "Application service provider",
			nysw: "Service provider"
		},
		//账户设置
		account: {
			title: 'Account Settings',
			llists: [{
					text: 'security',
					to: 'security'
				},
				{
					text: 'identity',
					to: 'identity'
				},
				{
					text: 'collection & payment',
					to: 'payment'
				}
			],
			//安全
			security: {
				title: "security",
				bd: 'binding',
				sz: 'setting',
				xg: 'modify',
				lt: ['low', 'middle', 'high'],
				ccs: [{
						t: 'Mobile verification',
						p: 'Used to log in, retrieve passwords, and modify security settings'
					},
					{
						t: 'Email verification',
						p: 'Used to log in, retrieve passwords, and modify security settings'
					},
					{
						t: 'Login password',
						p: 'Used to protect account security'
					},
					{
						t: 'Transaction code',
						p: 'Used to protect assets'
					}
				],

				bdyx: 'Bind mailbox',
				bdtips: 'The mailbox cannot be replaced after binding. Please fill in the real and valid mailbox',
				yx: 'mailbox',
				yxcode: 'Email verification code',

				bdphone: 'Edit mobile number',
				ptips: 'After editing the mobile number, the next login can use the new mobile number to login',
				phone: 'cell-phone number',
				phoneCode: 'Mobile phone verification code'

			},
			//身份认证
			identity: {
				title: 'identity authentication',
				qrz: 'authentication',
				shz: 'Under review',
				lv1: 'Lv.1 Basic certification',
				lv1p: 'The upper limit of withdrawal within 24 hours after certification is 3000 usdt; the upper limit of transaction within 24 hours is 3000 usdt',
				lv2: 'Lv.2 Video authentication',
				lv2p: 'The upper limit of withdrawal within 24 hours after certification is 100000 usdt; the upper limit of transaction within 24 hours is 300000 usdt',
				dqrz: 'Current certification level：',
				ky: 'Available permissions',
				kys: [
					'Available withdrawal amount on the same day {} usdt',
					'Available trading limit of the day {} usdt'
				],
				kys0: [
					'The amount of withdrawal available on that day is 0usdt',
					'Cumulative available trading limit {} usdt'
				],
				wcgr: 'Complete personal identity authentication to obtain higher authority'
			},
			//收付款账户设置
			payment: {
				title: 'Collection and payment account settings',
				ttips: 'The added collection and payment method is used to show the buyer at the time of transaction',
				add: 'Add collection and payment account',
				ndata: 'You have not added any collection and payment accounts',
				qadd: 'add'
			},


		},
		//邀请好友
		invitation: {
			title: "Invite friends to share profits",
			t2: 'When you successfully invite new users to register for yapay wallet through this activity page, you can get the corresponding profit sharing after each transaction or consumption operation:',
			lj: 'Accumulated profit',
			zf: 'Pay profits',
			jy: 'Trading profit',
			yyq: 'Invited: {} people',
			fz: "Copy link",
			lj: 'Invite friends to experience now!',
			hd: 'Activity rules',
			qy1: 'Equity I',
			qy2: 'Equity II',
			yqrf: 'The invitees can obtain the profits of the "legal currency transaction" turnover of the invitees',
			yqrs: 'Number of people invited',
			yj: 'Primary profit (turnover)',
			ej: 'Secondary profit (turnover)',
			jrys: "More than {} people",
			yqfz: 'The inviting party can obtain the profit of the invited party’s consumption turnover (payment)',
			il: ['The profit of the invitees is not set up online, more invitees get more;',
				'Commission settlement time: 24:00 a.m. Dubai time;',
				'Yapay team reserves the right of final explanation of this activity;'
			]
		},
		//修改登录密码
		editLPwd: {
			title: 'Change login password',
			tip: 'The password must be at least 6 characters. It is recommended to include both upper and lower case letters and numbers',
			ymm: 'Original password',
			xmm: 'New password',
			rmm: 'New password confirmation',
			rn: "The two passwords are inconsistent",
			rn2: "The new password cannot match the old password"
		},
		//修改交易密码
		editJPwd: {
			title: 'Change transaction password',
			tip: 'The transaction password is used for selling, withdrawing and transferring money. Please keep it properly to ensure the safety of your assets',
			ymm: 'Original transaction code',
			xmm: 'New transaction code',
			rmm: 'New transaction password confirmation',
			jys: 'The transaction password is 6 Arabic numerals',
			rts: 'For the security of your assets, you need to pass the verification before you can reset the transaction password. Your current verification method is SMS verification. We will send the SMS verification code to {} this number. Please check it.',
			rtsx: 'For the security of your assets, you need to pass the verification before you can reset the transaction password. Your current verification method is mailbox verification. We will send the mailbox verification code to {} this mailbox. Please check it.'

		},
		//身份认证
		editIdentity: {
			"title": "Basic certification",
			"lv1": "Lv.1 basic certification",
			"lv2": "Lv.2 video authentication",
			"tip": "Information is only used for authentication, yapay ensures your information security",
			"zjlx": "Certificate type:",
			"idType": [{
				"id": 0,
				"text": "ID"
			}, {
				"id": 1,
				"text": "passport"
			}],
			"gj": "Nationality:",
			"gjt": "- please choose your nationality -",
			"m": "Name:",
			"mt": "Please enter the name on the certificate",
			"x": "Last name:",
			"xt": "Please enter the last name on the certificate",
			"zjh": "Certificate No",
			"zjht": "Please enter your ID number",
			"hzxx": "Passport information page:",
			"sfxx": "Front and back of ID card:",
			"hzts": "Please upload the personal information page of your passport and ensure that the uploaded document is true and valid. The information is only used for identity verification,</br>Yapay ensures the security of your information and can only upload it <i style='color:#0466C8;'>JPG/PNG</i>file，And not more than 20 m",
			"sfts": "Please upload your ID card in mainland China, and you can upload valid ID card photos in Hong Kong, Macao, Taiwan and overseas. Please upload a valid and valid identity card, which is used for authentication only. YaPay can only upload your information security.<i style=\"color:#0466C8;\">JPG/PNG</i>file，And not more than 20 m",
			"tjrz": "Submit for certification",
			"scrz": "Upload authentication video",
			"dj": "Click or drag the video file here to upload",
			"zc": "Support video,. MP4. WMV. Mov. Avi",
			"qzlz": "Please say the following four digits clearly and accurately when recording the video:"
		},
		//收款方式
		paymentMethod: {
			"titlet": "Add payment method",
			"sfk": "Payment method",
			"xm": "Real name",
			"zfb": "Alipay account",
			"skm": "Collection code",
			"add": "add to",
			"edit": "modify",
			"remove": "delete",
			"yhkh": "bank account",
			"khh": "Bank name",
			"khd": "Account opening address",
			"eq": "Example: Citibank, Dubai bank",
			"pay": "PayPal account",
			"wx": "Wechat account",
			"okdel": "Are you sure you want to delete this payment method?"
		}

	},

	//消息中心
	message: {
		"title": "Message center",
		"tabs": [{
			"id": 0,
			"text": "Notice"
		}, {
			"id": 1,
			"text": "System"
		}, {
			"id": 2,
			"text": "Account"
		}],
		"jyxq": "transaction details ",
		"ljqw": "Go immediately",
		"yqx": "Cancelled",
		"syqx": "Remaining cancellations: {} times",
		"ddsy": "Order remaining time: {}",
		"ddxq": "Order details",
		"all": "View all",
		"newOrder": "You have received a new order, do you want to process it now? </br> {} after the timeout, it will be cancelled automatically",
		"tips": {
			"protocol": [{
				"id": 0,
				"text": ["You have matched a new order", "You have matched a new order"]
			}, {
				"id": 1,
				"text": ["You have paid, waiting for the seller to release the money",
					"The buyer has paid, please release the money in time"
				]
			}, {
				"id": 2,
				"text": ["You have an order completed", "Order complete"]
			}, {
				"id": 3,
				"text": ["You have an order that becomes an objection order", "Abnormal order"]
			}, {
				"id": 4,
				"text": ["You have cancelled the order", "The buyer has cancelled the order"]
			}, {
				"id": 5,
				"text": ["Order has been cancelled over time", "Order has been cancelled over time"]
			}],
			"type": [{
				"id": 0,
				"text": "Notification of certification results"
			}, {
				"id": 1,
				"text": "Account risk tips"
			}, {
				"id": 2,
				"text": "Risk warning for account cancellation"
			}, {
				"id": 3,
				"text": "Account freezing tips"
			}, {
				"id": 4,
				"text": "Tips for account unfreezing"
			}, {
				"id": 5,
				"text": "System audit tips"
			}, {
				"id": 9,
				"text": "Service provider application result notice"
			}]
		},
		"notice": [{
			"id": 0,
			"text": "Notice of receipt of purchase currency"
		}, {
			"id": 1,
			"text": "Notice of deduction for selling currency"
		}, {
			"id": 2,
			"text": "Notice of receipt"
		}, {
			"id": 3,
			"text": "Transfer deduction notice"
		}, {
			"id": 4,
			"text": "Notice of payment in cash"
		}, {
			"id": 5,
			"text": "Notice of withdrawal and deduction"
		}, {
			"id": 6,
			"text": "System recharge"
		}, {
			"id": 7,
			"text": "System deduction"
		}, {
			"id": 8,
			"text": "Notice of return to account by arbitration"
		}, {
			"id": 9,
			"text": "Notice of receipt of income"
		}, {
			"id": 13,
			"text": "Gift card deduction"
		}, {
			"id": 14,
			"text": "Gift card increase"
		}, {
			"id": 15,
			"text": "Gift card overdue return"
		}]
	},

	//资产 assets
	//我的资产 assets
	assets: {
		"title": "My assets",
		"zcc": "total assets",
		"is": [{
			"text": "Available amount",
			"key": "coin"
		}, {
			"text": "Turnover",
			"key": "turnovercoin"
		}, {
			"text": "Locked amount",
			"key": "freezecoin"
		}],
		"tableTitle": [{
			"title": "other party",
			"slot": "df"
		}, {
			"title": "classification",
			"id": "type"
		}, {
			"title": "Creation time",
			"id": "datetime",
			"hide": "true"
		}, {
			"title": "Quantity (usdt)",
			"id": "tradecoin"
		}],
		"jq": "the near future"
	},
	payment: {
		"title": "payment",
		"titler": "Payment records",
		"zhfk": "Account payment",
		"dfzh": "Opposite account",
		"uid": "Uid / mobile / email",
		"fke": "Payment amount",
		"hv": "exchange rate",
		"tip": "The currency will be transferred into the other party's account in real time, no refund, please operate carefully!",
		"tableTitle": [{
			"title": "other party",
			"slot": "df"
		}, {
			"title": "Creation time",
			"id": "time",
			"hide": "true"
		}, {
			"title": "Payment amount (usdt)",
			"slot": "usdt",
			"flex": 2
		}, {
			"title": "state",
			"slot": "status"
		}, {
			"title": "",
			"slot": "action"
		}],
		"payOk": {
			"title": "confirm the payment",
			"tips": "The current environment detection is safe, please confirm the information before payment!",
			"lists": [{
				"name": "Opposite party ID:",
				"key": "uid"
			}, {
				"name": "Payment amount:",
				"key": "fke"
			}, {
				"name": "Platform service fee:",
				"key": "fwf"
			}]
		},
		"zzcg": "Transfer successful",
		"jywc": "Transaction completed"
	},
	//付款结果
	paymentRecords: {
		"res": "Payment results",
		"res2": "Collection result",
		"succ": "Payment successful",
		"succ2": "Successful collection",
		"yh": "User (uid: {}) has received your payment",
		"yh2": "You have received payment from user (uid: {})",
		"lists": [{
			"name": "Current status:",
			"key": "zt"
		}, {
			"name": "Platform service fee:",
			"key": "fwf"
		}, {
			"name": "Exchange rate:",
			"key": "hv"
		}, {
			"name": "Amount of legal currency:",
			"key": "value"
		}, {
			"name": "Opposite party uid:",
			"key": "id"
		}, {
			"name": "Transaction number:",
			"key": "orderId"
		}, {
			"name": "Transaction time:",
			"key": "time"
		}],
		"back": "return"
	},
	//账单
	bill: {
		"title": "bill",
		"tj": "Screening conditions:",
		"sj": "time",
		"ctj": "Clear filter",
		"tjs": [{
			"id": 8,
			"text": "All types"
		}, {
			"id": 0,
			"text": "Buy money"
		}, {
			"id": 1,
			"text": "Selling money"
		}, {
			"id": 5,
			"text": "Charge money"
		}, {
			"id": 4,
			"text": "Withdraw money"
		}, {
			"id": 3,
			"text": "payment"
		}, {
			"id": 2,
			"text": "Collection"
		}, {
			"id": 6,
			"text": "refund"
		}, {
			"id": 7,
			"text": "Share profits"
		}, {
			"id": 13,
			"text": "Gift card deduction"
		}, {
			"id": 14,
			"text": "Gift card increase"
		}, {
			"id": 15,
			"text": "Gift card overdue return"
		}],
		"tableTitle": [{
			"title": "other party",
			"slot": "df"
		}, {
			"title": "classification",
			"slot": "type"
		}, {
			"title": "Creation time",
			"id": "datetime",
			"hide": "true"
		}, {
			"title": "Quantity (usdt)",
			"id": "tradecoin"
		}]
	},
	//收款
	collection: {
		"title": "Collection",
		"titlel": "Collection record",
		"titler": "My collection code",
		"skxx": "Collection information",
		"szske": "Set collection amount",
		"qc": "eliminate",
		"skse": "Amount of collection",
		"skbz": "Collection notes",
		"bc": "Save collection code",
		"tableTitle": [{
			"title": "other party",
			"slot": "df"
		}, {
			"title": "Creation time",
			"id": "time",
			"hide": "true"
		}, {
			"title": "Amount received (usdt)",
			"slot": "usdt",
			"flex": 2
		}, {
			"title": "state",
			"slot": "status"
		}, {
			"title": "",
			"slot": "action"
		}],
		"skalert": {
			"title": "Set collection amount",
			"ske": "Amount received<i style='color:#888;'>(exchange rate：{})</i>",
			"sl": "number",
			"je": "amount of money",
			"skbz": "Collection notes",
			"note": "Less than 10 words (not required)"
		}
	},
	//充币
	recharge: {
		"title": "Charge money",
		"titler": "Charging record",
		"lmc": "Chain name",
		"an": "Charging address:",
		"zlt": "matters needing attention:",
		"llists": [{
			"id": "ERC20",
			"xq": "Erc20-usdt based on Ethereum network, which is stored in Ethereum address, needs to pay absenteeism service charge for each transfer (fast, low service charge, suitable for small and medium-sized high-frequency transfer)",
			"zls": [
				"It takes 12 network confirmations to arrive at the account, and 30 network confirmations to withdraw the currency. Any non usdt-erc20 assets cannot be retrieved after recharging to the usdt-erc20 address!"
			]
		}, {
			"id": "OMNI",
			"xq": "Omni usdt based on bitcoin network, omni usdt is stored in bitcoin address, and each transfer needs to pay miner's handling charge (slow speed, high handling charge, suitable for large amount transfer)",
			"zls": [
				"One network confirmation is required to arrive at the account, and three network confirmations are required to withdraw the currency. Any non usdt-omni assets cannot be recovered after recharging to the usdt-omni address. The minimum amount of recharging is 1 usdt-omni!"
			]
		}, {
			"id": "TRC20",
			"xq": "Trc20-usdt based on wave field network. Trc20-usdt is stored in the wave field address (seconds to the account, 0 handling charge, suitable for small high frequency transfer)",
			"zls": [
				"1. Please do not recharge any non trc20-usdt assets to the above address, otherwise the assets will not be recovered.",
				"2. After you recharge to the above address, you need the confirmation of the whole network node. After one network confirmation, it will arrive at the account. After one network confirmation, you can withdraw money.",
				"3.<i style=\"color:#FF9E08;\">Minimum recharge amount：1USDT</i> ，Recharge less than the minimum amount will not be recorded and cannot be returned。",
				"4. Your recharge address will not change frequently, you can recharge repeatedly; if there is any change, we will try our best to inform you through website announcement or email",
				"5. Please make sure the computer and browser are safe to prevent information from being tampered or leaked."
			]
		}],
		"tableTitle": [{
			"title": "time",
			"id": "createtime",
			"hide": "true"
		}, {
			"title": "number",
			"id": "coin"
		}, {
			"title": "Charging address",
			"id": "address"
		}, {
			"title": "Charging status",
			"slot": "status"
		}],
		"status": [{
			"id": 0,
			"text": "complete"
		}, {
			"id": 1,
			"text": "Under review"
		}, {
			"id": 2,
			"text": "Order cancellation"
		}, {
			"id": 3,
			"text": "Problem order"
		}, {
			"id": 4,
			"text": "Packing"
		}, {
			"id": 5,
			"text": "Waiting for block confirmation"
		}, {
			"id": 6,
			"text": "Failed to pass the audit"
		}]
	},
	//提币
	withdraw: {
		"title": "Withdraw money",
		"titler": "Withdrawal record",
		"an": "Withdrawal address:",
		"ant": "Fill in the blockchain address",
		"tl": "Withdrawal quantity",
		"tlt": "Minimum withdrawal quantity",
		"at": "Extract all",
		"ky": "Available:",
		"xe": "quota",
		"ts": "Increase the quota",
		"sxf": "Service Charge",
		"yq": "Expected arrival:",
		"whz": "Under maintenance",
		"tableTitle": [{
			"title": "time",
			"id": "createtime",
			"hide": "true"
		}, {
			"title": "number",
			"id": "coin"
		}, {
			"title": "Withdrawal address",
			"id": "address"
		}, {
			"title": "Withdrawal status",
			"slot": "status"
		}]
	},
	//礼品卡
	gift: {
		"title": "Gift card",
		"js": "You can package your own usdt to generate an exchange code and send it to your friends or enter the exchange code to get the usdt from others",
		"dh": "To exchange",
		"sc": "Generate exchange code",
		"zls": [
			"1. The exchange code is valid at one time. Once it is exchanged, it cannot be retrieved. Please keep your exchange code properly",
			"2. Click \"de exchange\" and enter the exchange code to exchange usdt",
			"3. Click \"generate exchange code\", input the quantity of usdt you want to pack, then you can pack your usdt into exchange code, copy the exchange code and send it to the other party, and the other party can get the corresponding quantity of usdt according to your exchange code",
			"4.1-year validity period, expired unused will be returned automatically"
		],
		"lj": "Redeem now ",
		"dhm": "Exchange code",
		"sr": "Input usdt quantity and generate exchange code immediately",
		"fz": "Click the button to copy the exchange code",
		"dbsl": "Packing quantity",
		"jymm": "Transaction code",
		"tip": "The exchange code is valid at one time. Once it is exchanged, it cannot be retrieved. Please keep it properly",
		"yj": "One click Copy",
		"titler": "Gift card record",
		"tabs": [{
			"id": 1,
			"text": "I generated it"
		}, {
			"id": 2,
			"text": "I changed it"
		}],
		"sctitle": [{
			"title": "Exchange code",
			"id": "code"
		}, {
			"title": "Packing quantity",
			"id": "coin"
		}, {
			"title": "Exchange time",
			"id": "finishtime"
		}, {
			"title": "Exchange code status",
			"slot": "status"
		}],
		"dhtitle": [{
			"title": "Exchange code",
			"id": "code"
		}, {
			"title": "Exchange quantity",
			"id": "coin"
		}, {
			"title": "Exchange time",
			"id": "finishtime"
		}],
		"status": ["Not converted", "Converted", "Expired"]
	},
	//我的订单
	order: {
		"title": "Transaction order",
		"tabs": [{
			"id": 1,
			"text": "In trade"
		}, {
			"id": 2,
			"text": "Completed"
		}, {
			"id": 3,
			"text": "Cancelled"
		}, {
			"id": 4,
			"text": "Dissenting"
		}],
		"tableTitle": [{
			"title": "Order nature"
		}, {
			"title": "number"
		}, {
			"title": "Unit Price"
		}, {
			"title": "Total amount"
		}, {
			"title": "order number"
		}, {
			"title": "Order status"
		}],
		"stustas": [{
			"type": 0,
			"text": "In trade"
		}, {
			"type": 1,
			"text": "In trade"
		}, {
			"type": 3,
			"text": "Dissenting"
		}, {
			"type": 2,
			"text": "Transaction completed"
		}, {
			"type": 5,
			"text": "Time out cancel"
		}, {
			"type": 4,
			"text": "Buyer cancels"
		}]
	},

	//帮助中心
	help: help

}
