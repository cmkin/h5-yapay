<template>
	<div class="view_personal global_main">
		
		<div class="header" :style="{top:headerH}">
			<div class="main clearfix global_main">
				<ul class="left clearfix">
					<li class="router-link-active">{{ $t('personal.title') }}</li>
				</ul>
			</div>
		</div>
		<div :style="{height:headerH}"></div>
		
		<div class="infos">
			<div class="tx">
				<img src="" alt="">
				<p>UID:123456789</p>
				<p>{{ $t('personal.yhm') }} KDHHBHAKIA_DH</p>
			</div>
			<ul class="clearfix">
				<li v-for="item in $t('personal.tlists')">
					<span>100</span>
					<p>{{item.text}}</p>
				</li>
			</ul>
		</div>
		
		<transition name="left" mode="out-in">
			<router-view></router-view>
		</transition>
		
		<div class="bottom"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				headerH:0
			}
		},
		mounted() {
				setTimeout(()=>{
					this.headerH = this.$dom.getwh(".components_header .main") +'px !important'
				},300)
				
				window.addEventListener("resize",()=>{
					this.headerH = this.$dom.getwh(".components_header .main") +'px !important'
				})
		
			
		},
		beforeDestroy() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal{
		&>.header{
			position: fixed;
			left: 0;
			top: -80px !important;
			width: 100%;
			transition: top 0.5s;
			background: #fff;
			z-index: 800;
			box-shadow:0px 1px 2px rgba(0,0,0,0.16);
			.main{
				.left{
					float: left;
					li{
						float: left;
						padding: 20px 0;
						margin-right: 20px;
						color: #B3B3B3;
						font-size: 16px;
						.hover;
						position: relative;
						&::after{
							content: '';
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							height: 2px;
							background: #333;
							display: none;
						}
					}
					.router-link-active{
						color: #333 !important;
						&::after{
							display: block;
						}
					}
				}
				
			}
		}
		&>.infos{
			border: 1px solid rgba(0, 0, 0, 0.050980392156862744);
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
			text-align: center;
			padding: 30px;
			margin-top: 10px;
			margin-bottom: 20px;
			.tx{
				img{
					width: 80px;
					height: 80px;
					display: inline-block;
					border-radius: 50%;
					background-color: #ccc;
					margin-bottom: 15px;
				}
				p:nth-child(2){
					color: #333;
					font-size: 16px;
					margin-bottom: 10px;
				}
				p:last-child{
					font-size: 12px;
					color: #B3B3B3;
				}
			}
			ul{
				padding-top: 40px;
				width: 80%;
				margin: auto;
				display: flex;
				li{
					flex: 1;
					position: relative;
					&::after{
						content: '';
						position: absolute;
						right: 0;
						top: 20%;
						width: 2px;
						height: 60%;
						background-color: #B3B3B3;
					}
					span{
						font-size: 16px;
						color: #333;
					}
					p{
						color: #B3B3B3;
						font-size: 14px;
					}
				}
				li:last-child{
					&::after{ display: none; }
				}
			}
		}
		
		&>.bottom{
			height: 40px;
		}
	}
	
	@media (max-width: 1023px) {
		.view_personal{
			&>.infos{
				margin-top: 20px;
				ul{
					display: block;
					li{
						float: left;
						width: 50%;
						padding-bottom: 5px;
					}
					li:nth-child(2){
						&::after{
							display: none;
						}
					}
				}
			}	
		}
	}
</style>
