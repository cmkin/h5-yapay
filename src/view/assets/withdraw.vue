<template>
	<div class="view_assets_recharge">
		
		<header-top :title="$t('withdraw.title')"></header-top>
		
		
		<div class="top global_main">
			<div class="wh">
				<div class="t">{{ $t('withdraw.title') }}</div>
				<p class="l">{{ $t('recharge.lmc') }}</p>
				<div class="tts">
					<span @click="changet(item.id)" :class="{active:item.id==lid}" v-for="item in $t('recharge.llists')">{{item.id}}</span>
				</div>
				<div class="xq" v-if="ldetails">
					{{ ldetails.xq }}
				</div>
				
				<div class="tbs">
					<ul>
						<li>
							<span>{{ $t('withdraw.an') }}</span>
							<input v-model="address" :placeholder="$t('withdraw.ant')" type="text" />
						</li>
						<li class="sl">
							<span class="tl">{{ $t('withdraw.tl') }}</span>
							<div class="i">
								<input v-model="num" :placeholder="$t('withdraw.tlt') + 10" type="number" />
								<span class="a"> USDT <i @click="all">{{ $t('withdraw.at') }}</i> </span>
							</div>
							<div class="s">
								<span> {{ $t('withdraw.ky') }} {{Number(userInfos.coin).toFixed(4)}} USDT </span>
								<span> {{ $t('withdraw.xe') }} {{Number(userInfos.tibQuota).toFixed(4)}} USDT <i @click="$router.push('/personal/account/identity')">{{ $t('withdraw.ts') }}</i> </span>
							</div>
						</li>
						<li class="sl">
							<span>{{ $t('withdraw.sxf') }}</span>
							<div class="i">
								<input disabled="disabled"  :placeholder="ldetails.sxf" type="text" />
								<span class="a">USDT</span>
							</div>
							<div class="s">
								{{ $t('withdraw.yq') }} 
								{{ num-ldetails.sxf > 0 ? Number(num-ldetails.sxf).toFixed(4) : '0.0000'  }}  USDT
							</div>
						</li>
					</ul>
				</div>
				
				
				<div class="zysx" v-if="ldetails">
					<span>{{ $t('recharge.zlt') }}</span>
					<ul>
						<li v-for="item in ldetails.zls" v-html="item"></li>
					</ul>
				</div>
				
				<div class="btn">
					<van-button @click="submit" :loading="loading" :disabled=" num<10 || address=='' " type="info" style="width: 180px;">{{ $t('withdraw.title') }}</van-button>
				</div>
				
			</div>
		</div>
		
		
		
		
		<div style="position: relative;">
			
			<div class="table global_main">
				<div class="t">{{$t('withdraw.titler')}}</div>
				<tablex :titles="$t('withdraw.tableTitle')" :datas="datas">
					<template v-slot:status="row">
						<div>
							<span>{{ getStatus(row.item.status) }}</span>
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
		
		
		
		<set-pay-pwd v-model="payPsaawordFlag" v-if="payPsaawordFlag"></set-pay-pwd>
	</div>
</template>

<script>
	import setPayPwd from '_c/common/setPayPassword'
	export default {
		data(){
			return{
				payPsaawordFlag:false,
				lid:null,
				datas:[],
				tableLoading:false,
				json:{
					current:1,
					size:5,
					total:0,
					type:0
				},
				
				address:'',
				num:'',
				paypassword:'',
				loading:false
			}
		},
		components:{
			setPayPwd
		},
		mounted() {
			this.lid = this.$t('recharge.llists')[0].id
			this.getlist()
		},
		computed:{
			ldetails(){
				let sxf = '0.0000'
					if(this.userInfos.tibi && this.lid){
						sxf=Number(this.userInfos.tibi[this.lid.toLowerCase()]).toFixed(4)
					}
				return {
					sxf,
					... this.$t('recharge.llists').filter(item=>item.id == this.lid)[0]
				}
			},
			getStatus(){
				return function(id){
					return this.$t('recharge.status').filter(item=>item.id == id)[0].text
				}
			}
		},
		methods:{
			getlist(){
				this.tableLoading = true
				this.$http.userDrawCoinLog({
					...this.json,
					//current:this.json.current-1
				}).then(res=>{
					this.tableLoading = false
					if(res.code==0){
						this.json.total = res.total
						this.datas = res.data.map(item=>{
							item.createtime = this.$options.filters.timeFormat(item.createtime)
							item.coin = Number(item.coin).toFixed(4)+" USDT"
							//item.status = this.getStatus(item.status)
							return item
						})
					
					
					}
				})
			},
			
			changet(id){
				if(id=='TRC20'){
					this.$toast(this.$t('withdraw.whz'))
					return
				}
				this.lid = id
			},
			all(){
				this.num = Number(this.userInfos.coin).toFixed(4)
			},
			submit(){
				//this.loading = true
				//没有支付密码
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
				
				//输入支付密码
				this.$dialog.confirm({
				  title: this.$t('global.base.srzf'),
				  closeOnClickOverlay:true,
				  message: '<input  id="payPassword" type="password"  />',
				  confirmButtonText:this.$t('global.base.ok'),
				  cancelButtonText:this.$t('global.base.cancel'),
				  beforeClose:(action, done)=>{
				    if (action === 'confirm') {
						let paypassword = document.getElementById("payPassword").value
						console.log(paypassword)
				     // setTimeout(done, 1000);
						//确定，发送请求
						let  getType = (id)=>{
							switch(id){
								case 'OMNI':
									return 0
								break;
								case 'ERC20':
									return 1
								break;
								case 'TRC20':
									return 2
								break;
							}
						}
						this.$http.withdrawCoin({
							address:this.address,
							coin:this.num,
							paypassword:paypassword,
							type:getType(this.lid) 
						}).then(res=>{
							
							document.getElementById("payPassword").value = ''
							done()
							if(res.code==0){
								//成功之后
								this.getlist()
								this.$notify({
									type:"success",
									message:this.$t('global.base.tbcg')
								})
							}
							
						})
						
						
						
					 
				    } else {
				      done();
					  
					  document.getElementById("payPassword").value = ''
					  
				    }
					
				  }
				}).then(() => {
				  // on close
				}).catch(() => {
					// on cancel
				});
				
				
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_recharge{
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
			.l{
				margin-bottom: 20px;
				color: #666;
			}
			.tts{
				margin-bottom: 20px;
				display: flex;
				span{
					display: inline-block;
					margin-right: 20px;
					background-color: #E4EFFB;
					color: #666;
					text-align: center;
					padding: 13px;
					font-size: 16px;
					flex: 1;
					border-radius: 2px;
					cursor: pointer;
				}
				span:last-child{
					margin: 0;
				}
				.active{
					background-color: @blue;
					color: #fff;
				}
			}
			
			.xq{
				color: #B3B3B3;
				margin-bottom: 20px;
			}
			
			.tbs{
				li{
					margin-bottom: 20px;
					&>span:first-child{
						display: block;
						color: #666666;
						font-size: 12px;
						margin-bottom: 5px;
					}
				}
				.sl{
					.i{
						position: relative;
						input{
							padding-right: 130px;
						}
						.a{
							position: absolute;
							right: 10px;
							top: 50%;
							transform: translateY(-50%);
							i{
								color: @blue;
								display: inline-block;
								position: relative;
								padding-left: 10px;
								margin-left: 10px;
								cursor: pointer;
								&::after{
									content: '';
									position: absolute;
									left: 0;
									top: 20%;
									height: 60%;
									width: 1px;
									background-color: #D3D3D3;
								}
							}
						}
					}
					.s{
						font-size: 12px;
						margin-top: 5px;
						color: #666666;
						span:first-child{
							color: @blue;
						}
						span:last-child{
							float: right;
							i{
								display: inline-block;
								color: @blue;
								margin-left: 10px;
								cursor: pointer;
							}
						}
					}
				}
			}
			
			.zysx{
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
		
		.table{
			.t{
				padding: 10px 0;
				padding-top: 20px;
				font-size: 16px;
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
		
	}
</style>
