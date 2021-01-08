<template>
	<div class="view_assets_payment">
		
		<header-top :title="$t('payment.title')"></header-top>
		
		<div class="top">
			<div class="main global_main">
				<div class="t">{{ $t('payment.zhfk') }}</div>
				<div class="ip" v-if="setp==0">
					<span>{{$t('payment.dfzh')}}:</span>
					<input v-model="account" type="text" :placeholder="$t('payment.uid')" />
				</div>
				<div class="infos btn" v-if="setp==1">
					
					<div class="tx">
						<img :src="transferInfos.headUrl" alt="">
						<span class="u">UID:{{transferInfos.uid}}</span>
						<span class="n">{{transferInfos.nickName}}</span>
					</div>
					<ul class="items">
						<li>
							<p class="t">
								{{ $t('payment.fke') }}
								<span style="font-size: 13px;color: #B3B3B3;">
									({{ $t('payment.hv') }}:{{userInfos.buyPrice}} {{ sysInfos.hv.dw }} )
								</span>
							</p>
							<div class="input">    
								<input type="number" @input="inputChange(0)"  v-model="buy.num" :placeholder=" $t('global.qsr') ">
								<span>
									<img :src="$t('global.usdt')" alt="">
									<b>USDT</b>
								</span>
							</div>
						</li>
						<li class="jh">
							<svg t="1596700800611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
							 p-id="8219" width="24" height="24">
								<path d="M912 369.1c0 4.1-1.3 7.6-4 10.3L765.2 522.3c-2.7 2.7-6.1 4-10.3 4-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8H126.3c-3.8 0-7.2-1.4-10.1-4.2-2.8-2.8-4.2-6.2-4.2-10.1v-85.8c0-3.8 1.4-7.2 4.2-10.1 2.8-2.8 6.2-4.2 10.1-4.2h614.3V226c0-4.1 1.3-7.6 4-10.3 2.7-2.6 6.1-4 10.3-4 3.5 0 7.1 1.5 10.7 4.5L908 358.6c2.7 2.9 4 6.3 4 10.5z m0 242.9v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2H283.4v85.8c0 3.8-1.4 7.2-4.2 10.1-2.8 2.8-6.2 4.2-10.1 4.2-3.5 0-7.1-1.5-10.7-4.5L116.1 664.9c-2.7-2.7-4-5.9-4-9.9 0-4.1 1.3-7.6 4-10.3L259 501.8c2.7-2.7 6.1-4 10.3-4 3.8 0 7.2 1.4 10.1 4.2s4.2 6.2 4.2 10.1v85.8h614.3c3.8 0 7.2 1.4 10.1 4.2 2.6 2.7 4 6 4 9.9z"
								 p-id="8220"></path>
							</svg>
						</li>
						<li>
							
							<div class="input">
								<input @input="inputChange(1)" type="number"  v-model="buy.price" :placeholder="$t('global.qsr') ">
								<span>
									<img :src="sysInfos.hv.dwimg" alt="">
									<b>{{sysInfos.hv.dw}}</b>
								</span>
							</div>
						</li>
					</ul>
					<div class="tip">
						{{ $t('payment.tip')}}
					</div>
					<div class="sxf">
						<p>{{ $t('quickSale.quickBuySell.buy.sxf') }}:{{ userInfos.transfer*100}}%</p>
					</div>
				</div>
				<div class="btn">
					<van-button v-if="setp==0" :loading="nextLoading" :disabled="!account" @click="next" type="info">{{$t('global.base.next')}}</van-button>
					<van-button v-else :loading="nextLoading" :disabled="!(buy.num>0 && buy.price>0)"  @click="next" type="info">{{$t('global.base.next')}}</van-button>
				</div>
			</div>
		</div>
		
		<div style="position: relative;">
			<div class="table global_main">
				<div class="t">{{$t('payment.titler')}}</div>
				<tablex :titles="$t('payment.tableTitle')" :datas="datas">
					<template v-slot:df="row">
						<div class="df">
							<img :src="row.item.headUrl" alt="">
							<span>{{row.item.nickName}}</span>
						</div>
					</template> 
					<template v-slot:usdt="row">
						<div class="usdt">
							<div class="n">
								{{Number(row.item.coin).toFixed(4) }}
							</div>
							<div class="o">
								<span>{{$t('global.base.jylv')}}:{{ sysInfos.hv.buyPrice }} {{sysInfos.hv.dw}}/USDT</span>
								<span>{{$t('global.base.fbje')}}:{{Number(row.item.value).toFixed(2)}} {{sysInfos.hv.dw}} </span>
							</div>
						</div>
					</template> 
					<template v-slot:status="row">
						<div>
							<span>{{ getStatus(row.item.status) }}</span>
						</div>
					</template>
					<template v-slot:action="row">
						<div class="action" @click="goDetail(row.item.transferid)">
							<span>{{ $t('global.base.ckxq') }}</span>
						</div>
					</template> 
				</tablex>
				
			</div>
			<loading v-model="tableLoading"></loading>
		</div>
		
		<div class="page_change">
			<div class="m">
				<van-pagination @change="getlist()" v-model="json.current" :total-items="json.total" :items-per-page="json.size" :show-page-size="3" force-ellipses>
					<template #prev-text>
						<van-icon name="arrow-left" />
					</template>
					<template #next-text>
						<van-icon name="arrow" />
					</template>
				</van-pagination>
			</div>
		</div>
		
		
		
		<!-- 弹窗 -->
		
		<!-- 确认付款 -->
		
		<dialogx v-model="payOk.show " :onOk="payOkSubmit"  :disabled="!Boolean(payOk.password)" :title="payOk.title">
			<!-- 出售 -->
			<template v-slot:content>
				<ul class="ok_buy">
					
					<li class="tips">
						<i class="iconfont icon-dui"></i>
						<span v-html="$options.filters.language( $t('payment.payOk.tips') , 10 )"></span>
					</li>
					
					<li v-for="item in payOk.lists">
						<span>{{item.name}}</span>
						<span class="r" :style="{color:item.key=='fwe'?'red':'#666'}">
							{{payOk.datas[item.key]}} 
							<i v-if="item.key=='fke'">USDT</i>
						</span>
					</li>	
					<li class="password clearfix">
						{{ $t('global.base.jymm') }}
						<input v-model="payOk.password" autofocus="autofocus" type="password"  :placeholder="$t('global.qsr') + $t('global.base.jymm')">
						<a href="#">
							{{ $t('global.base.wjmm') }}?
						</a>
					</li>
					
					
				</ul>
			</template>		
		</dialogx>
		
		<set-pay-pwd v-model="payPsaawordFlag" v-if="payPsaawordFlag"></set-pay-pwd>
	</div>
</template>

<script>
	import setPayPwd from '_c/common/setPayPassword'
	export default {
		data(){
			return{
				account:'',
				setp:0,
				nextLoading:false,
				transferInfos:{
					
				},
				buy: {
					num:'',
					price:''
				},
				
				datas:[],
				tableLoading:false,
				
				payOk:{
					show:false
				},
				json:{
					current:1,
					size:8,
					total:0,
					type:1
				},
				
				payPsaawordFlag:false
				
			}
		},
		components:{
			setPayPwd
		},
		mounted() {
			this.getlist()
		},
		computed:{
			getStatus(){
				return function(value){
					return this.$t('payment.jywc')
				}
			}
		},
		methods:{
			getlist(){
				this.tableLoading = true
				this.$http.collectionAndPaymentLog({
					...this.json
				}).then(res=>{
					this.tableLoading = false
					if(res.code==0){
						this.json.total = res.total
						this.datas = res.data.map(item=>{
							item.time = this.$options.filters.timeFormat(item.time)
							//item.status = this.getStatus(item.status)
							return item
						})
					
					
					}
				})
			},
			next(){
				
				if(this.setp==0){
					this.nextLoading = true
					this.$http.getOpponentInfo({
						account:this.account,
						transferType:1
					}).then(res=>{
						this.nextLoading = false
						if(res.code==0){
							this.transferInfos = res.data
							this.buy.num = ''
							this.buy.price = ''
							this.setp++
						}
						
					},(err)=>{
						this.nextLoading = false
					})
					return
				}
				
				if(this.setp==1){
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
					
					
					this.payOk={
						show:true,
						title:this.$t('payment.payOk.title'),
						lists:this.$t('payment.payOk.lists'),
						password:'',
						datas:{
							uid:this.transferInfos.uid,
							fke:this.buy.num,
							fwf:this.userInfos.transfer*100 +'%',
						}
					}
				}
				
				
			},
			payOkSubmit(){
				this.$http.launchTransfer({
					coin:this.buy.num,
					paypassword:this.payOk.password,
					toId:this.transferInfos.userid,
					value:this.buy.price
				}).then(res=>{
					this.payOk.show = false
					if(res.code==0){
						this.setp = 0
						this.account = ''
						this.json.current = 1
						this.getlist()
						this.$notify({type:"success",message:this.$t('payment.zzcg')})
						
					}
				})
				
			},
			inputChange(type){
				if(type==0){
					this.buy.price = Number(this.buy.num * this.sysInfos.hv.buyPrice).toFixed(2)
				}else{
					this.buy.num = Number(this.buy.price/this.sysInfos.hv.buyPrice).toFixed(4)
				}
			},
			goDetail(id){
				this.$router.push('/assets/paymentRecords?id='+id+'&type=1')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_payment{
		.top{
			background-color: #F2FAFC;
			padding: 30px 0;
			&>.main>.t{
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 20px;
			}
			.ip{
				span{
					display: block;
					margin-bottom: 6px;
					color: #666666;
				}
				input{
					max-width: 360px;
					//margin-right: 20%;
					margin-bottom: 20px;
				}
			}
			.btn{
				max-width: 360px;
				
				button{
					display: block;
					width: 100%;
					margin-right: 20%;
				}
			}
		}
		
		
		.infos{
			background-color: #fff;
			padding: 15px;
			box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
			opacity: 1;
			border-radius: 5px;
			margin-bottom: 20px;
			box-sizing: border-box;
			.tx{
				text-align: center;
				img{
					width: 60px;
					height: 60px;
					border-radius: 50%;
					display: block;
					margin: auto;
				}
				span{
					display: block;
				}
				.u{
					font-size: 16px;
					color: #2E323D;
					padding: 10px 0;
				}
				.n{
					font-size: 12px;
					color: #979DAC;
				}
			}
			.items {
				padding-top: 20px;
			
				&>li {
					padding-bottom: 5px;
					
					border-bottom: 1px solid #E3E3E3;
			
					.t {
						padding-bottom: 10px;
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
								color: #D3D3D3;
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
					margin-top: 15px;
					svg {
						//.hover(@blue, true);
						transform: rotate(90deg);
						display: inline-block;
			
						path {
							fill: rgba(4, 102, 200, 0.3);
						}
					}
				}
			
			}
			.tip{
				color: @org-s;
				font-size: 12px;
				padding: 10px 0;
			}
			.sxf{
				text-align: right;font-size: 13px;color: #C5C9D4;
			}
			
		}
		
		
		.table{
			.t{
				padding: 10px 0;
				padding-top: 20px;
				font-size: 16px;
			}
			.df{
				.clearfix;
				img{
					float: left;
					width: 32px;
					height: 32px;
					display: inline-block;
					border-radius: 50%;
					background-color: #ccc;
				}
				span{
					float: left;
					margin-left: 8px;
					margin-top: 5px;
				}
			}
			.action{
				span{
					.hover;
					color: @blue;
				}
			}
			.usdt{
				
				.n{
					font-size: 16px;
				}
				.o{
					display: flex;
					color: #B3B3B3;
					font-size: 13px;
					margin-top: 5px;
					span{
						flex: 1;
					}
					span:last-child{
						display: inline-block;
						padding-left: 10px;
						border-left: 1px solid #E3E3E3;
					}
				}
			}
			.show_more{
				text-align: center;
				padding: 15px 0;
				border-bottom: 1px solid #f3f3f3;
				margin-bottom: 60px;
				color: @blue;
				font-size: 16px;
				.hover;
			}
		}
		
		.page_change {
			text-align: center;
			padding: 40px 0;
			.m {
				display: inline-block;
			}
		}
		
		
		.ok_buy{
			.line_rl(#B3B3B3);
			padding-top: 40px;
			li{
				display: block;
				&>.r{
					margin-left: 5px;
					color: #666;
					float: right;
					img{
						width: 16px;
						height: 16px;
						position: relative;
						top: 2px;
					}
				}
			}
			
			.password{
				
				display: block;
				input{
					display: block;
					width: 100%;
					
					margin: 5px 0;
				}
				input:focus{
					border-color: @blue;
				}
				a{
					color:@blue;
					float: right;
				}
			}
			.tips{
				display: block;
				font-size: 13px;
				text-align: center;
				position: absolute;
				top: 10px;
				left: 0;
				width: 100%;
				padding: 5px;
				background-color: rgba(77, 184, 114, 0.1);
				color: #666;
				border-top: 1px solid @green;
				border-bottom: 1px solid @green;
				i{
					color: @green;
					font-size: 14px;
					margin-right: 5px;
				}
			}
			
		}
		
		
		
	}
	@media (max-width:1023px) {
		.view_assets_payment{
			.table{
				.df{
					img{
						display: none;
					}
					span{
						margin-left: 0;
					}
				}
				.usdt{
					.o{
						display: block;
						span{
							display: block;
							border: none !important;
							padding: 0 !important;
						}
						span:first-child{
							display: none;
						}
					}
				}
			}
		}
	}
</style>
