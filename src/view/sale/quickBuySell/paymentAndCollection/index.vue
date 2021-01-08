<template>
	<div class="view_quickSale_paymentAndCollection global_main" v-if="orderDetails">
		<!-- 待付款 -->
		<div class="main clearfix" v-if="pageType == 0 ">
			<div class="left">
				<div class="title clearfix">
					<img :src="$t('global.usdt')" alt="" />
					<span>{{ $t('global.base.gm') + $t('global.base.usdt') }}</span>
				</div>

				<ul style="padding: 12px 24px !important;" class="lists zd_title">
					<li>
						<span class="l">{{ $t('quickSale.payment.zf') }}</span>
						<span class="r">
							<!-- <img :src="$t('global.payType[0].img')" alt="">
							<s>文字</s> -->

							<myselect height="140px" v-model="buy.payTypeActive" icon :lists="buyPayType"></myselect>
						</span>
					</li>
				</ul>

				<ul class="lists">
					<li>
						<span class="l">{{ $t('quickSale.payment.sk') }}</span>
						<span class="r">
							<copy :content="getPayItem.realName">
								<s>{{ getPayItem.realName }}</s>
							</copy>
						</span>
					</li>
					<li>
						<span class="l">{{ getPayItem.paymenttype == 3 ? $t('global.base.yhzh') : $t('global.base.zh') }}</span>
						<span class="r">
							<copy :content="getPayItem.account">
								<s>{{ getPayItem.account }}</s>
							</copy>
						</span>
					</li>
					<li v-if="getPayItem.paymenttype == 3">
						<span class="l">{{ $t('global.base.yhmc') }}</span>
						<span class="r">
							<s>{{ getPayItem.bankName }}</s>
						</span>
					</li>
					<li v-if="getPayItem.paymenttype == 3">
						<span class="l">{{ $t('global.base.khh') }}</span>
						<span class="r">
							<s>{{ getPayItem.bank }}</s>
						</span>
					</li>

					<li class="zfb" v-if="getPayItem.paymenttype < 3">
						<a :href="getPayItem.qrcode" download target="_blank"><img :src="getPayItem.qrcode" alt="" /></a>

						<p>{{ $t('quickSale.payment.codePay') }}</p>
					</li>
					<li class="tips">
						<van-icon name="warning-o" />
						
						<div>
							<span class="bt">{{ $t('quickSale.payment.mtips.t') }}</span>
							{{ orderDetails.remarks ? orderDetails.remarks : $t('quickSale.payment.mtips.c') }}
						</div>
					</li>
				</ul>

				<van-collapse :border="false" v-model="activeName">
					<!-- <van-collapse-item :name="0">
						<template #title>
							

						</template>

						
					</van-collapse-item> -->

					<van-collapse-item :name="1" style="margin-bottom: 20px;">
						<template #title>
							<ul class="lists zd_title">
								<li>
									<span class="l">{{ $t('quickSale.payment.ddxq.t') }}</span>
									<span class="r"></span>
								</li>
							</ul>
						</template>

						<ul class="lists">
							<li v-for="item in $t('quickSale.payment.ddxq.lists')">
								<span class="l">{{ item.name }}</span>
								<span class="r" v-if="item.copy">
									<copy :content="orderDetails[item.key]">
										<s>{{ orderDetails[item.key] }}</s>
									</copy>
								</span>
								<span class="r" v-else>{{ orderDetails[item.key] }} {{ item.usdt ? item.usdt : sysInfos.hv[item.dw] }}</span>
							</li>

							<li class="tips">
								<van-icon name="warning" style="margin-right: 10px;" />

								<div style="padding-left: 0;">{{ $t('quickSale.payment.ptips') }}</div>
							</li>
						</ul>
					</van-collapse-item>
				</van-collapse>

				<div class="buttoms clearfix" v-if="orderDetails.status == 0">
					<div class="l">
						<div class="p">{{ sysInfos.hv.dwf }}{{ orderDetails.value | money }}</div>
						<div class="t" v-html="$options.filters.language($t('quickSale.payment.qzfk'), $options.filters.MS(testTime))"></div>
					</div>
					<div class="r">
						<van-button @click="cancelOrderOpen" type="default">{{ $t('quickSale.payment.qxdd') }}</van-button>
						<van-button @click="payOkOpen" type="info">{{ $t('quickSale.payment.wyfk') }}</van-button>
					</div>
				</div>
				
				<div class="buttoms clearfix ddfb"  v-if="orderDetails.status == 1">
					<div class="l">
						<div class="p">{{  $t('global.base.ddmjfs') }}</div>
						<div class="t" v-html="$options.filters.language($t('quickSale.payment.mjjz'), $options.filters.MS(testTime))"></div>
						<div class="ts" v-html="$options.filters.language($t('quickSale.payment.fbts'), 10)"></div>
					</div>
					<div class="r">
						
						<van-button block @click="noCoinOk" type="info" :disabled="testTime>0">
							{{ $t('quickSale.payment.wsdb') }}
							<i class="iconfont icon-kefu"></i>
						</van-button>
					</div>
				</div>
				
				<div class="buttoms clearfix" v-if="orderDetails.status == 2">
					<div class="l cancal">
						<div class="p">{{  status(orderDetails.status) }}</div>
						<div class="t">{{ $t('global.base.ycrzh') }}</div>
					</div>
					<div class="r">
						<van-button @click="$router.push('/assets/assets')" type="info">
							{{ $t('global.base.ckzc') }}
						</van-button>
					</div>
				</div>
				
				<div class="buttoms clearfix" v-if="orderDetails.status == 3">
					<div class="l cancal">
						<div class="p">{{  status(orderDetails.status) }}</div>
						<div class="t">{{ $t('global.base.yyz') }}</div>
					</div>
					<div class="r">
						<van-button @click="openKf" type="info">
							{{ $t('global.base.lxkf') }}
						</van-button>
					</div>
				</div>
				
				<div class="buttoms clearfix" v-if="orderDetails.status == 4 || orderDetails.status == 5">
					<div class="l cancal">
						<div class="p">{{  status(orderDetails.status) }}</div>
						<div class="t">{{ $t('global.base.gddyqx') }}</div>
					</div>
					<div class="r">
						<van-button @click="$router.push('/sale/quickBuySell')" type="info">
							{{ $t('global.base.zmyd') }}
						</van-button>
					</div>
				</div>
				
				
			</div>
			<div class="right">
				<chat
					:to="{
						nickname: orderDetails.nickname,
						headurl: orderDetails.headurl,
						friendid: orderDetails.firendid
					}"
				></chat>
			</div>
		</div>

		<!-- 待收款 -->
		<div class="main clearfix" v-else>
			<div class="left">
				<div class="title clearfix">
					<img :src="$t('global.usdt')" alt="" />
					<span>{{ $t('global.base.cs') + $t('global.base.usdt') }}</span>
				</div>

				<van-collapse :border="false" v-model="activeNamec">
					<van-collapse-item :name="0" style="margin-bottom: 20px;">
						<template #title>
							<ul class="lists zd_title">
								<li>
									<span class="l">{{ $t('quickSale.collection.ddxq.t') }}</span>
									<span class="r"></span>
								</li>
							</ul>
						</template>

						<ul class="lists">
							<li v-for="(item, index) in $t('quickSale.collection.ddxq.lists')">
								<span class="l">{{ item.name }}</span>
								<span class="r" v-if="item.copy">
									<copy :content="orderDetails[item.key]"><s>{{orderDetails[item.key]}}</s></copy>
								</span>
								<span class="r" v-else>
									{{ ddxx(item.key) }}
								</span>
							</li>
							<li class="tips mtips">
								<van-icon name="warning-o" />
								
								<div> <span class="bt">{{ $t('quickSale.collection.tips.t') }}</span> {{ orderDetails.remarks ? orderDetails.remarks : $t('quickSale.collection.tips.c') }}</div>
							</li>
						</ul>
					</van-collapse-item>

					<van-collapse-item :name="1" v-if="orderDetails.status == 1 || orderDetails.status == 2" style="margin-bottom: 20px;">
						<template #title>
							<ul class="lists zd_title">
								<li>
									<span class="l">{{ $t('quickSale.collection.zfxx.t') }}</span>
									<span class="r"></span>
								</li>
							</ul>
						</template>

						<ul class="lists">
							<li v-for="(item, index) in $t('quickSale.collection.zfxx.lists')">
								<span class="l">{{ item.name }}</span>
								<span class="r" v-if="item.copy">
									<copy :content="getPayInfos(item.key)"><s>{{ getPayInfos(item.key) }}</s></copy>
								</span>
								<span class="r" v-else>{{ getPayInfos(item.key) }}</span>
							</li>
							
							<li class="tips">
								<van-icon name="warning-o" style="margin-right: 10px;" />

								<div style="padding-left: 0;">{{ $t('quickSale.collection.zfTips') }}</div>
							</li>
						</ul>
					</van-collapse-item>
				</van-collapse>
				
				
				
				
				
				<div class="buttoms clearfix ddfb"  v-if="orderDetails.status == 0 || orderDetails.status == 1">
					<div class="l">
						<div class="p">{{ sysInfos.hv.dwf }}{{ orderDetails.value | money }}</div>
						<div class="t" v-html="$options.filters.language($t('quickSale.payment.fbmf'), $options.filters.MS(testTime))"></div>
						<div class="ts" v-html="$options.filters.language($t('quickSale.payment.fkts'), 10)"></div>
					</div>
					<div class="r ">
						
						<van-button class="po" @click="noCoinOk" :disabled="orderDetails.status == 0 && testTime>0 " type="info">
							{{ $t('quickSale.collection.wsdk') }}
							<svg t="1600838779637" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6601" width="48" height="48">
								<path
									d="M884.165 451.494c-2.494-203.504-168.046-367.753-372.161-367.753s-369.666 164.249-372.165 367.753c-34.163 27.314-56.096 69.25-56.096 116.37 0 82.254 66.697 148.969 148.96 148.969 35.899 0 68.818-12.726 94.534-33.857l-70.18-261.923c-7.949-1.294-16.045-2.155-24.353-2.155-5.474 0-10.855 0.339-16.183 0.926 17.954-147.35 143.268-261.601 295.488-261.601 152.199 0 277.532 114.25 295.481 261.601-5.306-0.583-10.705-0.926-16.18-0.926-8.305 0-16.421 0.863-24.375 2.155l-70.159 261.801c19.847 16.295 43.981 27.559 70.459 31.868-35.138 37.751-79.825 66.511-130.378 82.068l-6.164 6.156c-15.77-28.99-46.122-48.892-81.442-48.892-51.427 0-93.102 41.674-93.102 93.118 0 51.431 41.673 93.104 93.102 93.104 42.211 0 77.419-28.27 88.852-66.758 102.752-25.189 188.829-92.829 238.272-183.482 38.595-26.917 63.899-71.562 63.899-122.175-0.002-47.108-21.955-89.058-56.102-116.371z"
									p-id="6602"
									fill="#ffffff"
								></path>
							</svg>
						</van-button>
						<van-button @click="payOkCoinOpen" :disabled="orderDetails.status == 0 " type="info">{{ $t('quickSale.collection.qrsk') }}</van-button>
					</div>
				</div>
				
				
				<div class="buttoms clearfix" v-if="orderDetails.status == 2">
					<div class="l cancal">
						<div class="p">{{  status(orderDetails.status) }}</div>
						<div class="t">{{ $t('global.base.ykczh') }}</div>
					</div>
					<div class="r">
						<van-button @click="$router.push('/assets/assets')" type="info">
							{{ $t('global.base.ckzc') }}
						</van-button>
					</div>
				</div>
				
				<div class="buttoms clearfix" v-if="orderDetails.status == 3">
					<div class="l cancal">
						<div class="p">{{  status(orderDetails.status) }}</div>
						<div class="t">{{ $t('global.base.yyz') }}</div>
					</div>
					<div class="r">
						<van-button @click="openKf" type="info">
							{{ $t('global.base.lxkf') }}
						</van-button>
					</div>
				</div>
				
				<div class="buttoms clearfix" v-if="orderDetails.status == 4 || orderDetails.status == 5">
					<div class="l cancal">
						<div class="p">{{  status(orderDetails.status) }}</div>
						<div class="t">{{ $t('global.base.gddyqx') }}</div>
					</div>
					<div class="r">
						<van-button @click="$router.push('/sale/quickBuySell')" type="info">
							{{ $t('global.base.zmyd') }}
						</van-button>
					</div>
				</div>
				
				
			</div>

			<div class="right"><chat
					:to="{
						nickname: orderDetails.nickname,
						headurl: orderDetails.headurl,
						friendid: orderDetails.firendid
					}"
				></chat></div>
		</div>

		<ul class="tips">
			<li v-for="item in $t('quickSale.payment.dtips')">{{ item }}</li>
		</ul>

		<!-- 弹窗 待付款-->
		<dialogx
			v-model="cancelOrder.show"
			:disabled="!cancelOrder.no"
			:onOk="cancelOrderOk"
			:okText="$t('quickSale.payment.cancel.ok')"
			:cancelText="$t('quickSale.payment.cancel.fh')"
			:title="$t('quickSale.payment.cancel.title')"
		>
			<!-- cancelOrder 取消事件	 -->
			<template v-slot:content>
				<ul class="cancelOrder_content">
					<li v-for="(item, index) in $t('quickSale.payment.cancel.tips')">
						<span v-if="index == 1" v-html="$options.filters.language(item, userInfos.cancelCount + 1)"></span>
						<span v-else>{{ item }}</span>
					</li>
				</ul>
				<div class="cancelOrder_no">
					<div style="display: inline-block;">
						<van-checkbox v-model="cancelOrder.no" shape="square">{{ $t('quickSale.payment.cancel.no') }}</van-checkbox>
					</div>
				</div>
			</template>
		</dialogx>

		<dialogx v-model="payOk.show" :onOk="payOrderOk" :title="$t('quickSale.payment.payOk.title')">
			<!-- payOk 确认付款 -->

			<template v-slot:content>
				<ul class="pay_ok_content">
					<li>{{ $t('quickSale.payment.payOk.tip') }}</li>
					<li>{{ $t('quickSale.payment.payOk.fs') }}: {{ getPayItem.title }}</li>
					<li>{{ $t('quickSale.payment.payOk.je') }}: {{ orderDetails.value | money }} {{ sysInfos.hv.dw }}</li>
				</ul>
			</template>
			<template v-slot:bLeft>
				<div class="pay_ok_bleft" v-html="$options.filters.language($t('global.base.hs'), $options.filters.MS(testTime))"></div>
			</template>
		</dialogx>

		<!-- 弹窗 待收款-->
		<dialogx v-model="payOkCoin.show" ref="payOkCoin" :onOk="payOkCoinSk" :disabled="!Boolean(payOkCoin.password)" :title="$t('quickSale.collection.payOkCoin.title')">
			<!-- 确认收款 -->
			<template v-slot:content>
				<ul class="pay_coin_content">
					<li>{{ $t('quickSale.collection.payOkCoin.tips') }}</li>
					<li>{{ $t('quickSale.collection.payOkCoin.skfs') }} : {{getPayInfos('paytype')}}({{ orderDetails.payinfos[0].account }})</li>
					<li>{{ $t('quickSale.collection.payOkCoin.skje') }} : {{ orderDetails.value | money }} {{ sysInfos.hv.dw }} </li>
					<li class="password clearfix">
						{{ $t('global.base.jymm') }}
						<input v-model="payOkCoin.password" autofocus="autofocus" type="password" :placeholder="$t('global.qsr') + $t('global.base.jymm')" />
						<a href="#/editJPwd?type=1">{{ $t('global.base.wjmm') }}?</a>
					</li>
				</ul>
			</template>

			<template v-slot:bLeft>
				<div class="pay_ok_bleft" v-html="$options.filters.language($t('global.base.hs'), $options.filters.MS(testTime))"></div>
			</template>
		</dialogx>
	
		
		<set-pay-pwd v-model="payPsaawordFlag" v-if="payPsaawordFlag"></set-pay-pwd>
		
	</div>
</template>

<script>
	import setPayPwd from '_c/common/setPayPassword'
export default {
	data() {
		return {
			payPsaawordFlag:false,
			//页面类型
			pageType: 0,
			activeName: [0, 1],
			activeNamec: [0, 1],
			testTime: 15 * 60, //剩余时间
			testTimeInr: null,
			interInr: null,
			timeType:0,
			//弹窗-待付款
			cancelOrder: {
				show: false,
				no: false
			},
			payOk: {
				show: false
			},
			//弹窗-确认收款
			payOkCoin: {
				show: false,
				password: ''
			},

			id: 0,
			orderDetails: false,

			//买
			buy: {
				payTypeActive: null
			},
			
		
		};
	},
	components:{
		setPayPwd
	},
	computed: {
		buyPayType() {
			let has = this.orderDetails.payInfoVms || [];

			return has.map(item => {
				return {
					...item,
					...this.$t('global.payType').filter(tt => tt.id == Number(item.paymenttype))[0]
				};
			});
		},
		getPayItem() {
			return this.buyPayType.filter(item => item.id == this.buy.payTypeActive)[0] || {};
		},
		getPayInfos(){
			
			return function(key){
				
				switch(key){
					case 'paytype':
						return  this.$t('global.payType').filter(item=>item.id== Number(this.orderDetails.payinfos[0].paymenttype))[0].title
					break;
					case 'name':
						return this.orderDetails.payinfos[0].realName
					break;
					default:
						return this.orderDetails[key]
					
				}
				
				return key
				
				return this.orderDetails.payinfos[0]
			}
			
		},
		status(){
			return function(value){
				let arr = this.$t('order.stustas').filter(item=>item.type == value)
					
				return arr.length>0 ? arr[0].text : value
			}
		},
		ddxx(){
			return function(key){
				let data = this.orderDetails
					if(!data){
						return
					}
				switch (key){
					case 'value':
						return this.sysInfos.hv.dwf + Number(data[key]).toFixed(2) 
					break;
					case 'price':
						return  Number(data[key]).toFixed(2) +" "+ this.sysInfos.hv.dw +"/USDT"
					break;
					case 'coin':
						return  Number(data[key]).toFixed(4) + " " +"USDT"
					break;
					default:
						return data[key]
					
				}
				return key
			}
		}
	},
	mounted() {
		this.init()
	},
	beforeRouteLeave(to,from,next){
		clearInterval(this.testTimeInr)
		clearInterval(this.interInr)
		next({replace:true})
	},
	beforeRouteEnter(to,from,next) {
		
		next({replace:true})
	},
	
	beforeDestroy() {
		clearInterval(this.testTimeInr)
		clearInterval(this.interInr)
	},
	watch:{
		'$route'(){
			if(this.$route.query.hasOwnProperty("id")){
				this.init()
			}
		}
	},
	methods: {
		init(){
			this.pageType = this.$route.meta.type;
			this.id = this.$route.query.id;
			this.getDetails(() => {
				if (this.orderDetails.status ==0 || this.orderDetails.status ==1  || this.orderDetails.status ==3) {
					
					
					this.updeteTime()
					clearInterval(this.testTimeInr);
					this.testTimeInr = setInterval(() => {
						this.testTime--;
						if (this.testTime <= 0) {
							this.testTime = 0;
							clearInterval(this.testTimeInr);
						}
					}, 1000);
					this.interInr = setInterval(()=>{
						this.getDetails()
					},3000)
				}
			});
		},
		//获取详情
		getDetails(callback) {
			this.$http
				.getOrderById({
					id: this.id,
					type: this.pageType
				})
				.then(res => {
					if (res.code == 0) {
						if(this.orderDetails.status != res.data.status && res.data.status==1){
							this.updeteTime()
						}
						
						//处理数据
						res.data.coin = Number(res.data.coin).toFixed(4)
						res.data.price = Number(res.data.price).toFixed(2)
						res.data.value = Number(res.data.value).toFixed(2)
						
						this.orderDetails = res.data;
						this.buy.payTypeActive = this.buy.payTypeActive ? this.buy.payTypeActive : this.buyPayType[0].id;
						
						if(res.data.status==0 && res.data.status==3){
							clearInterval(this.testTimeInr)
							clearInterval(this.interInr)
						}
						
						callback ? callback() : '';
					}
				});
		},
		updeteTime(){
			let data = this.orderDetails;
								
			let testTime = 15*60
				if(data.status==0){
					testTime = data.overtimetype * 60 - Math.ceil((data.systemTime - data.createtimestamp) / 1000);
				}
				if(data.status==1){
					testTime = 10* 60 - Math.ceil((data.systemTime - data.sendtimestamp) / 1000);
				}
			
			this.testTime = testTime
		},
		//改变订单状态
		changeOrder(json) {
			//状态1、付款，2、放币，3，未收到款，4，取消订单  paymenttype 收款方式 paypassword 支付密码
			json.id = this.orderDetails.id;

			return this.$http.changeOrderStatus(json);
		},
		cancelOrderOpen() {
			this.cancelOrder.show = true;
			this.cancelOrder.no = false;
		},
		//待付款--确认取消
		cancelOrderOk() {
			let json = {
				status: 4
			};
			this.changeOrder(json).then(res => {
				this.cancelOrder.show = false;
				if (res.code == 0) {
					this.$notify({ type: 'success', message: this.$t('global.base.qxcg') });
					this.getDetails(()=>{
						/* setTimeout(()=>{
							clearInterval(this.testTimeInr)
							clearInterval(this.interInr)
						},2000) */
					});
				}
			});
		},
		//待付款--确认付款
		payOrderOk() {
			let json = {
				status: 1,
				paymenttype:this.getPayItem.paymenttype
			};
			this.changeOrder(json).then(res => {
				this.payOk.show = false;
				if (res.code == 0) {
					//this.$notify({ type: 'success', message: this.$t('global.base.qxcg') });
					this.getDetails(()=>{
						this.updeteTime()
					});
				}
			});
		},
		//待付款--未收到币
		noCoinOk(){
			let json = {
				status: 3
			};
			this.changeOrder(json).then(res => {
				
				if (res.code == 0) {
					this.getDetails(()=>{
						/* setTimeout(()=>{
							clearInterval(this.testTimeInr)
							clearInterval(this.interInr)
						},2000) */
					});
					this.openKf()
				}
			});
		},
		//确认收款
		payOkCoinSk(){
			let json = {
				status: 2,
				paypassword:this.payOkCoin.password
			};
			this.changeOrder(json).then(res => {
				this.$refs.payOkCoin.loadingF = false
				if (res.code == 0) {
					this.payOkCoin.show = false
					this.getDetails(()=>{
						/* setTimeout(()=>{
							clearInterval(this.testTimeInr)
							clearInterval(this.interInr)
						},2000) */
					});
				}
			},(err)=>{
				this.$refs.payOkCoin.loadingF = false
			});
		},

		payOkOpen() {
			this.payOk.show = true;
		},
		payOkCoinOpen() {
			if(!this.userInfos.payPassword){
				
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
			this.payOkCoin.password = '';
			this.payOkCoin.show = true;
		},
		
		//打开客服中心
		openKf(){
			window.open("https://tawk.to/yaotc.com")
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.view_quickSale_paymentAndCollection {
	
	.main {
		padding-top: 40px;
		
		.left {
			.box_wrap(550px);
			float: left;
			padding: 0;
			width: 550px;

			.title {
				.box_title;

				& > img {
					width: 24px;
					height: 24px;
					border-radius: 50%;
				}
			}

			.lists {
				.line_rl();
				padding: 0 24px;

				li {
					font-size: 16px;
				}
			}
		}

		.right {
			float: right;
			.box_wrap(360px);

			padding: 0;
		}

		.buttoms {
			background: @blue-d;
			border-top: 1px solid @e3e3;
			padding: 10px 20px;

			.l {
				float: left;

				.p {
					color: @blue;
					font-size: 24px;
					font-weight: bold;
				}

				.t {
					color: #5c677d;
					margin-top: 10px;
					font-size: 12px;
				}
			}
			.cancal {
				.p {
					color: #333;
				}
			}
			.r {
				float: right;

				.po {
					margin-right: 20px;
					position: relative;
					padding-right: 40px;
					svg {
						position: relative;
						top: 3px;
						width: 18px;
						height: 18px;
					}
				}
			}
		}
		
		.ddfb{
			.l{
				width: 100%;
				position: relative;
				.p{
					color: #333;
				}
				.t{
					margin: 0;
				}
				.lxkf{
					position: absolute;
					right: 0;
					top: 50%;
					cursor: pointer;
					transform: translateY(-50%);
					i{
						display: block;
						color: @green;
						font-weight: bold;
						font-size: 20px;
						text-align: center;
					}
				}
				.ts{
					color: @org-s;
					font-size: 12px;
					margin-bottom: 5px;
				}
			}
			.r{
				padding: 0;
				display: flex;
				width: 100%;
				
				button{
					flex: 1;
				}
			}
		}
		
	}

	.tips {
		max-width: 550px;
		padding: 20px;
		padding-left: 30px;
		box-sizing: border-box;

		li {
			margin-bottom: 10px;
			color: #b3b3b3;
			font-size: 12px;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				left: -15px;
				top: 7px;
				width: 7px;
				height: 7px;
				background: #d7dae2;
				border-radius: 50%;
				opacity: 1;
			}
		}
	}

	.cancelOrder_content {
		li {
			color: #666;
			font-size: 14px;
			position: relative;
			margin-bottom: 10px;
			padding-left: 20px;

			&::after {
				content: '';
				position: absolute;
				left: 0;
				top: 5px;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background: @blue;
			}
		}
	}

	.cancelOrder_no {
		text-align: right;
		color: #666 !important;

		.van-checkbox__label {
			color: #666 !important;
		}
	}

	.pay_ok_content {
		color: #666666;

		li {
			margin-bottom: 10px;
			font-size: 14px;
		}
	}

	.pay_ok_bleft {
		position: absolute;
		left: 24px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 14px;
		color: #666;
	}

	.pay_coin_content {
		li {
			color: #666666;
			margin-bottom: 10px;
		}
		.password {
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
	}
}

@media (max-width: 1023px) {
	.view_quickSale_paymentAndCollection {
		.main {
			.left {
				float: none;
				margin: auto;
				margin-bottom: 20px;
			}

			.right {
				float: none;
				margin: auto;
				width: 100%;
				max-width: 100%;
			}
		}
	}
}

@media (max-width: 600px) {
	.view_quickSale_paymentAndCollection {
		.main {
			.left {
				width: 100%;
			}
		}
	}
}
</style>
<style lang="less">
.view_quickSale_paymentAndCollection {
	.main {
		.left {
			.van-collapse-item {
				padding-top: 10px;
			}

			.lists {
				li.zfb {
					display: block;

					img {
						display: block;
						width: 120px;
						height: 120px;
						margin: auto;
					}

					p {
						text-align: center;
						font-size: 14px;
						color: #b3b3b3;
						margin-top: 20px;
					}
				}

				li.tips {
					display: block;
					.tips-org;
					margin-top: 10px;
				}

				li.mtips {
					display: block;
				}
			}

			.van-cell__right-icon {
				color: #666666;
				font-size: 12px;
				font-weight: bold;
			}

			.van-cell--clickable {
				padding: 12px 24px !important;
				.border-after;
			}

			.title {
			}

			.zd_title {
				padding: 0px !important;

				& > li {
					padding: 0 !important;
					.r {
						.g_select {
							width: 160px;
							.title {
								text-align: right;
								i {
									top: 5px;
									margin-left: 5px;
								}
							}
							li {
								padding: 8px 20px;
							}
						}
					}
				}
			}

			.van-cell {
				padding: 0;
			}

			.van-collapse-item__content {
				padding: 0;

				li {
					cursor: default;

					s {
					}
				}
			}
		}

		.buttoms {
			.l {
				.t {
					.djs {
						color: @org-s;
						padding: 0 5px;
					}
				}
			}

			.r {
				padding-top: 10px;

				.van-button--default {
					background: #f3f3f3;
					margin-right: 20px;
				}
			}
		}
	}

	.pay_ok_bleft {
		.djs {
			color: @org-s;
			margin-left: 5px;
		}
	}
}
</style>
