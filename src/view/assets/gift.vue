<template>
	<div class="view_assets_gift">
		<header-top :title="$t('gift.title')"></header-top>
		
		<div class="top global_main">
			<div class="wh">
				<div class="t">{{ $t('gift.title') }}</div>
				<p class="l">{{ $t('gift.js') }}</p>
				
				<div class="tts">
					<van-button @click="dhOpen" type="info">{{ $t('gift.dh') }}</van-button>
					<van-button @click="scOpen" type="default" >{{ $t('gift.sc') }}</van-button>
				</div>
				
				<div class="zysx">
					<span>{{ $t('recharge.zlt') }}</span>
					<ul>
						<li v-for="item in $t('gift.zls')" v-html="item"></li>
					</ul>
				</div>
			</div>
		</div>
		
		
		
		<div class="tableT global_main">{{$t('gift.titler')}}</div>
		
		<div class="tabs">
			<div class="global_main">
				<ul>
					<li @click="changTab(item.id)" v-for="item in $t('gift.tabs')" >
						<span :class="tabActive==item.id?'active':''">
							{{item.text}}
						</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div style="position: relative;">
			<div class="table global_main">
				<tablex :titles="tableTitle" :datas="datas">
					 <template v-slot:status="row">
						<div>
							<p :style="{color:row.item.status==0?'#FF5B5B':'#666'}">
								{{ $t('gift.status')[row.item.status] }}
								<copy style="margin-left: 5px;" v-if="row.item.status==0" :content="row.item.code"></copy>
							</p> 
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
		
		
		
		
		<dialogx class="ljdh" ref="dh" :disabled="! Boolean(dh.code) " :title="$t('gift.lj')" :onOk="dhOk" v-model="dh.show">
			<template v-slot:content>
				<div class="cc">
					<p>{{$t('gift.dhm')}}</p>
					<input v-model="dh.code" :placeholder=" $t('global.qsr') + $t('gift.dhm') " type="text" />
				</div>
			</template>
		</dialogx>
		
		<dialogx class="scdh" :title="$t('gift.sc')" ref="sc" :onOk="scOk" :disabled="! Boolean(sc.num && sc.password) "  v-model="sc.show">
			<template v-slot:content>
				<div class="mm">
					<div class="card">
						<div class="t">{{ $t('gift.dhm') }}</div>
						<div class="code">{{ sc.code?sc.code:'**** **** **** ****' }}</div>
						<div class="ts">{{ sc.code ? $t('gift.fz') : $t('gift.sr') }}</div>
					</div>
					<ul class="ls" v-if="!sc.code">
						<li>
							<span>
								{{ $t('gift.dbsl') }}
							</span>
							<div class="input">
								<input v-model="sc.num" :placeholder="$t('global.qsr') + $t('gift.dbsl') " type="number" />
								<i>USDT</i>
							</div>
							<div class="ky">
								{{ $t('quickSale.quickBuySell.sell.ky') +  Number(userInfos.coin).toFixed(4) + 'USDT' }}
							</div>
						</li>
						<li>
							<span>
								{{ $t('gift.jymm') }}
							</span>
							<div class="input">
								<input v-model="sc.password" :placeholder="$t('global.qsr') + $t('gift.jymm') " type="password" />
							</div>
							<a href="/#/editJPwd" class="wj">{{$t('global.base.wjmm')}}?</a>
						</li>
					</ul>
					
					<div class="copy" v-else>
						
							<copy :content="sc.code">
								<van-button type="info" block>
									{{$t('gift.yj')}}
								</van-button>
							</copy>
						
					</div>
					
					<div class="tips">
						{{ $t('gift.tip') }}
					</div>
				</div>
			</template>
		</dialogx>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				dh:{
					show:false,
					code:'13A45D553CA5359CCA'
				},
				sc:{
					show:false,
					num:'',
					password:'',
					code:''
				},
				tabActive:null,
				json:{
					current:0,
					size:5,
					time:'',
					total:0
				},
				tableLoading:false,
				datas:[]
			}
		},
		computed:{
			tableTitle(){
				return this.tabActive==1? this.$t('gift.sctitle') : this.$t('gift.dhtitle')
			}
		},
		mounted() {
			this.tabActive = this.$t('gift.tabs')[0].id
			this.getlist()
		},
		methods:{
			dhOpen(){
				this.dh.code = ''
				this.dh.show = true
			},
			dhOk(){
				this.$http.useRedeemCode({
					code:this.dh.code
				}).then(res=>{
					this.$refs.dh.loadingF = false
					if(res.code==0){
						this.getlist()
						this.$notify({
							type:"success",
							message:this.$t('global.base.dhcg')
						})
						this.dh.show = false
					}
				})
			},
			scOpen(){
				if(!this.userInfos.payPassword){
					
					this.$dialog.confirm({
						cancelButtonText: this.$t('global.base.cancel'),
						confirmButtonText: this.$t('global.base.ok'),
					  title: this.$t('global.base.szzf'),
					  message: this.$t('global.base.zfts'),
					})
					  .then(() => {
						this.$router.push('/editJPwd?type=0')
					  })
					  .catch(() => {
						// on cancel
					  });
					
					return
				}
				this.sc.num = ''
				this.sc.password = ''
				this.sc.code = ''
				this.sc.show = true
			},
			scOk(){
				if(this.sc.code == ''){
					//未生成
					this.$http.createRedeemCode({
						coin:this.sc.num,
						payPassword:this.sc.password
					}).then(res=>{
						this.$refs.sc.loadingF = false
						if(res.code==0){
							this.sc.code = res.data
							this.getlist()
						}
					})
				}else{
					this.$refs.sc.loadingF = false
					this.sc.show = false
				}
				
			},
			changTab(id){
				this.tabActive = id
				this.getlist()
			},
			getlist(){
				this.tableLoading = true
				this.$http.getRedeemCodes({
					...this.json,
					type:this.tabActive
				}).then(res=>{
					if(res.code==0){
						this.tableLoading = false
						this.datas = res.data.map(item=>{
							item.coin = Number(item.coin).toFixed(4) +" USDT"
							item.finishtime = item.finishtime? this.$options.filters.timeFormat(item.finishtime) : '----'
							return item
						})
						this.json.total = res.total
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_gift{
		.top{
			padding-top: 30px;
			padding-bottom: 30px;
			.wh{
				max-width: 550px;
			}
			.t{
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 20px;
			}
			.tts{
				padding-top: 30px;
				button{
					min-width: 120px;
					margin-right: 30px;
				}
			}
			.zysx{
				padding-top: 30px;
				font-size: 12px;
				&>span{
					display: block;
					margin-bottom: 5px;
				}
				li{
					color: #B3B3B3;
					margin-bottom: 5px;
				}
			}
					
		}
		
		.tableT{
			font-size: 16px;
		}
		.tabs{
			background-color: #fff;
			margin-bottom: 20px;
			.global_main{
				
			}
			ul{
				padding: 20px 0;
				border-bottom: 1px solid rgba(211, 211, 211, 1);
				.clearfix;
				li{
					float: left;
					margin-right: 20px;
					span{
						position: relative;
						padding: 10px 5px;
						color: #666666;
						cursor: pointer;
						font-size: 14px;
					}
					.active{
						color: #333;
						&::after{
							content: '';
							position: absolute;
							left: 0;
							bottom: -15px;
							width: 100%;
							height: 2px;
							background-color: rgba(51, 51, 51, 1);
						}
					}
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
		
		.ljdh{
			.cc{
				padding: 15px 0;
				p{
					margin-bottom: 5px;
				}
			}
		}
		.scdh{
			.card{
				border: 1px solid rgba(4, 102, 200, 0.6196078431372549);
				opacity: 1;
				border-radius: 5px;
				padding: 10px 0;
				text-align: center;
				.t{
					color: #979DAC;
					font-size: 16px;
				}
				.code{
					color: #5C677D;
					font-size: 22px;
				}
				.ts{
					color: #979DAC;
					font-size: 14px;
				}
			}
			.ls{
				padding: 10px 0;
				padding-bottom: 30px;
				li{
					margin-bottom: 15px;
					.input{
						padding-top: 5px;
						position: relative;
						i{
							position: absolute;
							right: 10px;
							top: 50%;
							transform: translateY(-50%);
							color: @blue;
						}
					}
					.ky{
						text-align: right;
						font-size: 13px;
						padding-top: 5px;
					}
					.wj{
						text-align: right;
						color: #666666;
						cursor: pointer;
						padding-top: 5px;
						display: block;
					}
				}
			}
			
			.copy{
				padding-top: 10px;
				padding-bottom: 60px;
			}
			
			.tips{
				.tips-org;
				position: absolute;
				width: 100%;
				bottom: 0px;
				left: 0;
				text-align: center;
				font-size: 12px;
				padding: 5px;
				box-sizing: border-box;
				color: @org-s;
			}
		}
	}
</style>
<style lang="less">
	.view_assets_gift{
		
		.scdh{
			.copy{
				.global_copy{
					width: 100%;
					.icon{
						display: none;
					}
				}
			}
		}
			
		
	}
</style>
