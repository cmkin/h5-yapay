<template>
	<div class="view_quickSale_index">
		<div class="header">
			<div class="main clearfix global_main">
				<ul class="left clearfix">
					<router-link v-for="item,index in $t('quickSale.meun')" :key="index" :to="item.to" tag="li">{{item.title}}</router-link>
				</ul>
				<router-link to="/entrust" tag="div" class="right">
					<svg t="1596698060466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3752" width="18" height="18">
						<path d="M721.728 281.216V224a9.6 9.6 0 0 0-9.6-9.536H254.72a9.6 9.6 0 0 0-9.6 9.536v57.216a9.6 9.6 0 0 0 9.6 9.536h457.536a9.6 9.6 0 0 0 9.536-9.6zM254.656 386.048a9.6 9.6 0 0 0-9.6 9.536v57.152a9.6 9.6 0 0 0 9.6 9.6h219.2a9.6 9.6 0 0 0 9.6-9.6v-57.152a9.6 9.6 0 0 0-9.6-9.6H254.72z m448 74.24a257.344 257.344 0 1 0 0 514.688 257.344 257.344 0 0 0 0-514.752z m128.064 385.408a179.968 179.968 0 0 1-128.064 53.056 179.968 179.968 0 0 1-128.128-53.056 179.968 179.968 0 0 1-52.992-128.064c0-48.384 18.816-93.888 52.992-128.128a179.968 179.968 0 0 1 128.128-52.992c48.384 0 93.888 18.816 128.064 52.992 34.176 34.24 53.056 79.744 53.056 128.128 0 48.384-18.88 93.888-53.056 128.064z m-22.016-218.624h-52.8a9.408 9.408 0 0 0-7.744 3.904l-75.648 104.64-27.52-38.016a9.408 9.408 0 0 0-7.744-3.904h-52.544a9.6 9.6 0 0 0-7.744 15.104l87.936 121.6c3.84 5.312 11.52 5.312 15.36 0l136.064-188.16a9.472 9.472 0 0 0-7.68-15.168zM426.24 866.048H149.76V80.384h667.264v319.872c0 4.928 4.288 8.96 9.536 8.96h66.688c5.248 0 9.6-4.032 9.6-8.96V35.712c0-19.776-17.088-35.712-38.144-35.712H102.144C81.024 0 64 16 64 35.712v874.944c0 19.776 17.024 35.712 38.144 35.712H426.24c5.184 0 9.536-4.032 9.536-8.96v-62.464c0-4.928-4.352-8.96-9.6-8.96z" p-id="3753"></path>
					</svg>
					<span>{{ $t('quickSale.dd') }}</span>
				</router-link>
			</div>
		</div>
		<div style="height: 64px;"></div>
		
		<transition name="left" mode="out-in">
			<router-view></router-view>
		</transition>
		
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
	.view_quickSale_index{
		.header{
			position: fixed;
			left: 0;
			top: 80px;
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
				.right{
					padding-top: 20px;
					float: right;
					font-size: 16px;
					color: #666;
					cursor: pointer;
					svg{
						position: relative;
						top: 5px;
						margin-right: 5px;
					}
					&:hover{
						color: @blue;
						svg{
							
							path{
								
								fill: @blue;
							}
						}
					}
					
				}
			}
		}
		
	}
	@media (max-width:1023px) {
		.view_quickSale_index{
			.header{
				top: 61px;
			}
		}
	}
</style>
