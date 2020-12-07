<template>
	<div class="view_personal global_main">
			
		<header-top :title="$t('personal.title')"></header-top>
		
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
				
			}
		},
		mounted() {
				
		
			
		},
		beforeDestroy() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal{
		
		&>.infos{
			border: 1px solid rgba(0, 0, 0, 0.050980392156862744);
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
			text-align: center;
			padding: 30px;
			margin-top: 20px;
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
			&>.header{
				top: 61px;
			}
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
