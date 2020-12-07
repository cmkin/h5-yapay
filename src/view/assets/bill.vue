<template>
	<div class="view_assets_bill">
		
		<header-top :title="$t('bill.title')"></header-top>
		
		
		<div class="top">
			<div class="global_main">
				<span>{{ $t('bill.tj') }}</span>
				<div class="i" @click="timeShow = true">
					{{ search.currentTime ? search.currentTime : $t('global.base.djxz') }}
					<span>{{ $t('bill.sj') }}</span>
				</div>
				<div class="i it">
					<myselect height="160px" showKey="text" v-model="search.type" :lists="$t('bill.tjs')"></myselect>
				</div>
				<span @click="clearSearch">
					<!-- {{ $t('bill.ctj') }} -->
					<i class="iconfont icon-close"></i>
				</span>
			</div>
		</div>
		
		
		<div class="table global_main">
			<tablex :titles="$t('bill.tableTitle')" :datas="datas">
				<template v-slot:df="row">
					<div class="df">
						<img :src="row.item.dfimg" alt="">
						<span>{{row.item.df}}</span>
					</div>
				</template> 
				<template v-slot:action="row">
					<div class="action">
						<span>{{ $t('global.base.ckxq') }}</span>
					</div>
				</template> 
			</tablex>
		
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
		
		
		
		
		
		<!-- 时间弹窗 -->
		<van-popup v-model="timeShow" :position="isPhone ? 'bottom' : 'center'">
			<van-datetime-picker  :min-date="minDate" type="date" title="" :formatter="formatter"  @cancel="timeOk" @confirm="timeOk" />
		</van-popup>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				timeShow:false,
				minDate:new Date('2015/01/01'),
				search:{
					type:null,
					currentTime:null,
				},
				currentPage:0,
				datas:[
					{
						df:'昵称',
						dfimg:'/',
						fl:'买币',
						time:'2020.06.20',
						num:'+100.0000'
					},
					{
						df:'昵称',
						dfimg:'/',
						fl:'买币',
						time:'2020.06.20',
						num:'+100.0000'
					},
				]
			}
		},
		mounted() {
			this.search.type = this.$t('bill.tjs')[0].id
		},
		methods:{
			formatter(type,val){
				switch(type){
					case 'year':
						return `${val}`+this.$t('global.base.year')
					case 'month':
						return `${val}`+this.$t('global.base.month')
					case 'day':
						return `${val}`+this.$t('global.base.day')
					
				}
			},
			timeOk(value){			
				this.search.currentTime =  value ? this.$dateFormat('YYYY-mm-dd',value) : null
				this.timeShow = false
			},
			clearSearch(){
				this.search.type = this.$t('bill.tjs')[0].id
				this.search.currentTime = null
			}
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_bill{
		.top{
			background-color: #F2FAFC;
			padding: 30px 0;
			position: relative;
			&>div>span{
				font-size: 16px;
			}
			&>div>span:last-child{
				color: #888;
				margin-left: 20px;
				cursor: pointer;
				i{
					font-size: 18px;
				}
			}
			.i{
				display: inline-block;
				background-color: #fff;
				margin-left: 20px;
				width: 110px;
				padding: 5px 10px;
				border: 1px solid #E3E3E3;
				border-radius: 2px;
				color: #D3D3D3;
				cursor: pointer;
				&>span{
					color: #333333;
					
					float: right;
				}
			}
			
		}
		
		.table{
			padding-top: 30px;
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
	
	@media (max-width:1023px) {
		.view_assets_bill{
			.top{
				&>div>span:first-child{
					display: none;
				}
				.i{
					margin-left: 0;
				}
				.it{
					margin-left: 15px;
				}
				&>div>span:last-child{
					position: absolute;
					margin: 0;
					top: 35px;
					margin-left: 7px;
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
			}
		}
		
	}
	
</style>
<style lang="less">
	.view_assets_bill{
		.top{
			.it{
				width: 120px !important;
				padding: 0 !important;
				.g_select{
					.changed{
						width: 100px;
						padding: 5px 10px !important;
						color: #333333;
						i{
							top: -2px;
							margin-left: 15px;
						}
					}
				}
				
			}
		}
	}
</style>
