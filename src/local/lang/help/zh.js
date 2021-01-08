export default {
	tt:"帮助中心",
	meun: [{
			title: "常见问题",
			id: 0,
			flag:true,
			list: [{
					id: 0,
					title: "什么是USDT?"
				}, {
					id: 1,
					title: "怎么购买USDT?"
				}, {
					id: 2,
					title: "怎么卖出USDT？"
				}, {
					id: 3,
					title: "怎么提币？"
				}, {
					id: 4,
					title: "怎么充币？"
				}, {
					id: 5,
					title: "充提到账时间及限额"
				}, {
					id: 6,
					title: "买币付款后没收到币怎么办？"
				}, {
					id: 7,
					title: "卖币未收到款买家点击了“我已付款，请放币”怎么办？"
				}, {
					id: 8,
					title: "我的订单记录能保存多久？"
				}, {
					id: 9,
					title: "异议订单产生后怎么办？"
				}, {
					id: 10,
					title: "什么是锁定额？"
				}, {
					id: 11,
					title: "什么是流转额？"
				}, {
					id: 12,
					title: "怎么设置收款方方式？"
				}, {
					id: 13,
					title: "密码安全"
				}, {
					id: 14,
					title: "银行卡冻结"
				},
				{
					id: 15,
					title: "怎么挂委托单？"
				},
				{
					id: 16,
					title: "怎么付款？"
				},
			]
		}, {
			title: "协议条款",
			id: 1,
			flag:true,
			list: [{
				id: 100,
				title: "用户服务协议"
			}, {
				id: 101,
				title: "YaPay隐私条款"
			}, {
				id: 102,
				title: "YaPay免责声明 && 反洗钱声明"
			}]
		},
		{
			title: "执法请求指南",
			id: 3,
			flag:true,
			list: [{
				id: 1000,
				title: "执法请求指南"
			}]
		},
	
	],
	ansList: [{
			id: 0,
			list: [{
				title: "",
				font: "泰达币（USDT）是Tether公司推出的基于稳定价值货币美元（USD）的代币Tether USD（下称USDT），1USDT=1美元。Tether公司宣称严格遵守1： 1 的准备金保证， 即每发行1个USDT代币， 其银行账户都会有1美元的资金保障。任何持有USDT的用户， 只要到Tether公司完成用户认证， 即可以以1: 1 的比例(扣除汇款手续费) 用代币换回法币。目前支持美元(USDT) 和欧元(EURT)， 分别托管于不同的银行， 未来还会支持日元。法币就是准备金， 链上的代币就是新发行出来的法币， 所以Tether这家公司充当了中央银行的角色."
			}]
		}, {
			id: 1,
			list: [{
				title: "1、快捷买币",
				font: "在YaPay移动端“首页”→点击“买币”→输入您需要购买的数量或者金额→点击“一键购买”→按照订单中卖家收款方式进行付款→付款完成点击“我已付款，请放币”→卖家收到您的付款并放币到您的账户中。"
			}, {
				title: 1,
				img: "http://219.153.20.218:8084/help/buy-quick.gif"
			}, {
				title: "2、自选区买币",
				font: "在YaPay移动端“首页”→点击底部“交易”→在顶部切换到自选区→在“我要买”列表下选择一个卖家→点击“去购买”→输入您需要购买的数量或者金额→点击“立即购买”→进入待付款界面，付款完成点击“我已付款，请放币”→卖家将确认收到您的付款并放币到您的账户中。"
			}, {
				title: 1,
				img:"http://219.153.20.218:8084/help/buy-self.gif"
			}, {
				title: 2,
				font: "<b>注意：</b>用户需阅读并同意交易须知方可进行交易，YaPay交易系统拥有严格的风控机制当YaPay发现有用于赌博、洗钱、资金盘等不法行为我们会主动将所涉信息提交给相应的执法部门，每日取消3笔订单后会被认为恶意取消订单将受到24小时不能交易的惩罚。"
			}]
		},
		{
			id: 2,
			list: [{
					title: "1、快捷卖币",
					font: "在YaPay移动端“首页”→点击“我要卖”→输入您需要卖出的数量或者金额→点击“立即出售”→选择收款方式→确认出售信息→您务必确认收到买家的付款→输入交易密码进行“放币”。"
				},
				{
					title: 1,
					img: "http://219.153.20.218:8084/help/sell-quick.gif"
				},
				{
					title: "2、自选区卖币",
					font: "在YaPay移动端“首页”→点击底部“交易”→在顶部切换到自选区→在“我要卖”列表下选择一个卖家→点击“去出售”→输入您需要出售的数量或者金额→点击“立即出售”→进入等待买家付款界面，您务必确认收到买家的付款→输入交易密码进行“放币”。"
				},
				{
					title: 1,
					img: "http://219.153.20.218:8084/help/selll-self.gif"
				},
				{
					title: 2,
					font: "<b>注意：</b>您需要设置好收款方式方可进行出售，YaPay交易系统拥有严格的风控机制当YaPay发现有用于赌博、洗钱、资金盘等不法行为我们会主动将所涉信息提交给相应的执法部门，卖单一经匹配成功不得取消。"
				}
			]
		},
		{
			id: 3,
			list: [{
					title: '',
					font: '在YaPay移动端“首页”或者“钱包”点击“提币”→填写您需要接收USDT的区块链“提币地址”、“提币数量”→“输入交易密码”→完成。提币地址：汇入方该币种的充值地址，类似于快递中的收件人地址。地址备注用于您区分每一笔提币，可随意填写。网络手续费：有区块上的网络矿工收取，平台不收取，以USDT为例，单笔手续费为4-10个USDT，手续费越高，到账速度越快。链名称：只有提币USDT的时候需要选择链名称，其他币种无需选择，USDT分为OMNI、ERC20和TRC20三条链，选择和汇入方一致的链即可。'
				},
				{
					title: 1,
					img:"http://219.153.20.218:8084/help/tibi.gif"
				},
				{
					title: 2,
					font: '<b>注意：</b>为保障资金安全，当您的账户密码修改我们会对提币进行人工审核，请务必确认网络安全防止信息被篡改或泄露。'
				}
			]
		},
		{
			id: 4,
			list: [{
					title: '',
					font: '在YaPay移动端“首页”或者“钱包”点击“充币”→获得一个充币的区块链地址→使用您的区块链账户向这个地址转账您所需的USDT即可完成充币。'
				},
				{
					title: 2,
					font: "<b>注意：</b>请务必核对对应公链的充币地址，否则资产将不可找回；最小充值额度为20USDT，链上充值的订单可小额累计上账（快速充值不能累计）充币仅支持simple send的方法，使用其他方法（send all）的充币暂时无法上账，请您谅解；为保障资金安全，请务必确认网络安全防止信息被篡改或泄露"
				}
	
			]
		},
		{
			id: 5,
			list: [{
					title: 2,
					font: ` <h4><b>A、充币多久能到账？迟迟不到账怎么办？</b></h4>
				 <br/> <p>区块链资产转账分为提出—区块确认—入账三个步骤。<p> 
				 </br> <p>1.提出：转账成功代表提币的平台或钱包进行了转账操作；</p>
				 </br> <p>2.区块确认：完成对应的区块确认。若当时区块发生拥堵、延迟等情况，会导致数字资产迟迟未完成完全确认；</p>
				 </br> <p>3.入账：完全确认后，平台即会尽快完成入账。若区块未完全确认，请您耐心等待，只有确认完毕，平台才能为您入账。若区块已完全确认，但YaPay账户却一直没有到账，请联系在线客服或提交工单处理。</p>
				 `
				},
				{
					title: 2,
					font: ` <h4><b> B、提币多久能到账？迟迟不到账怎么办？ </b></h4>
					  <br/><p>申请提币操作完成后会依据提币情况在提现记录里显示以下状态：</p>
					  <br/><p>等待提现：提现申请已提交，等待提现操作。（如遇提现需求拥堵情况，需排队等待）人工审核：根据YaPay系统判定，部分提现需求要求进行人工审核，会由客服人员电话进行确认。</p>
					  <br/><p>提现中：系统正在为您处理汇出，此时人工无法参与操作，请耐心等待。</p>
					  <br/><p>提现成功：即资产已从平台提现完成。您可以到相应区块进行查询。如提现成功后超过48小时在区块仍查不到，可提交工单审核处理。</p>
				 `
				},
				{
					title: 2,
					font: ` <h4><b> C、提币限额是多少？ </b></h4> 
						<br/> <p>依据用户的账户认证等级和交易量等级来确定额度，具体可在我的——身份认证页面查看提现额度。</p>
				`
				}
	
			]
		},
		{
			id: 6,
			list: [{
				title: '',
				font: '在交易过程中如果您正确付款后卖家在时限内未确认并放币，这时您可以等待在订单界面中亮起的“未收到币”，点击该按钮将该订单标记为“异议订单”并进行客服处理，也可在客服浮窗中进入提供订单号及付款凭证处理。'
			}]
		},
		{
			id: 7,
			list: [{
				title: '',
				font: '在交易过程中如果您未收到买家的付款，但买家却已经确认付款，这时这时您可以等待在订单界面中亮起的“未收到款”，点击该按钮将该订单标记为“异议订单”并进行客服处理，也可在客服浮窗中进入提供订单号及付款凭证处理。'
			}]
		},
		{
			id: 8,
			list: [{
				title: '',
				font: '我们将为您长期保存您的订单，常规展示100条近期记录，可能您在查询更多订单记录的时候加载会相对慢一些。'
			}]
		},
		{
			id: 9,
			list: [{
				title: '',
				font: '异议订单是指在交易过程中买卖方出现交易纠纷的情况，如买家付款后卖家没有收到款点击“未收到款”，此时由客服介入处理。异议订单状态将持续至处理完成为止（当你忽视订单提醒时我们的仲裁将会偏向提供证据的一方，为了避免您不必要的损失请积极配合客服处理异议订单）'
			}]
		},
		{
			id: 10,
			list: [{
				title: '',
				font: '锁定额包含您正在出售订单内暂时锁定的USDT数额，以及您账户中存在状态变化或者异议/冻结情况下的USDT数额，您的总额由可用额+锁定额构成。'
			}]
		},
		{
			id: 11,
			list: [{
				title: '',
				font: '流转额度指您账户的USDT到任意商户处消费所获得的对应额度（1:1），流转额度将配合YaPay的优惠活动进行使用。'
			}]
		},
		{
			id: 12,
			list: [{
					title: '',
					font: '点击“我的”→“收付款设置”→“添加”→输入/上传对应的收付款方式→保存'
				},
				{
					title: 1,
					img:"http://219.153.20.218:8084/help/paygetway.gif"
				},
			]
		},
		{
			id: 13,
			list: [{
				title: 2,
				font: `<h4><b>  A、忘记登录密码怎么办？ </b></h4> 
					<br/><p>忘记登录密码可通过手机或邮箱进行重置登录密码操作。打开YaPay，点击登录下方“忘记密码”，按步骤操作即可。</p>
					<br/><h4><b>  B、如何修改登录密码？ </b></h4> 
					<br/><p>打开YaPay，在“我的”—“账号安全”—“登录密码”，点击“修改密码”即可修改登录密码。</p>
					<br/><h4><b>  C、如何修改/找回交易密码？ </b></h4> 
					<br/><p>打开YaPay，在“我的”—“账号安全”—“交易密码”，点击“修改密码”，系统将会向您的绑定手机/邮箱发送找回交易密码的邮件。</p>
				`
			}]
		},
		{
			id: 14,
			list: [{
					title: 2,
					font: ` <p>冻结类型（两种）</p><br/>
					<h4><b> A、人行转账系统冻结 </b></h4> 
					<br/><p>说明：转账流水过大，转账备注（例如备注USDT，备注比特币）什么的都有可能被冻。</p>
					<br/><p>解决办法：直接带上银行要求的材料，配合处理就行。一般三个工作日内会解冻。</p>
					<br/><h4><b> B、司法冻结 </b></h4> 
					<br/><p>说明：被冻结的原因一般是有一笔电信诈骗的钱，经过几次倒手，然后到达平台。当被骗者向公安报案后，会沿着资金的转账路径，几乎将同一条线上的卡都冻结。</p>
					<br/><p>司法冻结又分为两种：</p>
					<br/><p>1、警方临时冻结（36小时-72小时），一般而言，说明你的卡不是直接接受黑钱的卡，耐心等待，到期会自动解冻。</p>
					<br/><p>2、警方提请人民法院冻结，半年到1年，可以延长冻结期，直到结案或者撤案。解决办法：司法冻结第一种很好处理，到期一般会自动解冻；冻结半年的就联系冻结你的公安局，带上近期交易证明，银行打印的流水（一般半年的流水）盖公章。去当地公安局做笔录，一般一星期左右会解冻（这个每个公安局的规定不一样，有的是给了资料就能解冻或者解冻部分资产，有的是必须结案才能解冻）。：</p>
					<br/><p>PS:被冻结后，联系开户行或银行的电话热线，需要得到三个信息：冻结期限、冻结方式（银行冻结还是司法冻结）、冻结机关。</p>
			`
				},
	
			]
		},
		{
			id: 15,
			list: [{
					title: '',
					font: '在YaPay移动端“首页”→点击“交易”→在顶部切换到自选区→点击屏幕右下方“发布”悬浮图标或右上方“发布”图标→进入委托单发布界面，填入相应内容→点击“发布委托”→选择“收付款方式”→确认发布委托内容→点击“确认”，即可发布您的“购买/出售”委托单。'
				},
				{
					title: "我要购买"
				},
				{
					title: 1,
					img:"http://219.153.20.218:8084/help/weituo-buy.gif"
				},
				{
					title: "我要出售"
				},
				{
					title: 1,
					img: "http://219.153.20.218:8084/help/weituo-sell.gif"
				},
			]
		},
		{
			id: 16,
			list: [{
					title: '',
					font: '在YaPay移动端“首页”→点击“付款”→选择“账号付款”→输入对方ID或手机号/邮箱号（手机号和邮箱号须已注册YaPay）→填写付款数额后点击确认→输入交易密码→付款成功。'
				},
				{
					title: 1,
					img: "http://219.153.20.218:8084/help/pay.gif"
				},
			]
		},
	
	
	
		{
			id: 1000,
			list: [{
				title: 2,
				font: `<section class="article-info">
							<div class="article-content">
							  <div class="article-body"><p>&nbsp;</p>
					<ol>
					<li><strong>简介</strong></li>
					</ol>
					<p>我们积极与执法部门合作，并只针对能提供授权证明的授权执法官员的执法请求做出回应。该执法请求指南介绍了授权的执法官员如何与我们联系，并请求客户信息。</p>
					<p>&nbsp;</p>
					<ol start="2">
					<li><strong>关于国际执法机关</strong></li>
					</ol>
					<p><strong>Creative Tower, Fujairah, UAE</strong>  (“YaPay”) 根据我们的服务条款，隐私政策和适用法律，向国际执法机关披露账户信息记录。国际执法机关需要提供正式的司法互助协定请求，以便于我们提供披露信息。</p>
					<p>&nbsp;</p>
					<ol start="3">
					<li><strong>信息请求</strong></li>
					</ol>
					<p>为了快速处理审查信息请求，执法人员请发送含有以下信息的电子邮件至：<a href="mailto:ya@yaotc.com" target="_blank" rel="noopener">ya@yaotc.com<wbr></a>。</p>
					<ol>
					<li>执法机关的名称</li>
					<li>该官员被授权获取信息的证明（授权证明）和执法机构的在职证明</li>
					<li>执法机构官员的身份证明（例如证件编号，内部身份证号码）</li>
					<li>含有政府域名的电子邮件地址</li>
					<li>政府机构的联系信息（电子邮件地址，电话号码）</li>
					<li>明确您所需信息对应的特定法律主体名称：</li>
					<li>请求的细节，包括
					<ol>
					<li>主题行中的传票标识符编号</li>
					<li>我们应该如何验证传票，例如回叫程序</li>
					<li>文本格式或Excel文件格式（非PDF）的任何公共地址或交易ID</li>
					<li>提供合理的截止日期</li>
					<li>国际执法机构需提供根据国际司法互助条约所需的相关司法文件</li>
					<li><strong>执法紧急请求</strong></li>
					</ol>
					</li>
					</ol>
					<p>对于非常紧急的请求，例如当有人死亡或严重身体危险时，请在主题行中说明紧急请求。</p>
					<p><strong>&nbsp;</strong></p></div>
	
							  <div class="article-attachments">
								<ul class="attachments">
								  
								</ul>
							  </div>
							</div>
						  </section>`
			}]
		},
		//协议
		{
			id: 100,
			list: [{
				title: 2,
				font: `
					
					<p class="MsoNormal" align="center" style="text-align:center;">
						<br />
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>感谢您选择</span>YaPay<span>服务，</span><span>YaPay Lab</span><span>是一家在迪拜注册及运营的公司，公司注册号：</span><span>15240/2019</span><span>。</span><span>YaPay</span><span>是一个场外交易</span>及支付服务平台，用于服务用户交换他们的本地货币与数字货币并应用到多个行业场景<span>。平台允许用户以本平台指导价格完成新建购买</span>USDT<span>订单或者售出</span><span>USDT</span><span>订单</span>。在使用本平台服务的同时，即代表您同意并认可协议的条款和条件。条款的接受和变更如果您不同意这些服务条款，请不要使用本平台。
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>通过使用本平台或我们的服务，您将被视为已不可撤销地同意这些条款和条件。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>请注意，这些服务条款可能会修改并重新发布</span>，您应该定期访问本页，尤其在进行业务之前，请审查当前的服务条款，因为您继续使用该站点将被视为对任何修订内容的接受。
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>尽管如此，我们仍会尽力通知您关于这些服务条款的任何改变，以及这些条款会对您的权利和义务产生重大影响</span>。你的账号只能自己使用，将账户转借给其他人使用而造成财产损失的，平台将不会承担任何责任。您负责维护适当的安全性和控制所有账户、密码，或您访问服务所使用的任何其他代码或凭据，您不得出售、借用、共享或以其他方式提供您的帐户或任何必要的细节访问您的帐户以外的人体或实体。
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;您的帐户不得包含误导性或欺诈性的信息，包括但不限于拥有非个人电话号码、为您的帐户伪造虚假的声誉信息、伪造您的原籍国或提供欺诈性身份证明文件及其他证明文件。
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						我们可以随时要求您完成我们的身份验证过程，也可能要求您在我们认为必要时向我们提交额外的身份证明及其他证明文件，未能完成身份验证将被视为违反本协议。
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>适用范围</b><b></b>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						&nbsp;
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>本服务仅适用于</span>18<span>岁或以上的用户。通过访问或使用我们的服务，您声明并确保您至少年满</span><span>18</span><span>岁，且没有被剥夺过适用本服务的权利。您也保证您不在任何贸易或经济制裁名单中，如联合国安理会制裁名单，亦不被欧盟、香港金融管理局、香港海关、美国财政部海外资产控制办公室以及其他行政执法机构限制或禁止参与任何相关类型的交易。</span><span>&nbsp;</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>此外，我们不会在所有国家或地区提供本服务，并对特定的一些限制地区的用户提供部分或不提供服务，限制地区目前包括香港、古巴、伊朗、朝鲜、克里米亚、苏丹、马来西亚、叙利亚、美国</span> [ <span>包括所有美国领土，如波多黎各、美属萨摩亚、关岛、北马里亚纳岛、以及美属维尔京群岛（圣克罗伊岛、圣约翰岛和圣托马斯岛）</span><span>] </span><span>孟加拉国、玻利维亚、厄瓜多尔和吉尔吉斯斯坦。这些条款的内容不应受用户所属国家或地区法律的排斥。因此，如果您不符合这些要求，请勿使用我们的服务。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>数字资产的风险</b><b></b>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						“数字资产”意指数字资产（也称为“虚拟金融资产”、 “可兑换虚拟货币”、“加密货币”、“虚拟货币”、“数字货币”或“数字商品”），例如比特币（<span>BTC</span><span>）、泰达币（</span><span>USDT</span><span>）或以太坊（</span><span>ETH</span><span>）等，它们基于计算机网络的密码协议，该协议可以是（</span><span>i</span><span>）集中式或分散式，（</span><span>ii</span><span>）封闭式或开源式，以及（</span><span>iii</span><span>）用作交换媒介和</span><span>/</span><span>或价值贮存。数字货币依赖于区块链技术和一个系统</span><span>,</span><span>这就会使其遭受安全冲击，比如计算机系统的黑客攻击等，同时任何货币相关的资产都会面临经济体系相关的崩塌风险。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>您需要理解并同意，我们提供的服务是按照现有技术和条件所能达到的现状提供的。尽管我们已经尽最大努力确保服务的连贯性和安全性，但我们不能完全预见和防范因法律、技术以及其他风险，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。</span>&nbsp;<span>系统平台因上述状况无法正常运作，使用户无法使用各项服务时，我们不承担损害赔偿责任。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>下单和交易</b><b></b>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>有了一个注册帐户，您可以创建</span>USDT<span>买单或者卖单，用来购买或出售</span><span>USDT</span><span>。系统会帮助您匹配一个对应的交易方，从而启动</span><span>USDT</span>场外交易。
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>发起一个</span>USDT<span>交易即代表你同意并接受本站用户协议，以及接受即时价格。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>下单匹配成功后，数字货币价格被锁定，无法在此次交易中更改或添加任何额外费用。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>您必须按照</span>C2C<span>平台提供的有效的付款细节完成付款。利用</span><span>C2C</span><span>交易系统所提供支付方式之外的付款渠道产生的交易纠纷，平台概不负责。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>在整个交易过程中，</span>USDT<span>是以代管的形式存在的，直到卖方确认收到全额付款为止。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>根据我们的要求，当交易发生纠纷时，买方需要在</span>48<span>小时内提供已付款证明，包括转账流水号等。在有理由相信买家可以从事欺诈活动情况下，我们可以提供买家的信息给卖方回收资金和防止或侦查欺诈活动。信息披露的程度上以我们认为有必要达到上述目的为准，包括但不限于买家的联系方式，登录和交易记录和</span><span>/</span><span>或任何细节和记录，以及买方通过我们的身份验证措施。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>数字资产交易争议</b><b></b>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>如果买方和卖方的交易出现纠纷时，任何一方必可以通过</span>YaPay<span>客服人员协商解决。您不可撤销地授权</span><span>YaPay</span><span>根据交易条款付款证据，用户的口碑，以及隐私政策的相关规定来决定将争议的数字货币释放给买方。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>买方因超时无操作导致的订单自动取消，该交易被视为已取消，不能进行争议、推翻或变更。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>在争议中提供欺诈性信息或文件，或以虚假方式提出索赔，或以其他方式试图迫使交易偏向于自己的行为被视为违反本协议</span>。<span>如果我们发现您的帐户造成欺诈风险使得</span>YaPay<span>或我们的客户面临风险，我们将暂时限制你的账户的使用和服务权限，极端情况下，甚至永久暂停您的账号服务。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;<span>此外，在以下情况出现时，我们有权酌情决定暂停、限制或终止您帐户的使用：</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						1<span>、</span>我们有理由相信你使用的服务违反了当地法律或条例，或者你以欺诈的方式使用服务，或者违反了本协议的目的；
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						2、我们有理由相信，在您的注册，身份验证，交易或使用本平台任何服务时，您提供了虚假的，误导性的或欺骗性的信息；
					</p>
					<p class="MsoNormal">
						根据任何适用的法律、条例或有权机构发出的命令。
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>数字资产支付服务</b><b></b>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						支付服务是我们向您提供的非金融机构支付服务，是受您委托代您收付款的数字资产转移服务；收付款服务是指我们为您提供的代为收取或代为支付款项的服务。
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						通过代为收取款项服务，您可以收到他人向您支付的数字资产款项。具体是指自您委托我们将您在其他区块链钱包的数字资产充值到您的YaPay账户或委托我们代为收取第三方向您支付的数字资产款项之时起，至根据您的指令将该款项的全部或部分实际入账到您的YaPay账户或您的其他钱包账户之时止的整个过程。
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						通过代为支付款项服务，您可以支付款项给您指定的第三方。具体是指自款项从您指定YaPay账户出账之时起，至我们根据您或有权方给出的指令将上述款项的全部或部分入账到第三方的YaPay<span>账户或区块链账户</span>的整个过程；或自您根据本协议委托我们将您<span>在</span>YaPay的数字资产划转到您或他人的区块链账户或自您因委托我们代为收取相关款项并入账到您的YaPay账户之时起，至委托我们根据您或有权方给出的指令将上述款项的全部或部分入账到第三方的YaPay账户或区块链账户之时止的整个过程。
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						您向我们发出代为收付款项的指令后，非经法律程序或者非依本协议之约定，该指令不可撤销。
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>我们的承诺和声明</b><b></b>
					</p>
					<p class="MsoNormal">
						<b>&nbsp;</b>
					</p>
					<p class="MsoNormal">
						&nbsp;&nbsp;&nbsp;&nbsp;YaPay<span>并非银行或其他中心化金融机构，本协议项下涉及的资金转移均通过区块链来实现，您接受资金在转移途中产生的合理时间。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						基于相关法律法规的规定，对本协议项下的服务，我们均无法提供担保、垫资。
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>我们会将您委托我们代为收取或代为支付的款项，严格按照法律法规或有权机关的监管要求进行管理。我们提请您注意，</span>YaPay<span>账户所记录的数字资产余额不同于您本人的法币存款，不受《存款保险条例》保护，其实质为您委托我们保管的、所有权归属于您的预付数字资产价值。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>由于</span>YaPay<span>数字资产钱包中心化结合去中心化的特性，关于资产继承我们承诺，</span><span>用户在</span>YaPay<span>托管</span><span>账户内的</span>数字货币<span>视为用户的财产，这一财产权益的获得同样也可以从继承权的授予得到保证。注销账户前，账户资金余额需为</span>0<span>，若账户持有人死亡，该账户持有人的相关继承人可提供相应证明向</span>YaPay<span>提出申请，提取账户余额，提供具体证件要求如下：</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>有遗嘱遗嘱继承人：</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						1<span>、账户持有人的遗嘱；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						2<span>、申请人的</span>所属国家或地区身份<span>证件正反面原件扫描件；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						3<span>、申请人的承诺函（遗嘱继承）；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						4<span>、账户持有人的死亡证明；若账户内金额大于等于五千</span>美元<span>，需要提供生效的法律文书（如法院判决书），不需要再提供死亡证明。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b><span>用户合法使用</span>YaPay的承诺</b><b></b>
					</p>
					<p class="MsoNormal">
						<b>&nbsp;</b>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						1<span>、您需要遵守您所属、所居住或开展经营活动或其他业务的国家或地区的法律法规，不得将我们的服务用于非法目的（包括用于禁止或限制交易物品的交易），也不得以非法方式使用我们的服务。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						2<span>、您不得利用我们的服务从事侵害他人合法权益之行为或违反国家法律法规，否则我们有权进行调查、延迟或拒绝结算或停止提供服务，且您需要自行承担相关法律责任，如因此导致我们或其他方受损的，您需要承担赔偿责任。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						3<span>、上述</span><span>1</span><span>和</span><span>2</span><span>适用的情况包括但不限于：</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>1<span>）侵害他人名誉权、隐私权、商业秘密、商标权、著作权、专利权等合法权益；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>2<span>）违反保密义务；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>3<span>）冒用他人名义使用我们的服务；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>4<span>）涉嫌不法交易行为，如洗钱、恐怖融资、赌博、贩卖枪支、毒品、禁药、盗版软件、黄色淫秽物品、其他我们认为不得使用我们的服务进行交易的物品等；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>5<span>）提供赌博资讯或以任何方式引诱他人参与赌博；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>6<span>）未经授权使用他人</span>相关账户<span>；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>7<span>）进行与您或交易对方宣称的交易内容不符的交易，或不真实的交易；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>（</span>8<span>）从事可能侵害我们的服务系统、数据的行为。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						4<span>、账户仅限本人使用，您需充分了解并清楚知晓出租、出借、出售、购买账户的相关法律责任和惩戒措施，承诺依法依规开立和使用本人账户。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						5<span>、您理解，我们的服务有赖于系统的准确运行及操作。若出现系统差错、故障、您或我们不当获利等情形，您同意我们可以采取更正差错、扣划款项等适当纠正措施。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						6<span>、您不得对我们的系统和程序采取反向工程手段进行破解，不得对上述系统和程序（包括但不限于源程序、目标程序、技术文档、客户端至服务器端的数据、服务器数据）进行复制、修改、编译、整合或篡改，不得修改或增减我们系统的功能。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						7<span>、您不得自行或允许第三方通过</span>YaPay<span>官方程序、机器、脚本、爬虫、或其他自动化的方法使用</span>YaPay<span>服务（包括</span>YaPay<span>服务相关的网站）或获取</span>YaPay<span>服务相关数据。您仅可通过本人人工操作的方式来使用</span>YaPay<span>服务。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>免责条款</b><b></b>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>因下列原因导致我们无法正常提供服务，我们免于承担责任：</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						1<span>、我们的系统停机维护或升级；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						2<span>、因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						3<span>、您的电子设备软硬件和通信线路、供电线路出现故障的；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						4<span>、因您操作不当或通过非经我们授权或认可的方式使用我们服务的；</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						5<span>、因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、</span>区块链主网<span>原因、第三方服务瑕疵或政府行为等原因。</span>
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>尽管有前款约定，我们将采取合理行动积极促使服务恢复正常。</span>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal">
						<b>法律适用与管辖</b><b></b>
					</p>
					<p class="MsoNormal">
						&nbsp;
					</p>
					<p class="MsoNormal" style="text-indent:21.0000pt;">
						<span>本协议之效力、解释、变更、执行与争议解决均适用</span>阿联酋联邦法律和迪拜酋长国法律<span>。因本协议产生的争议，均应依照</span>迪拜酋长国法律<span>予以处理，并由被告住所地人民法院管辖。</span>
					</p>
					
					`
			}]
		},
		{
			id: 101,
			list: [{
				title: 2,
				font: `
						<br />
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>1.</b><b><span>介绍</span></b>&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>感谢您访问</span>YaPay，<span>您对本网站的使用将由以下实体（共同称之为</span>“我们”或“我们的”）之一提供：YaPay Lab<b>,&nbsp;</b><span>如果您是</span><span>香港、古巴、伊朗、朝鲜、克里米亚、苏丹、马来西亚、叙利亚、美国</span> [ 包括所有美国领土，如波多黎各、美属萨摩亚、关岛、北马里亚纳岛、以及美属维尔京群岛（圣克罗伊岛、圣约翰岛和圣托马斯岛）] 孟加拉国、玻利维亚、厄瓜多尔和吉尔吉斯斯坦<span>国民，并被允许使用我们的</span>OTC<span>交易服务</span><span>和</span>USDT应用服务<span>，访问或使用</span>YaPay&nbsp;<span>及相关应用程序接口或移动应用程序，意味着您同意我们隐私政策（</span>“隐私政策”）的政策和惯例，因此请仔细阅读本文。
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>本隐私政策解释了我们收集哪些数据，如何使用和存储此类数据，以及我们如何共享此类数据。如果您不希望以本隐私政策中描述的方式使用您的个人数据（定义如下），则不得使用本网站或任何服务，软件，</span>API（应用程序接口），技术，产品和/或本网站提供的功能（“服务”）。
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>2.</b><b><span>定义</span></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>数字资产</span>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							“数字资产”意指数字资产（也称为“虚拟金融资产”、 “可兑换虚拟货币”、“加密货币”、“虚拟货币”、“数字货币”或“数字商品”），例如比特币或以太坊，它们基于计算机网络的密码协议，该协议可以是（i）集中式或分散式，（ii）封闭式或开源式，以及（iii）用作交换媒介和/或价值贮存。
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>个人数据</span>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							“个人数据”是指任何单独或与其他数据相结合而使您能够直接或间接识别的信息，例如您的姓名，电子邮件地址，用户名，联系方式，标识号，位置数据，在线标识符（例如IP地址和设备ID，或一个或多个特定于您的物理，经济，文化或社会身份的因素）。&nbsp;
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>3.</b><b><span>我们收集的个人数据</span></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							YaPay<span>收集、处理和存储的个人数据，是通过您使用我们的服务所取得的，或者已经获得了您的同意。这些个人数据可能包括联系方式、您提供的身份信息的副本或来源于可获得的公开访问数据库、您的政府部门颁发的身份证号码，或与您的设备或互联网服务相关的任何信息（如</span>IP地址<span>、</span><span>定位</span><span>和</span>MAC号码）。&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>我们收集您在</span>YaPay<span>注册流程中提供的信息，这些信息可能来自已完成的、不完整的或已废弃的注册流程。当您通过客户支持与我们沟通，订阅营销信息或通过电话</span><span>、</span><span>电子邮件或其他沟通渠道与我们联系时，我们也会收集个人数据。我们收集、使用、存储和传输您的个人数据，其中可能包括以下内容：</span>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<u><span>个人客户</span></u>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>电子邮件地址</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>手机号码</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>法定全名（包括曾用名和当地语言名称）</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>国籍</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>社会安全号码（</span>“SSN”），护照号码或任何政府颁发的身份证号码
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>出生日期</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>身份证明（例如护照，驾驶执照或政府颁发的身份证明）</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>住宅地址</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>居住证明</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>由我们的合规团队酌情决定的所需的额外的个人资料或文件</span>&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<u><span>公司客户</span></u>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>公司法定名称（包括当地语言的法定名称）</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>注册信息</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>所有受益所有人、董事和法定代表人的法定全名</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>地址（主要营业地点和</span>/或其他实际营业地点）
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>合法在营证明</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>业务描述</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>个人</span>/公司所有者的所有权百分比
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>所有者，负责人和执行管理层的联系方式（如适用）</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>拥有</span>10％或以上机构客户实体的个人实益拥有人的身份证明（例如护照，驾驶执照或政府颁发的身份证明）
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>拥有</span>10％或以上机构客户实体的实体实益拥有者的个人数据（有关个人数据，请参阅上面的“个人客户”部分）
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>财富的来源</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>注入法币的数量</span>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;<span>预计注入的虚拟货币数量</span>&nbsp;
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>4.</b><b><span>我们如何使用您的个人数据</span></b>&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							YaPay<span>使用个人数据为您管理</span><span>、</span><span>交付</span><span>、</span><span>改进和提供个性化服务。</span>YaPay<span>还可能从我们收集的任何个人数据中生成通用数据，以供我们自己使用。我们还可能使用这些数据与您就</span>YaPay<span>和</span>/或其合作伙伴提供的其他产品或服务进行沟通。 我们不会将您的个人数据分享予第三方 (除了与YaPay<span>服务相关的合作伙伴之外），除非已经得到您的同意，或除非是下文所示的情况。</span>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>我们有可能将你的个人数据分享予第三方，</span>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							(a) 如我们认为有必要分享以执行服务条款；<br />
						(b) 以遵守政府机构要求，包括监管机构、执法及/或司法部门；<br />
						(c) 如此第三方向YaPay<span>提供服务（例如行政或技术服务）；</span><br />
						(d) 如此第三方与出售或转让我们的业务或其任何部分有关。
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						<span>此外，我们已采用国际标准以防止洗钱、恐怖融资、规避贸易及经济制裁的行为，当最终的虚拟资产条款和规则生效时，我们都会执行，这要求我们对客户进行尽职调查。这可能包括使用第三方数据和服务提供商将您的个人信息与其数据交叉比对。</span>
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>5.</b><b><span>我们如何储存您的个人数据</span></b>&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>我们从您那里收集的数据可能会转移或存储到您居住国家以外的目的地。这些数据也可能由在您居住国家以外的工作人员处理，这些工作人员为我们或为我们的供应商工作。您提交您的个人资料的行为，意味着您同意我们对数据的转让、存储或处理，但如上所述外。</span>&nbsp;
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>6.</b><b><span>访问、更正和删除您的个人数据</span></b>&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>您有权根据要求获得您的个人资料副本，并确定我们掌握的关于您的信息是否准确并且是最新的。如果您的任何个人数据不准确，您可以要求更新您的信息。您也可以要求删除您的个人资料，但我们可能会在某些情况下拒绝您的删除请求，例如出于法律要求或其他法律目的。有关数据访问，更正或删除请求，请联系</span><a href="mailto:support@okex.com">support@YaPay.com</a><span>，并附上</span>“数据查询”主题。&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>为了响应数据访问，更正或删除请求，我们将验证请求方的身份，以确保他</span>/她在法律上有权提出此类请求。虽然我们的目标是免费回复这些请求，但我们保留在您的请求重复或繁重时向您收取合理费用的权利。<b>&nbsp;</b>
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>7.</b><b><span>营销</span></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>我们会不定时与您分享公司新闻，促销信息以及由</span>YaPay<span>提供的有关产品和服务的信息。我们可能会与第三方分享个人数据，以帮助我们进行营销和推广项目，或发送营销讯息。通过使用</span>YaPay<span>，您接受本隐私政策并同意接受此类营销通讯。</span>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>客户随时可以选择退出这些营销通讯。如果您不想收到这些通讯，请发送电子邮件至</span><a href="mailto:support@okex.com">support@YaPay.com</a><span>。</span>&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>对于与产品相关的重要信息，如政策</span>/条款更新和操作通知，您将无法选择不接收此类信息。
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>8.</b><b>COOKIE使用</b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>当您访问</span>YaPay<span>时，我们可能会按行业惯例放置少量数据由您的浏览器保存（</span>Cookies）。这些信息将置于您的计算机或用于访问YaPay<span>的其他设备上。这些信息有助于我们识别您，收集有关您使用</span>YaPay<span>的信息，以更好地定制我们的服务并改善您的体验。我们也可能使用收集到的信息来确保符合银行保密法（</span>“BSA”）和反洗钱（“AML”）计划（“BSA / AML计划”），并通过检测不规则或可疑的帐户活动来确保您的账户安全性不受影响。&nbsp;
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>大多数浏览器都设置为自动接受</span>cookie。当您完成浏览或者页面操作，某些Cookie会过期，其他Cookie会保留在您的计算机或其他设备上时，直到被删除或过期。您可以选择拒绝使用我们的Cookie，但这可能会影响YaPay<span>服务的功能或您的用户体验。</span>&nbsp;
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>9.</b><b><span>信息安全</span></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>我们致力于保护</span>YaPay<span>和您免受未经授权的访问，更改，披露或销毁我们收集和存储的个人数据。我们采取各种措施确保信息安全，包括使用</span>SSL加密YaPay<span>通信</span>; 所有会话都需要双因素身份验证; 定期审查我们的个人资料收集，存储和处理流程; 并根据必要的原则限制我们的员工和供应商对您数据的访问权限，且我们的员工和供应商均需遵守严格的合同保密义务。
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>10.</b><b><span>联系</span></b><b>YaPay</b><b><span>关于隐私问题或疑虑</span></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>如果您对本隐私政策或使用您的个人数据有任何疑问，请通过发送电子邮件至</span><a href="mailto:support@okex.com">support@YaPay.com</a><span>与我们联系（标题为</span>“隐私请求”）。
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>11.</b><b><span>隐私政策的修改</span></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>我们可能会随时通过在本网站上发布修订版本（包括修订版本的生效日期）来更新本隐私政策，因此请经常查看是否有任何更新和更改。</span>
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>12.</b><b><span>使用语言</span></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<span>本隐私政策可能以不同语言发布。</span> <span>如有任何差异，请以英文版为准。</span>
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
					`
			}]
		},
		{
			id: 102,
			list: [{
				title: 2,
				font: `
						<div class="Section0">
							<p class="MsoNormal">
								Money&nbsp;Laundering&nbsp;is&nbsp;the&nbsp;process&nbsp;by&nbsp;which&nbsp;individuals&nbsp;attempt&nbsp;to&nbsp;conceal&nbsp;the&nbsp;origin&nbsp;and&nbsp;ownership&nbsp;of&nbsp;&nbsp;proceeds&nbsp;of illegal&nbsp;activity.&nbsp;Generally,&nbsp;money&nbsp;laundering&nbsp;involves&nbsp;any&nbsp;financial&nbsp;transaction:&nbsp;洗钱活动（洗黑钱）指的是个人企图掩盖非法活动所得来源和所有权的过程。一般来说，洗钱将涉及以下的金融交易行为：
							</p>
						</div>
						<div class="Section1">
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Using&nbsp;funds&nbsp;derived&nbsp;from&nbsp;criminal&nbsp;activity;&nbsp;or
							</p>
							<p class="MsoBodyText">
								使用犯罪活动所得的资金；或者
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Conducted to facilitate or conceal criminal&nbsp;activity.
							</p>
							<p class="MsoBodyText">
								为了促成或隐瞒犯罪活动。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Money&nbsp;laundering&nbsp;activity&nbsp;is&nbsp;highly&nbsp;regulated&nbsp;by&nbsp;global&nbsp;and&nbsp;international&nbsp;legislation&nbsp;therefor&nbsp;any&nbsp;Company&nbsp;is&nbsp;strongly&nbsp;advised&nbsp;to&nbsp;implement&nbsp;AML&nbsp;Code&nbsp;of&nbsp;Practice,&nbsp;to&nbsp;avoid&nbsp;legal&nbsp;procedures&nbsp;and&nbsp;sanctions&nbsp;in&nbsp;the&nbsp;future.&nbsp;洗钱活动受到全球和国际法律的高度管制，因此，任何公司都被强烈建议实施反洗钱行为守则，以免日后触犯任何法律程序&nbsp;和制裁。
							</p>
							<p class="MsoBodyText">
								The&nbsp;risk&nbsp;of&nbsp;Money&nbsp;Laundering&nbsp;by&nbsp;criminal&nbsp;elements&nbsp;through&nbsp;the&nbsp;company&nbsp;is&nbsp;the&nbsp;exploitation&nbsp;of&nbsp;the&nbsp;deposit/withdraws&nbsp;procedures&nbsp;made&nbsp;available&nbsp;by&nbsp;the&nbsp;Company,&nbsp;and&nbsp;the&nbsp;opportunity&nbsp;to&nbsp;present&nbsp;to&nbsp;law&nbsp;enforcement&nbsp;and&nbsp;tax&nbsp;entities&nbsp;that&nbsp;the&nbsp;source&nbsp;of&nbsp;the&nbsp;funds&nbsp;coming&nbsp;from&nbsp;the&nbsp;Company,&nbsp;Is the profit obtained under legal circumstances
							</p>
							<p class="MsoBodyText">
								犯罪分子借由公司洗钱而引起的风险，是利用了相关公司提供的存/取程序，乘机向执法和税收机构展示，其资金是在合法情况下获得利润
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								For example, if the user deposits funds from the crime into the company's account, then users with access rights can withdraw these funds and transfer themTo another bank account and report it as profit.This will interrupt the flow of funds from the deposit entity to the withdrawal entity.Criminals may use this option to transfer funds to places where law enforcement agencies have failed to detect and conceal the true source of funds.The above situation also applies to cases such as transfer of funds between different entities.
							</p>
							<p class="MsoBodyText">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								举例说，如果用户将犯罪所得资金存入本公司账户，那么拥有存取权限的用户就可以将这些资金提取后转
							</p>
							<p class="MsoBodyText">
								至自己的另一银行账户，并将之呈报为利润所得。这将中断了资金从存款实体转至提款实体的流向。犯罪分子可能会利用此选项，将资金转移到执法机构未能检测的地方，并隐瞒资金的真实来源。上述情况也同样适用于不同实体之间的资金转移等案例。
							</p>
							<p class="MsoBodyText">
								&nbsp;
							</p>
							<p class="MsoNormal" style="text-indent:11.0000pt;">
								To&nbsp;avoid&nbsp;such&nbsp;abuse&nbsp;of&nbsp;the&nbsp;Company,&nbsp;For&nbsp;that,&nbsp;the&nbsp;Company&nbsp;must&nbsp;implement&nbsp;KYC&nbsp;(“&nbsp;know&nbsp;Your&nbsp;Client“&nbsp;)&nbsp;procedures.
							</p>
							<p class="MsoNormal" style="text-indent:20.4000pt;">
								<span>为了避免对公司的滥用，为此，公司必须实施</span> &nbsp;“了解你的客户”程序（KYC）。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<h2 style="text-indent:5.0000pt;">
								<b>“Know Your Client”</b><b>&nbsp;</b><b>Procedures</b><b>&nbsp;</b><b>“</b><b>了解你的客户</b><b>”</b><b>程序</b><b></b>
							</h2>
							<p class="MsoNormal" style="text-indent:15.0500pt;">
								<b>If necessary, you need to provide proof related to personal information</b><b></b>
							</p>
							<p class="MsoNormal" style="text-indent:15.0500pt;">
								<b>必要时需要提供个人信息相关的证明</b><b></b>
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								The user promises that his funds are legal and safe own funds, and there are no drug crimes, organized crimes of the underworld nature, terrorist crimes, smuggling crimes, corruption and bribery crimes, crimes of disrupting financial management order, crimes of financial fraud, theft,Embezzlement and misappropriation of company proceeds and other proceeds of crimes and their proceeds, there is no act of entertainment and other acts through the company's platform to cover up the illegal sources of funds and obtain illegal proceeds.&nbsp;
							</p>
							<p class="MsoNormal" style="text-indent:10.0000pt;">
								用户承诺其资金为合法、安全的自有资金，不存在系毒品犯罪、黑社会性质的组织犯罪、恐怖活动犯罪、走私犯罪、贪污贿
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								赂犯罪、破坏金融管理秩序犯罪、金融诈骗犯罪、盗窃、侵占挪用公司财产等犯罪所得及其收益，不存在通过本公司平台进行娱乐等行为来掩饰其资金非法来源，获取不法收益的行为。
							</p>
							<p class="MsoBodyText" style="margin-left:0.0000pt;">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								The user promises not to use its entertainment funds and proceeds on the company's platform for any anti-state, terrorist financing and other illegal criminal activities, or use the funds and proceeds to pay, fund or disguise to help anti-state and terrorist organizations for illegal activities.&nbsp;
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								<span>用户承诺不得将其在本公司平台娱乐资金及所得收益用作任何反国家、恐怖融资等违法犯罪</span> <span>活动，或将资金及收益支付、资助或变相帮助反国家、恐怖组织用于非法活动。</span>
							</p>
							<p class="MsoNormal" style="text-indent:20.0000pt;">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								The user promises that he is the legal owner of the funds and has the full right to control the funds deposited in the company's account&nbsp;
							</p>
							<p class="MsoNormal" style="text-indent:15.0000pt;">
								用户承诺其为资金的合法所有人，完全有权支配该笔存入本公司账户的资金。
							</p>
							<p class="MsoNormal" style="text-indent:15.0000pt;">
								&nbsp;
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								<b>To prevent money laundering organizations from conducting money laundering through our channels, we will take the following measures:</b><b></b>
							</p>
							<p class="MsoBodyText" style="margin-left:0.0000pt;text-indent:10.5500pt;">
								<b>为防止洗钱组织通过本公司渠道进行洗钱行为，我们将采取如下措施</b>：
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								Monitor the USDT from the blacklist, and freeze the operation account until the user submits the relevant certificate to apply for unfreezing, and the withdrawal must be transferred to the same account of the previous source address of the money deposit (to prevent transfer between different accounts to achieve money laundering operation).If the original account is no longer available, the funds can be transferred to different accounts of the same entity (and you need to show a personal data to prove the ownership of the new account), and the same amount, and according to the original deposit address source transferTo the same address.
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								监控来自黑名单的USDT，并冻结操作账户，直至用户提交相关证明申请解冻，且提币必须转入至之前充币来源地址的同一账户（以防止在不同账户之间转账实现洗钱操作）。如果原始的账户不再可用，资金可被转移到相同实体的不同账户（而你需要出示一份个人资料来证明新账户的所有权），并且是以相同的金额，以及依照原始充币地址来源转至相同的地址。
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								&nbsp;
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								&nbsp;
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								If it is found in the process of accessing funds on the company's platform or has been confirmed in a third-party financial or interbank organization, the user's involvement in money laundering crimes, funds or other property originated from terrorist organizations, terrorists, persons engaged in terrorist financing activities, and other illegal crimes;When funds or other forms of property have been used or will be used for terrorist financing, terrorist activities and other illegal criminal activities, the company will immediately stop all operations that have occurred or are happening on the platform of the user, and deposit them on the company's platform.Measures to seal up accounts, freeze funds, and report user violations to the designated financial supervision department and transfer transaction violation information and evidence materials to judicial authorities as appropriate.Since the user fails to comply with the requirements of relevant laws and regulations and violates the related guarantee commitments made in this document, the company or other third parties suffer corresponding losses. The user shall bear full liability for compensation and bear the corresponding legal consequences alone.
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								<span>如在本公司平台资金存取过程中发现或在第三方金融或同业机构中已确认用户涉及洗钱犯罪、资金或其他财产来源于恐怖组织、恐怖分子、从事恐怖融资活动人员及其他违法犯罪所得；</span> <span>资金或其他形式的财产已用于或将用于恐怖融资、恐怖活动等违法犯罪活动时，本公司将立即停止该用户在平台已发生或正发生的所有操作，将其在本公司平台存款采取查封账户、冻结款项措施，并将用户违法行为报送指定金融监部门并视情况将交易违法信息及证据材料移交司法机关处理。由于用户未依照相关法律法规的要求及违反本文件中做出的相关保证性承诺导致本公司或其他第三方遭受相应损失，用户应承担完全的赔偿责任并单独承担相应法律后果。</span>
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								When there is suspicious transaction or large-value transaction in the process of user funds operation, the company's platform has the right to immediately inquire the user in a reasonable manner, request the user to make a reasonable explanation of the above funds, and may require the user to provide relevant data proof according to the situation.The user shall not refuse to explain or explain these abnormal trading behaviors for any reason.
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								对于用户资金操作过程中存在可疑交易行为或大额交易行为时，本公司平台有权立即向用户以合理方式进行询问，要求用户对上述资金作出合理性解释，可根据情况要求用户提供相关资料证明，用户不得以任何理由拒绝对该等异常交易行为进行解释、说明。
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								&nbsp;
							</p>
							<p class="MsoNormal" style="margin-left:11.0000pt;">
								&nbsp;
							</p>
						</div>
						<br />
						<div class="Section2">
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								If&nbsp;the&nbsp;customer&nbsp;is&nbsp;a&nbsp;private&nbsp;person&nbsp;(natural&nbsp;person)&nbsp;the&nbsp;following&nbsp;documents&nbsp;must&nbsp;be&nbsp;collected:
							</p>
							<p class="MsoBodyText">
								若是私人（自然人）客户，必须收集以下文件：
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Full name&nbsp;details.
							</p>
							<p class="MsoBodyText">
								完整的姓名信息。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								ID&nbsp;number,&nbsp;and/or&nbsp;passport&nbsp;number&nbsp;(original&nbsp;or&nbsp;certified&nbsp;copies).
							</p>
							<p class="MsoBodyText">
								身份证号码、和/或护照号码（原件或经核证副本）。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Proof&nbsp;of&nbsp;residency-&nbsp;Copy&nbsp;of&nbsp;utility&nbsp;bill.
							</p>
							<p class="MsoBodyText">
								住处证明-&nbsp;费用账单的副本。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Swift&nbsp;confirmation&nbsp;of&nbsp;the&nbsp;bank&nbsp;transfer.&nbsp;The&nbsp;information&nbsp;of&nbsp;the&nbsp;bank&nbsp;account&nbsp;showed&nbsp;on&nbsp;the&nbsp;SWIFT&nbsp;must&nbsp;be&nbsp;identical&nbsp;to&nbsp;(a)&nbsp;and&nbsp;(b)&nbsp;above.&nbsp;Otherwise,&nbsp;the&nbsp;deposit&nbsp;must&nbsp;be&nbsp;returned&nbsp;to&nbsp;the&nbsp;same&nbsp;bank&nbsp;account&nbsp;it&nbsp;came&nbsp;from,&nbsp;immediately,&nbsp;without&nbsp;crediting&nbsp;the&nbsp;trading&nbsp;account.
							</p>
							<p class="MsoBodyText">
								SWIFT &nbsp;&nbsp;银行转帐确认。SWIFT &nbsp;所显示的银行账户信息必须与上述（a）和（b）相同，否则必须将存款立即返还至其同一来源
							</p>
							<p class="MsoBodyText">
								银行账户，而不记入交易账户。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Withdrawals&nbsp;must&nbsp;be&nbsp;made&nbsp;to&nbsp;the&nbsp;same&nbsp;bank&nbsp;account&nbsp;the&nbsp;money&nbsp;was&nbsp;deposited&nbsp;from&nbsp;(to&nbsp;prevent&nbsp;money&nbsp;transfer&nbsp;between&nbsp;different&nbsp;entities’&nbsp;bank&nbsp;accounts,&nbsp;through&nbsp;the&nbsp;Company),&nbsp;and&nbsp;in&nbsp;the&nbsp;same&nbsp;currency&nbsp;(to&nbsp;prevent&nbsp;currency&nbsp;changes&nbsp;through&nbsp;the&nbsp;Company).
							</p>
							<p class="MsoBodyText">
								提款必须转入至之前存款的同一银行账户（以防止在不同实体的银行账户之间转账），并且采用相同的货币（以防止通过公
							</p>
							<p class="MsoBodyText">
								司而出现的货币变化）。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								If&nbsp;the&nbsp;original&nbsp;account&nbsp;is&nbsp;no&nbsp;longer&nbsp;available,&nbsp;funds&nbsp;may&nbsp;be&nbsp;transferred&nbsp;to&nbsp;a&nbsp;different&nbsp;account&nbsp;of&nbsp;the&nbsp;same&nbsp;entity&nbsp;(you&nbsp;will&nbsp;need&nbsp;to&nbsp;get&nbsp;a&nbsp;copy&nbsp;of&nbsp;a&nbsp;check&nbsp;or&nbsp;other&nbsp;instrument&nbsp;proving&nbsp;the&nbsp;new&nbsp;account&nbsp;ownership),&nbsp;in&nbsp;the&nbsp;same&nbsp;currency&nbsp;and&nbsp;into&nbsp;the&nbsp;same&nbsp;country&nbsp;the&nbsp;original&nbsp;deposit&nbsp;was&nbsp;made&nbsp;from.
							</p>
							<p class="MsoBodyText">
								如果原始的账户不再可用，资金可被转移到相同实体的不同账户（而你需要出示一份支票或其他工具的副本来证明新账户的
							</p>
							<p class="MsoBodyText">
								所有权），并且是以相同的货币，以及依照原始存款来源国转至相同的国家。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								If&nbsp;the&nbsp;customer&nbsp;is&nbsp;a&nbsp;corporation&nbsp;(legal&nbsp;entity)&nbsp;the&nbsp;following&nbsp;documents&nbsp;must&nbsp;be&nbsp;collected:
							</p>
							<p class="MsoBodyText">
								若是企业（法人）客户，则必须收集下列文件：
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								All&nbsp;statutory&nbsp;documents&nbsp;(Certificate&nbsp;of&nbsp;incorporation,&nbsp;memorandum&nbsp;and&nbsp;articles&nbsp;of&nbsp;association),&nbsp;and&nbsp;amendments&nbsp;to&nbsp;them&nbsp;(original&nbsp;or&nbsp;certified&nbsp;copies).&nbsp;所有法定文件（公司的注册证书、章程大纲及细则）及相关的修正文件（原件或经核证的副本）。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Details&nbsp;on&nbsp;the&nbsp;shareholders,&nbsp;directors&nbsp;and&nbsp;ultimate&nbsp;beneficial&nbsp;owners&nbsp;(same&nbsp;details&nbsp;as&nbsp;those&nbsp;for&nbsp;natural&nbsp;persons&nbsp;described&nbsp;below).
							</p>
							<p class="MsoBodyText">
								关于股东、董事和最终受益人的详细信息（与下述自然人的信息相同）。
							</p>
							<p class="MsoNormal">
								&nbsp;
							</p>
							<p class="MsoBodyText">
								Powers&nbsp;of&nbsp;attorney&nbsp;for&nbsp;the&nbsp;persons&nbsp;carrying&nbsp;out&nbsp;interaction&nbsp;with&nbsp;the&nbsp;Company&nbsp;on&nbsp;behalf&nbsp;of&nbsp;the&nbsp;Customer&nbsp;(issuing&nbsp;orders,&nbsp;signing&nbsp;documents&nbsp;for&nbsp;opening&nbsp;the&nbsp;account&nbsp;and&nbsp;other&nbsp;procedures).&nbsp;代表客户与公司进行互动的人员委托书（发出订单，签署开立账户的文件和其他程序）。
							</p>
						</div>
						<br />
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoBodyText">
							Swift&nbsp;confirmation&nbsp;of&nbsp;the&nbsp;bank&nbsp;transfer.&nbsp;The&nbsp;information&nbsp;of&nbsp;the&nbsp;bank&nbsp;account&nbsp;showed&nbsp;on&nbsp;the&nbsp;SWIFT&nbsp;must&nbsp;be&nbsp;identical&nbsp;to&nbsp;(a)&nbsp;and&nbsp;(b)&nbsp;above.&nbsp;Otherwise,&nbsp;the&nbsp;deposit&nbsp;must&nbsp;be&nbsp;returned&nbsp;to&nbsp;the&nbsp;same&nbsp;bank&nbsp;account&nbsp;it&nbsp;came&nbsp;from,&nbsp;immediately,&nbsp;without&nbsp;crediting&nbsp;the&nbsp;trading&nbsp;account.
						</p>
						<p class="MsoBodyText">
							SWIFT &nbsp;&nbsp;银行转帐确认。SWIFT &nbsp;所显示的银行账户信息必须与上述（a）和（b）相同，否则必须将存款立即返还至其同一来源
						</p>
						<p class="MsoBodyText">
							银行账户，而不记入交易账户。
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<h2>
							<b>FAQ</b><b>&nbsp;</b><b>-</b><b>&nbsp;</b><b>Frequently</b><b>&nbsp;</b><b>Asked</b><b>&nbsp;</b><b>Questions</b>
						</h2>
						<p class="MsoNormal" style="margin-left:13.0000pt;">
							<b>常见问题</b>
						</p>
						<p class="MsoBodyText">
							One&nbsp;can&nbsp;NOT&nbsp;deposit&nbsp;from&nbsp;a&nbsp;company&nbsp;he&nbsp;owns&nbsp;–&nbsp;to&nbsp;his&nbsp;personal&nbsp;trading&nbsp;account,&nbsp;and&nbsp;vice&nbsp;versa.
						</p>
						<p class="MsoBodyText">
							任何人不能从他拥有的公司存入他的个人交易账户，反之亦然。
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoBodyText">
							One&nbsp;cannot&nbsp;get&nbsp;deposits&nbsp;from&nbsp;his&nbsp;brother/mother/other&nbsp;relative&nbsp;bank&nbsp;account;&nbsp;unless&nbsp;that&nbsp;relative&nbsp;joins&nbsp;the&nbsp;trading&nbsp;account&nbsp;(signs&nbsp;the&nbsp;trader&nbsp;agreement).&nbsp;任何人不能从他的兄弟/母亲/其他相关的银行账户中获得存款；除非该亲属加入交易账户（签署交易者协议）。
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoBodyText">
							Cash&nbsp;deposits&nbsp;to&nbsp;the&nbsp;Company’s&nbsp;account&nbsp;by&nbsp;traders&nbsp;are&nbsp;forbidden.&nbsp;If&nbsp;such&nbsp;a&nbsp;deposit&nbsp;did&nbsp;occur,&nbsp;then&nbsp;in&nbsp;case&nbsp;of&nbsp;&nbsp;a&nbsp;withdrawal&nbsp;request,&nbsp;the&nbsp;trader&nbsp;will&nbsp;need&nbsp;to&nbsp;supply&nbsp;bank&nbsp;account&nbsp;details&nbsp;of&nbsp;the&nbsp;person&nbsp;who&nbsp;made&nbsp;the&nbsp;cash&nbsp;deposit,&nbsp;with&nbsp;a&nbsp;written&nbsp;proof&nbsp;of&nbsp;the&nbsp;account&nbsp;details&nbsp;(check,&nbsp;credit&nbsp;card&nbsp;etc.).
						</p>
						<p class="MsoBodyText">
							交易者禁止向公司账户提供现金存款。若这类存款确实发生而出现提款要求，交易者需要提供该现金存款者的银行账户信息，
						</p>
						<p class="MsoBodyText">
							当中包含书面证据方式的账户细节（如支票、信用卡等）。
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoBodyText">
							Do&nbsp;not&nbsp;credit&nbsp;a&nbsp;trading&nbsp;account&nbsp;before&nbsp;the&nbsp;deposit&nbsp;was&nbsp;complete&nbsp;(i.e.&nbsp;the&nbsp;required&nbsp;business&nbsp;days&nbsp;(usually&nbsp;three)&nbsp;have&nbsp;passed&nbsp;following&nbsp;the&nbsp;deposit).&nbsp;Do&nbsp;not&nbsp;credit&nbsp;the&nbsp;trading&nbsp;account&nbsp;based&nbsp;on&nbsp;future&nbsp;payments&nbsp;or&nbsp;checks.&nbsp;请勿在存款完成之前记入交易账户（即在存款之后过了规定的营业时间（通常为&nbsp;3&nbsp;<span>个工作日）。请勿根据未来的付款或支票</span> <span>记入交易账户。</span>
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoBodyText">
							A&nbsp;client&nbsp;cannot&nbsp;transfer&nbsp;funds&nbsp;between&nbsp;trading&nbsp;accounts&nbsp;not&nbsp;under&nbsp;his&nbsp;own&nbsp;name.
						</p>
						<p class="MsoBodyText">
							任何客户不得以非自己的名义在交易账户之间转移资金。
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal">
							<br />
						</p>
					`
			}]
		}
	
	]
	
	
}