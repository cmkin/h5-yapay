<template>
	<div class="view_quickSale_c2c global_main">
		<div class="dhl  clearfix">
			<div class="global_main">
				<div class="type">
					<span @click="changeType(index)" :class="{ active: typeActive == index }" v-for="(item, index) in $t('quickSale.c2c.typeTitle')">{{ item }}</span>
				</div>

				<div class="min_input hide_s">
					<input v-model="minMoney" @keyup="moneyChange" :placeholder="$t('quickSale.c2c.zx')" type="number" />
					<span>{{ sysInfos.hv.dw }}</span>
				</div>

				<div class="type_change min_input hide_s">
					<!-- <van-dropdown-menu active-color="#0466C8">
						<van-dropdown-item v-model="payType" :options="payTypes" get-container=".view_quickSale_c2c .type_change" />
					</van-dropdown-menu> -->

					<myselect v-model="payType" @change="getlist" :lists="payTypes" showKey="text"></myselect>
				</div>

				<!-- <van-button class="hide_s" :loading="btnLoading" @click="getlist(1)" type="info" style="margin-left: 30px;height: 38px;">{{ $t('global.base.ok') }}</van-button> -->

				<div class="fb hide_s" @click="openOrderForm">
					<svg t="1601171811581" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3156" width="20" height="20">
						<path
							d="M352.376267 760.009763C350.834511 761.551537 344.542685 764.999821 342.477506 765.457002L180.527334 801.308566 222.635043 843.416258 258.486607 681.466086C258.968311 679.290121 262.315961 673.185192 263.933828 671.567325L802.537066 132.964087C816.326621 119.17455 816.326621 96.817276 802.537066 83.027721 788.747511 69.238184 766.390237 69.238184 752.6007 83.027721L213.997462 621.630958C202.867871 632.76055 192.923842 650.894883 189.535232 666.202041L153.683668 828.152232C148.102938 853.36177 170.581839 875.840671 195.791378 870.259924L357.74155 834.40836C372.932502 831.045473 391.255217 821.003546 402.312651 809.94613L940.915871 271.34291C954.705426 257.553355 954.705426 235.196081 940.915871 221.406543 927.126334 207.616989 904.769059 207.616989 890.979505 221.406543L352.376267 760.009763ZM414.64915 72.685568 51.729426 72.685568C23.157654 72.685568 0 95.845588 0 124.414994L0 972.214166C0 1000.785938 23.16002 1023.943592 51.729426 1023.943592L899.528598 1023.943592C928.10037 1023.943592 951.258041 1000.783572 951.258041 972.214166L951.258041 609.294442 951.258041 427.83458C951.258041 408.333224 935.449053 392.524235 915.947697 392.524235 896.446323 392.524235 880.637352 408.333224 880.637352 427.83458L880.637352 609.294442 880.637352 972.214166C880.637352 961.782466 889.096033 953.322902 899.528598 953.322902L51.729426 953.322902C62.161143 953.322902 70.62069 961.781601 70.62069 972.214166L70.62069 124.414994C70.62069 134.846711 62.162008 143.306258 51.729426 143.306258L414.64915 143.306258 596.109012 143.306258C615.610386 143.306258 631.419357 127.497269 631.419357 107.995913 631.419357 88.494539 615.610386 72.685568 596.109012 72.685568L414.64915 72.685568ZM1008.873949 203.384814C1029.040658 183.218105 1029.030682 150.678581 1008.912031 130.559929L951.147855 72.795754 893.383662 15.031561C873.350038-5.002063 840.660092-5.031671 820.558777 15.069643L752.6007 83.027721C738.811145 96.817276 738.811145 119.17455 752.6007 132.964087 766.390237 146.753642 788.747511 146.753642 802.537066 132.964087L870.495144 65.006009C862.997098 72.504055 850.972531 72.49318 843.447296 64.967927L901.211489 122.73212 958.975665 180.496296C951.522074 173.042706 951.518349 160.867699 958.937582 153.448448L890.979505 221.406543C877.18995 235.196081 877.18995 257.553355 890.979505 271.34291 904.769059 285.132447 927.126334 285.132447 940.915871 271.34291L1008.873949 203.384814Z"
							p-id="3157"
						></path>
					</svg>
					<span>{{ $t('quickSale.c2c.fbwt') }}</span>
				</div>

				<div class="hide_xs phone_icon">
					<i class="iconfont icon-bianji" @click="openOrderForm"></i>
					<i class="iconfont icon-shaixuan" @click="payTypePhoneFlag = true"></i>
				</div>
			</div>
		</div>

		<div style="height: 80px;"></div>

		<div style="position: relative;" class="tables_wrap">
			<van-tabs :swipeable="true" v-model="typeActive" animated>
				<van-tab v-for="(item, index) in 2" :key="index">
					<div class="" :class="isPhone ? 'tables_phone' : 'tables_pc'">
						<ul class="title">
							<li v-for="item in tableTitle">{{ item.title }}</li>
						</ul>
						<ul v-if="dataLists.length" class="item" v-for="item in dataLists">
							<div class="l">
								<li class="name">
									<i class="on" :class="{ off: item.onLine }"></i>
									<img :src="item.headUrl" alt="" />
									<span>{{ item.nickName }}</span>
									<span>({{ item.totalTrade }}{{ $t('global.base.d') }}/{{ item.successRate }}%)</span>
								</li>
								<li class="num">
									<i>{{ $t('global.base.sl') }}:</i>
									<span>{{ Number(item.coin).toFixed(4) }}</span>
									USDT
								</li>
								<li class="xe">
									<i>{{ $t('global.base.xe') }}:</i>
									<span>{{ item.coinLimit }}</span>
									{{ sysInfos.hv.dw }}
								</li>
							</div>
							<div class="r">
								<li class="price">
									<i>{{ $t('global.base.dj') }}:</i>
									<span>{{ Number(item.price).toFixed(2) }}</span>
									{{ sysInfos.hv.dw }}
								</li>
								<li class="paytype" v-html="paytypeShow(item.paymentType)"></li>
								<li class="btn">
									<span
										v-if="!item.matching || item.uid == userInfos.uid"
										v-html="$options.filters.language($t('quickSale.c2c.table.zbmz'), typeActive == 0 ? $t('global.base.sellj') : $t('global.base.buyj'))"
									>
										{{ $t('quickSale.c2c.table.zbmz') }}
									</span>
									<van-button :loading="saleMBtnLoading" type="info" @click="saleM(item)" v-else>
										{{ typeActive == 0 ? $t('global.base.gm') : $t('global.base.cs') }} {{ $t('global.base.usdt') }}
									</van-button>
								</li>
							</div>
						</ul>
						<ul class="no_data" style="border-bottom: 1px solid #f3f3f3;" v-show="dataLists.length == 0">
							<nodata></nodata>
						</ul>
					</div>
				</van-tab>
			</van-tabs>

			<loading v-model="tableLoding"></loading>
		</div>

		<!-- <div class="page_change">
			<div class="m">
				<van-pagination v-model="currentPage" :total-items="125" :show-page-size="3" force-ellipses>
					<template #prev-text>
						<van-icon name="arrow-left" />
					</template>
					<template #next-text>
						<van-icon name="arrow" />
					</template>
				</van-pagination>
			</div>
		</div>
 -->
		<!-- 手机端弹窗 -->
		<van-popup v-model="payTypePhoneFlag" position="right" :style="{ height: '100%', width: '80%' }">
			<div class="phone_shaixuan">
				<div class="main">
					<ul class="top">
						<li class="m_input">
							<div class="t">{{ $t('quickSale.c2c.zx') }}</div>
							<div class="c">
								<input v-model="minMoney" :placeholder="$t('quickSale.c2c.zx')" type="number" />
								<span>CNY</span>
							</div>
						</li>
						<li class="all_pay">
							<div class="t">{{ $t('quickSale.c2c.zffs') }}</div>
							<ul class=" clearfix">
								<li @click="changePayType(item)" :class="{ active: item.id == payType }" v-for="item in payTypes">{{ item.text }}</li>
							</ul>
						</li>
					</ul>
					<div class="btns">
						<van-button @click="okLists(true)" type="default">{{ $t('global.base.reset') }}</van-button>
						<van-button :loading="btnLoading" @click="okLists(false)" type="info">{{ $t('global.base.ok') }}</van-button>
					</div>
				</div>
			</div>
		</van-popup>

		<!-- 购买弹窗 -->
		<dialogx class="buy_alert" v-model="buy.show" :fonter="false">
			<template v-slot:content>
				<div class="main">
					<div class="left">
						<div class="tx">
							<img :src="saleDetails.headUrl" alt="" />
							<span>{{ saleDetails.nickName }}</span>
						</div>
						<ul>
							<li>
								<i>{{ $t('global.base.sl') }}</i>
								<span>{{ Number(saleDetails.coin).toFixed(4) }} USDT</span>
							</li>
							<li>
								<i>{{ $t('global.base.xe') }}</i>
								<span>{{ saleDetails.coinLimit }} {{ sysInfos.hv.dw }}</span>
							</li>
							<li>
								<i>{{ $t('global.base.fbsx') }}</i>
								<span>{{ saleDetails.passTime }}</span>
							</li>
							<li>
								<i>{{ $t('global.base.rzdj') }}</i>
								<span>{{ saleDetails.verifyLevel }}</span>
							</li>
							<li>
								<i>{{ $t('global.base.cdv') }}</i>
								<span>{{ saleDetails.totalTrade }}{{ $t('global.base.d') }}/{{ saleDetails.successRate }}%</span>
							</li>
						</ul>
						<div class="jyts">
							<p>{{ $t('quickSale.c2c.buy.ts') }}</p>
							<div v-html="saleDetails.remarks"></div>
						</div>
					</div>
					<div class="right">
						<div class="tprice">
							<span>
								<i>{{ Number(saleDetails.price).toFixed(2) }} {{ sysInfos.hv.dw }}</i>
								/USDT
							</span>
							<div v-html="$options.filters.language($t('global.base.csqx'), timeoutTime + 's')"></div>
						</div>

						<!-- 购买 -->

						<ul v-if="typeActive == 0" class="items" ref="buy">
							<li class="sell_num">
								<p class="t">{{ $t('quickSale.quickBuySell.buy.mrsl') }}</p>
								<div class="input">
									<input
										type="number"
										:error="$t('quickSale.quickBuySell.buy.mrsl')"
										v-model="buy.num"
										@input="inputChange(0, 0)"
										:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.buy.mrsl')"
									/>
									<span>
										<img :src="$t('global.usdt')" alt="" />
										<b>USDT</b>
									</span>
								</div>
								<!-- <div class="num">
									<span>{{ $t('quickSale.quickBuySell.buy.km') }} {{Number(saleDetails.coin).toFixed(4)}} USDT</span>
									<i>{{ $t('quickSale.quickBuySell.sell.zd') }}</i>
								</div> -->
							</li>
							<li class="jh">
								<svg t="1596700800611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8219" width="24" height="24">
									<path
										d="M912 369.1c0 4.1-1.3 7.6-4 10.3L765.2 522.3c-2.7 2.7-6.1 4-10.3 4-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8H126.3c-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8c0-3.8 1.4-7.2 4.2-10.1 2.8-2.8 6.2-4.2 10.1-4.2h614.3V226c0-4.1 1.3-7.6 4-10.3 2.7-2.6 6.1-4 10.3-4 3.5 0 7.1 1.5 10.7 4.5L908 358.6c2.7 2.9 4 6.3 4 10.5z m0 242.9v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2H283.4v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2-3.5 0-7.1-1.5-10.7-4.5L116.1 664.9c-2.7-2.7-4-5.9-4-9.9 0-4.1 1.3-7.6 4-10.3L259 501.8c2.7-2.7 6.1-4 10.3-4 3.8 0 7.2 1.4 10.1 4.2s4.2 6.2 4.2 10.1v85.8h614.3c3.8 0 7.2 1.4 10.1 4.2 2.6 2.7 4 6 4 9.9z"
										p-id="8220"
									></path>
								</svg>
							</li>
							<li>
								<p class="t">{{ $t('quickSale.quickBuySell.buy.mrje') }}</p>
								<div class="input">
									<input
										type="number"
										:error="$t('quickSale.quickBuySell.buy.mrje')"
										v-model="buy.price"
										@input="inputChange(1, 0)"
										:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.buy.mrje')"
									/>
									<span>
										<img :src="sysInfos.hv.dwimg" alt="" />
										<b>{{ sysInfos.hv.dw }}</b>
									</span>
								</div>
							</li>
							<li>
								<p class="t">{{ $t('quickSale.quickBuySell.buy.fkfs') }}</p>
								<div class="pay_type"><myselect v-model="buy.active" height="160px" icon :lists="buyPayType"></myselect></div>
							</li>
						</ul>

						<div v-if="typeActive == 0" class="btn">
							<van-button :loading="saleOkLoading" :disabled="!(buy.num > 0 && buy.price > 0)" @click="buySellM(0)" block type="info">
								{{ $t('quickSale.quickBuySell.buy.ljgm') }}
							</van-button>
							<p>{{ $t('quickSale.quickBuySell.buy.sxf') }}:{{ userInfos.buy }}%</p>
						</div>

						<!-- 出售 -->

						<ul v-if="typeActive == 1" class="items" ref="sell">
							<li class="sell_num">
								<p class="t">{{ $t('quickSale.quickBuySell.sell.mrsl') }}</p>
								<div class="input">
									<input
										type="number"
										v-model="sell.num"
										@input="inputChange(0, 1)"
										:error="$t('quickSale.quickBuySell.sell.mrsl')"
										:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrsl')"
									/>
									<span>
										<img :src="$t('global.usdt')" alt="" />
										<b>USDT</b>
									</span>
								</div>
								<div class="num">
									<span>{{ $t('quickSale.quickBuySell.sell.ky') }} {{ Number(userInfos.coin).toFixed(4) }} USDT</span>
									<i @click="changeAll">{{ $t('quickSale.quickBuySell.sell.zd') }}</i>
								</div>
							</li>
							<li class="jh">
								<svg t="1596700800611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8219" width="24" height="24">
									<path
										d="M912 369.1c0 4.1-1.3 7.6-4 10.3L765.2 522.3c-2.7 2.7-6.1 4-10.3 4-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8H126.3c-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8c0-3.8 1.4-7.2 4.2-10.1 2.8-2.8 6.2-4.2 10.1-4.2h614.3V226c0-4.1 1.3-7.6 4-10.3 2.7-2.6 6.1-4 10.3-4 3.5 0 7.1 1.5 10.7 4.5L908 358.6c2.7 2.9 4 6.3 4 10.5z m0 242.9v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2H283.4v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2-3.5 0-7.1-1.5-10.7-4.5L116.1 664.9c-2.7-2.7-4-5.9-4-9.9 0-4.1 1.3-7.6 4-10.3L259 501.8c2.7-2.7 6.1-4 10.3-4 3.8 0 7.2 1.4 10.1 4.2s4.2 6.2 4.2 10.1v85.8h614.3c3.8 0 7.2 1.4 10.1 4.2 2.6 2.7 4 6 4 9.9z"
										p-id="8220"
									></path>
								</svg>
							</li>
							<li>
								<p class="t">{{ $t('quickSale.quickBuySell.sell.mrje') }}</p>
								<div class="input">
									<input
										type="number"
										v-model="sell.price"
										@input="inputChange(1, 1)"
										:error="$t('quickSale.quickBuySell.sell.mrje')"
										:placeholder="$t('global.qsr') + $t('quickSale.quickBuySell.sell.mrje')"
									/>
									<span>
										<img :src="sysInfos.hv.dwimg" alt="" />
										<b>{{sysInfos.hv.dw}}</b>
									</span>
								</div>
							</li>
							<li>
								<p class="t">{{ $t('quickSale.quickBuySell.sell.fkfs') }}</p>
								<div class="pay_type"><myselect v-model="sell.active" height="160px" multiple :lists="sellPayType"></myselect></div>
							</li>
						</ul>

						<div v-if="typeActive == 1" class="btn">
							<van-button :disabled="!(sell.num > 0 && sell.price > 0)" block @click="buySellM(1)" type="info">
								{{ $t('quickSale.quickBuySell.sell.ljgm') }}
							</van-button>
							<p>{{ $t('quickSale.quickBuySell.sell.sxf') }}:{{ userInfos.sell }}%</p>
						</div>
					</div>
				</div>
			</template>
		</dialogx>

		<!-- 发布委托单 -->

		<dialogx class="order_form"  v-model="orderForm.show" :title="orderForm.title" :fonter="false">
			<template v-slot:content>
				<div class="main">
					<div class="p">
						{{ $t('quickSale.c2c.orderForm.dqpk') }} {{ orderForm.titleType == 0 ? userInfos.inventoryBuyPrice : userInfos.inventorySellPrice }} {{ sysInfos.hv.dw }}
					</div>

					<van-tabs v-model="orderForm.titleType" line-height="0" lazy-render animated>
						<!-- 购买 -->

						<van-tab :title="$t('quickSale.c2c.typeTitle[0]')">
							<div class="scroll">
								<vue-scroll :ops="ops" ref="myscroll">
									<ul class="items">
										<li>
											<p class="t">{{ $t('quickSale.c2c.orderForm.wtlxt') }}</p>
											<div class="input">
												<myselect
													@change="numChange(0)"
													:disable="userInfos.type != 2"
													v-model="orderForm.wtType"
													:lists="$t('quickSale.c2c.orderForm.wtlx')"
												></myselect>
											</div>
										</li>
										<li>
											<p class="t">
												{{ $t('quickSale.c2c.orderForm.jyjg') }}({{
													orderForm.wtType == 2 ? $t('quickSale.c2c.orderForm.jyjgg') : $t('quickSale.c2c.orderForm.jyjgp')
												}})
											</p>
											<div class="input">
												<input
													@input="numChange(0)"
													type="number"
													v-model="orderForm.buy.price"
													v-if="orderForm.wtType == 2"
													:placeholder="$t('quickSale.c2c.orderForm.srjy')"
												/>
												<span class="input sjfw" v-else style="color: red;">{{ userInfos.sellPrice }} {{ sysInfos.hv.dw }}</span>
											</div>
										</li>
										<li class="two">
											<div class="i">
												<p class="t">{{ $t('quickSale.c2c.orderForm.gmsl') }}</p>
												<div class="input">
													<input
														@input="numChange(0)"
														v-model="orderForm.buy.num"
														type="number"
														:placeholder="$t('global.qsr') + $t('quickSale.c2c.orderForm.gmsl')"
													/>
												</div>
											</div>
											<div></div>
											<div class="i">
												<p class="t">{{ $t('quickSale.c2c.orderForm.gmje') }}</p>
												<div class="input">
													<input
														disabled="disabled"
														v-model="orderForm.buy.value"
														type="number"
														:placeholder="$t('global.qsr') + $t('quickSale.c2c.orderForm.gmje')"
													/>
													<span class="money">{{ sysInfos.hv.dw }}</span>
												</div>
											</div>
										</li>

										<li v-if="orderForm.wtType == 2">
											<p class="t">{{ $t('quickSale.c2c.orderForm.zdmr') }}</p>
											<div class="input">
												<input type="number" v-model="orderForm.buy.leastcoin" :placeholder="$t('quickSale.c2c.orderForm.zdmr')" />
												<span class="money">{{ sysInfos.hv.dw }}</span>
											</div>
										</li>

										<li>
											<p class="t">{{ $t('quickSale.c2c.orderForm.sjfw') }}</p>
											<div class="input sjfw" @click="openTime(1)">
												<span :style="{ color: orderForm.buy.duration ? '#2E323D' : '#e3e3e3' }">
													{{ orderForm.buy.duration ? orderForm.buy.duration : $t('global.qxz') }}
												</span>
												<!-- <van-icon name="down" />-->
												<span style="text-align: right;color: #2E323D;">{{ $t('quickSale.c2c.orderForm.fz') }}</span>
											</div>
										</li>

										<li>
											<p class="t">{{ $t('quickSale.c2c.orderForm.fkfs') }}</p>
											<div class="input ">
												<myselect v-model="orderForm.buy.payType" multiple :lists="buyTypeShow"></myselect>
											</div>
										</li>
									</ul>

									<div class="collapse">
										<van-collapse v-model="orderFormNames">
											<van-collapse-item v-if="orderForm.wtType == 2" :title="$t('quickSale.c2c.orderForm.dsxz')" name="1">
												<ul class="dsxz items">
													<li>
														<p class="t">{{ $t('quickSale.c2c.orderForm.rzdj') }}</p>
														<div class="input">
															<myselect
																height="88px"
																v-model="orderForm.buy.verifylevel"
																:lists="$t('quickSale.c2c.orderForm.verifylevel')"
															></myselect>
														</div>
													</li>
													<li>
														<p class="t">{{ $t('quickSale.c2c.orderForm.zcsj') }}</p>
														<div class="input sjfw">
															<span  @click="openTime(3)" :style="{ color: orderForm.buy.createtime ? '#2E323D' : '#e3e3e3' }">
																{{orderForm.buy.createtime?orderForm.buy.createtime: $t('global.qxz') }}
															</span>
														</div>
													</li>
												</ul>
											</van-collapse-item>
											<van-collapse-item :title="$t('quickSale.c2c.orderForm.jysm')" name="2">
												<div class="jysm">
													<textarea v-model="orderForm.buy.remarks" maxlength="50" :placeholder="$t('quickSale.c2c.orderForm.jysmp')" rows="5"></textarea>
												</div>
											</van-collapse-item>
										</van-collapse>
									</div>
								</vue-scroll>
							</div>
						</van-tab>

						<!-- 出售 -->

						<van-tab :title="$t('quickSale.c2c.typeTitle[1]')">
							<div class="scroll">
								<vue-scroll :ops="ops" ref="myscroll">
									<ul class="items f_sell">
										<li>
											<p class="t">{{ $t('quickSale.c2c.orderForm.wtlxt') }}</p>
											<div class="input">
												<myselect
													@change="numChange(1)"
													:disable="userInfos.type != 2" 
													v-model="orderForm.wtType" 
													:lists="$t('quickSale.c2c.orderForm.wtlx')">
												</myselect>
											</div>
										</li>
										<li>
											<p class="t">
												{{ $t('quickSale.c2c.orderForm.jyjg') }}
												({{orderForm.wtType == 2 ? $t('quickSale.c2c.orderForm.jyjgg') : $t('quickSale.c2c.orderForm.jyjgp')}})
											</p>
											
											<div class="input">
												
												<input
													@input="numChange(1)"
													type="number"
													v-model="orderForm.sell.price"
													v-if="orderForm.wtType == 2"
													:placeholder="$t('quickSale.c2c.orderForm.srjy')"
												/>
												<span class="input sjfw" v-else style="color: red;">{{ userInfos.buyPrice }} {{ sysInfos.hv.dw }}</span>
											
											</div>
										</li>
										<li class="two">
											<div class="i">
												<p class="t">{{ $t('quickSale.c2c.orderForm.cssl') }}</p>
												<div class="input">
													<input @input="numChange(1)"
														v-model="orderForm.sell.num" type="number" 
														:placeholder="$t('global.qsr') + $t('quickSale.c2c.orderForm.cssl')" />
												</div>
											</div>
											<div class="all">
												{{ $t('quickSale.quickBuySell.sell.ky') +  Number(userInfos.coin).toFixed(4) + 'USDT' }}
												<span @click="changeMax">{{ $t('quickSale.quickBuySell.sell.zd') }}</span>
											</div>
											<div class="i">
												<p class="t">{{ $t('quickSale.c2c.orderForm.csje') }}</p>
												<div class="input">
													<input disabled="disabled" v-model="orderForm.sell.value" type="number" :placeholder="$t('global.qsr') + $t('quickSale.c2c.orderForm.csje')" />
													<span class="money">{{ sysInfos.hv.dw }}</span>
												</div>
											</div>
											
										</li>

										<li v-if="orderForm.wtType == 2">
											<p class="t">{{ $t('quickSale.c2c.orderForm.zdcs') }}</p>
											<div class="input">
												<input type="number" v-model="orderForm.sell.leastcoin"  :placeholder="$t('quickSale.c2c.orderForm.zdcs')" />
												<span class="money">{{ sysInfos.hv.dw }}</span>
											</div>
										</li>

										<li>
											<p class="t">{{ $t('quickSale.c2c.orderForm.sjfw') }}</p>
											<div class="input sjfw" @click="openTime(2)">
												<span :style="{ color: orderForm.sell.duration ? '#2E323D' : '#e3e3e3' }">
													{{ orderForm.sell.duration ? orderForm.sell.duration : $t('global.qxz') }}
												</span>
												<!-- <van-icon name="down" /> -->
												<span style="text-align: right;color: #2E323D;">{{ $t('quickSale.c2c.orderForm.fz') }}</span>
											</div>
										</li>

										<li>
											<p class="t">{{ $t('quickSale.c2c.orderForm.skfs') }}</p>
											<div class="input "><myselect v-model="orderForm.sell.payType" icon multiple :lists="payTypeShow"></myselect></div>
										</li>
									</ul>

									<div class="collapse">
										<van-collapse v-model="orderFormNames">
											<van-collapse-item v-if="orderForm.wtType == 2" :title="$t('quickSale.c2c.orderForm.dsxz')" name="3">
												<ul class="dsxz items">
													<li>
														<p class="t">{{ $t('quickSale.c2c.orderForm.fksj') }}</p>
														<div class="input">
															<myselect height="88px" 
																v-model="orderForm.sell.overtimetype"
																:lists="$t('quickSale.c2c.orderForm.overtimetype')">
															</myselect>
														</div>
													</li>
													<li>
														<p class="t">{{ $t('quickSale.c2c.orderForm.rzdj') }}</p>
														<div class="input">
															<myselect height="88px" 
																v-model="orderForm.sell.verifylevel"
																:lists="$t('quickSale.c2c.orderForm.verifylevel')">
															</myselect>
														</div>
													</li>
													<li>
														<p class="t">{{ $t('quickSale.c2c.orderForm.zcsj') }}</p>
														<div class="input sjfw">
															<span @click="openTime(4)" :style="{ color: orderForm.sell.createtime ? '#2E323D' : '#e3e3e3' }">
																{{orderForm.sell.createtime?orderForm.sell.createtime: $t('global.qxz') }}
															</span>
														</div>
													</li>
												</ul>
											</van-collapse-item>
											<van-collapse-item :title="$t('quickSale.c2c.orderForm.jysm')" name="4">
												<div class="jysm"><textarea v-model="orderForm.sell.remarks" maxlength="50" :placeholder="$t('quickSale.c2c.orderForm.jysmp')" rows="5"></textarea></div>
											</van-collapse-item>
										</van-collapse>
									</div>
								</vue-scroll>
							</div>
						</van-tab>
					</van-tabs>

					<div class="btn">
						<van-button @click="orderFormSumbit" :disabled="wtBtnIsOk" block :type="orderForm.titleType == 0 ? 'primary' : 'danger'">
							{{ $t('quickSale.c2c.fbwt') }}
						</van-button>
						<p>{{ $t('quickSale.quickBuySell.buy.sxf') }}: {{ getHv }}</p>
					</div>
				</div>
			</template>
		</dialogx>

		<!-- 确认交易弹窗 -->

		<dialogx
			v-model="orderForm.okOrder.show"
			:onOk="orderFormOk"
			:disabled="!Boolean(orderForm.okOrder.password || orderForm.okOrder.type == 0)"
			:title="orderForm.okOrder.title"
		>
			<!-- 购买 , 出售 -->
			<template v-slot:content >
				<ul class="ok_buy">
					<li v-for="item in orderForm.okOrder.lists">
						<span>{{ item.name }}</span>
						<span class="r">{{ orderForm.okOrder.datas[item.key] }}</span>
					</li>
					
					<li class="password clearfix" v-if="orderForm.okOrder.type == 1">
						{{ $t('global.base.jymm') }}
						<input v-model="orderForm.okOrder.password" autofocus="autofocus" type="password" :placeholder="$t('global.qsr') + $t('global.base.jymm')" />
						<a href="/#/editJPwd">{{ $t('global.base.wjmm') }}?</a>
					</li>
					
					<li class="tips" v-if="isTip" v-html="$options.filters.language($t('quickSale.c2c.orderForm.okwt.sell.lowts'), userInfos.indexPrice+sysInfos.hv.dw)"></li>
					<div v-if="isTip" style="opacity: 0;font-size: 13px;" v-html="$options.filters.language($t('quickSale.c2c.orderForm.okwt.sell.lowts'), userInfos.indexPrice+sysInfos.hv.dw)"></div>
				</ul>
			</template>

			
			
		</dialogx>

		<!-- 时间弹窗 -->
		<van-popup v-model="timeShow" :position="isPhone ? 'bottom' : 'center'">
			<van-datetime-picker
				v-model="currentTime"
				:type="timeType < 3 ? 'time' : 'date'"
				:formatter="formatter"
				title=""
				
				:confirm="$t('global.base.ok')"
				:cancel="$t('global.base.cancel')"
				@cancel="timeOk"
				@confirm="timeOk"
			/>
		</van-popup>
		
		
		<set-pay-pwd v-model="payPsaawordFlag" v-if="payPsaawordFlag"></set-pay-pwd>
		
	</div>
</template>

<script>
	import setPayPwd from '_c/common/setPayPassword'
export default {
	data() {
		return {
			payPsaawordFlag:false,
			oldtops: 0,
			ops: {
				vuescroll: {
					wheelScrollDuration: 500
				},
				scrollPanel: {},
				rail: {},
				bar: {
					background: 'transition'
				}
			},
			tableLoding: false,
			btnLoading: false,
			saleMBtnLoading: false,
			saleOkLoading: false,
			moneyInr: null,
			orderFormNames: ["1","2","3","4"],
			currentPage: 0,
			typeActive: null,
			minMoney: '',
			payType: 0,
			payTypePhoneFlag: false,
			//弹窗
			//购买
			saleDetails: {}, //单条详情数据
			timeoutTime: 60,
			timeoutInr: null,
			buy: {
				show: false,
				active: null,
				num: '',
				price: ''
			},
			//出售
			sell: {
				show: false,
				active: [],
				num: '',
				price: ''
			},
			//发布委托单
			orderForm: {
				show: false,
				title: '123',
				titleType: 0,
				wtType: 2,
				buy: {
					payType: [],
					num: '',
					price: '',
					value: '',
					leastcoin: '',
					duration: '',
					verifylevel: 0,
					remarks: '',
					paymenttype: '',
					createtime: ''
				},
				sell: {
					payType: [],
					overtimetype: 10,
					num: '',
					price: '',
					value: '',
					leastcoin: '',
					duration: '',
					verifylevel: 0,
					remarks: '',
					paymenttype: '',
					createtime: ''
				},
				//确认
				okOrder: {
					show: false,
					type: null,
					password: '',
					title: '',
					lists: [],
					datas: {}
				}
			},
			//时间弹窗
			timeShow: false,
			currentTime: new Date(),
			timeType: null,

			//数据列表
			dataLists: []
		};
	},
	components:{
		setPayPwd
	},
	computed: {
		payTypes() {
			let arr = [
				{
					title: this.$t('quickSale.c2c.qbzf'),
					id: 0
				},
				...this.$t('global.payType')
			];
			return arr.map(item => {
				return {
					text: item.title,
					id: Number(item.id)
				};
			});
		},
		tableTitle() {
			return this.typeActive == 0 ? this.$t('quickSale.c2c.table.buyTitle') : this.$t('quickSale.c2c.table.sellTitle');
		},
		buyPayType() {
			if (this.saleDetails) {
				let hastype = this.saleDetails.paymentType.split(',').map(x => Number(x));
				return this.$t('global.payType').filter(item => {
					return hastype.includes(item.id);
				});
			}
			return [];
		},
		sellPayType() {
			if (!this.userInfos.islogin) {
				return this.$t('global.payType');
			}

			if (this.saleDetails) {
				let hastype = this.saleDetails.paymentType.split(',').map(x => Number(x)); //订单方式
				let ihasType = this.userInfos.payList.map(item => Number(item.type)); //我的方式
				let lists = this.$copy(this.$t('global.payType'))
				return lists
					.filter(item => {
						return hastype.includes(item.id);
					})
					.map(item => {
						if (!ihasType.includes(item.id)) {
							item.add = true;
							item.addMethod = res => {
								this.$router.push({
									path: '/paymentMethod',
									query: {
										type: res.id
									}
								});
							};
						} else {
							item.add = false;
						}
						return item;
					});
			}

			return [];
		},
		//发布委托单相关
		//发布是否可以点击
		wtBtnIsOk() {
			let datas = this.orderForm.titleType == 0 ?  this.orderForm.buy : this.orderForm.sell;
			
				
				if (this.orderForm.wtType == 2) {
					//自选
					return [datas.num, datas.value, datas.duration, datas.payType.length, datas.price, datas.leastcoin].some(item => !Boolean(item));
				} else {
					//快捷
					return [datas.num, datas.value, datas.duration, datas.payType.length].some(item => !Boolean(item));
				}
			

			return false;
		},
		//手续汇率
		getHv() {
			let fs = 0;
			if (this.orderForm.titleType == 0) {
				//买
				fs = this.orderForm.wtType == 1 ? this.userInfos.fastbuy : this.userInfos.buy;
			} else {
				fs = this.orderForm.wtType == 1 ? this.userInfos.fastsell : this.userInfos.sell;
			}

			return fs + '%';
		},
		//指数偏差
		isTip(){
			if(this.orderForm.wtType==2){
			
				let price = this.orderForm.titleType == 0 ? this.orderForm.buy.price : this.orderForm.sell.price
					
				 return  Math.abs(price - this.userInfos.indexPrice) / price > 0.2
					
			}
			
			return  false
		},
		//购买-可用支付方式
		buyTypeShow(){
			return this.$t('global.payType')
		},
		//出售-可用支付方式
		payTypeShow(){
			
			if(!this.userInfos.islogin){
				return this.$t('global.payType')
			}
			
			let hasType = this.userInfos.payList.map(item=>Number(item.type))
			let lists = this.$copy(this.$t('global.payType'))
			return lists.filter(item=>{
				if(!this.payType.length){
					return true
				}
				return this.payType.includes(item.id)
			}).map(item=>{
				if(!hasType.includes(item.id)){
					item.add = true
					item.addMethod = (res)=>{
						this.$router.push({
							path:'/paymentMethod',
							query:{
								type:res.id
							}
						})
					}
				}else{
					item.add = false
				}
				return item 
			})
		}
	},
	mounted() {
		//= this.orderForm.buy.payType  = this.orderForm.sell.payType
		if(this.$route.query.hasOwnProperty('open')){
		
			setTimeout(()=>{
				this.openOrderForm()
			},500)
		}
		
		this.typeActive = this.$route.query.hasOwnProperty('type') ? Number(this.$route.query.type) : 0;
		this.buy.active = this.$t('global.payType')[0].id;
		this.sell.active = this.$t('global.payType').map(item => item.id);
		this.oldtops = 0;
		document.addEventListener('scroll', this.scroll);
	},

	beforeRouteLeave(to, from, next) {
		document.removeEventListener('scroll', this.scroll);
		next();
	},
	beforeDestroy() {
		document.removeEventListener('scroll', this.scroll);
	},
	watch: {
		$route(n) {},
		typeActive(nValue) {
			this.$router.replace({
				path: 'c2c',
				query: {
					type: nValue
				}
			});
			this.getlist();
		}
	},
	methods: {
		moneyChange() {
			clearTimeout(this.moneyInr);
			this.moneyInr = setTimeout(() => {
				this.getlist();
			}, 1000);
		},
		formatter(type, val) {
			switch (type) {
				case 'year':
					return `${val}` + this.$t('global.base.year');
				case 'month':
					return `${val}` + this.$t('global.base.month');
				case 'day':
					return `${val}` + this.$t('global.base.day');
				case 'hour':
					return `${val}` + this.$t('global.base.hou');
				case 'minute':
					return `${val}` + this.$t('global.base.min');
			}
		},
		//支付方式
		paytypeShow(t) {
			let type = t.split(',').map(item => Number(item));
			let all = this.$t('global.payType').filter(item => {
				return type.includes(item.id);
			});

			let str = '';
			all.forEach(item => {
				str += `<img class="img" src="${item.img}" />`;
			});
			return str;
		},
		getlist() {
			this.tableLoding = true;

			let json = {
				currency: this.userInfos.currency,
				type: this.typeActive,
				paymentType: this.payType,
				leastcoin: this.minMoney || 0,
				opponent: false
			};

			this.$http.getOptionalOrderList(json).then(
				res => {
					this.tableLoding = false;
					this.btnLoading = false;
					this.dataLists = res.data;
				},
				err => {
					this.tableLoding = false;
					this.btnLoading = false;
					this.dataLists = [];
				}
			);
		},
		okLists(r) {
			if (r) {
				this.payType = 0;
				this.minMoney = '';
			}
			this.getlist();
			this.payTypePhoneFlag = false;
		},
		scroll(e) {
			let tops = document.documentElement.scrollTop || document.body.scrollTop;
			let dhl = document.querySelector('.view_quickSale_c2c .dhl');
			if (!dhl) {
				return;
			}
			let min = this.isPhone ? 61 : 80;
			let max = this.isPhone ? 130 : 150;
			if (tops == 0) {
				dhl.style.top = max + 'px';
				dhl.style.boxShadow = 'none';
				return;
			}
			if (tops > this.oldtops) {
				//向下
				dhl.style.boxShadow = '0px 1px 2px rgba(0, 0, 0, 0.16)';
				if (dhl.offsetTop <= min) {
					dhl.style.top = min + 'px';
					return;
				}
				dhl.style.top = dhl.offsetTop - (tops - this.oldtops) + 'px';
			} else {
				//向上
				if (dhl.offsetTop >= max) {
					dhl.style.top = max + 'px';
					dhl.style.boxShadow = 'none';
					return;
				}

				dhl.style.top = dhl.offsetTop - (tops - this.oldtops) + 'px';
			}

			this.oldtops = tops;
		},
		changeType(index) {
			this.typeActive = index;
		},
		changePayType(item) {
			this.payType = item.id;
		},
		buySellM() {
			//检查限额
			let limit = this.saleDetails.coinLimit.split('-').map(x => Number(x));
			let price = this.typeActive == 0 ? this.buy.price : this.sell.price;
			console.log(limit, price);
			if (price < limit[0] || price > limit[1]) {
				this.$notify(this.$t('global.base.dbxew') + this.saleDetails.coinLimit + this.sysInfos.hv.dw);
				return;
			}

			//发起请求
			this.saleOkLoading = true;
			this.$http
				.userOptionalTradeCoin({
					buyType: 0,
					coin: this.typeActive == 0 ? this.buy.num : this.sell.num,
					id: this.saleDetails.id,
					type: this.typeActive
				})
				.then(res => {
					this.saleOkLoading = false;
					if (res.code == 0) {
						this.$router.push({
							path: this.typeActive == 0 ? 'payment' : 'collection',
							query: {
								id: res.data
							}
						});
					}
				});
		},
		saleM(item) {
			if (this.$isLogin()) {
				return;
			}

			this.saleMBtnLoading = true;
			this.$http
				.getOptionalDetail({
					id: item.id,
					type: this.typeActive == 0 ? 1 : 0
				})
				.then(res => {
					this.saleMBtnLoading = false;
					if (res.code != 0) {
						return;
					}

					//详情买卖字段一样
					this.saleDetails = {
						...item,
						...res.data
					};

					//重置
					this.buy = {
						show: true,
						active: this.buyPayType[0].id,
						num: '',
						price: ''
					};
					//出售
					let active = this.sellPayType
						.filter(item => {
							return item.add == false;
						})
						.map(item => {
							return item.id;
						});
					this.sell = {
						show: true,
						active: [active],// active,
						num: '',
						price: ''
					};

					clearInterval(this.timeoutInr);
					this.timeoutTime = 60;
					this.timeoutInr = setInterval(() => {
						this.timeoutTime--;
						if (this.timeoutTime <= 0) {
							clearInterval(this.timeoutInr);
							this.buy.show = false;
						}
					}, 1000);
				});
		},

		changeAll() {
			this.sell.num = Number(this.userInfos.coin).toFixed(4);
			this.inputChange(0, 1);
		},

		inputChange(type, typet) {
			if (typet == 0) {
				//购买
				if (type == 0) {
					//num
					this.buy.price = Number(this.buy.num * this.saleDetails.price).toFixed(2);
				} else {
					//price
					this.buy.num = Number(this.buy.price / this.saleDetails.price).toFixed(4);
				}
			} else {
				//出售
				if (type == 0) {
					//num
					this.sell.price = Number(this.sell.num * this.saleDetails.price).toFixed(2);
				} else {
					//price
					this.sell.num = Number(this.sell.price / this.saleDetails.price).toFixed(4);
				}
			}
		},

		//时间选择
		openTime(type) {
			this.currentTime = '';
			this.timeType = type;
			this.timeShow = true;
		},
		timeOk(value) {
			
			if(this.timeType<3){
				//选择分钟 
				let min = value ? value.split(':')[0] * 60 + Number(value.split(':')[1]) : value ;
			
				if (this.timeType == 1) {
					//购买-持续时间
					this.orderForm.buy.duration = min;
				}
				if (this.timeType == 2) {
					//出售-持续时间
					this.orderForm.sell.duration = min;
				}
			}else{
				//选择时间
				let date = value ?  this.$dateFormat('YYYY-mm-dd',new Date(value)) : value;
				if (this.timeType == 3) {
					//购买-注册时间
					this.orderForm.buy.createtime = date;
				}
				if (this.timeType == 4) {
					//出售-注册时间
					this.orderForm.sell.createtime = date;
				}
			}
			
			this.timeShow = false;
			
		},
		//打开委托
		openOrderForm() {
			if (this.$isLogin()) {
				return;
			}
			this.orderForm.title = this.$t('quickSale.c2c.fbwt') + '(USDT/'+this.sysInfos.hv.dw+")";
			this.orderForm.titleType = this.typeActive;
			this.orderForm.wtType = this.userInfos.type == 2 ? 1 : 2;
			//重置数据
			this.orderForm.buy = {
				payType:this.$t('global.payType').map(item => item.id), //this.$t('global.payType').map(item => item.id),
				num: '',
				price: '',
				value: '',
				leastcoin: '',
				duration: '',
				verifylevel: 0,
				remarks: '',
				paymenttype: '',
				createtime: ''
			}
			this.orderForm.sell={
				payType: this.payTypeShow.filter(item=>!item.add).map(item => item.id),
				overtimetype: 10,
				num: '',
				price: '',
				value: '',
				leastcoin: '',
				duration: '',
				verifylevel: 0,
				remarks: '',
				paymenttype: '',
				createtime: ''
			},
			
			this.orderForm.show = true;
		},
		changeMax(){
			this.orderForm.sell.num = Number(this.userInfos.coin).toFixed(4) 
			this.numChange(1)
		},
		//数量输入
		numChange(type) {
			if (type == 0) {
				//购买
				if (this.orderForm.wtType == 1) {
					//快捷
					this.orderForm.buy.value = Number(this.orderForm.buy.num * this.userInfos.sellPrice).toFixed(2);
				} else {
					//自选
					this.orderForm.buy.value = Number(this.orderForm.buy.num * this.orderForm.buy.price).toFixed(2);
				}
			}else{
				if (this.orderForm.wtType == 1) {
					//快捷
					this.orderForm.sell.value = Number(this.orderForm.sell.num * this.userInfos.buyPrice).toFixed(2);
				} else {
					//自选
					this.orderForm.sell.value = Number(this.orderForm.sell.num * this.orderForm.sell.price).toFixed(2);
				}
			}
		},
		//发布委托
		orderFormSumbit() {
			
			//出售时检查支付密码
			if(!this.userInfos.payPassword && this.orderForm.titleType==1){
				
				this.$dialog.confirm({
					cancelButtonText: this.$t('global.base.cancel'),
					confirmButtonText: this.$t('global.base.ok'),
				  title: this.$t('global.base.szzf'),
				  message: this.$t('global.base.zfts'),
				})
				  .then(() => {
					    this.payPsaawordFlag = true
					//this.$router.push('/editJPwd?type=0')
				  })
				  .catch(() => {
					// on cancel
				  });
				
				return
			}
			
			
			let datas = this.orderForm.titleType == 0 ? this.orderForm.buy : this.orderForm.sell
			let payType = this.$t('global.payType').filter(item => {
				return datas.payType.includes(item.id);
			});
			
				
			let okBuySellDatas = {
					payType: payType.map(x => x.title).join(','),
					price: Number(this.userInfos.sellPrice).toFixed(2) + this.sysInfos.hv.dw,
					num: Number(datas.num).toFixed(4) + 'USDT(≈' +  Number(datas.value).toFixed(2) + this.sysInfos.hv.dw +')',
					duration: datas.duration + this.$t('quickSale.c2c.orderForm.fz')
				};
				//自选
				if (this.orderForm.wtType == 2) {
					let limt = ()=>{
							let text = this.$t('quickSale.c2c.orderForm.verifylevel').filter(item=>item.id == datas.verifylevel)[0].title 
								if(datas.createtime){
									text+=`/${datas.createtime}`
								}
								return text
						} 
					okBuySellDatas = {
						...okBuySellDatas,
						price: Number(datas.price).toFixed(2) + this.sysInfos.hv.dw,
						leastcoin: Number(datas.leastcoin).toFixed(2) + this.sysInfos.hv.dw,
						limt: limt()
					};
				}
				
				let title = this.orderForm.titleType==0?this.$t('quickSale.c2c.orderForm.okwt.buy.title'):this.$t('quickSale.c2c.orderForm.okwt.sell.title')
				let lists = this.orderForm.titleType==0 ? this.$t('quickSale.c2c.orderForm.okwt.buy.list') : this.$t('quickSale.c2c.orderForm.okwt.sell.list')
		
				this.orderForm.okOrder = {
					show: true,
					password:'', //出售时的交易密码
					type:this.orderForm.titleType,
					title: title,
					lists: lists.filter(item => {
						return okBuySellDatas.hasOwnProperty(item.key);
					}), 
					datas: okBuySellDatas
				};
		
			
		},
		//确认发布
		orderFormOk() {
			let json = {};
			let post = this.orderForm.wtType == 1 ? this.$http.openOrder : this.$http.userOrder;
			let datas = this.orderForm.titleType == 0 ? this.orderForm.buy : this.orderForm.sell;
			
				//快捷
				json = {
					coin: datas.num,
					duration: datas.duration,
					paymenttype: datas.payType.join(','),
					price: this.userInfos.sellPrice,
					remarks: datas.remarks,
					type: this.orderForm.titleType,
					starttime:new Date().getTime()
				};
				//自选
				if (this.orderForm.wtType == 2) {
					json = {
						...json,
						price:Number(datas.price).toFixed(2),
						leastcoin: Number(datas.leastcoin).toFixed(2),
						verifylevel:this.$t('quickSale.c2c.orderForm.verifylevel').filter(item=>item.id == datas.verifylevel)[0].id,
						createtime:new Date(datas.createtime).getTime()
						
					};
				}
				
				if(this.orderForm.titleType == 1){
					//出售时 多一个交易密码
					json.paypassword = this.orderForm.okOrder.password
					json.overtimetype = datas.overtimetype
				}

			post(json).then(
				res => {
					this.orderForm.okOrder.show = false;
					if (res.code == 0) {
						this.orderForm.show = false;
						this.getlist();
						this.$notify({
							type: 'success',
							message: this.$t('global.base.fbcg')
						});
						return
					}
					if(res.code==600205){
						this.$notify( this.$t('error.ERROR_'+res.code) + res.msg + "USDT" )
						//this.$cheakError(res.code)
					}else{
						this.$notify( this.$t('error.ERROR_'+res.code) )
					}
				},
				() => {
					this.orderForm.okOrder.show = false;
				}
			);
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.view_quickSale_c2c {
	.dhl {
		padding: 15px 0;
		position: fixed;
		top: 150px;
		left: 0;
		width: 100%;
		z-index: 801;
		background-color: #fff;
		.type {
			float: left;
			border: 1px solid #e3e3e3;
			padding: 3px;
			border-radius: 2px;
			position: relative;
			top: -1px;
			span {
				display: inline-block;
				color: #b3b3b3;
				font-size: 16px;
				padding: 4px 12px;
				cursor: pointer;
				transition: all 0.3s;
			}

			span:first-child.active {
				background: @green;
				color: #fff;
			}

			span:last-child.active {
				background: @red;
				color: #fff;
			}
		}

		.min_input {
			float: left;
			border: 1px solid #e3e3e3;
			position: relative;
			margin-left: 40px;
			padding: 8px;

			input {
				border: none;
				padding: 0;
				padding-right: 10px;
				display: inline-block;
				width: 120px;
			}
		}

		.type_change {
			position: relative;
			display: inline-block;
			width: 160px;
			margin-left: 20px;
			padding: 0;
		}

		.fb {
			padding-top: 5px;
			cursor: pointer;
			float: right;
			.hover;
			&:hover {
				svg {
					fill: @blue;
				}
			}
			svg {
				//fill:@blue;
				position: relative;
				top: 5px;
				.hover(@blue, true);
			}
			span {
				//color: @blue;
				font-weight: 500;

				margin-left: 5px;
			}
		}

		.phone_icon {
			padding-top: 10px;
			float: right;
			i {
				font-size: 20px;
				.hover;
				margin-left: 20px;
			}
		}
	}

	.tables_pc {
		.global_table_pc;
		.title {
			border-bottom: 1px solid #d3d3d3;
			li {
				color: @text-color;
			}
			li:nth-child(4) {
				text-align: center;
			}
		}
		.item {
			padding: 15px 0;
			color: rgba(51, 51, 51, 1);
			div {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.l {
				li:last-child {
					text-align: left;
				}
			}
			li {
				& > i {
					display: none;
				}
			}
		}
		.name {
			.clearfix;
			position: relative;
			& > i.on {
				position: absolute;
				left: 32px;
				top: 5px;
				background-color: #e3e3e3;
				border: 1px solid #fff;
				border-radius: 50%;
				width: 8px;
				height: 8px;
				z-index: 100;
				display: block !important;
				box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
			}
			& > i.off {
				background-color: @green;
			}
			img {
				margin-top: 5px;
				margin-right: 5px;
				border-radius: 50%;
				width: 32px;
				height: 32px;
				float: left;
				background: #666;
			}
			span {
				display: block;
			}
			span:last-child {
				color: #666;
				font-size: 12px;
			}
		}
		.num,
		.xe,
		.price {
			span {
				margin-right: 5px;
			}
		}
		.price {
			color: @blue;
			text-align: center;
		}
		.paytype {
			.img {
				display: inline-block;
				margin-right: 10px;
				width: 16px;
			}
		}
		.btn {
			padding-right: 2px;
			& > span {
				color: rgba(179, 179, 179, 1);
			}
		}
	}

	.tables_phone {
		.title {
			display: none;
		}
		.item {
			display: flex;
			padding: 10px 0;
			padding-top: 20px;
			border-bottom: 1px solid #f3f3f3;
			div {
				flex: 1;
			}
			.l {
				flex: 1.8;
			}
			.r {
				text-align: right;
			}
			li {
				margin-bottom: 5px;
			}
			.name {
				.clearfix;
				position: relative;
				& > i.on {
					position: absolute;
					left: 25px;
					top: 5px;
					background-color: #e3e3e3;
					border: 1px solid #fff;
					border-radius: 50%;
					width: 8px;
					height: 8px;
					z-index: 100;
					display: block !important;
					box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
				}
				& > i.off {
					background-color: @green;
				}
				img {
					margin-top: 5px;
					margin-right: 5px;
					border-radius: 50%;
					width: 32px;
					height: 32px;
					float: left;
					background: #666;
				}
				span {
					display: block;
				}
			}
			.paytype {
				.img {
					display: inline-block;
					margin-left: 10px;
					width: 16px;
				}
			}
		}

		.item:nth-child(2) {
			padding-top: 0;
		}

		.btn {
			& > span {
				color: rgba(179, 179, 179, 1);
			}
		}
	}

	.page_change {
		text-align: center;
		padding: 40px 0;
		.m {
			display: inline-block;
		}
	}

	.phone_shaixuan {
		height: 100%;
		.main {
			padding: 20px;
			padding-top: 40px;
			position: relative;
			height: 100%;
			box-sizing: border-box;
			.top {
				color: #3f475a;
				& > li {
					margin-bottom: 10px;
					.t {
						margin-bottom: 5px;
					}
				}
				.m_input {
					.c {
						position: relative;
						input {
							width: 100%;
							padding-right: 40px;
						}
						span {
							position: absolute;
							right: 10px;
							top: 50%;
							transform: translateY(-50%);
						}
					}
				}
				.all_pay {
					li {
						border-radius: 2px;
						float: left;
						background-color: rgba(233, 235, 242, 0.5);
						margin-right: 10px;
						padding: 8px;
						min-width: 27%;
						text-align: center;
						font-size: 13px;
						border: 1px solid transparent;
						box-sizing: border-box;
						margin-bottom: 10px;
						transition: all 0.3s;
					}
					.active {
						border-color: @blue;
						color: @blue;
					}
				}
			}
			.btns {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				box-sizing: border-box;
				padding: 10px 20px;
				border-top: 1px solid #e9ebf2;
				display: flex;
				.van-button {
					flex: 1;
					height: 40px;
				}
				.van-button:last-child {
					margin-left: 20px;
				}
			}
		}
	}

	.buy_alert {
		.main {
			display: flex;
			& > div {
				flex: 1;
			}
			.left {
				padding-right: 30px;
				.tx {
					margin-bottom: 5px;
					img {
						width: 32px;
						height: 32px;
						background: #dedede;
						opacity: 1;
						border-radius: 16px;
						display: inline-block;
					}
					span {
						position: relative;
						left: 5px;
						top: -8px;
					}
				}
				ul {
					padding-bottom: 10px;
					border-bottom: 1px solid rgba(227, 227, 227, 1);
					li {
						font-size: 14px;
						.clearfix;
						margin-bottom: 8px;
						i {
							color: #b3b3b3;
						}
						span {
							float: right;
							color: #666666;
						}
					}
				}

				.jyts {
					padding-top: 20px;
					p {
						font-size: 14px;
					}
					div {
						font-size: 12px;
						color: #b3b3b3;
					}
				}
			}
			.right {
				padding-left: 30px;
				.tprice {
					padding-bottom: 5px;
					border-bottom: 1px solid #e3e3e3;
					span {
						display: block;
						color: #666;
						i {
							color: #333;
							font-weight: bold;
							font-size: 24px;
						}
					}
					div {
						color: #b3b3b3;
						font-size: 12px;
					}
				}

				.items {
					padding-top: 20px;

					& > li {
						padding-bottom: 5px;
						margin-bottom: 20px;
						border-bottom: 1px solid #e3e3e3;

						.t {
							padding-bottom: 15px;
						}

						.input {
							img {
								display: inline-block;
								width: 18px;
								height: 18px;
							}

							input {
								border: none;
								width: 70%;
								border: none;
								display: inline-block;
								padding-left: 0;
								&::placeholder {
									color: #d3d3d3;
									font-size: 16px;
									font-weight: 100;
								}
							}

							span {
								float: right;

								b {
									font-size: 16px;
									margin-left: 5px;
									position: relative;
									top: -2px;
								}
							}
						}

						.pay_type {
						}
					}

					.jh {
						border: none;
						text-align: center;
						padding-bottom: 0;
						margin: 0;
						padding: 10px 0;
						svg {
							//.hover(@blue, true);
							transform: rotate(90deg);
							display: inline-block;

							path {
								fill: rgba(4, 102, 200, 0.3);
							}
						}
					}

					.sell_num {
						position: relative;

						.num {
							position: absolute;
							right: 0;
							bottom: -22px;
							font-size: 12px;
							color: #b3b3b3;

							i {
								color: @blue;
								.hover;
								margin-left: 10px;
							}
						}
					}
				}

				.btn {
					margin-bottom: 30px;

					p {
						margin-top: 10px;
						text-align: right;
						color: #c5c9d4;
						font-weight: 100;
					}
				}
			}
		}
	}

	.order_form {
	
		.main {
			position: relative;
			& > .p {
				position: absolute;
				right: 0;
				top: 12px;
				color: #666;
				font-size: 13px;
			}
			& > .btn {
				padding-top: 10px;
				p {
					text-align: right;
					color: #b3b3b3;
					font-size: 13px;
					padding-top: 10px;
				}
			}
			.scroll {
				height: 60vh;
			}
			.items {
				padding: 0 1px;
				li {
					margin-top: 15px;
					.t {
						font-size: 14px;
						color: #666;
					}
					.input {
						margin-top: 5px;
						background: #ffffff;
						opacity: 1;
						border-radius: 2px;
						font-size: 16px;
						position: relative;
						input {
							width: 100%;
						}
						& > .money {
							position: absolute;
							top: 50%;
							right: 8px;
							transform: translateY(-50%);
							font-size: 14px;
							color: #333;
						}
					}
					.sjfw {
						box-sizing: border-box;
						padding: 7px 10px;
						border-radius: 2px;
						transition: all 0.5s;
						border: 1px solid #e3e3e3;
						display: flex;
						font-size: 16px;
						span {
							flex: 1;
							color: #e3e3e3;
							cursor: pointer;
						}
						i:nth-child(2) {
							color: #e3e3e3;
							transform: rotate(-90deg);
							margin-right: 10px;
						}
					}
				}
				.two {
					position: relative;
					.clearfix;
					.i {
						float: left;
						width:calc(50% - 10px);
					}
					.i:nth-child(3) {
						margin-left: 20px;
						.input {
						}
					}
					.all{
						position: absolute;
						bottom: 0;
						left: 0;
						transform: translateY(30%);
						font-size: 13px;
						margin-top: 5px;
						float: left;
						width: 100%;
						
						span{
							color: @blue;
							cursor: pointer;
							margin-left: 20px;
						}
					}
					
				}
			}
			.f_sell{
				.two{
					padding-bottom: 20px;
				}
			}
		}
	}

	.ok_buy {
		.line_rl(#b3b3b3);
		li {
			& > .r {
				img {
					width: 16px;
					height: 16px;
					position: relative;
					top: 2px;
				}
			}
		}

		.password {
			display: block;
			input {
				display: block;
				width: 100%;

				margin: 5px 0;
			}
			input:focus {
				border-color: @blue;
			}
			a {
				color: @blue;
				float: right;
			}
		}
		.tips {
			display: block;
			font-size: 13px;
			box-sizing: border-box;
			text-align: center;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 5px;
			background-color: @org-d;
			color: @org-s;
			border-top: 1px solid @org;
			border-bottom: 1px solid @org;
		}
	}
}

@media (max-width: 1023px) {
	.view_quickSale_c2c {
		.dhl {
			top: 130px;
		}
		.order_form{
			.main{
				.items{
					.two{
						padding: 0;
						.i{
							width: 100%;
							float: none;
						}
						.i:nth-child(3){
							margin-left: 0;
							margin-top: 15px;
						}
						
					}
				}
				.f_sell{
					.two{
						.i:nth-child(3){
							margin-top: 30px;
						}
						.all{
							text-align: right;
							bottom: auto;
							top: 60px;
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="less">
.view_quickSale_c2c {
	.tables_wrap {
		.van-tabs--line .van-tabs__wrap {
			display: none;
		}
	}

	.dhl {
		.type_change {
			.changed {
				padding: 8px;
			}
		}
	}

	.img {
		display: inline-block;
		margin-right: 10px;
		width: 16px;
	}

	.buy_alert {
		.van-dialog {
			overflow: inherit;
			width: 720px;
			.gtitle {
				border: none;
				padding-bottom: 0;
			}
		}
		.default .content {
			padding-top: 0;
			padding: 20px 30px;
		}
		.main {
			.right {
				.djs {
					color: @org-s;
				}
			}
		}
	}

	.order_form {
		.van-dialog {
			width: 460px;
			.default .content {
			}
		}
		.van-tabs--line .van-tabs__wrap {
			width: 110px;
			.van-tab {
				font-size: 16px;
				transition: all 0.5s;
			}
			.van-tab.van-tab--active {
				transform: scale(1.2);
			}
			.van-tab:nth-child(1) {
				justify-content: left;
			}
			.van-tab:nth-child(1).van-tab--active {
				color: @green;
			}
			.van-tab:nth-child(2).van-tab--active {
				color: @red;
			}
		}
		.main {
			.items {
				.input {
					.changed,
					.icon_s .title {
						padding: 7px 10px;
						border: 1px solid #e3e3e3;
						i {
						}
					}
				}
			}
			.scroll {
				/* .__panel{
					width: 100%;
				} */
			}
		}
		.collapse {
			padding: 15px 0;
			.van-collapse-item {
				.van-cell {
					border-bottom: 1px solid #e3e3e3;
					padding: 7px 0px;
					color: @blue;
					.van-cell__right-icon {
						color: @blue;
					}
				}
				.van-collapse-item__content {
					padding: 0px 0px;
					padding-top: 15px;
					li:hover {
						color: #333;
					}
					.changed {
						color: #333;
					}
					.jysm {
						textarea {
							width: 100% !important;
						}
					}
					.dsxz {
						padding-bottom: 30px;
						li {
							margin-top: 0;
						}
						.g_select .defalut_s > ul {
							top: 120%;
						}
					}
				}
			}
			.van-hairline--top-bottom::after {
				display: none;
			}
		}
	}
}

@media (max-width: 1023px) {
	.view_quickSale_c2c {
		.buy_alert {
			.van-dialog {
				width: 90%;
				.default {
					.content {
						.main {
							display: block;
							.left {
								padding-right: 0;
								display: none;
							}
							.right {
								padding: 0;
							}
						}
					}
				}
			}
		}

		.order_form {
			.van-dialog {
				width: 95%;
			}
		}
	}
}
</style>
