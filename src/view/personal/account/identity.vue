<template>
	<div class="view_personal_account_identity view_personal_account_icon">
		<div class="title">
			{{ $t('personal.account.identity.title') }}
		</div>
		<ul>
			<li>
				<div>
					<i class="iconfont icon-dui"></i>
					<span> {{ $t('personal.account.identity.lv1') }} </span>
				</div>
				<div> {{ $t('personal.account.identity.lv1p') }} </div>
				<div>
					
					<i @click="showDialog(1)"> {{ $t('personal.account.identity.qrz') }} </i>
				</div>
			</li>
			
			<li>
				<div>
					<i class="iconfont icon-gantanhao"></i>
					<span> {{ $t('personal.account.identity.lv2') }} </span>
				</div>
				<div> {{ $t('personal.account.identity.lv2p') }} </div>
				<div>
					<i @click="showDialog(2)"> {{ $t('personal.account.identity.qrz') }} </i>
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
		computed:{
			aqlv(){
				let lt = this.$t('personal.account.security.lt')
				let className = ['one','two','three']
				let lv = 2
				return {
					text:lt[lv],
					lv:lv,
					class:className[lv]
				}
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal_account_identity{
		.title{
			background-color: rgba(3, 83, 164, 0.06);
			font-size: 16px;
			padding:10px 20px;
			border-bottom: 1px solid #E3E3E3;
		}
		&>ul{
			padding: 0 20px;
			&>li{
				padding: 20px 0;
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
				}
				&>div:nth-child(2){
					color: #B3B3B3;
					padding-top: 3px;
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
				
				.aqlv{
					&>ul{
						.clearfix;
						position: relative;
						top: -3px;
						display: inline-block;
						li{
							width: 48px;
							height: 4px;
							background: #E3E3E3;
							opacity: 1;
							border-radius: 2px;
							float: left;
							margin-left: 10px;
						}
						
					}
				}
				.one{
					&>span{
						color: #FF5B5B;
					}
					&>ul{
						li:nth-child(1){
							background-color: #FF5B5B;
						}
					}
				}
				.two{
					&>span{
						color: @org-s;
					}
					&>ul{
						li:nth-child(1){
							background-color: @org-s;
						}
						li:nth-child(2){
							background-color: @org-s;
						}
					}
				}
				.three{
					&>span{
						color: @green;
					}
					&>ul{
						li:nth-child(1){
							background-color: @green;
						}
						li:nth-child(2){
							background-color: @green;
						}
						li:nth-child(3){
							background-color: @green;
						}
					}
				}
				
				
			}
			li:last-child{
				border: none;
			}
		}
		
	}
</style>
