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
						<img :src="item" alt="" v-for="item,index in $t('global.fonter.imgs')">
					</div>
				</li>
				<li class="item" v-for="item in $t('global.fonter.lists')">
					<b v-html="item.title"></b>
					<ul>
						<li @click="golink(child)" v-for="child in item.items" v-html="child.title"> </li>
					</ul>
				</li>
			</ul>


			<van-collapse class="phone_flag" :border="false" v-model="activeName">
				<van-collapse-item :title="item.title" :name="index" :key="index" v-for="item,index in $t('global.fonter.lists')">
					<ul>
						<li @click="golink(child)" v-for="child in item.items" v-html="child.title"> </li>
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
			golink(item){
				//console.log(item)
				let url = false;
				if(item.to){
					url = 'http://yaotc.com/index.html#'+item.to
				}
				if(item.url){
					url = item.url
				}
				if(url){
					window.open(url)
				}
				
			}
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
					//.hover;
				}

				.icons {

					img{
						margin-right: 20px;
						
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
