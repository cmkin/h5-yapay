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
					
					<i @click="goRz(1)"> {{ $t('personal.account.identity.qrz') }} </i>
				</div>
			</li>
			
			<li>
				<div>
					<i class="iconfont icon-gantanhao"></i>
					<span> {{ $t('personal.account.identity.lv2') }} </span>
				</div>
				<div> {{ $t('personal.account.identity.lv2p') }} </div>
				<div>
					<i @click="goRz(2)"> {{ $t('personal.account.identity.qrz') }} </i>
				</div>
			</li>			
		</ul>
		
		
		<div class="rz_lv">
			<div class="lv">
				<span>{{ $t('personal.account.identity.dqrz') }}</span>
				Lv.1 基础认证
			</div>
			<div class="if">张*灵  510************166</div>
			<div class="kys">
				<p>{{ $t('personal.account.identity.ky') }}</p>
				<ul>
					<li v-for="(item,index) in $t('personal.account.identity.kys')">
						<span v-if="index==1" v-html="$options.filters.language(item,5)"></span>
						<span v-else-if="index==2" v-html="$options.filters.language(item,50)"></span>
						<span v-else>{{item}}</span>
					</li>
				</ul>
				<div class="r">{{ $t('personal.account.identity.wcgr') }}</div>
			</div>
		</div>
		
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
			goRz(type){
				if(type==1){
					this.$router.push({
						path:'/editIdentity'
					})
				}else{
					this.$router.push({
						path:'/editIdentityt',
					})
				}
				
			}
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
			
		}
		.rz_lv{
			padding: 20px;
			.lv{
				margin-bottom: 5px;
				color: #666666;
				span{
					font-size: 16px;
					color: #333;
				}
			}
			.if{
				font-size: 15px;
				color: #666;
				margin-bottom: 10px;
			}
			.kys{
				position: relative;
				&>p{
					color: #B3B3B3;
					margin-bottom: 15px;
				}
				ul{
					li{
						font-size: 14px;
						color: #666666;
						padding-left: 30px;
						margin-bottom: 5px;
						position: relative;
						&::after{
							content: '';
							position: absolute;
							top: 32%;
							left: 18px;
							width: 6px;
							height: 6px;
							border-radius: 50%;
							background-color: @blue;
						}
					}
				}
				.r{
					position: absolute;
					right: 0;
					bottom: -20px;
					color: @blue;
				}
			}
		}
		
	}
	
	@media (max-width:1023px) {
		.view_personal_account_identity{		
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
