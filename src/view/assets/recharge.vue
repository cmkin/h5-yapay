<template>
	<div class="view_assets_recharge">
		
		<header-top :title="$t('recharge.title')" ></header-top>
		
		
		<div class="top global_main">
			<div class="wh">
				<div class="t">{{ $t('recharge.title') }}</div>
				<p class="l">{{ $t('recharge.lmc') }}</p>
				<div class="tts">
					<span @click="changet(item.id)" :class="{active:item.id==lid}" v-for="item in $t('recharge.llists')">{{item.id}}</span>
				</div>
				<div class="xq" v-if="ldetails">
					{{ ldetails.xq }}
				</div>
				<div class="addr" v-if="ldetails">
					<span>{{ $t('recharge.an') }}</span>
					<div>
						<span>{{getAddr}}</span>
						<span>
							<copy :content="getAddr"></copy>
							<i @click="showCode" class="iconfont icon-erweima"></i>
						</span>
					</div>
				</div>
				<div class="zysx" v-if="ldetails">
					<span>{{ $t('recharge.zlt') }}</span>
					<ul>
						<li v-for="item in ldetails.zls" v-html="item"></li>
					</ul>
				</div>
			</div>
		</div>
		
		
		
		 
		
		<div style="position: relative;">
			<div class="table global_main">
				<div class="t">{{$t('recharge.titler')}}</div>
				<tablex :titles="$t('recharge.tableTitle')" :datas="datas">
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
		
		
		
		
		<qrcode-vue style="display: none;" :value="getAddr" :size="isPhone ? 140 : 168" ref="qrcode" level="H"></qrcode-vue>
		
		
	</div>
</template>

<script>
	import QrcodeVue from 'qrcode.vue'
	import { ImagePreview } from 'vant';
	export default {
		data(){
			return{
				lid:null,
				datas:[],
				tableLoading:false,
				address:{},
				json:{
					current:1,
					size:5,
					total:0,
					type:1
				},
			}
		},
		components:{
			QrcodeVue,ImagePreview
		},
		mounted() {
			this.lid = this.$t('recharge.llists')[0].id
			this.getDetail()
			this.getlist()
		},
		computed:{
			ldetails(){
				return this.$t('recharge.llists').filter(item=>item.id == this.lid)[0]
			},
			getAddr(){
				let loading = this.$t('global.base.loading')
				if(this.ldetails) {
					switch(this.ldetails.id){
						case 'ERC20':
							return this.address.erc20address || loading
						break;
						case 'OMNI':
							return this.address.omniaddress || loading
						break;
						case 'TRC20':
							return this.address.trc20address || loading
						break;
					}
				}
				
				return loading
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
			
			getDetail(){
				this.$http.getUserCoinAddress({}).then(res=>{
					if(res.code==0){
						this.address = res.data
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
			showCode(){
				ImagePreview({
				  images: [
				    this.$refs.qrcode.$refs['qrcode-vue'].toDataURL('image/png')
				  ],
				  closeable: true,
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
			.addr{
				margin-bottom: 20px;
				&>span{
					display: block;
					margin-bottom: 10px;
				}
				&>div{
					display: flex;
					position: relative;
					padding-right: 50px;
					span:last-child{
						width: 50px;
						position: absolute;
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						text-align: right;
						i{
							color: @blue;
							cursor: pointer;
							display: inline-block;
							margin-left: 12px;
							font-size: 18px;
						}
						.global_copy{
							position: relative;
							top: 1px;
						}
					}
					span:first-child{
						width: 100%;
						color: #666;
						word-wrap: break-word;
						word-break: normal;
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
