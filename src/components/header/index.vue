<template>
	<div class="components_header">
		<div class="main_wrap">
			<div class="main clearfix">
				<div class="left clearfix">
					<router-link to="/index" tag="div" class="logo clearfix">
						<img :src="$t('global.logo')" alt="">
						<span>{{ $t("global.header.name") }}</span>
					</router-link>

					<ul class="meun clearfix">
						<router-link v-for="item,index in $t('global.header.meun')" :key="index" :to="item.to" tag="li">
							{{item.title}}
						</router-link>
					</ul>
				</div>
				<div class="right clearfix">
					<div class="language">
						<myselect v-model="language.active" @change="changeLanguage" hover :lists="$t('global.header.language')"></myselect>
					</div>
					<div class="login">
						<span>{{ $t("global.header.login") }}</span>
						<span>{{ $t("global.header.reg") }}</span>
					</div>
					<div class="icons">
						<svg t="1596524462854" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8570"
						 width="20" height="20">
							<path d="M849.6 713.4c8.4-0.4 16.7 1.8 23.8 6.4-28.9-18.5-46.4-50.4-46.3-84.8V436c0-145.9-105.7-267.6-246.9-297.5v-7.2c0-37.1-30.1-67.1-67.2-67.1h-0.1c-37.1 0-67.3 30.1-67.3 67.2v7C304.3 168.4 198.7 290 198.7 436v199.1c0 35.7-18.6 66.9-46.4 84.8 7-4.6 15.4-6.9 23.8-6.4-24.7-0.9-45.5 18.4-46.4 43.1-0.9 24.7 18.4 45.5 43.1 46.4h676.6c24.7 0.1 44.8-20 44.9-44.7 0.1-24.8-19.9-44.9-44.7-44.9zM513 959.8c62 0 112.2-50.2 112.2-111.9H400.7c0 61.7 50.2 111.9 112.3 111.9z"
							 fill="#ffffff" p-id="8571"></path>
						</svg>
					</div>

					<div class="phone_muen">
						<van-icon name="wap-nav" @click="phoneMuen = true" size="30" />
					</div>

				</div>
			</div>
		</div>

		<div class="clear_header"></div>


		<van-popup :safe-area-inset-bottom="true" :close-on-popstate="true" closeable v-model="phoneMuen" position="right"
		 :style="{ width: '100%',height:'100%' }">
			<div class="phone_muen_content">
				<div class="login">
					<span>{{ $t("global.header.login") }}</span>
					<span>{{ $t("global.header.reg") }}</span>
				</div>
				<ul class="meun clearfix">
					<router-link v-for="item,index in $t('global.header.meun')" :key="index" :to="item.to" tag="li">
						{{item.title}}
					</router-link>
				</ul>
				
				<van-collapse :border="false" v-model="activeNames">
					<van-collapse-item :title="$t('global.header.language')[language.active]? $t('global.header.language')[language.active].title : '' " name="1">
						<ul>
							<li :class="{active:item.id==language.active}" @click="changeLanguage(item.id)" v-for="item,index in $t('global.header.language')">{{item.title}}</li>
						</ul>
					</van-collapse-item>
				</van-collapse>

			</div>
		</van-popup>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				language: {
					flag: false,
					active: null
				},
				phoneMuen: false,
				activeNames: []
			}
		},
		mounted() {
			this.language.active = this.$t('global.header.language')[0].id

			this.$dom.setwh('.components_header .clear_header', this.$dom.getwh(".components_header .main"))
			window.addEventListener("resize", () => {
				this.$dom.setwh('.components_header .clear_header', this.$dom.getwh(".components_header .main"))
			})
		},
		methods: {
			changeLanguage(id) {
				this.language.active = id
				return
				
				let obj = {}
				if(item.hasOwnProperty("index")){
					obj = item.item
					this.language.active = ''
				}else{
					obj = item
					this.language.active = index
				}
				
			}
		}
	}
</script>


<style lang="less" scoped="scoped">
	.components_header {

		color: white;

		.main_wrap {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			background: @blue-0;
			z-index: 1000;
		}

		.main {
			padding: 20px;

			&>div {}

			.left {
				float: left;

				.logo {
					cursor: pointer;
					float: left;

					img {
						float: left;
						width: 40px;
						height: 40px;
					}

					span {
						float: left;
						margin-left: 10px;
						margin-top: 5px;
						font-size: 16px;
						font-family: 'sy-b';
					}
				}

				.meun {
					padding-top: 10px;
					float: left;

					li {
						float: left;
						margin-left: 30px;
						.hover;
					}
				}
			}

			.right {
				float: right;
				padding-top: 5px;
				text-align: right;

				.language {
					display: inline-block;
					margin-right: 30px;
				}

				.login {
					margin-right: 30px;
					display: inline-block;
					border: 1px solid #fff;
					padding: 4px 8px;
					border-radius: 5px;

					span {
						.hover;
					}

					span:last-child {
						margin-left: 20px;
						position: relative;

						&::after {
							content: '';
							position: absolute;
							width: 1px;
							height: 10px;
							left: -10px;
							top: 2px;
							background: white;
						}
					}
				}

				.icons {
					display: inline-block;
					position: relative;
					top: 5px;

					svg {

						.hover(@blue, true)
					}
				}

				.phone_muen {
					float: right;
					display: none;

					i {
						.hover;
					}
				}
			}
		}
	}

	@media (max-width: 1023px) {
		.components_header {
			.main {
				padding: 10px;

				.left {
					.meun {
						display: none;
					}
				}

				.right {
					.language {
						display: none;
					}

					.icons {
						display: none;
					}

					.phone_muen {
						display: block;
					}
				}
			}

			.van-popup {
				background: @blue-0;
			}

			.van-popup__close-icon {
				color: white;
			}

			.phone_muen_content {
				padding: 20px;

				.login {
					margin-right: 30px;
					display: inline-block;
					border: 1px solid #fff;
					padding: 4px 8px;
					border-radius: 5px;

					span {
						.hover;
					}

					span:last-child {
						margin-left: 20px;
						position: relative;

						&::after {
							content: '';
							position: absolute;
							width: 1px;
							height: 10px;
							left: -10px;
							top: 2px;
							background: white;
						}
					}
				}

				.meun {
					li {
						margin-top: 20px;
						font-size: 16px;
					}
				}
			}

		}
	}
</style>

<style lang="less">
	.components_header {
		.phone_muen_content {
			.van-cell {
				background: none;
				color: white;
				font-size: 16px;
				padding: 0;
				margin-top: 10px;
			}

			.van-collapse-item__content {
				background: none;
				color: white;
				font-size: 14px;

				li {
					padding: 5px;
					.hover;
				}

				.active {
					color: @blue;
					
				}
			}

			.van-collapse-item__title--expanded::after {
				display: none;
			}

			.van-cell__right-icon {
				color: white;
			}

		}

		.van-popup__close-icon {
			color: white;
		}
	}
</style>
