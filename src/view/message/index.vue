<template>
	<div class="view_message">
		<header-top :title="$t('message.title')"></header-top>
		
		
		<div class="global_main main">
			<div class="tabs">
				<div class="global_main">
					<ul>
						<li @click="changeTab(item.id)" v-for="item in $t('message.tabs')" >
							<span :class="tabActive==item.id?'active':''">
								{{item.text}}
							</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div style="height: 80px;"></div>
			<transition name="left" mode="out-in">
				<component :is="coms[tabActive]" :text=" tabActive!==null ? $t('message.tabs')[tabActive].text : '' "></component>
			</transition>
		</div>
		
	</div>
</template>

<script>
	import notice from './notice'
	import tips from './tips'
	import account from './account'
	export default {
		data(){
			return{
				tabActive:null,
				oldtops:0,
				coms:[notice,tips,account]
			}
		},
		mounted() {
			this.tabActive = this.$route.query.type ? this.$route.query.type : this.$t('message.tabs')[0].id
			this.oldtops = 0
			document.addEventListener("scroll",this.scroll)
		},
		beforeRouteLeave(to,from,next) {
			document.removeEventListener("scroll",this.scroll)
			next()
		},
		watch:{
			$route(){
				this.tabActive = this.$route.query.type ? this.$route.query.type : this.$t('message.tabs')[0].id
			}
		},
		methods:{
			changeTab(type){
				this.$router.replace({
					path:"/message",
					query:{
						type:type
					}
				})
				//this.tabActive = type
			},
			scroll(e){
				let tops = document.documentElement.scrollTop || document.body.scrollTop
				let dhl = document.querySelector(".view_message .tabs")
				
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

<style lang="less">
	.view_message{
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
			
			.lists{
				&>ul{
					margin-bottom: 20px;
					&>li{
						padding: 20px 0;
						border-bottom: 1px solid #D3D3D3;
						display: flex;
						.l{
							width: 60px;
							i{
								display: inline-block;
								background-color: @red;
								color: #fff;
								width: 38px;
								height: 38px;
								font-size: 24px;
								text-align: center;
								line-height: 38px;
								border-radius: 50%;
							}
						}
						.blue{
							i{
								background-color: #18B0F3;
							}
						}
						.org{
							i{
								background-color: #F2C718;
							}
						}
						.r{
							position: relative;
							width: 100%;
							.t{
								font-size: 13px;
								color: #666;
								margin-bottom: 10px;
								span{
									font-size: 16px;
									color: #666;
									margin-right: 20px;
								}
							}
							.t2{
								color: #666;
								margin-bottom: 8px;
							}
							.t3{
								font-size: 16px;
								color: #333;
								margin-bottom: 15px;
							}
							.usdt{
								font-size: 13px;
								color: #666;
								span{
									font-size: 20px;
									color: #333;
									margin-right: 5px;
								}
							}
							.red{
								color: @red;
							}
							.infos{
								.clearfix;
								li{
									margin-bottom: 5px;
									float: left;
									width: 50%;
									span{
										color: #333;
										display: inline-block;
										width: 60px;
									}
									i{
										color: #666;
									}
								}
							}
							.btn{
								position: absolute;
								right: 0;
								top: 50%;
								transform: translateY(-50%);
								.yqx{
									text-align: right;
									&>span{
										display: block;
									}
									i{
										padding-top: 5px;
										display: block;
										color: #666;
									}
									.red{
										color: @red;
									}
								}
							}
							.ct{
								color: #666;
							}
						}
					}
					&>li:last-child{
						border: none;
					}
				}
			}
			
		}
	}
	
	@media (max-width:1023px) {
		.view_message{
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
				.lists{
					&>ul{
						&>li{
							.r{
								.infos{
									li{
										width: 100%;
									}
								}
								.btn{
									padding-top: 5px;
									position: static;
									top: 0;
									transform: none;
									text-align: left;
									.yqx{
										text-align: left;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
