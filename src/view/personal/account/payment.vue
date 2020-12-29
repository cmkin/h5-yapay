<template>
	<div class="view_personal_account_payment view_personal_account_icon">
		<div class="title">
			{{ $t('personal.account.payment.title') }}
			<span> {{ $t('personal.account.payment.ttips') }} </span>
		</div>
		<div class="add" @click="paymentMethod(false)" v-if="payList.length<4">
			<i class="iconfont icon-weibiaoti1"></i>
			{{ $t('personal.account.payment.add') }}
		</div>
		<ul v-if="payList.length">
			<li v-for="item in payList">
				<div>
					<img :src="item.obj.img" alt="">
					<span>{{item.obj.title}}</span>
				</div>
				<div> <span>{{item.name}}</span> <span>{{item.account}}</span> <span v-if="item.type==3">{{item.bank}}</span> </div>
				<div @click="paymentMethod(item)">
					<i> {{ $t('personal.account.security.xg') }} </i>
				</div>
			</li>
			
		</ul>
		<div class="no_data" v-else>
			<img src="../../../assets/img/pnodata.jpg" alt="">
			<p>{{ $t('personal.account.payment.ndata') }}</p>
			<van-button @click="paymentMethod(false)" type="info">{{ $t('personal.account.payment.qadd') }}</van-button>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		computed:{
			payList(){
				 if(this.userInfos.payList){
					return this.userInfos.payList.map(item=>{
						let obj = this.$t('global.payType').filter(tt=>tt.id==Number(item.type))[0]
							item.obj = obj
						return item
					 }).sort(function(a,b){return a.type - b.type})
				 }
				 
				 return  []
			}
		},
		methods:{
			paymentMethod(item=false){
				this.$router.push({
					path:'/paymentMethod',
					query:{
						id:item ? item.type : null
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal_account_payment{
		.title{
			background-color: rgba(3, 83, 164, 0.06);
			font-size: 16px;
			padding:10px 20px;
			border-bottom: 1px solid #E3E3E3;
			span{
				font-size: 14px;
				color: #B3B3B3;
				margin-left: 15px;
			}
		}
		.add{
			color: @blue;
			padding: 10px;
			padding-bottom: 0;
			.hover;
			text-align: right;
			i{
				font-weight: bold;
			}
		}
		&>ul{
			padding: 0 20px;
			padding-bottom: 70px;
			&>li{
				padding: 20px 0;
				position: relative;
				border-bottom: 1px solid #E3E3E3;
				.clearfix;
				.iconfont{
					font-size: 20px;
				}
				.icon-dui{
					color: @green;
				}
				.icon-gantanhao{
					color: @org-s;
				}
				&>div{
					float: left;
				}
				&>div:first-child{
					margin-right: 30px;
					span{
						display: inline-block;
						font-size: 16px;
						color: #666;
						margin-left: 10px;
						position: relative;
						width: 50px;
					}
					img{
						display: inline-block;
						width: 20px;
						position: relative;
						top: 3px;
					}
				}
				&>div:nth-child(2){
					color: #B3B3B3;
					padding-top: 3px;
					span{
						margin-right: 10px;
					}
				}
				&>div:last-child{
					padding-top: 3px;
					float: right;
					min-width: 20%;
					text-align: right;
					&>p{
						display: inline-block;
						color: #B3B3B3;
					}
					&>i{
						color: @blue;
						margin-left: 20px;
						.hover;
					}
				}
				
				
				
			}
			
		}
		.no_data{
			text-align: center;
			padding: 50px 0;
			p{
				padding: 10px 0;
				margin-bottom: 10px;
				color: #B3B3B3;
			}
		}
	}
	
	@media (max-width:1023px) {
		.view_personal_account_payment{
			.title{
				span{
					display: none;
				}
			}
			
			&>ul{
				&>li{
					&>div:last-child{
						position: absolute;
						top: 20px;
						right: 0;
					}
				}
			}
		}
	}
	
</style>
