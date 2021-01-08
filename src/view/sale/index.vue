<template>
	<div class="view_quickSale_index">
		<div class="header">
			<div class="main clearfix global_main">
				<ul class="left clearfix">
					<router-link v-for="(item, index) in $t('quickSale.meun')" :key="index" :to="item.to" tag="li">{{ item.title }}</router-link>
				</ul>

				<ul  to="/assets/order" tag="div" class="right">
					<li @click="open">
						<svg
							data-v-83fc21a0=""
							t="1601171811581"
							viewBox="0 0 1025 1024"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							p-id="3156"
							width="20"
							height="20"
							class="icon"
							v-if="userInfos.type==2"
							style="margin-right: 20px;"
						>
						<!-- && $route.path=='/sale/quickBuySell' -->
							<path
								data-v-83fc21a0=""
								d="M352.376267 760.009763C350.834511 761.551537 344.542685 764.999821 342.477506 765.457002L180.527334 801.308566 222.635043 843.416258 258.486607 681.466086C258.968311 679.290121 262.315961 673.185192 263.933828 671.567325L802.537066 132.964087C816.326621 119.17455 816.326621 96.817276 802.537066 83.027721 788.747511 69.238184 766.390237 69.238184 752.6007 83.027721L213.997462 621.630958C202.867871 632.76055 192.923842 650.894883 189.535232 666.202041L153.683668 828.152232C148.102938 853.36177 170.581839 875.840671 195.791378 870.259924L357.74155 834.40836C372.932502 831.045473 391.255217 821.003546 402.312651 809.94613L940.915871 271.34291C954.705426 257.553355 954.705426 235.196081 940.915871 221.406543 927.126334 207.616989 904.769059 207.616989 890.979505 221.406543L352.376267 760.009763ZM414.64915 72.685568 51.729426 72.685568C23.157654 72.685568 0 95.845588 0 124.414994L0 972.214166C0 1000.785938 23.16002 1023.943592 51.729426 1023.943592L899.528598 1023.943592C928.10037 1023.943592 951.258041 1000.783572 951.258041 972.214166L951.258041 609.294442 951.258041 427.83458C951.258041 408.333224 935.449053 392.524235 915.947697 392.524235 896.446323 392.524235 880.637352 408.333224 880.637352 427.83458L880.637352 609.294442 880.637352 972.214166C880.637352 961.782466 889.096033 953.322902 899.528598 953.322902L51.729426 953.322902C62.161143 953.322902 70.62069 961.781601 70.62069 972.214166L70.62069 124.414994C70.62069 134.846711 62.162008 143.306258 51.729426 143.306258L414.64915 143.306258 596.109012 143.306258C615.610386 143.306258 631.419357 127.497269 631.419357 107.995913 631.419357 88.494539 615.610386 72.685568 596.109012 72.685568L414.64915 72.685568ZM1008.873949 203.384814C1029.040658 183.218105 1029.030682 150.678581 1008.912031 130.559929L951.147855 72.795754 893.383662 15.031561C873.350038-5.002063 840.660092-5.031671 820.558777 15.069643L752.6007 83.027721C738.811145 96.817276 738.811145 119.17455 752.6007 132.964087 766.390237 146.753642 788.747511 146.753642 802.537066 132.964087L870.495144 65.006009C862.997098 72.504055 850.972531 72.49318 843.447296 64.967927L901.211489 122.73212 958.975665 180.496296C951.522074 173.042706 951.518349 160.867699 958.937582 153.448448L890.979505 221.406543C877.18995 235.196081 877.18995 257.553355 890.979505 271.34291 904.769059 285.132447 927.126334 285.132447 940.915871 271.34291L1008.873949 203.384814Z"
								p-id="3157"
							></path>
						</svg>
					</li>
					<li @click="golink">
						<svg  t="1596698060466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3752" width="18" height="18">
							<path
								d="M721.728 281.216V224a9.6 9.6 0 0 0-9.6-9.536H254.72a9.6 9.6 0 0 0-9.6 9.536v57.216a9.6 9.6 0 0 0 9.6 9.536h457.536a9.6 9.6 0 0 0 9.536-9.6zM254.656 386.048a9.6 9.6 0 0 0-9.6 9.536v57.152a9.6 9.6 0 0 0 9.6 9.6h219.2a9.6 9.6 0 0 0 9.6-9.6v-57.152a9.6 9.6 0 0 0-9.6-9.6H254.72z m448 74.24a257.344 257.344 0 1 0 0 514.688 257.344 257.344 0 0 0 0-514.752z m128.064 385.408a179.968 179.968 0 0 1-128.064 53.056 179.968 179.968 0 0 1-128.128-53.056 179.968 179.968 0 0 1-52.992-128.064c0-48.384 18.816-93.888 52.992-128.128a179.968 179.968 0 0 1 128.128-52.992c48.384 0 93.888 18.816 128.064 52.992 34.176 34.24 53.056 79.744 53.056 128.128 0 48.384-18.88 93.888-53.056 128.064z m-22.016-218.624h-52.8a9.408 9.408 0 0 0-7.744 3.904l-75.648 104.64-27.52-38.016a9.408 9.408 0 0 0-7.744-3.904h-52.544a9.6 9.6 0 0 0-7.744 15.104l87.936 121.6c3.84 5.312 11.52 5.312 15.36 0l136.064-188.16a9.472 9.472 0 0 0-7.68-15.168zM426.24 866.048H149.76V80.384h667.264v319.872c0 4.928 4.288 8.96 9.536 8.96h66.688c5.248 0 9.6-4.032 9.6-8.96V35.712c0-19.776-17.088-35.712-38.144-35.712H102.144C81.024 0 64 16 64 35.712v874.944c0 19.776 17.024 35.712 38.144 35.712H426.24c5.184 0 9.536-4.032 9.536-8.96v-62.464c0-4.928-4.352-8.96-9.6-8.96z"
								p-id="3753"
							></path>
						</svg>
						<span>{{ $t('quickSale.dd') }}</span>
					</li>
					
					
				</ul>
			</div>
		</div>
		<div style="height: 64px;"></div>

		<transition name="left" mode="out-in"><router-view ref="c2c"></router-view></transition>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		//交易提醒
		let has = sessionStorage.getItem('jytx');
		let path = this.$route.path;
		if (!has && (path == '/sale/quickBuySell' || path == '/sale/c2c')) {
			this.$dialog
				.confirm({
					className: 'g_jytx',
					cancelButtonText: this.$t('global.base.cancel'),
					confirmButtonText: this.$t('global.base.ok'),
					title: this.$t('global.base.jyts'),
					message: this.$t('global.base.jytsl').join('')
				})
				.then(() => {
					// on confirm
					sessionStorage.setItem('jytx', true);
				})
				.catch(() => {
					// on cancel
					this.$router.push('/index');
				});
		}
	},
	beforeDestroy() {},
	methods: {
		golink() {
			if (this.$isLogin()) {
				return;
			}

			this.$router.push('/assets/order');
		},
		open(){
			if(this.$route.path=='/sale/c2c'){
				this.$refs.c2c.openOrderForm()
			}else{
				this.$router.push('/sale/c2c?open=true');
			}
			
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.view_quickSale_index {
	.header {
		position: fixed;
		left: 0;
		top: 80px;
		width: 100%;
		transition: top 0.5s;
		background: #fff;
		z-index: 800;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
		.main {
			.left {
				float: left;
				li {
					float: left;
					padding: 20px 0;
					margin-right: 20px;
					color: #b3b3b3;
					font-size: 16px;
					.hover;
					position: relative;
					&::after {
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
				.router-link-active {
					color: #333 !important;
					&::after {
						display: block;
					}
				}
			}
			.right {
				padding-top: 20px;
				float: right;
				font-size: 16px;
				color: #666;
				cursor: pointer;
				li{
					display: inline-block;
					&:hover{
						color: @blue;
						svg{
							path {
								fill: @blue;
							}
						}
					}
				}
				svg {
					position: relative;
					top: 5px;
					margin-right: 5px;
				}
				
				
			}
		}
	}
}
@media (max-width: 1023px) {
	.view_quickSale_index {
		.header {
			top: 61px;
		}
	}
}
</style>
<style lang="less">
.g_jytx {
	width: 380px;
}
@media (max-width: 1023px) {
	.g_jytx {
		width: 90%;
	}
}
</style>
