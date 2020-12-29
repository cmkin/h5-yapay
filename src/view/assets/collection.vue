<template>
	<div class="view_assets_collection">
	
		<header-top :title="$t('collection.title')" ></header-top>
		
		
		
		<div class="top">
			<div class="main global_main">
				<div class="t">{{ $t('collection.titler') }}</div>
				<div class="code">
					<!-- <img src="" alt=""> -->
					<qrcode-vue class="cd" :value="codeVal" :size="isPhone ? 140 : 168" ref="qrcode" level="H"></qrcode-vue>
					<span>{{ $t('collection.skxx') }}</span>
					<span class="sz" @click="open">
						<i class="iconfont icon-edit"></i>
						{{ $t('collection.szske') }}
					</span> 
					<!-- <span class="qc">
						<i class="iconfont icon-qingchucachu"></i>
						{{ $t('collection.qc') }}
					</span> -->
					<ul class="is">
						<li>
							<span>
								{{ $t('collection.skse') }}
							</span>
							<span>
								{{num}}<i>USDT</i>
							</span>
						</li>
						<li>
							<span>
								{{ $t('collection.skbz') }}
							</span>
							<span>
								{{note || $t('global.base.zw') }}
							</span>
						</li>
					</ul>
					<div class="sm">
						<a href="javascript:;" @click="doSave">
							<i class="iconfont icon-download"></i>
							{{ $t('collection.bc') }}
						</a>
					</div>
				</div>
			</div>
		</div>
		
		

		
		<div style="position: relative;">
			<div class="table global_main">
				<div class="t">{{$t('collection.titlel')}}</div>
				<tablex :titles="$t('collection.tableTitle')" :datas="datas">
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
		
		<!-- 设置收款信息 -->
		<dialogx class="sk_alert" v-model="skalert.show" :title="skalert.title" :fonter="false">
				<template v-slot:content>
					<div>
						<ul class="items" ref="buy">
							<li style="border: none;margin-bottom: 5px;">
								<p class="t"  v-html="$options.filters.language( $t('collection.skalert.ske') , sysInfos.hv.buyPrice+sysInfos.hv.dw+'/USDT' )"></p>
							</li>
							<li class="sell_num">
								<div class="input">
									<input
										type="number"
										@input="inputChange(0)"
										v-model="skalert.num"
										:error="$t('collection.skalert.sl')"
										:placeholder="$t('global.qsr') + $t('collection.skalert.sl')"
									/>
									<span>
										<img :src="$t('global.usdt')" alt="" />
										<b>USDT</b>
									</span>
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
							
								<div class="input">
									<input
										@input="inputChange(1)"
										type="number"
										:error="$t('collection.skalert.je')"
										v-model="skalert.price"
										:placeholder="$t('global.qsr') + $t('collection.skalert.je')"
									/>
									<span>
										<img :src="sysInfos.hv.dwimg" alt="">
										<b>{{sysInfos.hv.dw}}</b>
									</span>
								</div>
							</li>
							
							<li>
								<p class="t">{{ $t('collection.skalert.skbz') }}</p>
								<div class="input">
									<input
										type="text"
										maxlength="10"
										v-model="skalert.note"
										:placeholder=" $t('collection.skalert.note')"
									/>
								</div>
							</li>
							
						</ul>
						<div class="btn">
							<van-button  :disabled="!skalert.num " @click="skOk" block type="info">{{ $t('global.base.ok') }}</van-button>
						</div>
						
					</div>
				</template>
		</dialogx>
		
		
		
		
	</div>
</template>

<script>
	import QrcodeVue from 'qrcode.vue'
	export default {
		data(){
			return{
				//codeVal: '',
				num:'0.0000',
				price:'',
				note:'',
			
				datas:[],
				tableLoading:false,
				skalert:{
					show:false,
				},
				json:{
					current:1,
					size:5,
					total:0,
					type:0
				},
			}
		},
		components:{
			QrcodeVue
		},
		computed:{
			codeVal(){
				return `keypay://type=1-account=${this.userInfos.uid}-money=${this.num}`
			},
			getStatus(){
				return function(value){
					return this.$t('payment.jywc')
				}
			}
		},
		mounted() {
			this.getlist()
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
			open(){
				this.skalert={
					show:true,
					title:this.$t('collection.skalert.title'),
					num:'',
					price:'',
					note:'',
				}
			},
			skOk(){
				this.num = Number(this.skalert.num).toFixed(4)
				this.price = this.skalert.price
				this.note = this.skalert.note
				this.skalert.show = false
			
			},
			inputChange(type){
				if(type==0){
					this.skalert.price = Number(this.skalert.num * this.sysInfos.hv.buyPrice).toFixed(2)
				}else{
					this.skalert.num = Number(this.skalert.price/this.sysInfos.hv.buyPrice).toFixed(4)
				}
			},
			goDetail(id){
				this.$router.push('/assets/paymentRecords?id='+id+'&type=0')
			},
			doSave(){
				
				
			
				let codeUrl = this.$refs.qrcode.$refs['qrcode-vue']//.toDataURL('image/png')
				let limg = new Image()
					limg.src = require("_a/img/qrcLogo.png");
					
				//const context = document.createElement("canvas").getContext("2d");
				let canvas = document.createElement("canvas")
				let w,h;
					if(screen.width>414){
						w = 414 
						h = 736
					}else{
						w = screen.width
						h = screen.height
					}
					canvas.width = w
					canvas.height = h
				const context = canvas.getContext("2d");
					
					
				
				context.font = "30px";
				let str = "";
				context.fillStyle = "#0466C8";
				context.fillRect(0,0,414,736);
				context.fillStyle = "#FFFFFF";
				context.fillRect(30,30,w-60,h*0.75);
				
				limg.onload=()=>{
					
					context.drawImage(limg,(w/2)-(limg.width/4), 50,99,30);
					context.drawImage(codeUrl,60, 100,w-120,w-120);
					
					//接收方
					
					context.font = "16px Arial";
					context.textAlign="center";
					context.fillStyle="#2E323D";
					str = this.$t('global.base.jsf')+':'+ this.userInfos.uid + "("+ this.userInfos.nickname+")";
					context.fillText(str,w/2,w+20);
					
					if(this.num){
						context.font = "20px Arial";
						str = this.num + "USDT"
						context.fillText(str,w/2,w+60);
					}
					if(this.note){
						context.font = "16px Arial";
						str = this.note
						context.fillText(str,w/2,w+100);
					}
					
					context.fillStyle = "#ffffff"
					context.font = "18px Arial";
					str = this.$t("global.base.sys")
					context.fillText(str,w/2,h*0.88);
					
					str = this.$t("global.base.gaq")
					context.fillText(str,w/2,h*0.93);
					
					
					//创建一个a标签节点
					  let a = document.createElement("a")
					//设置a标签的href属性（将canvas变成png图片）
					  a.href =context.canvas.toDataURL('image/png')
					//设置下载文件的名字
					  a.download = "qrcode"
					//点击
					  a.click()
					  this.$notify({
						  type:"success",
						  message:this.$t('global.base.bccg')
					  })
					
				}	
				
				
				
				
			
			},
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_collection{
		.top{
			background-color: #F2FAFC;
			padding: 30px 0;
			.t{
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 20px;
			}
			.code{
				.clearfix;
				min-height: 168px;
				padding-left: 190px;
				position: relative;
				&>.cd{
					position: absolute;
					left: 0;
					top: 0;
					float: left;
					width: 168px;
					height: 168px;
					background-color: #ccc;
					margin-right: 20px;
				}
				&>span{
					
					font-size: 16px;
				}
				.sz{
					color: @blue;
					cursor: pointer;
					font-size: 14px;
					margin-left: 35px;
				}
				.qc{
					cursor: pointer;
					margin-left: 35px;
					color: @red;
					font-size: 14px;
					i{
						color: #666;
						font-size: 16px;
					}
				}
				.is{
					li{
						margin-top: 15px;
						span:first-child{
							display: inline-block;
							width: 100px;
							color: #B3B3B3;
						}
						
						i{
							color: #888;
						}
					}
				}
				.sm{
					margin-top: 15px;
					a{
						color: @blue;
					}
				}
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
		
		.sk_alert{
			.items {
				padding-top: 20px;
			
				& > li {
					padding-bottom: 5px;
					margin-bottom: 20px;
					border-bottom: 1px solid #e3e3e3;
			
					.t {
						padding-bottom: 5px;
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
					margin-bottom: 5px;
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
	
	
	@media (max-width:1023px) {
		.view_assets_collection{
			.top{
				.code{
					padding-left: 160px;
					min-height: 140px;
					.cd{
						width: 140px;
						height: 140px;
					}
					.is{
						li{
							margin-top: 5px;
							span{
								display: block;
								width: 100%;
							}
						}
					}
					.qc{
						margin-left: 8px;
					}
					.sz{
						margin-left: 8px;
					}
					.sm{
						margin-top: 5px;
					}
				}
			}
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
					}
				}
			}
			
			
			
		}
	}
	
</style>
