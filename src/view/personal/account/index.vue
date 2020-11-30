<template>
	<div class="view_personal_account clearfix">
		<div class="left">
			<div class="title">
				<i class="iconfont icon-shezhi"></i>
				{{ $t('personal.account.title') }}
			</div>
			<ul>
				<router-link tag="li" :to="item.to" v-for="item in $t('personal.account.llists')"> {{ item.text}} </router-link>
			</ul>
		</div>
		
		<div class="left_phone_icon" :style="{top:tops+'px'}" @click="leftPhone = !leftPhone">
			<i class="iconfont icon-shezhi"></i>
		</div>
		<transition name="top" mode="out-in">
			<div class="left_phone" :style="{top:tops+50+'px'}" v-if="leftPhone">
				<ul @click="leftPhone = false">
					<router-link  tag="li" :to="item.to" v-for="item in $t('personal.account.llists')"> {{ item.text}} </router-link>
				</ul>
			</div>
		</transition>
		
		<div class="right">
			<transition name="left" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return{
				leftPhone:false,
				tops:0
			}
		},
		mounted() {
			this.$nextTick(()=>{
				this.tops = document.querySelector(".view_personal_account_icon").offsetTop +82
					window.addEventListener("resize",()=>{
						this.tops = document.querySelector(".view_personal_account_icon").offsetTop+5
					})
			})
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal_account{
		display: flex;
		&>div{
			border: 1px solid #E3E3E3;
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
			opacity: 1;
			border-radius: 2px;
		}
		&>.left{
			border-radius: 2px;
			width: 260px;
			height: 150px;
			.title{
				padding: 5px 20px;
				font-size: 16px;
				color: #333;
				border-bottom: 1px solid #E3E3E3;
				i{
					font-size: 18px;
				}
			}
			ul{
				padding: 5px 0;
				li{
					padding: 5px 0;
					font-size: 16px;
					border-right: 2px solid transparent;
					padding-left: 40px;
					.hover;
				}
				.router-link-active{
					background-color: #F1F9FF;
					color: @blue;
					border-color: @blue;
				}
			}
		}
		&>.right{
			width: 100%;
			margin-left: 20px;
			overflow: hidden;
		}
		&>.left_phone{
			display: none;
			position: absolute;
			right: 20px;
			z-index: 10;
			top: 78%;
			ul{
				background-color: #fff;
				padding: 5px 0;
				li{
					padding: 5px 20px;
					font-size: 16px;
					border-right: 2px solid transparent;
					text-align: center;
					.hover;
				}
				.router-link-active{
					background-color: #F1F9FF;
					color: @blue;
					border-color: @blue;
				}
			}
					
		}
		&>.left_phone_icon{
			position: absolute;
			right: 20px;
			top: 71%;
			z-index: 10;
			display: none;
			border: none;
			box-shadow: none;
			i{
				font-size: 30px;
			}
		}
	}
	
	@media (max-width:1023px) {
		.view_personal_account{
			display: block;
			&>.left{
				display: none;
			}
			&>.right{
				margin: 0;
			}
			&>.left_phone_icon{
				display: block;
			}
			&>.left_phone{
				display: block;
			}
		}
	}
</style>
