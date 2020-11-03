<template>
	<div class="components_fonter">

		<div class="main global_main">
			<ul class="items clearfix">
				<li class="one">
					<router-link to="/index" tag="div" class="logo clearfix">
						<img :src="$t('global.logo')" alt="">
						<span>{{ $t("global.fonter.name") }}</span>
					</router-link>

					<p>{{ $t('global.fonter.c') }}</p>
					<div class="icons clearfix">
						<svg v-for="item,index in 4" :key="index" t="1596533400247" class="icon" viewBox="0 0 1024 1024" version="1.1"
						 xmlns="http://www.w3.org/2000/svg" p-id="12628" width="18" height="18">
							<path d="M740.693333 539.306667l0-187.733333-157.013333 0L583.68 238.933333c0 0 0-51.2 58.026667-51.2 58.026667 0 153.6 0 153.6 0L795.306667 0 549.546667 0C378.88 0 365.226667 201.386667 365.226667 201.386667l0 146.773333-136.533333 0 0 187.733333 136.533333 0L365.226667 1024l215.04 0L580.266667 539.306667 740.693333 539.306667z"
							 p-id="12629" fill="#ffffff"></path>
						</svg>
					</div>
				</li>
				<li class="item" v-for="item in $t('global.fonter.lists')">
					<b>{{item.title}}</b>
					<ul>
						<li v-for="child in item.items"> {{ child.title}} </li>
					</ul>
				</li>
			</ul>


			<van-collapse class="phone_flag" :border="false" v-model="activeName">
				<van-collapse-item :title="item.title" :name="index" :key="index" v-for="item,index in $t('global.fonter.lists')">
					<ul>
						<li v-for="child in item.items"> {{ child.title}} </li>
					</ul>
				</van-collapse-item>

			</van-collapse>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: []
			}
		},
		mounted() {



		},
		methods: {

		}
	}
</script>

<style lang="less" scoped="scoped">
	.components_fonter {
		background: @blue-0;
		color: white;
		padding: 30px 0px;

		.main {
			.items {
				&>li {
					float: left;
				}
			}

			.phone_flag {
				display: none;
			}

			.one {
				width: 28%;

				.logo {
					margin-bottom: 20px;
					cursor: pointer;

					img {
						width: 40px;
						height: 40px;
						float: left;
					}

					span {
						margin-left: 10px;
						display: inline-block;
						font-size: 24px;

					}
				}

				p {
					margin-bottom: 20px;
					.hover;
				}

				.icons {

					svg {
						margin-right: 20px;
						.hover(@blue, true);
						width: 18px;
						height: 18px;
						float: left;
					}
				}
			}

			.item {
				width: 24%;

				color: rgba(203, 208, 211, 1);

				&>b {
					display: block;
					font-size: 16px;
				}

				li {
					margin-top: 10px;
					.hover;
				}
			}
		}
	}


	@media (max-width:1023px) {
		.components_fonter {
			padding: 10px 0;

			.main {
				.phone_flag {
					display: block;
				}

				.items {
					.one {
						width: 100%;

						.logo {
							margin-bottom: 5px;
						}

						p {
							margin-bottom: 8px;
							display: none;
						}

						.icons {
							display: none;
						}
					}

					.item {
						display: none;
					}
				}
			}
		}
	}
</style>

<style lang="less">
	.components_fonter {
		.main {
			.van-cell {
				background: none;
				color: #cbd0d3;
				font-size: 16px;
				padding: 0;
				margin-top: 10px;
				font-weight: bold;
			}
		}
	}
</style>
