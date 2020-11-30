<template>
	<div class="view_personal_account_payment view_personal_account_icon">
		<div class="title">
			{{ $t('personal.account.payment.title') }}
			<span> {{ $t('personal.account.payment.ttips') }} </span>
		</div>
		<div class="add">
			<i class="iconfont icon-weibiaoti1"></i>
			{{ $t('personal.account.payment.add') }}
		</div>
		
		<ul>
			<li>
				<div>
					<img src="../../../assets/img/yhk.png" alt="">
					<span>银行卡</span>
				</div>
				<div> <span>张灵灵</span> <span>622 4651 1235 61387</span> <span>中国工商银行</span> </div>
				<div>
					<i> {{ $t('personal.account.security.xg') }} </i>
				</div>
			</li>
			<li>
				<div>
					<img src="../../../assets/img/yhk.png" alt="">
					<span>银行卡</span>
				</div>
				<div> <span>张灵灵</span> <span>622 4651 1235 61387</span> <span>中国工商银行</span> </div>
				<div>
					<i> {{ $t('personal.account.security.xg') }} </i>
				</div>
			</li>
		</ul>
		
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
		methods:{
			
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
						top: -1px;
					}
					img{
						display: inline-block;
						width: 20px;
						height: 17px;
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
