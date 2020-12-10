<template>
	<div class="view_quickSale_c2c_entrust">
		<header-top  :title="$t('quickSale.c2c.entrust.title')"></header-top> 
		<div class="global_main main">
			<div class="tabs">
				<div class="global_main">
					<ul>
						<li v-for="item in $t('quickSale.c2c.entrust.tabs')" >
							<span :class="tabActive==item.id?'active':''">
								{{item.text}}
							</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div style="height: 100px;"></div>
			
			<div class="tables" :class="isPhone ? 'tables_phone' : 'tables_pc'">
				<ul class="title">
					<li v-for="item in $t('quickSale.c2c.entrust.tableTitle')">{{ item.title }}</li>
				</ul>
				<ul class="item" v-for="item in datas">
					<div class="l">
						<li class="xz" :class="{sell:item.sell}">
							<span class="o"> {{ true ? $t('quickSale.c2c.entrust.m1') : $t('quickSale.c2c.entrust.m2')}} </span>
							<span class="two">
								<i>USDT</i>/CNY({{ true ? $t('quickSale.c2c.entrust.zx') : $t('quickSale.c2c.entrust.kj') }})
							</span>
						</li>
						<li>
							<i> {{$t('quickSale.c2c.entrust.tableTitle')[1].title }}: </i>
							<span>7.10</span>CNY
						</li>
						<li>
							<i> {{$t('quickSale.c2c.entrust.tableTitle')[2].title }}: </i>
							<span>1010</span>USDT
						</li>
						<li>
							<i> {{$t('quickSale.c2c.entrust.tableTitle')[3].title }}: </i>
							<span>710</span>CNY
						</li>
					</div>
					<div class="r">
						<li class="cx">
							<span> {{ $t('quickSale.c2c.entrust.cx') }}</span>
						</li>
						<li class="status">
							<span :class="{zt:item.isjd==false}">{{ item.isjd ? $t('quickSale.c2c.entrust.jd') : $t('quickSale.c2c.entrust.zt') }}</span>
							<div class="b">
								<span> {{ item.isjd ? $t('quickSale.c2c.entrust.dzt') : $t('quickSale.c2c.entrust.dkq') }} </span>
									<!-- :value 手动切换 -->
								<van-switch :loading="false" v-model="item.isjd"  size="18px" active-color="#4DB872" />
							</div>
						</li>
					</div>
				</ul>
				
			</div>
		
			
			
			<div class="page_change">
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
				datas:[
					{
						isjd:true,
						sell:true
					},
					{
						isjd:true,
						sell:false
					}
				]
			}
		},
		mounted() {
			this.tabActive = this.$t('quickSale.c2c.entrust.tabs')[0].id
			this.oldtops = 0
			document.addEventListener("scroll",this.scroll)
		},
		beforeRouteLeave(to,from,next) {
			document.removeEventListener("scroll",this.scroll)
			next()
		},
		methods:{
			scroll(e){
				let tops = document.documentElement.scrollTop || document.body.scrollTop
				let dhl = document.querySelector(".view_quickSale_c2c_entrust .tabs")
				
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
	.view_quickSale_c2c_entrust{
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
								bottom: -14px;
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
							span{
								color: #666;
								position: relative;
								top: -4px;
							}
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
		.view_quickSale_c2c_entrust{
			.main{
				.tabs{
					top: 130px;
					ul{
						
						width: 100%;
						li{
							
						}
					}
				}
				.tables{
					.item:nth-child(2){
						padding-top: 0 !important;
					}
				}
			}
		}
	}
</style>
