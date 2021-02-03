export default{
	tt:'Help center',
	meun: [{
		title: "FAQ",
		id: 0,
		flag:true,
		list: [{
				id: 0,
				title: "What is USDT?"
			}, {
				id: 1,
				title: "How to buy USDT?"
			}, {
				id: 2,
				title: "How to sell USDT?"
			}, {
				id: 3,
				title: "How to withdraw currencies?"
			}, {
				id: 4,
				title: "How to recharge currencies?"
			}, {
				id: 5,
				title: "Time and limit of recharge to account"
			}, {
				id: 6,
				title: "What should I do if I did not receive the currencies after the purchase?"
			}, {
				id: 7,
				title: 'What should I do if the buyer clicks "I have paid, please release the currencies" without my receiving the payment?'
			}, {
				id: 8,
				title: "How long can my order record be kept?"
			}, {
				id: 9,
				title: "What should I do after the disputed order is generated?"
			}, {
				id: 10,
				title: "What is the locked amount?"
			}, {
				id: 11,
				title: " What is the turnover quota?"
			}, {
				id: 12,
				title: "How to set the payment method?"
			}, {
				id: 13,
				title: "Password security"
			}, {
				id: 14,
				title: "Frozen bank card"
			},
			{
				id: 15,
				title: "How to place an order?"
			},
			{
				id: 16,
				title: "How to pay?"
			},
		]
	}, {
		title: "Terms of agreement",
		id: 1,
		flag:true,
		list: [{
			id: 100,
			title: "User service agreement"
		}, {
			id: 101,
			title: "YaPay Privacy clause"
		}, {
			id: 102,
			title: "YaPay Disclaimer && Anti money laundering statement"
		}]
	}, /* {
		title: "Problem feedback",
		id: 2,
		list: [{
			id: 0,
			title: "Submit questions"
		}]
	}, */
	{
		title:"Law Enforcement Request Guide",
		id:3,
		flag:true,
		list:[
			{
				id:1000,
				title:'Law Enforcement Request Guide'
			}
		]
	}
	],
	ansList: [{
			id: 0,
			list: [{
				title: "",
				font: `
					Tether USD (hereinafter referred to as USDT) is a token based on the stable currency value of USD launched by Tether company, with 1 USDT = 1 USD.
					Tether claims to strictly abide by the 1:1 reserve guarantee, that is, for every USDT token issued, its bank account will have 1 USD fund guarantee.
					Any user who holds USDT can exchange the token for legal tender at a ratio of 1:1 (deducting the remittance service charge) as long as he / she completes the user authentication at Tether company.
					The legal tender is the the reserve, and the tokens on the chain are the newly-issued legal currencies. Tether acts as the central bank.
				`
			}]
		}, {
			id: 1,
			list: [{
				title: "1、quick money purchase",
				font: `Enter the “Home Page” of YaPay mobile terminal → click “I want to buy""→ enter the quantity or amount you need to buy → click “Buy Now” → select the payment method → confirm the purchase information → click “I have paid, please release currencies” after the payment→ the seller will confirm the receipt of your payment and put the currencies into your account.`
			}, {
				title: 1,
				img: "http://219.153.20.218:8084/help/buy-quick_e.gif"
			}, {
				title: "2. Self-selection area to buy coin",
				font: 'On the YaPay mobile terminal, "Home" → click "Transaction" at the bottom → switch to the self-selection area at the top → select a seller under the "I want to buy" list → click "Go to buy" → enter the quantity or amount you need to buy → click "Immediately Purchase" → enter the pending payment interface, click "I have paid, please deposit coins" → the seller will confirm receipt of your payment and put the coins into your account.'
			}, {
				title: 1,
				img: "http://219.153.20.218:8084/help/buy-self_e.gif"
			}, {
				title: 2,
				font: "<b>Note：</b> You need to read and agree to the transaction instructions before you can make a purchase. The YaPay transaction system has a strict risk control mechanism. When YaPay finds illegal behaviors such as gambling, money laundering and fund dish, we will take the initiative to submit the information to the corresponding law enforcement department. If you cancel three orders a day, you will be deemed as malicious cancellation, and you will be punished for not trading for 24 hours."
			}]
		},
		{
			id: 2,
			list: [{
					title: "1、quick money selling",
					font: `On the "Home Page" of YaPay mobile terminal → click "I want to sell" → enter the quantity or amount you need to sell → click “Sell Now” → select the collection method → confirm the sale information → you must confirm the receipt of the buyer's payment → input the transaction password to "release currencies".`
				},
				{
					title: 1,
					img: "http://219.153.20.218:8084/help/sell-quick_e.gif"
				},
				{
					title: "2. Self-selection area to sell coin",
					font: `On the YaPay mobile terminal, "Home" → click "Transaction" at the bottom → switch to the self-selection area at the top → select a seller under the "I want to sell" list → click "Go to sell" → enter the quantity or amount you need to sell → click " "Sell now" → wait for the buyer's payment interface, you must confirm receipt of the buyer's payment → enter the transaction password to "release coins".`
				},
				{
					title: 1,
					img: "http://219.153.20.218:8084/help/selll-self_e.gif"
				},
				{
					title: 2,
					font: "<b>Note：</b>You need to read and agree to the transaction instructions before you can make a purchase. The YaPay transaction system has a strict risk control mechanism. When YaPay finds illegal behaviors such as gambling, money laundering and fund dish, we will take the initiative to submit the information to the corresponding law enforcement department. The successfully completed sales order can not be canceled."
				}
			]
		},
		{
			id: 3,
			list: [{
					title: '',
					font: `
						Click “withdraw” on the “Home” or "Wallet" of YaPay mobile terminal → fill in the "Withdrawal Address" and "Withdrawal Quantity" of the block-chain that you need to receive USDT → "Enter transaction password" → complete.
						Withdrawal address: The recharge address of currencies of the receiving side,  similar to the recipient address in the express delivery.
						Address note: It is used for you to distinguish each withdrawal, you can fill it out at will.
						Network handling fee: Charged by network miners on the block, instead of the platform. Taking USDT as an example, a single handling fee is 4-10 USDT. The higher the handling fee, the faster the payment.
						Chain name: You only need to select the chain name when withdrawing USDT. Other currencies do not need to be selected. USDT is divided into three chains: OMNI, ERC20 and TRC20. Just choose the chain that is consistent with the receiving side.
					`
				},
				{
					title: 1,
					img: "http://219.153.20.218:8084/help/tibi_e.gif"
				},
				{
					title: 2,
					font: '<b>Note：</b> in order to ensure the security of funds, when your account password is changed, we will conduct manual audit on withdrawal. Please be sure to confirm the network security to prevent the information from being tampered with or leaked.'
				}
			]
		},
		{
			id: 4,
			list: [{
					title: '',
					font: `Click “recharge” on the “Home” or "Wallet" of YaPay mobile terminal → obtain a block-chain address for recharge → transfer the USDT you need to this address by using your block-chain account to complete the recharge.`
				},
				{
					title: 2,
					font: "<b>Note：</b>Please be sure to check the recharge address of the corresponding public chain, otherwise the assets will not be retrieved. The minimum recharge amount is 20USDT, and the order for recharge on the chain can be accumulated in small amounts (fast recharge cannot be accumulated). The method of simple send is only supported in recharging currencies. Please understand that the recharge using other methods (send all) cannot be posted to the account now. In order to ensure the safety of funds, please confirm the network security to prevent information from being tampered with or leaked."
				}
	
			]
		},
		{
			id: 5,
			list: [{
					title: 2,
					font: ` <h4><b>A. How long does it take to receive the currencies recharged? What to do if it is late?</b></h4>
				 <br/> <p>Block-chain asset transfer is divided into three steps: withdrawal - block confirmation - entry.<p> 
				 </br> <p>1.Withdrawal: successful transfer means that the platform or wallet from which the currencies were withdrawn has performed the transfer operation;</p>
				 </br> <p>2. Block confirmation: complete the corresponding block confirmation. If the block is congested, delayed, etc., the digital assets will not be fully confirmed for a long time;</p>
				 </br> <p>3. Account entry: after complete confirmation, the platform will complete the account entry as soon as possible.If the block is not fully confirmed, please wait patiently. Only after the confirmation, the platform can credit for you.If the block has been fully confirmed, but the YaPay account has not received the currencies, please contact online customer service or submit a work order for processing.</p>
				 `
				},
				{
					title: 2,
					font: ` <h4><b> B、How long does it take to withdraw currencies? What to do if it is late? </b></h4>
					  <br/><p>After the application for withdrawal is completed, the following status will be displayed in the withdrawal record according to the withdrawal situation:</p>
					  <br/><p>Waiting for withdrawal: the withdrawal application has been submitted and you need to wait for the withdrawal operation. (In case of congestion of withdrawal demand, please wait in line)Manual review: according to the judgment of the YaPay system, some withdrawal requirements require manual review, which will be confirmed by customer service personnel on the phone.</p>
					  <br/><p>Withdrawing: the system is processing the export for you. At this time, humans cannot participate in the operation, please wait patiently.</p>
					  <br/><p>Successful withdrawal: the asset has been withdrawn from the platform. You can go to the corresponding block to check.If the successful withdrawal cannot be found in the block more than 48 hours, a work order can be submitted for review and processing.</p>
				 `
				},
				{
					title: 2,
					font: ` <h4><b> C、What is the withdrawal limit? </b></h4> 
						<br/> <p>The limit is determined according to the user's account authentication level and transaction volume level. For details, you can check the withdrawal amount in the upper right corner of the fund management - withdrawal page.</p>
				`
				}
	
			]
		},
		{
			id: 6,
			list: [{
				title: '',
				font: 'In the transaction process, if the seller does not confirm and release the currencies within the time limit after you correct payment, you can wait for the "currencies unreceived" to be lit in the order interface, and click the button to mark the order as an "disputed order" for customer service’s processing. You can also enter the customer service floating window to provide order number and payment voucher for processing.'
			}]
		},
		{
			id: 7,
			list: [{
				title: '',
				font: 'During the transaction, if you have not received the buyer’s payment, but the buyer has already confirmed the payment, then you can wait for the "Payment Unreceived" to be lit in the order interface and click the button to mark the order as "disputed order" for customer service’s processing. You can also enter the customer service floating window to provide order number and payment voucher for processing.'
			}]
		},
		{
			id: 8,
			list: [{
				title: '',
				font: 'We will save your order for you for a long time, and we will display 100 recent records regularly. It may be relatively slow to load when you query more order records.'
			}]
		},
		{
			id: 9,
			list: [{
				title: '',
				font: 'An disputed order refers to a situation in which the buyer and seller have a transaction dispute during the transaction. If the seller does not receive the payment after the buyer makes the payment, click "payment unreceived", at this time, the customer service will intervene to handle it. The status of the disputed order will continue until the processing is completed (when you ignore the order reminder, our arbitration will be biased towards the party providing the evidence. In order to avoid unnecessary losses, please actively cooperate with the customer service to process the disputed order)'
			}]
		},
		{
			id: 10,
			list: [{
				title: '',
				font: 'The locked amount includes the amount of USDT temporarily locked in your selling order and the amount of USDT in the case of status changes or disputes/freezing in your account. Your total amount is composed of available amount + locked amount.'
			}]
		},
		{
			id: 11,
			list: [{
				title: '',
				font: `Turnover quota refers to the corresponding quota (1:1) obtained by spending USDT in your account at any merchant. The turnover quota will be used in conjunction with YaPay's preferential activities.`
			}]
		},
		{
			id: 12,
			list: [{
				title: '',
				font: ' Click "My" → "Collection and Payment Settings" → "Add" → Enter/upload the corresponding payment method → Save'
			},
			{
				title: 1,
				img:"http://219.153.20.218:8084/help/paygetway_e.gif"
			},
			]
		},
		{
			id: 13,
			list: [{
				title: 2,
				font: `<h4><b> What should I do if I forget the login password? </b></h4> 
					<br/><p>If you forget the login password, you can reset the login password through your mobile phone or email.</p>
					<br/><h4><b>  B、 How to change the login password? </b></h4> 
					<br/><p>Open YaPay, go to "My" - "Account Security" - "Login Password", and then click "Change Password" to change the login password.</p>
					<br/><h4><b>  C、 How to change/retrieve the transaction password? </b></h4> 
					<br/><p>Open YaPay, go to "My" - "Account Security" - "Transaction Password", click "Change Password", the system will send an email to retrieve the transaction password to your bound mobile phone/email.</p>
				`
			}]
		},
		{
			id: 14,
			list: [{
					title: 2,
					font: ` <p>Frozen types (2)</p><br/>
					<h4><b> A、Frozen PBOC transfer system </b></h4> 
					<br/><p>Note：If the transfer flow is too large, the transfer remarks (such as remarks to USDT and BTC) may be frozen.</p>
					<br/><p>Solution: submit the materials required by the bank and cooperate with the processing. Generally, it will be thawed within three working days.</p>
					<br/><h4><b> B、Judicial freeze </b></h4> 
					<br/><p>Note: the reason for freezing is that there is a money of telecommunication fraud, which is reversed several times before reaching the platform. When the victim reports to the police, the cards along the money's transfer route will be frozen.</p>
					<br/><p>There are two types of judicial freeze:</p>
					<br/><p>1. Temporary freeze by police (36-72 hours). Generally speaking, it means that your card is not a card that accepts black money directly. Wait patiently, and it will be automatically unfrozen when it expires.</p>
					<br/><p>2. The police request the people's court to freeze, and the freezing period can be extended from six months to one year until the case is closed or withdrawn.  Solution: The first type of judicial freeze is easy to handle, and it will usually be automatically unfrozen when it expires; if it is frozen for half a year, contact the public security bureau that freezes you, bring a recent transaction certificate, and the bank's printed transaction (usually half a year) stamped with the official seal. Go to the local public security bureau to make a transcript. Generally, it will be unfrozen in about a week (the regulations of each public security bureau are different, some are able to unfreeze some assets after receiving the materials, and some will wait for the case close).</p>
					<br/><p>PS:After being frozen, contact the account opening bank or the bank’s telephone hot-line to obtain the following information: freezing period, freezing method (bank freezing or judicial freezing), and freezing agency.</p>
			`
				},
	
			]
		},
		{
			id: 15,
			list: [{
				title: '',
				font: `On the YaPay mobile terminal, "Home" → click "Transaction" → switch to the self-selection area at the top → click the "Publish" floating icon at the bottom right of the screen or the "Publish" icon at the top right of the screen → enter the order release interface, fill in the corresponding content → click "Release commission" → select "Receipt and payment method" → confirm the content of the publication commission → click "Confirm" to publish your "buy/sell" commission. '`
			},
			{
				title:"I want to buy"
			},
			{
				title: 1,
				img: "http://219.153.20.218:8084/help/weituo-buy_e.gif"
			},
			{
				title:"I want to sell"
			},
			{
				title: 1,
				img: "http://219.153.20.218:8084/help/weituo-sell_e.gif"
			},
			]
		},
		{
			id: 16,
			list: [{
				title: '',
				font: `On the YaPay mobile terminal, "Home" → click "Payment" → select "Account Payment" → enter the counterparty ID or mobile phone number/email number (the phone number and e-mail number must be registered with YaPay) → fill in the payment amount and click confirm → enter the transaction Password → payment is successful. '`
			},
			{
				title: 1,
				img: "http://219.153.20.218:8084/help/pay_e.gif"
			},
			]
		},
	
		
		{
			id:1000,
			list:[
				{
					title:2,
					font:`
							<section class="article-info">
							        <div class="article-content">
							          <div class="article-body"><p><strong>1. INTRODUCTION</strong></p>
							<p>&nbsp;</p>
							<p>We will respond to law enforcement requests from authorized law enforcement officials with proof of authority. This Law Enforcement Request Guide explains how authorized law enforcement officials can engage and contact us to request customer information.</p>
							<p>To facilitate the processing, we require the requests be addressed to the specific legal entity(ies). In the event that law enforcement is not sure which entity the request needs to be addressed to, please list all the legal entities found below, along with proper Mutual Legal Assistance Treaty related documents if cross-border law enforcement is involved. As disclosed in our Terms of Services, the services of yaotc.com are being provided by the following entities, depending on the user’s location and date of sign-up:</p>
							<p><u>Italian and Maltese residents that signed up after October 31, 2018</u>&nbsp;– Creative Tower, Fujairah, UAE</strong>  (“YaPay”)offered by <strong>YaPay</strong>, a Malta registered company (“YaPay”).</p>
							<p><u>Non-Italian and non-Maltese residents as well as Italian and Maltese residents that signed up before November 1, 2018</u>&nbsp;– <strong>Aux Cayes FinTech Co Ltd</strong>, a Seychelles registered company &nbsp;(“Aux Cayes”).</p>
							<p>&nbsp;</p>
							<p><strong>2. FOR MALTESE AND ITALIAN LAW ENFORCEMENT</strong></p>
							<p>&nbsp;</p>
							<p><strong>Creative Tower, Fujairah, UAE</strong>  (“YaPay”)is responsible for processing requests related to Maltese and Italian law enforcement in accordance with our terms of service, our privacy policy, and applicable law.</p>
							<p>Please direct law enforcement requests to the following email address:</p>
							<p><span><u><a href="mailto:ya@yaotc.com">ya@yaotc.com</a></u></span></p>
							<p>&nbsp;</p>
							<p><strong>Aux Cayes FinTech Co Ltd</strong>&nbsp;is responsible for processing requests related to Maltese and Italian law enforcement in accordance with our terms of service, our privacy policy, and applicable law.</p>
							<p>Please direct law enforcement requests to the following email address:</p>
							<p><span><u><a href="mailto:ya@yaotc.com">ya@yaotc.com</a></u></span></p>
							<p>&nbsp;</p>
							<p><strong>3. FOR ALL OTHER LAW ENFORCEMENT</strong></p>
							<p>&nbsp;</p>
							<p><strong>Aux Cayes FinTech Co Ltd</strong>&nbsp;is responsible for processing requests related to all other law enforcement from all jurisdictions, in accordance with our terms of service, our privacy policy, and applicable law.</p>
							<p>Please contact the following email address for all other enforcement requests:</p>
							<p><span><u><a href="mailto:ya@yaotc.com">ya@yaotc.com</a></u></span></p>
							<p>&nbsp;</p>
							<p><strong>4. REQUIRED INFORMATION</strong></p>
							<p>&nbsp;</p>
							<p>To aid the expeditious review of information requests, international law enforcement officers should provide in the request:</p>
							<ul>
							<li>Name of the law enforcement authority;</li>
							<li>Proof that the officer is authorized to request the information (proof of authority) and current position within the law enforcement organization;</li>
							<li>Proof of identification of the officer within the law enforcement organization (e.g. badge number, internal ID number);</li>
							<li>Email address from a government domain;</li>
							<li>Contact information (email address, number) from the governmental organization;</li>
							<li>The name of the specific legal entity where you require the information from;</li>
							<li>Specifics of request, including:
							<ul>
							<li><span></span>Subpoena identifier-number in the subject line</li>
							<li><span></span>How we should authenticate the subpoena, such as call-back procedure</li>
							<li><span></span>Any public address or transaction IDs in text format or an Excel file (not PDF)</li>
							<li><span></span>State a reasonable deadline</li>
							<li><span></span>Mutual Legal Assistance Treaty request for international law enforcement</li>
							</ul>
							</li>
							</ul>
							<p>&nbsp;</p>
							<p><strong>5.&nbsp;LAW ENFORCEMENT EMERGENCY REQUESTS</strong></p>
							<p>&nbsp;</p>
							<p>For extremely urgent requests, such as when there is risk of death or serious physical danger to a person, please state URGENT REQUEST in the Subject Line.</p>
							<p>&nbsp;</p>
							<p><strong>&nbsp;</strong></p></div>
							
							          <div class="article-attachments">
							            <ul class="attachments">
							              
							            </ul>
							          </div>
							        </div>
							      </section>
					`
					
				}
			]
		},
	
	
		//协议
		{
			id: 100,
			list: [
				{
					title:2,
					font:`
					
						<p class="MsoNormal" align="center" style="text-align:center;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Thank you for choosing YaPay service. YaPay Lab is a company registered and operated&nbsp;in Dubai&nbsp;with its registration number 15240/2019. YaPay, as an over-the-counter trading and payment service platform, aims for service users to exchange their local and digital currencies with being applied to multiple industry scenarios. The platform allows users to complete a new USDT purchase order or a USDT sale order at the our guided price. Using the services of this platform stands for your recognition and consent on the terms and conditions of this agreement. In the case if you do not agree to these terms of service as well as their modifications, please do not use this platform.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Using the platform or our services will be deemed&nbsp;as your&nbsp;irrevocable&nbsp;agreement&nbsp;to these terms and conditions.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Please note that you are expected to visit this page regularly&nbsp;referring to the revision and modification of these terms of service. Please review the current terms of service before conducting business. Your continued use of the site will be considered as acceptance of any revised content.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Nevertheless, we will try our best to notify&nbsp;you of any changes to these terms of service as well as the&nbsp;significant impact of these terms on your rights and obligations.&nbsp;Your account can only be used by yourself. The platform will not be responsible for any property loss caused by your lending the account to others. You are responsible for maintaining proper security and controlling all accounts, passwords, or any other codes or credentials you use to access the service. You may not sell, borrow, share or even provide any necessary details to other persons or entities for the access to your account.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Your account must not contain misleading or fraudulent information, including but not limited to possessing a non-personal phone number, forging false reputation information for your account, forging your country of origin, or providing fraudulent identification documents and other supporting documents.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							You may required to complete your identity verification at any time, or may be required to submit additional identity certificates and other supporting documents to us when we deem it necessary. Failure to complete the identity verification will be considered a violation of this agreement.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							&nbsp;
						</p>
						<br />
						<p class="MsoNormal">
							<b>Scope of </b><b>A</b><b>pplication</b><b></b>
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							This service is only applicable to users aged 18 or above.&nbsp;Accessing or using our service represents your statement and guarantee that you are at least 18 years old and have not been deprived of the right to apply this service, as well as that you are not on any trade or economic sanctions list, such as the UN Security Council sanctions list, nor are you restricted or prohibited from participating in any type of transaction by the European Union, Hong Kong Monetary Authority, Hong Kong Customs, Overseas Assets Control Office of the U.S. Department of the Treasury and other administrative and law enforcement agencies.&nbsp;&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Our service is not available in all countries or regions, and is partially or not provided to users in certain restricted areas. currently including Hong Kong, Cuba, Iran, North Korea, Crimea, Sudan, Malaysia, Syria and the United States (including all United States territories such as Puerto Rico, American Samoa, Guam, Northern Mariana, and the United States Virgin Islands (St. Croix, St. John and St. Thomas), Bangladesh, Bolivia, Ecuador and Kyrgyzstan. The contents of these terms shall not be excluded by the laws of the country or region to which the user belongs. As a result, you are not allowed to use our service in the condition of not meeting these requirements.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							&nbsp;
						</p>
						<p class="MsoNormal">
							<b>Risks of </b><b>D</b><b>igital </b><b>A</b><b>ssets</b><b></b>
						</p>
						<p class="MsoNormal">
							&nbsp; &nbsp;&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Digital assets, as known as virtual financial assets, convertible virtual currencies, cryptocurrencies, virtual currencies, digital currencies or digital commodities, includes BTC, USDT or ETH, etc., which are based on the cryptographic protocol of the computer network. The protocol can be (i) centralized or decentralized, (ii) closed or open source, and (iii) used as a medium of exchange and/or value storage. Digital currency relies on blockchain technology and the system, exposing it to security shocks, such as computer system hacking. Moreover, any currency-related assets will face the risk of collapse of the economic system.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							You need to understand and agree that our services are provided in accordance with the current technology and conditions.&nbsp;Although we have tried our best to ensure the continuity and security of our services, we can not fully foresee and prevent the possible service interruption, data loss and other losses and risks due to legal, technical and other risks, including but not limited to force majeure, viruses, Trojans, hacker attacks, system instability, third-party service defects, government actions and other reasons. We will not be liable for damages if the system platform fails to operate normally due to the above conditions and thus making users unable to use the services.
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<br />
						<p class="MsoNormal">
							<b>Order and Trade</b><b></b>
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							With a registered account, you can create USDT to buy or sell USDT. The system will help you match a corresponding counterparty to start USDT OTC trading.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Initiating a USDT transaction means that you agree and accept the user agreement of this site and accept the instant price.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							After the order is successfully matched, the price of the digital currency is locked, and no additional fees can be changed or increased in this transaction.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							You must complete the payment in accordance with the valid payment details provided by the C2C platform. The platform is not responsible for transaction disputes arising from payment channels other than the payment methods provided by the C2C transaction system.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							USDT undertakes the role of escrow throughout the whole transaction until the seller confirms that the full payment has been received.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							According to our requirements, when there is a transaction dispute, the buyer needs to provide proof of payment within 48 hours, including the serial number&nbsp;of transfer.&nbsp;Where there is reason to believe that the buyer is engaging in fraudulent activities, we can provide the buyer's information to the seller to recover funds and prevent or detect fraudulent activities. The extent of information disclosure is based on what we believe is necessary to achieve the above purpose, including but not limited to the buyer's contact information, login and transaction records and/or any details and records, and the buyer's identity verification measures.
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<br />
						<p class="MsoNormal">
							<b>Transaction Disputes of Digital Assets</b><b></b>
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							If there is a dispute between the buyer and the seller in the transaction, either party can resolve it through the YaPay customer service staff. You irrevocably authorize YaPay to release the disputed digital currency to the buyer based on the payment evidence of the transaction terms, the user's reputation, and the relevant provisions of the privacy policy.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							The automatic cancellation of the order caused by the buyer’s failure of operation will be deems as the cancellation without disputes, overturn or change.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Providing fraudulent information or documents in a dispute, or making a claim in a false manner, or otherwise attempting to force the transaction in favor of itself shall be deemed a breach of this agreement.&nbsp;If we find that your account creates a risk of fraud that puts YaPay or our customers at risk, we will temporarily restrict your account's use and service rights, and in extreme cases, even permanently suspend your account service.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							In addition, we have the right to suspend, restrict or terminate the use of your account at our discretion when:
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							1. We have reason to believe that the service you use violates local laws or regulations, or you use the service in a fraudulent manner, or violate the purpose of this agreement;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							2. We have reason to believe that you have provided false, misleading or deceptive information when you register, verify your identity, trade or use any service on this platform;
						</p>
						<p class="MsoNormal">
							<br />
						</p>
						<p class="MsoNormal">
							Any applicable laws, regulations or orders issued by competent authorities.
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<br />
						<p class="MsoNormal">
							<b>P</b><b>ayment </b><b>S</b><b>ervice</b><b>&nbsp;of Digital Assets</b><b></b>
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							We provide you with non-financial institution payment service, a digital asset transfer service entrusted by you to collect and pay on your behalf; collection and payment service refers to the service we provide for you to collect or pay on your behalf.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							You can receive payment for digital assets from others by our collection and payment service. Specifically, it refers to the whole process from the time when you entrust us to recharge your digital assets in other blockchain wallets to your yapay account or entrust us to collect the payment for digital assets paid by a third party to your yapay account or your other wallet account according to your instructions.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							You can make payment to the third party designated by you&nbsp;through the payment service. Specifically, it refers to the whole process from the time when the payment is paid out from the YaPay account designated by you to the YaPay account or block-chain account of a third party according to the instructions given by you or the authorized party; or the whole process from the time when you entrust us to transfer your digital assets in yapay to your or someone else’s block-chain account according to this agreement or from the time you entrusted us to collect the relevant funds and charge them to your YaPay&nbsp;account, to the time when you entrust us to record all or part of the above funds to the YaPay account or block-chain account of a third party according to the instructions given by you or the authorized party.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							After you send us an instruction to collect and pay on your behalf, the instruction is irrevocable without legal procedures or in accordance with this agreement.
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal">
							<b>Our </b><b>C</b><b>ommitment and </b><b>S</b><b>tatement</b><b></b>
						</p>
						<p class="MsoNormal">
							<b>&nbsp;</b>
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							YaPay is not a bank or other centralized financial institution. The fund transfer involved in this agreement is realized through block-chain. You accept the reasonable time of fund transfer during the transfer.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Based on the relevant laws and regulations, we are unable to provide guarantee and advance funds for the services under this agreement.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							We will manage the money you entrust us to collect or pay for us in strict accordance with the laws and regulations or the regulatory requirements of the competent authorities.&nbsp;We draw your attention to the fact that the digital asset balance recorded in the YaPay account is different from your own legal currency deposit and is not protected by the “Deposit Insurance Regulations”. It is actually the value of the prepaid digital asset that you entrust us to keep and whose ownership belongs to you.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Due to the centralization and decentralization of YaPay digital asset wallet, we promise that the digital currency of users in YaPay escrow account shall be regarded as the user's property, and the acquisition of this property interest can also be guaranteed by the grant of inheritance right.&nbsp;Before canceling the account, the balance of funds in the account must be 0. If the account holder dies, the relevant heirs of the account holder can provide corresponding certificates to apply to YaPay to withdraw the account balance. The specific requirements for providing certificates are as follows:
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Testamentary successor:
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							1. The will of the account holder;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							2. Scanned copies of the front and back of the original identity document of the applicant's country or region;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							3. The applicant's letter of commitment (testamentary inheritance);
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							4. The death certificate of the account holder; if the amount in the account is greater than or equal to US$5,000, valid legal documents (such as court judgments) need to be provided, and no death certificate is required.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							&nbsp;
						</p>
						<br />
						<p class="MsoNormal">
							User's Promise to Use YaPay Legally
						</p>
						<p class="MsoNormal">
							<b>&nbsp;</b>
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							1. You are required to carry out business activities in compliance with the laws and regulations of the country or region where you belong or live. You shall not use our services for illegal purposes (including for prohibiting or restricting the trading of goods), or use our services in an illegal way.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							2. You are not allowed to use our services to engage in infringement of the legitimate rights and interests of others or violate national laws and regulations, otherwise we have the right to investigate, delay or refuse to settle accounts or stop providing services, and you need to bear the relevant legal liabilities. If we or other parties are damaged, you need to bear the compensation liability.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							3. The above 1 and 2 are applicable to, but not limited to:
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:26.2500pt;">
							(1) Infringing&nbsp;upon the legitimate rights and interests of others, such as reputation right, privacy right, trade secret, trademark right, copyright, patent right, etc;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:26.2500pt;">
							(2) Breach of confidentiality obligations;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							(3) Using&nbsp;our services in the name of others;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							(4) Suspected illegal transactions, such as money laundering, terrorist financing, gambling, trafficking in guns, drugs, banned drugs, pirated software, pornographic articles, and other articles that we believe are not allowed to use our services for trading;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							(5) Providing&nbsp;gambling information or inducing&nbsp;others to participate in gambling in any way;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							(6) Unauthorized use of other related accounts;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							(7) Conducting&nbsp;a transaction that is inconsistent with the content of the transaction claimed by you or the other party, or an untrue transaction;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							(8) Engaging&nbsp;in behaviors that may infringe on our service system and data.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							4. The account is for personal use only. You need to fully understand and clearly understand the relevant legal responsibilities and disciplinary measures for renting, lending, selling, and purchasing accounts, and promise to open and use your own account in accordance with laws and regulations.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							5. You understand that our services depend on the accurate operation of the system. In the event of system errors, malfunctions, improper profits for you or us, etc., you agree that we can take appropriate corrective measures such as correction of errors and deductions.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							6. You are not allowed to crack our systems and programs by reverse engineering, copy, modify, compile, integrate or tamper with the above systems and programs (including but not limited to source programs, target programs, technical documents, client to server data, and server data), or modify or increase or decrease the functions of our system.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							7. You may not use YaPay services (including websites related to YaPay services) or obtain data related to YaPay services through YaPay official programs, machines, scripts, crawlers, or other automated methods by yourself or by allowing third parties. You can only use YaPay services through your own manual operation.
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<br />
						<p class="MsoNormal">
							<b>Exemption Clauses</b><b></b>
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							We are exempt from responsibility if we are unable to provide services normally due to the following reasons:
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							1. Our system is down for maintenance or upgrade;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							2. Force majeure such as typhoon, earthquake, flood, lightning or terrorist attack;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							3. Your electronic equipment software and hardware, communication lines, and power supply lines are malfunctioning;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							4. Your improper operation or using our services in a way that is not authorized or approved by us;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							5. Virus, Trojan horse, malicious program attack, network congestion, system instability, system or equipment failure, communication failure, power failure, block-chain main network reason, third-party service defect or government behavior and other reasons.
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							Notwithstanding the provisions of the preceding paragraph, we will take reasonable actions to actively promote the normalization of services.
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<br />
						<p class="MsoNormal">
							<b>Application of </b><b>L</b><b>aw and </b><b>J</b><b>urisdiction</b><b></b>
						</p>
						<p class="MsoNormal">
							&nbsp;
						</p>
						<p class="MsoNormal" style="text-indent:21.0000pt;">
							The validity, interpretation, modification, execution and dispute resolution of this agreement shall be governed by the federal law of the UAE and the law of the Emirate of Dubai. Disputes arising from this agreement shall be dealt with in accordance with the laws of the Emirate of Dubai, and shall be under the jurisdiction of the people's court where the defendant is domiciled.
						</p>
					
					`
				}
			]
		}
		,
		{
			id:101,
			list:[
				{
					title:2,
					font:`
						<p class="MsoNormal" align="center" style="margin-left:-3.0000pt;text-align:center;">
							<br />
						</p>
						<p class="MsoNormal">
							<b>1</b><b>&nbsp;Introduction</b>
						</p>
						<p class="MsoNormal">
							<b><br />
						</b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							Thank you for visiting YaPay. Your use of service on this website will be provided by&nbsp;one of&nbsp;the Yapay's entities (collectively referred to as "us" or "our"): YaPay Lab. If you are&nbsp;a legal citizen of Hong Kong&nbsp;Special Administration Region, Cuba, Iran, North Korea, Crimea, Sudan, Malaysia, Syria, the United States [including all U.S.&nbsp;territories such as Puerto Rico, American Samoa, Guam, Northern Mariana Island, and the U.S. Virgin Islands (St. Croix, St. John, and St. Thomas)], Bangladesh, Bolivia, Ecuador and Kyrgyzstan, and are allowed to use our OTC transaction service and USDT application service, access or use YaPay and related application program interfaces or mobile applications, it means that you agree with regulations and practices&nbsp;of<i>&nbsp;the Yapay Privacy Policy</i>&nbsp;(hereinafter&nbsp;referred to as&nbsp;"Privacy Policy ”). For your own sake, please&nbsp;read this article carefully.
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							This Privacy Policy explains what&nbsp;kind of&nbsp;data we collect, how we use, store&nbsp;and share&nbsp;this&nbsp;kind of&nbsp;data. If you do not wish to use your personal data in the manner described in this Privacy Policy (defined below), you must not use this website or any service, software, API (application programming interface), technology, product and/or function ("service")provided by this website.
						</p>
						<br />
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>2 Definitions</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							Digital Assets
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							"Digital Assets" refer to digital property (also called as "virtual financial assets", "convertible virtual currency", "cryptocurrency", "virtual currency", "digital currency" or "digital goods"), such as Bitcoin or Ethereum. These assets are based on the cryptographic protocol of computer networks. Such protocols can be (i) centralized or decentralized, (ii) closed or open source, and (iii) used as a medium of exchange and/or value storage.
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							Personal Data
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							"Personal Data" refers to any information that, alone or in combination with other data, enables you to be directly or indirectly identified, such as your name, email address, account name, contact information, identification number, location data, online identifier ( such as IP address and device ID, or one or more factors specific to your physical, economic, cultural or social identity).
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<b>3 Personal Data We Collected</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							The personal data collected, processed and stored by YaPay is obtained through your use of our services&nbsp;or under your consent. Such personal data may include contact information, a copy of the identity information you provided or derived from publicly accessible databases, an ID card number issued by government, or any information related to your device or Internet service (such as IP address, location and MAC number).
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							We collect the information you provide during your registration process on the YaPay platforms, which may come from completed, incomplete or obsolete registration processes. We also collect personal data when you communicate with us through customer support, subscription&nbsp;to marketing information, or contacting&nbsp;via phone, email or other communication channels. We collect, use, store and transfer your personal data, which may include the following:
						</p>
						<br />
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<u>Individual User</u><u></u>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Email address
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Mobile phone number
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Full legal name (including previous names and local language names)
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Nationality
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Social Security Number ("SSN"), passport number or any government-issued ID&nbsp;card&nbsp;	number
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Date of Birth
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Proof of identity (such as passport, driving license or government-issued identity certificate)
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Residential address
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Proof of residence
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Additional personal data or documents required at the discretion of our compliance team
						</p>
						<br />
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<u>Company User</u><u></u>
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							<br />
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Company legal name (including legal name in local language)
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Registration information
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Full legal names of all beneficial owners, directors and legal representatives
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Address (main location of business and/or other physical place of business)
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Proof of legal presence
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Business description
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Ownership percentage of individual/company owner
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Contact information of owner, person in charge and executive managers (if applicable)
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Identity certificates&nbsp;(such as passport, driving license or government-issued identity 	certificate)&nbsp;of the individual beneficial owners of an entity&nbsp;who owns 10% or more of the 	clients of the entity
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Personal data of the beneficial owners&nbsp;of an entity that owns 10% or more of the clients 	of the entity (for personal data, please refer to the&nbsp;above&nbsp;"Individual User " part)
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Source of wealth
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Amount of&nbsp;injected legal currency
						</p>
						<p class="MsoNormal" style="margin-left:15.0000pt;text-indent:-18.0000pt;">
							·&nbsp;Estimated amount of injected&nbsp;virtual currency
						</p>
						<br />
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<b>4 How We Use Your Personal Data</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							YaPay uses personal data to manage, deliver, improve and provide personalized services for you. YaPay may also generate general data from any personal data we collect for our own use. We may also use this data to communicate with you about other products or services provided by YaPay and/or its partners. Unless we have obtained your consent, or unless the following circumstances appear, we will not share your personal data with third parties (except for partners related to YaPay services).
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							We may share your personal data with third parties,
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="background:#FFFFFF;">
							(a) when&nbsp;we think it is necessary to share your personal data so as to&nbsp;implement the terms of service;
						</p>
						<p class="p" style="background:#FFFFFF;">
							(b) when we need to comply with the requirements of governmental&nbsp;agencies, including regulatory agencies, law enforcement and/or judicial departments;
						</p>
						<p class="p" style="background:#FFFFFF;">
							(c) when third parties&nbsp;provide Yapay&nbsp;with such services (e.g., administrative or technical services);
						</p>
						<p class="p" style="background:#FFFFFF;">
							(d) when third parties are related to the sale or transfer of our business or any part of it.
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							Moreover, we have adopted international standards to prevent money laundering, terrorist financing, evasion of trade and economic sanctions, and we will implement them when the final virtual asset terms and rules become effective. This requires us to conduct diligent surveys&nbsp;on our users. This may include compare your personal information with&nbsp;data from third&nbsp;parties and&nbsp;service providers.
						</p>
						<br />
						<p class="MsoNormal">
							<b>5 How We Store Your Personal Data</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							The data we collect from you may be transferred or stored to a destination outside the country&nbsp;you live. This&nbsp;kind of&nbsp;data may also be processed&nbsp;outside&nbsp;the country&nbsp;you live by staff who work for us or for our suppliers. Your act of submitting your personal data means that you agree with our transfer, storage or processing of your data, except as described above.
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<b>6 Access, Modification and Deletion of Your Personal Data</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							You have the right to obtain a copy of your personal data upon request, and to determine whether the information we hold about you is accurate and latest. If any of your personal data is inaccurate, you can request to update your information. You can also request the deletion of your personal data, but we may refuse your deletion request under certain circumstances, such as for legal requirements or other legal purposes. For data access, modification or deletion requests, please contact&nbsp;support@YaPay.com&nbsp;and write the purpose of "Data Inquiry".
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							In response to data access, modification or deletion requests, we will verify the identity of the requesting party to ensure that he/she is legally entitled to make such requests. Although our goal is to respond to these requests free of charge, we reserve the right to charge you a reasonable fee if your request is repeated or onerous.
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<b>7 Marketing</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							We will share company news, promotional information and information about products and services provided by YaPay with you&nbsp;from time to time. We may share personal data with or send marketing messages&nbsp;to third parties to help us with marketing and promotion projects. When&nbsp;using YaPay, you accept this Privacy Policy and agree to accept such marketing communications.
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							You can choose not to be notified of these marketing communications at any time. If you do not want to receive these communications, please send an email to support@YaPay.com.
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							For important information&nbsp;related to our products, such as policy/term updates and operation notices, you will not be able to opt out of receiving such information.
						</p>
						<br />
						<p class="MsoNormal">
							<b>8 Use of Cookies</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							When you visit YaPay&nbsp;website, we may place a small amount of data (Cookies) in accordance with industry practices to be saved by your browser. This information will be placed on your computer or other device used to access YaPay&nbsp;website. This information helps us to know your identity&nbsp;and collect information about your use of YaPay to better customize our services and improve your experience. We may also use the collected information to ensure compliance with the Bank Secrecy Act ("BSA") and Anti-Money Laundering ("AML") program ("BSA/AML&nbsp;Plan"), and to ensure that the security of your account will not&nbsp;be&nbsp;affected&nbsp;by detecting&nbsp;irregular or suspicious account activities.
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							Most browsers are set to automatically accept Cookies. When you finish browsing or operations&nbsp;on websites, some cookies will expire, and some cookies will remain on your computer or other device until they are deleted or expired. You can choose to refuse to use our cookies, but this may affect the function of YaPay services or your user experience.
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<b>9 Information Security</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							We are committed to protecting YaPay and you from unauthorized access, alteration, disclosure or destruction of the personal data we collect and store. We take various measures to ensure information security, including using&nbsp;SSL to encrypt YaPay communications; ensuring that all sessions require two-factor identity authentication; regularly reviewing&nbsp;our personal data collection, storage and processing procedures; restricting&nbsp;our employees and suppliers in terms of access to your data&nbsp;based on necessary principles;&nbsp;and ensuring that&nbsp;our employees and suppliers comply with strict confidentiality obligations&nbsp;of relevant contracts and agreements.
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<b>10. Contact YaPay about </b><b>P</b><b>rivacy </b><b>Questions </b><b>or </b><b>C</b><b>oncerns</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							If you have any questions about this Privacy Policy or the use of your personal data, please contact us by sending an email to support@YaPay.com&nbsp;(titled "Privacy Request").
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<b>11. Modification of Privacy Policy</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							We may update this Privacy Policy at any time by publishing a revised version (including the effective date of the revised version) on our website, so please check it frequently for any updates and changes.
						</p>
						<p class="MsoNormal" style="margin-left:-3.0000pt;">
							<br />
						</p>
						<p class="MsoNormal">
							<b>12. </b><b>L</b><b>anguage</b><b></b>
						</p>
						<p class="p" style="margin-left:0.0000pt;text-indent:0.0000pt;background:#FFFFFF;">
							<br />
						</p>
						<p class="MsoNormal">
							This Privacy Policy&nbsp;may be published in different languages. In case of any discrepancies, the English version shall prevail.
						</p>
					`
				}
			]
		},
		{
			id:102,
			list:[
				{
					title:2,
					font:`
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
				}
			]
		}
	
	]
			
}