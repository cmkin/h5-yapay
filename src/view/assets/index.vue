<template>
	<div class="view_assets_index">
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
		methods:{
			
		}
	}
</script>

<style lang="less">
	.view_assets_index{
		&>div>.header{
			position: fixed;
			left: 0;
			height: 64px;
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
					&:hover{
						color: @blue;
					}
				}
			}
		}
	}
	@media (max-width: 1023px) {
		.view_assets_index{
			&>div>.header{
				top: 61px;
			}
		}
	}
</style>
