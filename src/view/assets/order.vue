<template>
	<div class="view_assets_order">
		<header-top  :title="$t('order.title')" rlink="/entrust" :rtitle="$t('quickSale.c2c.entrust.title')"></header-top> 
		<div class="global_main main">
			<div class="tabs">
				<div class="global_main">
					<ul>
						<li @click="changeTab(item.id)" v-for="item in $t('order.tabs')" >
							<span :class="tabActive==item.id?'active':''">
								{{item.text}}
							</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div style="height: 100px;"></div>
			
			<div style="position: relative;">
			<div class="tables" :class="isPhone ? 'tables_phone' : 'tables_pc'">
				<ul class="title">
					<li v-for="item in $t('order.tableTitle')">{{ item.title }}</li>
				</ul>
				<ul v-if="datas.length" @click="goOrder(item)" class="item" v-for="item in datas">
					<div class="l">
						<li class="xz" :class="{sell:item.type==1}">
							<span class="o"> {{ item.type==0 ? $t('quickSale.c2c.entrust.m1') : $t('quickSale.c2c.entrust.m2')}} </span>
							<span class="two">
								<i>USDT</i>/{{sysInfos.hv.dw}}
							</span>
						</li>
						<li>
							<i> {{$t('order.tableTitle')[1].title }}: </i>
							<span>{{item.realcoin | coin }}</span>USDT
						</li>
						<li>
							<i> {{$t('order.tableTitle')[2].title }}: </i>
							<span> {{item.price | money}} </span>{{sysInfos.hv.dw}}
						</li>
						<li class="value">
							<i> {{$t('order.tableTitle')[3].title }}: </i>
							<span>{{item.value | money}} </span>{{sysInfos.hv.dw}}
						</li>
					</div>
					<div class="r">
						<li class="cx">
							<i> {{$t('order.tableTitle')[4].title }}: </i>
							<span>{{item.orderid}}</span>
						</li>
						<li class="status">
							<span :class="statusClass(item.status)">{{ status(item.status)}} </span>
							<div class="b" >
								{{item.createtime | timeFormat}}
							</div>
						</li>
					</div>
				</ul>
				
				<nodata v-show="!datas.length"></nodata>
				
			</div>
			
			
			<loading v-model="tableLoading"></loading>
			</div>
			
			<div class="page_change">
				<div class="m">
					<van-pagination v-model="currentPage" @change="getlist" :total-items="allitems"  :items-per-page="8"  :show-page-size="3" force-ellipses>
						<template #prev-text>
							<van-icon name="arrow-left" />
						</template>
						<template #next-text>
							<van-icon name="arrow" />
						</template>
					</van-pagination>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				oldtops:0,
				tabActive:0,
				currentPage:0,
				allitems:0,
				tableLoading:false,
				datas:[]
			}
		},
		computed:{
			status(){
				return function(value){
					let arr = this.$t('order.stustas').filter(item=>item.type == value)
						
					return arr.length>0 ? arr[0].text : value
				}
			},
			statusClass(){
				return function(value){
					switch(value){
						case 0:
						return 'jy'
						case 1:
						return 'yy'
						case 2:
						return 'wc'
						case 3:
						return 'cs'
						case 4:
						return 'mj'
					}
				}
			}
		},
		watch:{
			$route(){
				this.tabActive = Number(this.$route.query.type)
				 this.getlist()
			}
		},
		mounted() {
			this.tabActive = Number(this.$route.query.type?this.$route.query.type:this.$t('order.tabs')[0].id) 
			this.oldtops = 0
			document.addEventListener("scroll",this.scroll)
			
			this.getlist()
		},
		beforeRouteLeave(to,from,next) {
			document.removeEventListener("scroll",this.scroll)
			next()
		},
		methods:{
			getlist(){
				this.tableLoading = true
				let json = {
					current:this.currentPage,
					size:8,
					orderStatus:this.tabActive
				}
				this.$http.getOrderList(json).then(res=>{
					this.tableLoading = false
					if(res.code==0){
						this.allitems = res.total
						this.datas = res.data
					}
					
				})
				
			},
			changeTab(id){
				this.$router.replace({
					path:"/assets/order",
					query:{
						type:id
					}
				})	
			},
			
			goOrder(item){
				if(item.status==0){}
					//交易中-去交易界面
					this.$router.push({
						path:item.type==0?'/sale/payment':'/sale/collection',
						query:{
							id:item.id
						}
					})
				
			},
			
			scroll(e){
				let tops = document.documentElement.scrollTop || document.body.scrollTop
				let dhl = document.querySelector(".view_assets_order .tabs")
				
				let min = this.isPhone ? 61 : 80
				let max = this.isPhone ? 130 : 150
					if(tops==0){
						dhl.style.top = max +'px'
						dhl.style.boxShadow = "none"
						return
					}
					if(tops>this.oldtops){
						//向下
						dhl.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.16)"
						if(dhl.offsetTop <=min ){
							dhl.style.top = min +'px'
							return
						}
						dhl.style.top = (dhl.offsetTop - (tops-this.oldtops)) + 'px'
					}else{
						//向上
						if(dhl.offsetTop >=max ){
							dhl.style.top = max +'px'
							dhl.style.boxShadow = "none"
							return
						}
						
						
						dhl.style.top = (dhl.offsetTop - (tops-this.oldtops)) + 'px'
					}
					
				this.oldtops = tops	
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_order{
		.main{
			.tabs{
				position: fixed;
				z-index: 801;
				width: 100%;
				left: 0;
				top: 150px;
				background-color: #fff;
			
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
							font-size: 16px;
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
		
			.tables{
				
				li{
					&>span{
						margin-right: 5px;
					}
				}
				.xz{
						.o{
							display: inline-block;
							width: 30px;
							height: 30px;
							background-color: @green;
							color: #fff;
							text-align: center;
							line-height: 30px;
							font-size: 12px;
						}
						.two{
							font-size: 16px;
							color: rgba(92, 103, 125, 1);
							i{
								color:@green ;
							}
						}
					}
					.sell{
						.o{
							background-color: @red;
						}
						.two{
							i{
								color: @red;
							}
						}
					}
					
					.cx{
						color: @blue;
						cursor: pointer;
					}
					.status{
						&>span{
							color: @blue;
							display: block;
							margin-bottom: 5px;
						}
						.zt{
							color: #666666;
						}
						.b{
							color: #B3B3B3;
						}
						.jy{
							color:@blue
						}
						.yy{
							color: @red;
						}
						.wx,.cs,.mj{
							color: #666;
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
					
				}
				.item {
					cursor: pointer;
					padding: 15px 0;
					color: rgba(51, 51, 51, 1);
					&>div {
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.l {
						flex: 4;
						li:last-child {
							text-align: left;
						}
					}
					.r{
						flex: 2;
					}
					li {
						& > i {
							display: none;
						}
						&>span{
							margin-right: 5px;
						}
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
						flex: 1.5;
					}
					.r {
						text-align: right;
					}
					li {
						margin-bottom: 5px;
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
		}
	}
	@media (max-width:1023px) {
		.view_assets_order{
			.main{
				.tabs{
					top: 130px;
					ul{
						width: 100%;
						li{
						 margin-right: 0;
						}
					}
				}
				.tables{
					.item:nth-child(2){
						padding-top: 20px !important;
						.cx{
							top: -10px !important;
						}
					}
					.item{
						padding-top: 40px !important;
						position: relative;
						.cx{
							color: @blue;
							cursor: pointer;
							position: absolute;
							top: 10px;
							left: 0;
							width: 100%;
							text-align: left;
						}
						.value{
							position: absolute;
							right: 0;
							bottom: 12px;
						}
					}
				}
			}
		}
	}
</style>

<style lang="less">
	.view_assets_order{
		.global_header_top{
			.header{
				.main{
					.right{
						float: left;
					}	
				}
			}
		}
	}
</style>